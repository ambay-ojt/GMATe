import { QUESTIONS, MOCK_EXAM_CONFIG } from '../data/data.js';

export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getMockExamQuestions() {
  const ps = shuffleArray(QUESTIONS.problemSolving).slice(0, MOCK_EXAM_CONFIG.ps);
  const ds = shuffleArray(QUESTIONS.dataSufficiency).slice(0, MOCK_EXAM_CONFIG.ds);
  const cr = shuffleArray(QUESTIONS.criticalReasoning).slice(0, MOCK_EXAM_CONFIG.cr);
  return shuffleArray([...ps, ...ds, ...cr]);
}

export function getPracticeQuestions() {
  const all = [
    ...QUESTIONS.problemSolving,
    ...QUESTIONS.dataSufficiency,
    ...QUESTIONS.criticalReasoning
  ];
  return shuffleArray(all).slice(0, 10);
}

export function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}
