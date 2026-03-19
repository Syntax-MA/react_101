import { createContext, useContext, useState, useCallback } from 'react';

/**
 * LabProgressContext
 * Speichert welche Lab-Übungen pro Kapitel bestanden wurden.
 * Datenstruktur in localStorage: { "labChapter1": [1,3,5], "labChapter2": [1,2], ... }
 */

const STORAGE_KEY = 'lernapp_lab_progress';

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function save(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch { /* storage full o.ä. */ }
}

const LabProgressContext = createContext(null);

export function LabProgressProvider({ children }) {
  const [progress, setProgress] = useState(load);

  const markExerciseDone = useCallback((labId, exerciseId) => {
    setProgress(prev => {
      const existing = prev[labId] || [];
      if (existing.includes(exerciseId)) return prev;
      const next = { ...prev, [labId]: [...existing, exerciseId] };
      save(next);
      return next;
    });
  }, []);

  const resetLab = useCallback((labId) => {
    setProgress(prev => {
      const next = { ...prev };
      delete next[labId];
      save(next);
      return next;
    });
  }, []);

  /** Gibt [done, total] für ein einzelnes Lab zurück */
  const getLabProgress = useCallback((labId, totalExercises) => {
    const done = (progress[labId] || []).length;
    return { done, total: totalExercises, pct: Math.round((done / totalExercises) * 100) };
  }, [progress]);

  /** Summe über alle Labs */
  const getTotalLabProgress = useCallback((labMap) => {
    // labMap: { labId: totalCount }
    let done = 0, total = 0;
    Object.entries(labMap).forEach(([labId, count]) => {
      done  += (progress[labId] || []).length;
      total += count;
    });
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
  }, [progress]);

  return (
    <LabProgressContext.Provider value={{ progress, markExerciseDone, resetLab, getLabProgress, getTotalLabProgress }}>
      {children}
    </LabProgressContext.Provider>
  );
}

export function useLabProgress() {
  const ctx = useContext(LabProgressContext);
  if (!ctx) throw new Error('useLabProgress must be used within LabProgressProvider');
  return ctx;
}
