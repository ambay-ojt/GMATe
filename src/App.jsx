import React, { useState } from 'react';
import { SideBar } from './components/SideBar.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { PracticePage } from './pages/PracticePage.jsx';
import { StudyPage } from './pages/StudyPage.jsx';
import { FlashcardsPage } from './pages/FlashcardsPage.jsx';
import { ProgressPage } from './pages/ProgressPage.jsx';
import { ChatPage } from './pages/ChatPage.jsx';

export default function App() {
  const [page, setPage] = useState("home");
  const [scores, setScores] = useState([]);
  const [chatNotif, setChatNotif] = useState(0);

  const addScore = (s) => { setScores(prev => [...prev, s]); };

  const navigate = (p) => {
    if (p === "chat") setChatNotif(0);
    setPage(p);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", minHeight: "100vh", background: "#0f0a10" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: rgba(255,255,255,0.03); }
        ::-webkit-scrollbar-thumb { background: rgba(236,72,153,0.55); border-radius: 3px; }
        @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        .animate-bounce { animation: bounce 1s ease-in-out infinite; }
        @keyframes float { 0%,100% { transform:translateY(0px);} 50%{transform:translateY(-8px);} }
        .float { animation: float 4s ease-in-out infinite; }
      `}</style>
      <SideBar page={page} setPage={navigate} chatNotif={chatNotif} />
      <main className="ml-[250px] min-h-screen">
        {page === "home" && <HomePage setPage={navigate} />}
        {page === "practice" && <PracticePage setPage={navigate} addScore={addScore} />}
        {page === "study" && <StudyPage />}
        {page === "flashcards" && <FlashcardsPage />}
        {page === "progress" && <ProgressPage scores={scores} />}
        {page === "chat" && <ChatPage />}
      </main>
    </div>
  );
}
