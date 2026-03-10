import React from 'react';

export function ResultsScreen({ score, total, answers, questions, onRetry, onHome, mode }) {
  const pct = Math.round((score / total) * 100);
  const byTopic = {};
  questions.forEach((q, i) => {
    const topic = q.id.startsWith("ps") ? "Problem Solving" : q.id.startsWith("ds") ? "Data Sufficiency" : "Critical Reasoning";
    if (!byTopic[topic]) byTopic[topic] = { correct: 0, total: 0 };
    byTopic[topic].total++;
    if (answers[i] === q.answer) byTopic[topic].correct++;
  });

  const grade = pct >= 80 ? { label: "Excellent!", color: "#fda4af", emoji: "🏆" } :
    pct >= 60 ? { label: "Good Work", color: "#f0abfc", emoji: "⭐" } :
    { label: "Keep Practicing", color: "#fb7185", emoji: "💪" };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center" style={{ background: "#0f0a10" }}>
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{grade.emoji}</div>
          <h2 className="text-4xl font-black text-white mb-2">{grade.label}</h2>
          <p className="text-gray-400">You scored <span className="font-bold" style={{ color: grade.color }}>{score}/{total} ({pct}%)</span> on this {mode}</p>
        </div>

        {/* Score Ring */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10"/>
              <circle cx="60" cy="60" r="50" fill="none" stroke="url(#grad)" strokeWidth="10"
                strokeDasharray={`${pct * 3.14} 314`} strokeLinecap="round"/>
              <defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899"/><stop offset="100%" stopColor="#f43f5e"/>
              </linearGradient></defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-white">{pct}%</span>
            </div>
          </div>
        </div>

        {/* By Topic */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {Object.entries(byTopic).map(([topic, data]) => (
            <div key={topic} className="p-4 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.03)" }}>
              <div className="text-2xl font-black text-white">{data.total > 0 ? Math.round((data.correct/data.total)*100) : 0}%</div>
              <div className="text-xs text-gray-400 mt-1">{topic}</div>
              <div className="text-xs text-gray-500">{data.correct}/{data.total}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center">
          <button onClick={onRetry}
            className="px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#ec4899,#f43f5e)" }}>
            Try Again
          </button>
          <button onClick={onHome}
            className="px-6 py-3 rounded-xl font-bold text-gray-300 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
