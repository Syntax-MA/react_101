import './Sidebar.css';

const SECTIONS = [
  {
    label: 'Web & HTML/CSS',
    chapters: [
      { id: 0,  num: '22.1', label: 'Webarchitektur & HTTP' },
      { id: 1,  num: '22.2', label: 'HTML Struktur & Formulare' },
      { id: 2,  num: '22.3', label: 'CSS Grundlagen' },
      { id: 3,  num: '22.4', label: 'CSS Layout & Responsive' },
      { id: 4,  num: '22.5', label: 'Portfolio-Projekt ✨' },
    ],
  },
  {
    label: 'Web JS',
    chapters: [
      { id: 5,  num: '23.1', label: 'JS Fundamentals' },
      { id: 6,  num: '23.2', label: 'Arrays & Objects' },
      { id: 7,  num: '23.3', label: 'DOM & Events' },
      { id: 8,  num: '23.4', label: 'Fetch & Async/Await' },
      { id: 9,  num: '23.5', label: 'JS Mini-App ✨' },
    ],
  },
  {
    label: 'React',
    chapters: [
      { id: 10, num: '24.1', label: 'React Setup & JSX' },
      { id: 11, num: '24.2', label: 'Komponenten & Props' },
      { id: 12, num: '24.3', label: 'useState & Inputs' },
      { id: 13, num: '24.4', label: 'Rendering & Listen' },
      { id: 14, num: '24.5', label: 'React Mini-App ✨' },
    ],
  },
];

/**
 * Sidebar – linke Navigation
 *
 * Props:
 *   current      – aktuell aktive Kapitel-ID (number)
 *   done         – Array von Booleans [kap0 … kap14]
 *   totalDone    – Anzahl abgeschlossener Kapitel (number)
 *   progressPct  – Fortschritt in % (number)
 *   onNavigate   – Callback(chapterId) beim Klick
 */
export default function Sidebar({ current, done, totalDone, progressPct, onNavigate, onDashboard }) {
  return (
    <aside className="sidebar">
      {/* Logo – klickbar → zurück zum Dashboard */}
      <div className="sidebar__logo sidebar__logo--btn" onClick={onDashboard} title="Zurück zum Dashboard">
        <svg className="sidebar__react-logo" viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="50" rx="47" ry="18" stroke="#61DAFB" strokeWidth="4"/>
          <ellipse cx="50" cy="50" rx="47" ry="18" stroke="#61DAFB" strokeWidth="4" transform="rotate(60 50 50)"/>
          <ellipse cx="50" cy="50" rx="47" ry="18" stroke="#61DAFB" strokeWidth="4" transform="rotate(120 50 50)"/>
          <circle cx="50" cy="50" r="8" fill="#61DAFB"/>
        </svg>
        <div>
          <span className="sidebar__title">Web &amp; React</span>
          <small className="sidebar__sub">← Dashboard</small>
        </div>
      </div>

      {/* Sektionen mit Kapiteln */}
      <nav className="sidebar__nav">
        {SECTIONS.map(section => (
          <div key={section.label} className="sidebar__section">
            <span className="sidebar__section-label">{section.label}</span>
            {section.chapters.map(ch => (
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
          </div>
        ))}
      </nav>

      {/* Fortschrittsbalken */}
      <div className="sidebar__progress">
        <p className="sidebar__prog-text">
          Fortschritt: <strong>{totalDone} / 15</strong>
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
