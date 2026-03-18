import { useState } from 'react';

/**
 * useProgress – verwaltet den Lernfortschritt
 * Gibt zurück:
 *   done          – Array von Booleans (ein Eintrag pro Kapitel)
 *   markDone(n)   – Kapitel n als abgeschlossen markieren
 *   totalDone     – Anzahl abgeschlossener Kapitel
 *   progressPct   – Fortschritt in Prozent (0–100)
 */
export function useProgress(totalChapters = 4) {
  const [done, setDone] = useState(Array(totalChapters).fill(false));

  function markDone(index) {
    setDone(prev => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }

  const totalDone = done.filter(Boolean).length;
  const progressPct = Math.round((totalDone / totalChapters) * 100);

  return { done, markDone, totalDone, progressPct };
}
