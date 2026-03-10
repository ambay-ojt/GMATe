import React from 'react';
import { MathLine } from './MathLine.jsx';

export function FormattedText({ text, accentColor }) {
  if (!text) return null;

  // Split by line breaks first
  const lines = text.split('\n');

  return (
    <div className="space-y-3">
      {lines.map((line, i) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return <div key={i} className="h-2" />;

        // Handle Bullet Points
        if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-') || trimmedLine.startsWith('*')) {
          const content = trimmedLine.replace(/^[•\-*]\s*/, '');
          return (
            <div key={i} className="flex items-start gap-3 pl-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accentColor || "#ec4899" }} />
              <div className="text-gray-300 leading-relaxed flex-1">
                <InlineFormatter text={content} />
              </div>
            </div>
          );
        }

        // Handle Section Headers (e.g. **Title:**)
        if (trimmedLine.startsWith('**') && trimmedLine.includes(':**')) {
          return (
            <div key={i} className="mt-6 first:mt-0">
              <InlineFormatter text={trimmedLine} accentColor={accentColor} />
            </div>
          );
        }

        // Regular Paragraph
        return (
          <p key={i} className="text-gray-300 leading-relaxed text-sm">
            <InlineFormatter text={trimmedLine} />
          </p>
        );
      })}
    </div>
  );
}

function InlineFormatter({ text, accentColor }) {
  // Handle bold text **...**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const content = part.slice(2, -2);
          const isHeader = content.endsWith(':');
          return (
            <span key={i} className={isHeader ? "text-white font-black text-sm uppercase tracking-wider block mb-1" : "text-white font-bold"}
              style={isHeader ? { color: accentColor } : {}}>
              {content}
            </span>
          );
        }
        // Pass to MathLine for symbols and subscripts
        return <MathLine key={i} content={part} />;
      })}
    </span>
  );
}
