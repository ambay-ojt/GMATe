import React from 'react';
import { MathLine } from './MathLine.jsx';

export function MathExplanation({ steps, isCorrect }) {
  const borderColor = isCorrect ? "rgba(52,211,153,0.25)" : "rgba(251,113,133,0.25)";
  const bgColor = isCorrect ? "rgba(236,72,153,0.08)" : "rgba(244,63,94,0.07)";
  const headerColor = isCorrect ? "#fda4af" : "#fca5a5";

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${borderColor}`, background: bgColor }}>
      {/* Status Header */}
      <div className="px-5 py-3 flex items-center gap-3" style={{ background: isCorrect ? "rgba(236,72,153,0.12)" : "rgba(244,63,94,0.12)", borderBottom: `1px solid ${borderColor}` }}>
        <span className="text-lg">{isCorrect ? "✅" : "❌"}</span>
        <span className="font-bold text-sm" style={{ color: headerColor }}>
          {isCorrect ? "Correct! Here's the full solution:" : "Not quite — here's how to solve it:"}
        </span>
      </div>

      {/* Steps */}
      <div className="p-5 space-y-0">
        {steps.map((step, i) => {
          if (step.type === "text") {
            return (
              <div key={i} className="py-2 text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
                {step.content}
              </div>
            );
          }
          if (step.type === "divider") {
            return <div key={i} className="my-3" style={{ height: "1px", background: "rgba(255,255,255,0.03)" }} />;
          }
          if (step.type === "note") {
            return (
              <div key={i} className="mt-3 flex items-start gap-2 px-3 py-2 rounded-lg text-xs" style={{ background: "rgba(236,72,153,0.12)", border: "1px solid rgba(244,114,182,0.2)", color: "#fbcfe8" }}>
                <span className="flex-shrink-0 mt-0.5">💡</span>
                <span>{step.content}</span>
              </div>
            );
          }
          if (step.type === "step") {
            return (
              <div key={i} className="flex items-start gap-4 py-3" style={{ borderBottom: i < steps.length - 1 && steps[i+1]?.type === "step" ? "1px solid rgba(255,255,255,0.03)" : "none" }}>
                {/* Step number */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
                  style={{ background: "rgba(236,72,153,0.25)", color: "#f9a8d4", border: "1px solid rgba(244,114,182,0.35)" }}>
                  {step.num || i + 1}
                </div>
                <div className="flex-1">
                  {step.label && <div className="text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: "#6b7280" }}>{step.label}</div>}
                  {/* Math expression block */}
                  <div className="font-mono text-sm px-4 py-2.5 rounded-xl leading-relaxed" style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.03)", color: "#e2e8f0", fontFamily: "'Fira Code', 'Courier New', monospace" }}>
                    <MathLine content={step.content} />
                  </div>
                  {step.note && <div className="mt-1.5 text-xs" style={{ color: "#9ca3af" }}>{step.note}</div>}
                </div>
              </div>
            );
          }
          if (step.type === "result") {
            return (
              <div key={i} className="mt-4 flex items-center gap-4 px-4 py-3 rounded-xl" style={{ background: "rgba(251,113,133,0.1)", border: "1px solid rgba(249,168,212,0.25)" }}>
                <span className="text-lg">🎯</span>
                <div>
                  {step.label && <div className="text-xs font-semibold mb-0.5 uppercase tracking-wider" style={{ color: "#fda4af" }}>{step.label}</div>}
                  <div className="font-mono font-bold text-base" style={{ color: "#f472b6", fontFamily: "'Fira Code', 'Courier New', monospace" }}>
                    <MathLine content={step.content} />
                  </div>
                </div>
              </div>
            );
          }
          if (step.type === "math") {
            return (
              <div key={i} className="py-2 flex justify-center">
                <div className="font-mono text-base px-6 py-3 rounded-xl" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", fontFamily: "'Fira Code', 'Courier New', monospace", letterSpacing: "0.02em" }}>
                  <MathLine content={step.content} />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
