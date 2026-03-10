import React from 'react';

export function ProgressPage({ scores }) {
  const overall = scores.length > 0 ? Math.round(scores.reduce((acc, s) => acc + (s.score/s.total)*100, 0) / scores.length) : 0;
  const byMode = { timed: [], untimed: [], mock: [] };
  scores.forEach(s => { if (byMode[s.mode]) byMode[s.mode].push(Math.round((s.score/s.total)*100)); });
  const avg = (arr) => arr.length ? Math.round(arr.reduce((a,b)=>a+b,0)/arr.length) : 0;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "#0f0a10" }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-2">My Progress</h1>
        <p className="text-gray-400 mb-8">Track your improvement over time.</p>

        {scores.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📊</div>
            <p className="text-gray-400 text-lg">No sessions yet! Complete a practice session to see your stats.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { label: "Sessions", value: scores.length, color: "#f9a8d4" },
                { label: "Avg Score", value: `${overall}%`, color: overall >= 70 ? "#fda4af" : overall >= 50 ? "#f0abfc" : "#fb7185" },
                { label: "Best", value: `${Math.max(...scores.map(s=>Math.round((s.score/s.total)*100)))}%`, color: "#f472b6" },
                { label: "Mock Avg", value: byMode.mock.length ? `${avg(byMode.mock)}%` : "—", color: "#e879f9" },
              ].map((stat, i) => (
                <div key={i} className="p-5 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.03)" }}>
                  <div className="text-3xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl mb-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.03)" }}>
              <h3 className="font-bold text-white mb-4">Recent Sessions</h3>
              <div className="space-y-3">
                {[...scores].reverse().slice(0, 8).map((s, i) => {
                  const pct = Math.round((s.score/s.total)*100);
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-gray-500 text-sm w-24">{s.date}</span>
                      <span className="px-2 py-1 rounded text-xs font-bold capitalize" style={{ background: s.mode==="mock"?"rgba(245,158,11,0.2)":s.mode==="timed"?"rgba(236,72,153,0.2)":"rgba(251,113,133,0.2)", color: s.mode==="mock"?"#e879f9":s.mode==="timed"?"#f9a8d4":"#f472b6" }}>{s.mode}</span>
                      <div className="flex-1 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: pct>=70?"linear-gradient(90deg,#ec4899,#f43f5e)":pct>=50?"linear-gradient(90deg,#d946ef,#f43f5e)":"linear-gradient(90deg,#f43f5e,#9d174d)" }} />
                      </div>
                      <span className="text-white font-bold text-sm w-16 text-right">{s.score}/{s.total} ({pct}%)</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
