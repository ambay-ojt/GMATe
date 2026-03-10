import React from 'react';
import { GradientText } from './GradientText.jsx';

export function SideBar({ page, setPage, chatNotif }) {
  const items = [
    { id: "home", label: "Home", icon: "⬡" },
    { id: "practice", label: "Practice", icon: "⚡" },
    { id: "study", label: "Study", icon: "📖" },
    { id: "flashcards", label: "Flashcards", icon: "🃏" },
    { id: "progress", label: "Progress", icon: "📊" },
    { id: "chat", label: "AI Chat", icon: "🤖" },
  ];
  return (
    <aside style={{ background: "rgba(15,10,16,0.97)", borderRight: "1px solid rgba(236,72,153,0.25)", width: "250px" }}
      className="fixed top-0 left-0 bottom-0 z-50 backdrop-blur-xl flex flex-col">
      <div className="p-6 flex items-center justify-center border-b" style={{ borderColor: "rgba(236,72,153,0.25)" }}>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage("home")}>
          <div style={{ background: "linear-gradient(135deg,#ec4899,#f43f5e)" }}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm">G</div>
          <span className="font-black text-white text-xl tracking-tight">GMAT<GradientText>e</GradientText></span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
        {items.map(item => (
          <button key={item.id} onClick={() => setPage(item.id)}
            className="relative px-4 py-3 rounded-xl text-left font-semibold transition-all duration-200 flex items-center shadow-sm"
            style={{
              color: page === item.id ? "#fff" : "#9ca3af",
              background: page === item.id ? "linear-gradient(135deg,rgba(236,72,153,0.3),rgba(244,63,94,0.15))" : "transparent",
              border: page === item.id ? "1px solid rgba(244,114,182,0.45)" : "1px solid transparent"
            }}>
            <span className="mr-3 text-lg">{item.icon}</span>{item.label}
            {item.id === "chat" && chatNotif > 0 && (
              <span className="absolute top-1/2 -translate-y-1/2 right-3 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{chatNotif}</span>
            )}
          </button>
        ))}
      </div>
      
      <div className="p-6 border-t" style={{ borderColor: "rgba(236,72,153,0.25)" }}>
        <div className="text-xs text-center text-gray-500 font-semibold uppercase tracking-wider">
           © 2026 GMATe
        </div>
      </div>
    </aside>
  );
}
