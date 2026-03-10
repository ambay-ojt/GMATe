import React, { useState } from 'react';
import { FLASHCARDS } from '../data/data.js';
import { shuffleArray } from '../utils/utils.js';

export function FlashcardsPage() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [mastered, setMastered] = useState(new Set());

  const card = FLASHCARDS[index];
  const isMastered = mastered.has(index);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "#0f0a10" }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-2">Flashcards</h1>
        <p className="text-gray-400 mb-8">Click the card to reveal the answer.</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-400 text-sm">{index + 1} / {FLASHCARDS.length}</span>
          <span className="text-pink-300 text-sm font-semibold">✓ {mastered.size} mastered</span>
        </div>

        {/* Progress */}
        <div className="w-full h-1.5 rounded-full mb-8" style={{ background: "rgba(255,255,255,0.08)" }}>
          <div className="h-full rounded-full transition-all" style={{ width: `${((index + 1) / FLASHCARDS.length) * 100}%`, background: "linear-gradient(90deg,#ec4899,#f43f5e)" }} />
        </div>

        {/* Card */}
        <div className="relative mb-8" style={{ perspective: "1000px", height: "280px" }} onClick={() => setFlipped(f => !f)}>
          <div className="w-full h-full transition-all duration-500 cursor-pointer" style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
            {/* Front */}
            <div className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center p-8 text-center"
              style={{ backfaceVisibility: "hidden", background: "linear-gradient(135deg,rgba(236,72,153,0.2),rgba(251,113,133,0.1))", border: "1px solid rgba(244,114,182,0.4)", boxShadow: "0 0 40px rgba(236,72,153,0.2)" }}>
              <div className="text-xs uppercase tracking-widest text-pink-300 mb-4 font-bold">Question</div>
              <p className="text-white text-xl font-semibold leading-relaxed">{card.front}</p>
              <div className="mt-6 text-gray-500 text-sm">Tap to reveal →</div>
            </div>
            {/* Back */}
            <div className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center p-8 text-center"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "linear-gradient(135deg,rgba(251,113,133,0.2),rgba(236,72,153,0.1))", border: "1px solid rgba(249,168,212,0.4)", boxShadow: "0 0 40px rgba(251,113,133,0.2)" }}>
              <div className="text-xs uppercase tracking-widest text-pink-300 mb-4 font-bold">Answer</div>
              <p className="text-white text-base leading-relaxed whitespace-pre-line">{card.back}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <button onClick={() => { setIndex(i => Math.max(0, i-1)); setFlipped(false); }}
            disabled={index === 0}
            className="px-5 py-2 rounded-xl font-semibold transition-all"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: index === 0 ? "#4b5563" : "#d1d5db" }}>
            ← Prev
          </button>
          <div className="flex gap-3">
            <button onClick={() => { setMastered(s => { const n = new Set(s); if(n.has(index)) n.delete(index); else n.add(index); return n; }); }}
              className="px-4 py-2 rounded-xl font-semibold text-sm transition-all"
              style={{ background: isMastered ? "rgba(236,72,153,0.2)" : "rgba(255,255,255,0.03)", border: `1px solid ${isMastered ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.03)"}`, color: isMastered ? "#fda4af" : "#9ca3af" }}>
              {isMastered ? "✓ Mastered" : "Mark Mastered"}
            </button>
            <button onClick={() => { setFlipped(false); setIndex(shuffleArray([...Array(FLASHCARDS.length).keys()].filter(i=>i!==index))[0]); }}
              className="px-4 py-2 rounded-xl font-semibold text-sm text-gray-300"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.03)" }}>
              Shuffle 🔀
            </button>
          </div>
          <button onClick={() => { setIndex(i => Math.min(FLASHCARDS.length-1, i+1)); setFlipped(false); }}
            disabled={index === FLASHCARDS.length - 1}
            className="px-5 py-2 rounded-xl font-semibold transition-all"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: index === FLASHCARDS.length-1 ? "#4b5563" : "#d1d5db" }}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
