import React from 'react';
import { GradientText } from '../components/GradientText.jsx';

export function HomePage({ setPage }) {
  const cards = [
    { id: "practice", icon: "⚡", title: "Practice Mode", desc: "10 adaptive questions. Timed or untimed. Instant AI feedback.", color: "from-pink-500 to-rose-700", glow: "rgba(236,72,153,0.4)" },
    { id: "study", icon: "📖", title: "Study Mode", desc: "Concepts, walkthroughs, tips & common mistakes per topic.", color: "from-rose-400 to-pink-700", glow: "rgba(251,113,133,0.4)" },
    { id: "flashcards", icon: "🃏", title: "Flashcards", desc: "Flip-card review of key formulas, strategies & rules.", color: "from-pink-400 to-rose-500", glow: "rgba(236,72,153,0.4)" },
    { id: "mock", icon: "🏆", title: "Full Mock Exam", desc: "20 questions · 40 minutes · Official GMAT format.", color: "from-fuchsia-400 to-pink-600", glow: "rgba(232,121,249,0.4)" },
    { id: "progress", icon: "📊", title: "My Progress", desc: "Score history, accuracy by topic, improvement trends.", color: "from-pink-400 to-rose-600", glow: "rgba(236,72,153,0.4)" },
    { id: "chat", icon: "🤖", title: "AI Tutor", desc: "Ask anything. Get step-by-step solutions & strategy advice.", color: "from-rose-500 to-rose-700", glow: "rgba(244,63,94,0.4)" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "radial-gradient(ellipse at 15% 15%, rgba(236,72,153,0.18) 0%, transparent 55%), radial-gradient(ellipse at 85% 80%, rgba(244,63,94,0.12) 0%, transparent 55%), radial-gradient(ellipse at 50% 50%, rgba(232,121,249,0.06) 0%, transparent 70%), #0f0a10" }}>
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-white mb-4 leading-tight">
            Master the<br /><GradientText>GMAT Exam</GradientText>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Adaptive practice, smart flashcards, and an AI tutor that explains every problem — all in one place.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button onClick={() => setPage("practice")}
              className="px-8 py-3 rounded-xl font-bold text-white text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg,#ec4899,#f43f5e)", boxShadow: "0 0 30px rgba(236,72,153,0.4)" }}>
              Start Practicing →
            </button>
            <button onClick={() => setPage("study")}
              className="px-8 py-3 rounded-xl font-bold text-gray-300 text-lg transition-all duration-200 hover:text-white"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              Study First
            </button>
          </div>
        </div>

        {/* Topic Badges */}
        <div className="flex justify-center gap-4 mb-12">
          {[["⚡", "Problem Solving", "#ec4899", "rgba(236,72,153,0.15)", "rgba(244,114,182,0.35)"], ["🔍", "Data Sufficiency", "#f472b6", "rgba(244,114,182,0.15)", "rgba(249,168,212,0.35)"], ["🧠", "Critical Reasoning", "#fb7185", "rgba(251,113,133,0.15)", "rgba(253,164,175,0.35)"]].map(([icon, label, txtColor, bg, border]) => (
            <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: bg, border: `1px solid ${border}`, color: txtColor }}>
              {icon} {label}
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-4">
          {cards.map(card => (
            <button key={card.id} onClick={() => setPage(card.id === "mock" ? "practice" : card.id)}
              className="group text-left p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.03)", boxShadow: "0 0 0 rgba(0,0,0,0)" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 60px ${card.glow}`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)"}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
