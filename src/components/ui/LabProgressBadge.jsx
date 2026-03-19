import { useLabProgress } from '../../context/LabProgressContext';
import './LabProgressBadge.css';

/**
 * LabProgressBadge
 * Zeigt "3 / 10 ✓" + Balken für ein einzelnes Lab.
 *
 * Props:
 *   labId   – z.B. "labChapter1"
 *   total   – Gesamtzahl Aufgaben im Lab (z.B. 10)
 *   compact – wenn true: nur Balken + Zahl, kein Label
 */
export default function LabProgressBadge({ labId, total, compact = false }) {
  const { getLabProgress } = useLabProgress();
  const { done, pct } = getLabProgress(labId, total);

  if (done === 0 && !compact) return null; // nichts anzeigen wenn noch keine Aufgabe gelöst

  return (
    <div className={`lab-badge ${compact ? 'lab-badge--compact' : ''} ${done === total ? 'lab-badge--complete' : ''}`}>
      {!compact && (
        <span className="lab-badge__label">
          {done === total ? '🏆 Lab abgeschlossen!' : `💻 Lab: ${done} / ${total}`}
        </span>
      )}
      {compact && (
        <span className="lab-badge__fraction">{done}/{total}</span>
      )}
      <div className="lab-badge__bar">
        <div className="lab-badge__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
