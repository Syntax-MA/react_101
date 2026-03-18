import './Sidebar.css';

const CHAPTERS = [
  { id: 0, num: '24.1', label: 'React Setup & JSX' },
  { id: 1, num: '24.2', label: 'Komponenten & Props' },
  { id: 2, num: '24.3', label: 'useState & Inputs' },
  { id: 3, num: '24.4', label: 'Rendering & Listen' },
];

/**
 * Sidebar – linke Navigation
 *
 * Props:
 *   current      – aktuell aktive Kapitel-ID (number)
 *   done         – Array von Booleans [kap0, kap1, kap2, kap3]
 *   totalDone    – Anzahl abgeschlossener Kapitel (number)
 *   progressPct  – Fortschritt in % (number)
 *   onNavigate   – Callback(chapterId) beim Klick
 */
export default function Sidebar({ current, done, totalDone, progressPct, onNavigate }) {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar__logo">
        <svg className="sidebar__react-logo" viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="50" rx="47" ry="18" stroke="#61DAFB" strokeWidth="4"/>
          <ellipse cx="50" cy="50" rx="47" ry="18" stroke="#61DAFB" strokeWidth="4" transform="rotate(60 50 50)"/>
          <ellipse cx="50" cy="50" rx="47" ry="18" stroke="#61DAFB" strokeWidth="4" transform="rotate(120 50 50)"/>
          <circle cx="50" cy="50" r="8" fill="#61DAFB"/>
        </svg>
        <div>
          <span className="sidebar__title">React Grundlagen</span>
          <small className="sidebar__sub">Woche 3 · Kursübersicht</small>
        </div>
      </div>

      {/* Kapitel-Links */}
      <nav className="sidebar__nav">
        {CHAPTERS.map(ch => (
          <button
            key={ch.id}
            className={[
              'sidebar__btn',
              current === ch.id ? 'sidebar__btn--active' : '',
              done[ch.id]       ? 'sidebar__btn--done'   : '',
            ].join(' ')}
            onClick={() => onNavigate(ch.id)}
          >
            <span className="sidebar__num">{ch.num}</span>
            <span className="sidebar__label">{ch.label}</span>
            {done[ch.id] && <span className="sidebar__check">✓</span>}
          </button>
        ))}
      </nav>

      {/* Fortschrittsbalken */}
      <div className="sidebar__progress">
        <p className="sidebar__prog-text">
          Fortschritt: <strong>{totalDone} / 4</strong>
        </p>
        <div className="sidebar__prog-bar">
          <div
            className="sidebar__prog-fill"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>
    </aside>
  );
}
