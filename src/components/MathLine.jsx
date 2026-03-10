import React from 'react';

export function MathLine({ content }) {
  // Render inline math formatting: fractions, arrows, superscripts, etc.
  const parts = content.split(/(\^\{[^}]+\}|\^[0-9]|_\{[^}]+\}|→|⟹|∴|≠|≤|≥|×|÷|\b\d+\/\d+\b)/g);
  return (
    <span>
      {parts.map((part, i) => {
        if (/^\^\{(.+)\}$/.test(part)) {
          const exp = part.match(/^\^\{(.+)\}$/)[1];
          return <sup key={i} className="text-xs font-bold" style={{ fontSize: "0.7em", verticalAlign: "super" }}>{exp}</sup>;
        }
        if (/^\^([0-9])$/.test(part)) {
          return <sup key={i} className="text-xs font-bold" style={{ fontSize: "0.7em", verticalAlign: "super" }}>{part[1]}</sup>;
        }
        if (part === "→" || part === "⟹") {
          return <span key={i} className="mx-2 font-bold" style={{ color: "#f9a8d4" }}>{part}</span>;
        }
        if (part === "∴") {
          return <span key={i} className="mx-1 font-bold" style={{ color: "#f472b6" }}>∴</span>;
        }
        if (/^\b\d+\/\d+\b$/.test(part)) {
          const [num, den] = part.split("/");
          return (
            <span key={i} className="inline-flex flex-col items-center mx-1 leading-none" style={{ verticalAlign: "middle" }}>
              <span className="text-xs font-bold border-b border-current px-0.5" style={{ lineHeight: 1.2 }}>{num}</span>
              <span className="text-xs font-bold px-0.5" style={{ lineHeight: 1.2 }}>{den}</span>
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
