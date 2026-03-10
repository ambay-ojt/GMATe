import React, { useState, useEffect, useRef } from 'react';

export function ChatPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm your GMAT AI Tutor 🎓 I can explain any GMAT concept, walk through problems step by step, quiz you on specific topics, or give you strategic advice. What would you like to work on?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);
    try {
      const history = messages.slice(-10).map(m => ({ role: m.role, content: m.content }));
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are an expert GMAT tutor specializing in three areas: Problem Solving (quantitative reasoning), Data Sufficiency, and Critical Reasoning. 

You help students by:
1. Explaining GMAT concepts clearly with examples
2. Walking through problems step-by-step
3. Quizzing students on topics they request
4. Giving strategic advice on how to approach question types
5. Identifying common mistakes and how to avoid them

Keep responses focused, practical, and encouraging. Use clear formatting with numbered steps when walking through problems. When giving tips, be specific and actionable. If a student seems stuck, break things down further. Always relate advice back to the GMAT exam context.`,
          messages: [...history, { role: "user", content: userMsg }]
        })
      });
      const data = await res.json();
      const text = data.content?.map(c => c.text || "").join("") || "Sorry, I couldn't process that. Please try again.";
      setMessages(prev => [...prev, { role: "assistant", content: text }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Connection error. Please try again." }]);
    }
    setLoading(false);
  };

  const suggestions = ["Explain Data Sufficiency answer choices", "Walk me through a CR weaken question", "Quiz me on number properties", "What are the best test-taking strategies?"];

  return (
    <div className="min-h-screen pt-20 pb-0 flex flex-col" style={{ background: "#0f0a10", height: "100vh" }}>
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-full flex-shrink-0 mr-3 flex items-center justify-center text-sm mt-1"
                  style={{ background: "linear-gradient(135deg,#ec4899,#f43f5e)" }}>🤖</div>
              )}
              <div className="max-w-lg px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap"
                style={{
                  background: msg.role === "user" ? "linear-gradient(135deg,#ec4899,#db2777)" : "rgba(255,255,255,0.03)",
                  border: msg.role === "user" ? "none" : "1px solid rgba(255,255,255,0.08)",
                  color: "white",
                  borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px"
                }}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="w-8 h-8 rounded-full flex-shrink-0 mr-3 flex items-center justify-center text-sm"
                style={{ background: "linear-gradient(135deg,#ec4899,#f43f5e)" }}>🤖</div>
              <div className="px-4 py-3 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex gap-1">
                  {[0,1,2].map(j => <div key={j} className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: `${j*0.15}s` }} />)}
                </div>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>
      </div>

      {/* Suggestions */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2">
          <div className="max-w-3xl mx-auto flex gap-2 flex-wrap">
            {suggestions.map((s, i) => (
              <button key={i} onClick={() => { setInput(s); }}
                className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:scale-105"
                style={{ background: "rgba(236,72,153,0.15)", border: "1px solid rgba(244,114,182,0.3)", color: "#f9a8d4" }}>
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="px-4 py-4" style={{ background: "rgba(15,10,16,0.97)", borderTop: "1px solid rgba(255,255,255,0.03)" }}>
        <div className="max-w-3xl mx-auto flex gap-3">
          <input value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
            placeholder="Ask me anything about GMAT..."
            className="flex-1 px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", caretColor: "#f9a8d4" }} />
          <button onClick={sendMessage} disabled={loading || !input.trim()}
            className="px-5 py-3 rounded-xl font-bold text-white transition-all hover:scale-105 disabled:opacity-50"
            style={{ background: "linear-gradient(135deg,#ec4899,#f43f5e)" }}>
            Send →
          </button>
        </div>
      </div>
    </div>
  );
}
