import { useState } from 'react';
import './App.css';

import Sidebar    from './Sidebar';
import Dashboard  from './pages/Dashboard';
import Chapter1   from './pages/Chapter1';
import Chapter2   from './pages/Chapter2';
import Chapter3   from './pages/Chapter3';
import Chapter4   from './pages/Chapter4';
import Chapter5   from './pages/Chapter5';
import Chapter6   from './pages/Chapter6';
import Chapter7   from './pages/Chapter7';
import Chapter8   from './pages/Chapter8';
import Chapter9   from './pages/Chapter9';
import Chapter10  from './pages/Chapter10';
import Chapter11  from './pages/Chapter11';
import Chapter12  from './pages/Chapter12';
import Chapter13  from './pages/Chapter13';
import Chapter14  from './pages/Chapter14';
import Chapter15  from './pages/Chapter15';
import { useProgress } from './hooks/useProgress';

const TOTAL = 15;

/**
 * App – Haupt-Layout
 * Reihenfolge: Web & HTML/CSS (22.1–22.5) → Web JS (23.1–23.5) → React (24.1–24.5)
 * Index: 0=Ch11, 1=Ch12, 2=Ch13, 3=Ch14, 4=Ch15,
 *        5=Ch5,  6=Ch8,  7=Ch6,  8=Ch7,  9=Ch9,
 *        10=Ch1, 11=Ch2, 12=Ch3, 13=Ch4, 14=Ch10
 */
export default function App() {
  // null = Dashboard anzeigen, Zahl = Kapitel anzeigen
  const [current, setCurrent] = useState(null);
  const { done, markDone, totalDone, progressPct } = useProgress(TOTAL);

  function goTo(n) {
    setCurrent(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goToDashboard() {
    setCurrent(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function completeAndNext(n) {
    markDone(n);
    if (n < TOTAL - 1) goTo(n + 1);
    else goToDashboard();
  }

  function handleFinish() {
    markDone(TOTAL - 1);
    alert('🎉 Glückwunsch! Du hast alle 15 Kapitel abgeschlossen!');
    goToDashboard();
  }

  const pages = [
    // ── Web & HTML/CSS ───────────────────────────────────────
    <Chapter11
      key={0}
      onNext={() => completeAndNext(0)}
    />,
    <Chapter12
      key={1}
      onPrev={() => goTo(0)}
      onNext={() => completeAndNext(1)}
    />,
    <Chapter13
      key={2}
      onPrev={() => goTo(1)}
      onNext={() => completeAndNext(2)}
    />,
    <Chapter14
      key={3}
      onPrev={() => goTo(2)}
      onNext={() => completeAndNext(3)}
    />,
    <Chapter15
      key={4}
      onPrev={() => goTo(3)}
      onNext={() => completeAndNext(4)}
    />,
    // ── Web JS ──────────────────────────────────────────────
    <Chapter5
      key={5}
      onPrev={() => goTo(4)}
      onNext={() => completeAndNext(5)}
    />,
    <Chapter8
      key={6}
      onPrev={() => goTo(5)}
      onNext={() => completeAndNext(6)}
    />,
    <Chapter6
      key={7}
      onPrev={() => goTo(6)}
      onNext={() => completeAndNext(7)}
    />,
    <Chapter7
      key={8}
      onPrev={() => goTo(7)}
      onNext={() => completeAndNext(8)}
    />,
    <Chapter9
      key={9}
      onPrev={() => goTo(8)}
      onNext={() => completeAndNext(9)}
    />,
    // ── React ────────────────────────────────────────────────
    <Chapter1
      key={10}
      onPrev={() => goTo(9)}
      onNext={() => completeAndNext(10)}
    />,
    <Chapter2
      key={11}
      onPrev={() => goTo(10)}
      onNext={() => completeAndNext(11)}
    />,
    <Chapter3
      key={12}
      onPrev={() => goTo(11)}
      onNext={() => completeAndNext(12)}
    />,
    <Chapter4
      key={13}
      onPrev={() => goTo(12)}
      onNext={() => completeAndNext(13)}
    />,
    <Chapter10
      key={14}
      onPrev={() => goTo(13)}
      onFinish={handleFinish}
    />,
  ];

  // Dashboard-Ansicht (kein Sidebar)
  if (current === null) {
    return (
      <Dashboard
        done={done}
        totalDone={totalDone}
        progressPct={progressPct}
        onNavigate={goTo}
      />
    );
  }

  return (
    <div className="app-layout">
      <Sidebar
        current={current}
        done={done}
        totalDone={totalDone}
        progressPct={progressPct}
        onNavigate={goTo}
        onDashboard={goToDashboard}
      />
      <main className="main-content">
        {pages[current]}
      </main>
    </div>
  );
}
