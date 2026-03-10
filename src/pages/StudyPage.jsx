import React, { useState } from 'react';
import { MathLine } from '../components/MathLine.jsx';
import { FormattedText } from '../components/FormattedText.jsx';
import { STUDY_CONTENT } from '../data/data.js';

export function StudyPage() {
  const [activeTopic, setActiveTopic] = useState("problemSolving");
  const [activeTab, setActiveTab] = useState("concepts");
  const content = STUDY_CONTENT[activeTopic];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "#0f0a10" }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-2">Study Mode</h1>
        <p className="text-gray-400 mb-8">Master concepts, avoid common mistakes, and learn expert strategies.</p>

        {/* Topic Selector */}
        <div className="flex gap-3 mb-8">
          {Object.entries(STUDY_CONTENT).map(([key, val]) => (
            <button key={key} onClick={() => setActiveTopic(key)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-200"
              style={{
                background: activeTopic === key
                  ? key === "problemSolving" ? "linear-gradient(135deg,#ec4899,#be185d)"
                  : key === "dataSufficiency" ? "linear-gradient(135deg,#f472b6,#ec4899)"
                  : "linear-gradient(135deg,#fb7185,#f43f5e)"
                  : "rgba(255,255,255,0.03)",
                border: activeTopic === key ? "none" : "1px solid rgba(255,255,255,0.03)",
                color: activeTopic === key ? "white" : "#9ca3af",
                boxShadow: activeTopic === key ? `0 0 20px ${val.accent}40` : "none"
              }}>
              {val.icon} {val.title}
            </button>
          ))}
        </div>

        {/* Tab Selector */}
        <div className="flex gap-2 mb-6">
          {[["concepts","📚 Concepts"],["walkthroughs","🔍 Walkthroughs"],["mistakes","⚠️ Mistakes"],["tips","✅ Tips"]].map(([tab, label]) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
              style={{
                background: activeTab === tab ? "rgba(255,255,255,0.08)" : "transparent",
                color: activeTab === tab ? "white" : "#6b7280",
                border: activeTab === tab ? "1px solid rgba(255,255,255,0.15)" : "1px solid transparent"
              }}>
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "concepts" && (
          <div className="space-y-4">
            {content.concepts.map((c, i) => (
              <div key={i} className="p-7 rounded-3xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <h3 className="font-black text-white text-xl mb-5 border-b pb-3" style={{ borderColor: `${content.accent}20` }}>{c.title}</h3>
                <FormattedText text={c.body} accentColor={content.accent} />
              </div>
            ))}
          </div>
        )}

        {activeTab === "walkthroughs" && (
          <div className="space-y-6">
            {content.walkthroughs.map((w, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.03)" }}>
                {/* Problem Header */}
                <div className="px-6 py-4" style={{ background: "rgba(236,72,153,0.12)", borderBottom: "1px solid rgba(244,114,182,0.2)" }}>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#f9a8d4" }}>Worked Example</div>
                  <p className="text-white font-semibold leading-relaxed">{w.problem}</p>
                </div>
                {/* Steps */}
                <div className="p-5 space-y-0">
                  {w.steps.map((step, j) => (
                    <div key={j} className="flex items-start gap-4 py-3" style={{ borderBottom: j < w.steps.length - 1 ? "1px solid rgba(255,255,255,0.03)" : "none" }}>
                      <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
                        style={{ background: `rgba(${content.accent === "#f9a8d4" ? "124,58,237" : content.accent === "#f472b6" ? "6,182,212" : "244,63,94"},0.25)`, color: content.accent, border: `1px solid ${content.accent}50` }}>
                        {j + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-mono text-sm px-4 py-2.5 rounded-xl leading-relaxed"
                          style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.03)", color: "#e2e8f0", fontFamily: "'Fira Code', 'Courier New', monospace" }}>
                          <MathLine content={step} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "mistakes" && (
          <div className="p-6 rounded-2xl" style={{ background: "rgba(244,63,94,0.05)", border: "1px solid rgba(251,113,133,0.2)" }}>
            <h3 className="font-bold text-rose-400 text-lg mb-4">Common Mistakes to Avoid</h3>
            <div className="space-y-3">
              {content.mistakes.map((m, i) => (
                <div key={i} className="p-3 rounded-lg text-gray-300" style={{ background: "rgba(244,63,94,0.08)" }}>{m}</div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tips" && (
          <div className="p-6 rounded-2xl" style={{ background: "rgba(236,72,153,0.05)", border: "1px solid rgba(52,211,153,0.2)" }}>
            <h3 className="font-bold text-pink-300 text-lg mb-4">Expert Tips & Strategies</h3>
            <div className="space-y-3">
              {content.tips.map((t, i) => (
                <div key={i} className="p-3 rounded-lg text-gray-300" style={{ background: "rgba(236,72,153,0.08)" }}>{t}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
