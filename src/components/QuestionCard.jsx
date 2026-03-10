import React from 'react';
import { MathExplanation } from './MathExplanation.jsx';
import { formatTime } from '../utils/utils.js';

export function QuestionCard({ question, questionNum, total, onAnswer, selectedAnswer, showExplanation, onNext, timed, timeLeft, onSkip }) {
  const getTypeColor = (id) => {
    if (id.startsWith("ps")) return { bg: "rgba(236,72,153,0.15)", border: "rgba(244,114,182,0.4)", text: "#f9a8d4", label: "Problem Solving" };
    if (id.startsWith("ds")) return { bg: "rgba(251,113,133,0.15)", border: "rgba(249,168,212,0.4)", text: "#f472b6", label: "Data Sufficiency" };
    return { bg: "rgba(244,63,94,0.15)", border: "rgba(251,113,133,0.4)", text: "#fb7185", label: "Critical Reasoning" };
  };
  const typeStyle = getTypeColor(question.id);
  const isCorrect = selectedAnswer === question.answer;

  return (
    <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.03)" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm">Question {questionNum} of {total}</span>
          <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: typeStyle.bg, border: `1px solid ${typeStyle.border}`, color: typeStyle.text }}>
            {typeStyle.label}
          </span>
          <span className="px-2 py-1 rounded-full text-xs" style={{ background: "rgba(255,255,255,0.03)", color: "#9ca3af" }}>
            {question.difficulty}
          </span>
        </div>
        {timed && (
          <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: timeLeft < 60 ? "rgba(244,63,94,0.2)" : "rgba(255,255,255,0.03)", color: timeLeft < 60 ? "#fb7185" : "#9ca3af" }}>
            ⏱ {formatTime(timeLeft)}
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 rounded-full mb-6" style={{ background: "rgba(255,255,255,0.08)" }}>
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(questionNum / total) * 100}%`, background: "linear-gradient(90deg,#ec4899,#f43f5e)" }} />
      </div>

      {/* Question */}
      <p className="text-white text-lg font-medium mb-6 leading-relaxed whitespace-pre-line">{question.question}</p>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((opt, i) => {
          let style = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#d1d5db" };
          if (selectedAnswer) {
            if (opt === question.answer) style = { background: "rgba(236,72,153,0.15)", border: "1px solid rgba(52,211,153,0.5)", color: "#fda4af" };
            else if (opt === selectedAnswer && !isCorrect) style = { background: "rgba(244,63,94,0.15)", border: "1px solid rgba(251,113,133,0.5)", color: "#fca5a5" };
            else style = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.03)", color: "#6b7280" };
          }
          return (
            <button key={i} onClick={() => !selectedAnswer && onAnswer(opt)}
              className="w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium"
              style={{ ...style, cursor: selectedAnswer ? "default" : "pointer" }}
              onMouseEnter={e => { if (!selectedAnswer) { e.currentTarget.style.background = "rgba(236,72,153,0.15)"; e.currentTarget.style.borderColor = "rgba(244,114,182,0.4)"; }}}
              onMouseLeave={e => { if (!selectedAnswer) { e.currentTarget.style.background = style.background; e.currentTarget.style.borderColor = style.border.replace("1px solid ",""); }}}>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && question.explanationSteps && (
        <div className="mb-4">
          <MathExplanation steps={question.explanationSteps} isCorrect={isCorrect} />
          {!isCorrect && (
            <div className="mt-2 px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: "rgba(251,113,133,0.1)", color: "#fca5a5" }}>
              Correct answer: {question.answer}
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        {!selectedAnswer && (
          <button onClick={onSkip} className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-gray-200 transition-colors"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            Skip →
          </button>
        )}
        {selectedAnswer && (
          <button onClick={onNext}
            className="px-6 py-2 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg,#ec4899,#f43f5e)" }}>
            {questionNum === total ? "See Results" : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}
