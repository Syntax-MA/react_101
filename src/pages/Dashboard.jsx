import './Dashboard.css';

const TRACKS = [
  {
    id: 'html',
    name: 'Web & HTML/CSS',
    icon: '🌐',
    iconClass: 'dash-track__icon--html',
    fillClass: 'dash-track__mini-fill--html',
    chapters: [
      { id: 0, num: '22.1', label: 'Webarchitektur & HTTP' },
      { id: 1, num: '22.2', label: 'HTML Struktur & Formulare' },
      { id: 2, num: '22.3', label: 'CSS Grundlagen' },
      { id: 3, num: '22.4', label: 'CSS Layout & Responsive' },
      { id: 4, num: '22.5', label: 'Portfolio-Projekt ✨' },
    ],
  },
  {
    id: 'js',
    name: 'Web JavaScript',
    icon: '⚡',
    iconClass: 'dash-track__icon--js',
    fillClass: 'dash-track__mini-fill--js',
    chapters: [
      { id: 5,  num: '23.1', label: 'JS Fundamentals' },
      { id: 6,  num: '23.2', label: 'Arrays & Objects' },
      { id: 7,  num: '23.3', label: 'DOM & Events' },
      { id: 8,  num: '23.4', label: 'Fetch & Async/Await' },
      { id: 9,  num: '23.5', label: 'JS Mini-App ✨' },
    ],
  },
  {
    id: 'react',
    name: 'React',
    icon: '⚛️',
    iconClass: 'dash-track__icon--react',
    fillClass: 'dash-track__mini-fill--react',
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
 * Dashboard – Startseite
 *
 * Props:
 *   done        – Array[15] of booleans
 *   totalDone   – Anzahl abgeschlossener Kapitel
 *   progressPct – Fortschritt in %
 *   onNavigate  – Callback(chapterId)
 */
export default function Dashboard({ done, totalDone, progressPct, onNavigate }) {
  // Nächstes nicht abgeschlossenes Kapitel finden
  const nextChapter = done.findIndex(d => !d);

  function handleContinue() {
    const target = nextChapter === -1 ? 0 : nextChapter;
    onNavigate(target);
  }

  return (
    <div className="dashboard">
      {/* ── HERO ── */}
      <div className="dash-hero">
        <div className="dash-hero__logo">
          <svg className="dash-hero__react-svg" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="50" rx="47" ry="18" stroke="#61DAFB" strokeWidth="3.5"/>
            <ellipse cx="50" cy="50" rx="47" ry="18" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(60 50 50)"/>
            <ellipse cx="50" cy="50" rx="47" ry="18" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(120 50 50)"/>
            <circle cx="50" cy="50" r="8" fill="#61DAFB"/>
          </svg>
        </div>

        <h1>Web &amp; <span>React</span> Kurs</h1>
        <p>Dein Lernpfad durch Webentwicklung — von HTML/CSS über JavaScript bis React.</p>

        {/* Stats */}
        <div className="dash-hero__stats">
          <div className="dash-stat">
            <span className="dash-stat__val">15</span>
            <span className="dash-stat__lbl">Lektionen</span>
          </div>
          <div className="dash-stat">
            <span className="dash-stat__val">3</span>
            <span className="dash-stat__lbl">Module</span>
          </div>
          <div className="dash-stat">
            <span className="dash-stat__val">{totalDone}</span>
            <span className="dash-stat__lbl">Abgeschlossen</span>
          </div>
        </div>

        {/* Progress */}
        <div className="dash-hero__prog">
          <span className="dash-hero__prog-label">Gesamtfortschritt · {Math.round(progressPct)}%</span>
          <div className="dash-hero__prog-bar">
            <div className="dash-hero__prog-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="dash-hero__actions">
          <button className="dash-btn-primary" onClick={handleContinue}>
            {totalDone === 0
              ? '🚀 Kurs starten'
              : nextChapter === -1
                ? '🎉 Kurs abgeschlossen!'
                : '▶ Weiterlernen'}
          </button>
          {totalDone > 0 && (
            <button className="dash-btn-secondary" onClick={() => onNavigate(0)}>
              Von vorne beginnen
            </button>
          )}
        </div>
      </div>

      {/* ── LEKTIONEN ── */}
      <div className="dash-content">
        <p className="dash-section-title">Alle Lektionen</p>

        <div className="dash-tracks">
          {TRACKS.map(track => {
            const trackDone = track.chapters.filter(ch => done[ch.id]).length;
            const pct = Math.round((trackDone / track.chapters.length) * 100);

            return (
              <div className="dash-track" key={track.id}>
                <div className="dash-track__header">
                  <div className={`dash-track__icon ${track.iconClass}`}>
                    {track.icon}
                  </div>
                  <div className="dash-track__meta">
                    <span className="dash-track__name">{track.name}</span>
                    <span className="dash-track__count">{trackDone} / {track.chapters.length} abgeschlossen</span>
                    <div className="dash-track__mini-bar">
                      <div
                        className={`dash-track__mini-fill ${track.fillClass}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="dash-track__chapters">
                  {track.chapters.map((ch, idx) => {
                    const isDone = done[ch.id];
                    // "Weiter"-Badge: erstes nicht-abgeschlossenes Kapitel dieses Tracks
                    const isNext = !isDone && track.chapters.slice(0, idx).every(c => done[c.id]);

                    return (
                      <button
                        key={ch.id}
                        className={`dash-chapter-btn${isDone ? ' dash-chapter-btn--done' : ''}`}
                        onClick={() => onNavigate(ch.id)}
                      >
                        <span className="dash-chapter-btn__num">{ch.num}</span>
                        <span className="dash-chapter-btn__label">{ch.label}</span>
                        {isDone && (
                          <span className="dash-chapter-btn__badge dash-chapter-btn__badge--done">✓ Fertig</span>
                        )}
                        {isNext && !isDone && (
                          <span className="dash-chapter-btn__badge dash-chapter-btn__badge--next">Weiter →</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
