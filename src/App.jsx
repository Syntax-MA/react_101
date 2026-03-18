import { useState } from 'react';
import './App.css';

import Sidebar   from './Sidebar';
import Chapter1  from './pages/Chapter1';
import Chapter2  from './pages/Chapter2';
import Chapter3  from './pages/Chapter3';
import Chapter4  from './pages/Chapter4';
import { useProgress } from './hooks/useProgress';

/**
 * App – Haupt-Layout
 * Verwaltet die aktive Seite und den Fortschritt.
 */
export default function App() {
  const [current, setCurrent] = useState(0);
  const { done, markDone, totalDone, progressPct } = useProgress(4);

  function goTo(n) {
    setCurrent(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function completeAndNext(n) {
    markDone(n);
    if (n < 3) goTo(n + 1);
  }

  function handleFinish() {
    markDone(3);
    alert('🎉 Glückwunsch! Du hast alle 4 Kapitel abgeschlossen!');
  }

  const pages = [
    <Chapter1
      key={0}
      onNext={() => completeAndNext(0)}
    />,
    <Chapter2
      key={1}
      onPrev={() => goTo(0)}
      onNext={() => completeAndNext(1)}
    />,
    <Chapter3
      key={2}
      onPrev={() => goTo(1)}
      onNext={() => completeAndNext(2)}
    />,
    <Chapter4
      key={3}
      onPrev={() => goTo(2)}
      onFinish={handleFinish}
    />,
  ];

  return (
    <div className="app-layout">
      <Sidebar
        current={current}
        done={done}
        totalDone={totalDone}
        progressPct={progressPct}
        onNavigate={goTo}
      />
      <main className="main-content">
        {pages[current]}
      </main>
    </div>
  );
}
