import React, { useState, useEffect, useRef } from 'react';
import { QuestionCard } from '../components/QuestionCard.jsx';
import { ResultsScreen } from '../components/ResultsScreen.jsx';
import { TOPIC_CONFIG, MOCK_EXAM_CONFIG, QUESTIONS } from '../data/data.js';
import { shuffleArray, getMockExamQuestions, getPracticeQuestions, formatTime } from '../utils/utils.js';

export function PracticePage({ setPage, addScore }) {
  // step: 'topic' | 'mode' | 'quiz'
  const [step, setStep] = useState("topic");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [mode, setMode] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [mockTimeLeft, setMockTimeLeft] = useState(MOCK_EXAM_CONFIG.minutes * 60);
  const timerRef = useRef(null);

  const getQuestionsForTopic = (topicKey, sessionMode) => {
    if (sessionMode === "mock") return getMockExamQuestions();
    if (topicKey === "all") return shuffleArray([
      ...QUESTIONS.problemSolving,
      ...QUESTIONS.dataSufficiency,
      ...QUESTIONS.criticalReasoning
    ]).slice(0, 10);
    return shuffleArray(QUESTIONS[topicKey]).slice(0, 10);
  };

  const startSession = (m) => {
    const qs = getQuestionsForTopic(selectedTopic, m);
    setQuestions(qs);
    setMode(m);
    setCurrent(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers([]);
    setFinished(false);
    setTimeLeft(120);
    setMockTimeLeft(MOCK_EXAM_CONFIG.minutes * 60);
    setStep("quiz");
  };

  const resetToStart = () => {
    clearInterval(timerRef.current);
    setStep("topic");
    setSelectedTopic(null);
    setMode(null);
    setFinished(false);
  };

  useEffect(() => {
    if (step !== "quiz" || finished) return;
    if (mode === "mock") {
      timerRef.current = setInterval(() => {
        setMockTimeLeft(t => { if (t <= 1) { clearInterval(timerRef.current); setFinished(true); return 0; } return t - 1; });
      }, 1000);
    } else if (mode === "timed") {
      timerRef.current = setInterval(() => {
        setTimeLeft(t => { if (t <= 1) { handleSkip(); return 120; } return t - 1; });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [mode, current, finished, step]);

  const handleAnswer = (ans) => {
    clearInterval(timerRef.current);
    setSelectedAnswer(ans);
    setShowExplanation(true);
    setAnswers(prev => [...prev, ans]);
  };

  const handleSkip = () => {
    setAnswers(prev => [...prev, null]);
    handleNext();
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setTimeLeft(120);
    if (current + 1 >= questions.length) {
      const score = answers.filter((a, i) => a === questions[i]?.answer).length;
      addScore({ mode, topic: selectedTopic, score, total: questions.length, date: new Date().toLocaleDateString() });
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      if (mode === "timed") {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
          setTimeLeft(t => { if (t <= 1) { handleSkip(); return 120; } return t - 1; });
        }, 1000);
      }
    }
  };

  // ── STEP 1: Topic Selection ──────────────────────────────
  if (step === "topic") {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(236,72,153,0.12) 0%, transparent 55%), #0f0a10" }}>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-pink-500" />
                <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
                <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#6b7280" }}>Step 1 of 2</span>
            </div>
            <h1 className="text-4xl font-black text-white mb-2">Choose a Topic</h1>
            <p className="text-gray-400">Select which category you want to practice, or go mixed for a full simulation.</p>
          </div>

          {/* Topic Cards */}
          <div className="grid grid-cols-1 gap-3">
            {TOPIC_CONFIG.map(topic => (
              <button
                key={topic.key}
                onClick={() => { setSelectedTopic(topic.key); setStep("mode"); }}
                className="group relative text-left p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.03)" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 16px 50px ${topic.glow}`; e.currentTarget.style.borderColor = topic.accentBorder; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.03)"; }}
              >
                <div className="flex items-center gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: topic.gradient, boxShadow: `0 0 20px ${topic.glow}` }}>
                    {topic.icon}
                  </div>
                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-white text-lg">{topic.label}</h3>
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: topic.accentBg, color: topic.accent, border: `1px solid ${topic.accentBorder}` }}>
                        {topic.count} questions
                      </span>
                    </div>
                    <div className="text-xs font-semibold mb-1.5" style={{ color: topic.accent }}>{topic.subtitle}</div>
                    <p className="text-gray-400 text-sm leading-snug">{topic.desc}</p>
                  </div>
                  {/* Arrow */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                    style={{ background: topic.accentBg, border: `1px solid ${topic.accentBorder}`, color: topic.accent }}>
                    →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── STEP 2: Mode Selection ───────────────────────────────
  if (step === "mode") {
    const topicMeta = TOPIC_CONFIG.find(t => t.key === selectedTopic);
    const modeOptions = selectedTopic === "all"
      ? [
          { id: "timed", icon: "⏱", title: "Timed Practice", desc: "10 mixed questions · 2 min per question · Instant feedback", color: "from-pink-500 to-rose-600", glow: "rgba(236,72,153,0.4)" },
          { id: "untimed", icon: "🧘", title: "Untimed Practice", desc: "10 mixed questions · No time pressure · Focus on understanding", color: "from-rose-400 to-pink-600", glow: "rgba(251,113,133,0.4)" },
          { id: "mock", icon: "🏆", title: "Full Mock Exam", desc: `${MOCK_EXAM_CONFIG.total} questions · ${MOCK_EXAM_CONFIG.minutes} min · ${MOCK_EXAM_CONFIG.ps} Quant + ${MOCK_EXAM_CONFIG.ds} DS + ${MOCK_EXAM_CONFIG.cr} CR`, color: "from-fuchsia-400 to-pink-500", glow: "rgba(232,121,249,0.4)" },
        ]
      : [
          { id: "timed", icon: "⏱", title: "Timed Practice", desc: `10 ${topicMeta?.label} questions · 2 min per question · Instant feedback`, color: "from-pink-500 to-rose-600", glow: "rgba(236,72,153,0.4)" },
          { id: "untimed", icon: "🧘", title: "Untimed Practice", desc: `10 ${topicMeta?.label} questions · No time pressure · Take your time`, color: "from-rose-400 to-pink-600", glow: "rgba(251,113,133,0.4)" },
        ];

    return (
      <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "radial-gradient(ellipse at 70% 0%, rgba(251,113,133,0.1) 0%, transparent 55%), #0f0a10" }}>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-pink-500" />
                <div className="w-2 h-2 rounded-full bg-pink-500" />
                <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#6b7280" }}>Step 2 of 2</span>
            </div>
            <h1 className="text-4xl font-black text-white mb-2">Choose Mode</h1>
            {/* Selected topic pill */}
            <div className="flex items-center gap-3">
              <p className="text-gray-400">Practicing:</p>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold"
                style={{ background: topicMeta?.accentBg, border: `1px solid ${topicMeta?.accentBorder}`, color: topicMeta?.accent }}>
                <span>{topicMeta?.icon}</span>
                <span>{topicMeta?.label}</span>
              </div>
              <button onClick={() => setStep("topic")} className="text-xs text-gray-500 hover:text-gray-300 underline underline-offset-2 transition-colors">
                change
              </button>
            </div>
          </div>

          {/* Mode Cards */}
          <div className="grid grid-cols-1 gap-3">
            {modeOptions.map(opt => (
              <button key={opt.id} onClick={() => startSession(opt.id)}
                className="group p-6 rounded-2xl text-left transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.03)" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 16px 50px ${opt.glow}`; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.03)"; }}>
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${opt.color} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    {opt.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-xl mb-1">{opt.title}</h3>
                    <p className="text-gray-400 text-sm">{opt.desc}</p>
                  </div>
                  <div className="text-gray-500 group-hover:text-white transition-colors text-xl ml-auto">→</div>
                </div>
              </button>
            ))}
          </div>

          {/* Back */}
          <button onClick={() => setStep("topic")} className="mt-6 flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-sm font-semibold">
            ← Back to topics
          </button>
        </div>
      </div>
    );
  }

  // ── Finished ─────────────────────────────────────────────
  if (finished) {
    const score = answers.filter((a, i) => a === questions[i]?.answer).length;
    return <ResultsScreen score={score} total={questions.length} answers={answers} questions={questions}
      onRetry={() => startSession(mode)} onHome={resetToStart} mode={mode === "mock" ? "Mock Exam" : "Practice Session"} />;
  }

  // ── Quiz ─────────────────────────────────────────────────
  const q = questions[current];
  if (!q) return null;

  const topicMeta = TOPIC_CONFIG.find(t => t.key === selectedTopic);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "#0f0a10" }}>
      <div className="max-w-3xl mx-auto">
        {/* Session info bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{ background: topicMeta?.accentBg, border: `1px solid ${topicMeta?.accentBorder}`, color: topicMeta?.accent }}>
              {topicMeta?.icon} {topicMeta?.label}
            </div>
            {mode === "mock" && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: "rgba(232,121,249,0.15)", border: "1px solid rgba(240,171,252,0.4)", color: "#e879f9" }}>
                🏆 Mock Exam
              </div>
            )}
          </div>
          {mode === "mock" && (
            <div className="px-4 py-1.5 rounded-full font-mono font-bold text-sm"
              style={{ background: mockTimeLeft < 120 ? "rgba(244,63,94,0.2)" : "rgba(232,121,249,0.15)", color: mockTimeLeft < 120 ? "#fb7185" : "#e879f9", border: `1px solid ${mockTimeLeft < 120 ? "rgba(251,113,133,0.4)" : "rgba(240,171,252,0.3)"}` }}>
              ⏱ {formatTime(mockTimeLeft)}
            </div>
          )}
        </div>

        <QuestionCard question={q} questionNum={current + 1} total={questions.length}
          onAnswer={handleAnswer} selectedAnswer={selectedAnswer} showExplanation={showExplanation}
          onNext={handleNext} timed={mode === "timed"} timeLeft={timeLeft} onSkip={handleSkip} />
      </div>
    </div>
  );
}
