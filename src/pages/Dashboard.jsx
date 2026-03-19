import { useLabProgress } from '../context/LabProgressContext';
import './Dashboard.css';

// labId: null = kein Lab in diesem Kapitel
const TRACKS = [
  {
    id: 'html',
    name: 'Web & HTML/CSS',
    icon: '🌐',
    iconClass: 'dash-track__icon--html',
    fillClass: 'dash-track__mini-fill--html',
    chapters: [
      { id: 0, num: '22.1', label: 'Webarchitektur & HTTP',       labId: 'labChapter11' },
      { id: 1, num: '22.2', label: 'HTML Struktur & Formulare',   labId: 'labChapter12' },
      { id: 2, num: '22.3', label: 'CSS Grundlagen',              labId: 'labChapter13' },
      { id: 3, num: '22.4', label: 'CSS Layout & Responsive',     labId: 'labChapter14' },
      { id: 4, num: '22.5', label: 'Portfolio-Projekt ✨',         labId: 'labChapter15' },
    ],
  },
  {
    id: 'js',
    name: 'Web JavaScript',
    icon: '⚡',
    iconClass: 'dash-track__icon--js',
    fillClass: 'dash-track__mini-fill--js',
    chapters: [
      { id: 5,  num: '23.1', label: 'JS Fundamentals',    labId: 'labChapter5' },
      { id: 6,  num: '23.2', label: 'Arrays & Objects',   labId: 'labChapter8' },
      { id: 7,  num: '23.3', label: 'DOM & Events',       labId: 'labChapter6' },
      { id: 8,  num: '23.4', label: 'Fetch & Async/Await',labId: 'labChapter7' },
      { id: 9,  num: '23.5', label: 'JS Mini-App ✨',      labId: null },
    ],
  },
  {
    id: 'react',
    name: 'React',
    icon: '⚛️',
    iconClass: 'dash-track__icon--react',
    fillClass: 'dash-track__mini-fill--react',
    chapters: [
      { id: 10, num: '24.1', label: 'React Setup & JSX',     labId: 'labChapter1' },
      { id: 11, num: '24.2', label: 'Komponenten & Props',   labId: 'labChapter2' },
      { id: 12, num: '24.3', label: 'useState & Inputs',     labId: 'labChapter3' },
      { id: 13, num: '24.4', label: 'Rendering & Listen',    labId: 'labChapter4' },
      { id: 14, num: '24.5', label: 'React Mini-App ✨',      labId: 'labChapter10' },
    ],
  },
];

const LAB_EXERCISES_PER_CHAPTER = 10;

const TOOLS = [
  { icon: '🎓', label: 'SYNTAX E-Learning', sub: 'Lernplattform & Zoom', href: '#', highlight: true },
  { icon: '📹', label: 'Zoom', sub: 'Immer über E-Learning öffnen!', href: '#' },
  { icon: '💬', label: 'Slack', sub: 'Team-Kommunikation', href: '#' },
  { icon: '📚', label: 'Google Classroom', sub: 'Aufgaben & Materialien', href: '#' },
  { icon: '📁', label: 'Google Drive', sub: 'Gemeinsame Dateien', href: '#' },
];

const INFO_CARDS = [
  { icon: '🕓', label: 'Unterrichtszeiten', href: '#' },
  { icon: '🌴', label: 'Unterrichtsfreie Tage', href: '#' },
  { icon: '📅', label: 'Wochenplan', href: '#' },
  { icon: '🎉', label: 'Karriere Workshop Termine', href: '#' },
  { icon: '👩‍💼', label: 'Kurs-Team & Verfügbarkeiten', href: '#' },
  { icon: '🚀', label: 'Support, Abwesenheit & Feedback', href: '#' },
];

const KURSSTART_CARDS = [
  { icon: '📋', label: 'Kursvorbereitung', sub: 'Deine Vorbereitung auf die Weiterbildung', color: 'yellow' },
  { icon: '🗺️', label: 'Vom Vertrag zum Kick-Off', sub: 'Dein Fahrplan', color: 'yellow' },
  { icon: '💻', label: 'Technical Onboarding', sub: 'Setup & erste Schritte', color: 'yellow' },
  { icon: '🔍', label: 'Kursüberblick', sub: 'Was dich erwartet', color: 'yellow' },
];

const JOB_CARDS = [
  { icon: '🧭', label: 'Karriere Coaching Konzept', color: 'green' },
  { icon: '💼', label: 'Stellen zum Bewerben', color: 'green' },
  { icon: '🎯', label: 'Bewerbungstraining & Fragen', color: 'green' },
  { icon: '🤝', label: 'Arbeitgeber Partner', color: 'green' },
  { icon: '🔗', label: 'Jobportale', color: 'green' },
  { icon: '📆', label: 'Career Coach Termin', color: 'green' },
];

export default function Dashboard({ done, totalDone, progressPct, onNavigate }) {
  const { getTotalLabProgress, getLabProgress } = useLabProgress();
  const nextChapter = done.findIndex(d => !d);

  // Build labMap: { labId: 10, ... } for all labs
  const labMap = {};
  TRACKS.forEach(track => track.chapters.forEach(ch => {
    if (ch.labId) labMap[ch.labId] = LAB_EXERCISES_PER_CHAPTER;
  }));
  const labTotal = getTotalLabProgress(labMap);

  function handleContinue() {
    const target = nextChapter === -1 ? 0 : nextChapter;
    onNavigate(target);
  }

  return (
    <div className="dashboard">

      {/* ── ZOOM HINWEIS BANNER ── */}
      <div className="dash-banner">
        <span className="dash-banner__icon">⚠️</span>
        <span>
          <strong>Wichtig:</strong> Damit die Anwesenheit morgens korrekt erfasst werden kann,
          öffnet bitte den Zoom Link immer über die{' '}
          <a href="#" className="dash-banner__link">Syntax Lernplattform</a>.
        </span>
      </div>

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

        <h1>Kursdashboard <span>25-09-EON</span></h1>
        <p>Hier findest du alle wichtigen Informationen und Verlinkungen rund um deinen Kurs bei Syntax Institut.</p>

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
          <div className="dash-stat">
            <span className="dash-stat__val">{labTotal.done}<span style={{ fontSize: '0.65em', fontWeight: 400, opacity: 0.7 }}>/{labTotal.total}</span></span>
            <span className="dash-stat__lbl">🧪 Lab-Aufgaben</span>
          </div>
        </div>

        {/* Progress */}
        <div className="dash-hero__prog">
          <span className="dash-hero__prog-label">Lernfortschritt · {Math.round(progressPct)}%</span>
          <div className="dash-hero__prog-bar">
            <div className="dash-hero__prog-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="dash-hero__actions">
          <button className="dash-btn-primary" onClick={handleContinue}>
            {totalDone === 0 ? '🚀 Kurs starten' : nextChapter === -1 ? '🎉 Kurs abgeschlossen!' : '▶ Weiterlernen'}
          </button>
          {totalDone > 0 && (
            <button className="dash-btn-secondary" onClick={() => onNavigate(0)}>
              Von vorne beginnen
            </button>
          )}
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="dash-content">

        {/* ── IHK HINWEIS ── */}
        <div className="dash-ihk">
          <div className="dash-ihk__left">
            <span className="dash-ihk__badge">IHK</span>
            <div>
              <div className="dash-ihk__title">IT Support Specialist (IHK)</div>
              <div className="dash-ihk__sub">Prüfungsvorbereitung für das IHK-Zertifikat</div>
            </div>
          </div>
          <a
            href="https://syntax-ma.github.io/it-support-specialist-ihk/"
            target="_blank"
            rel="noreferrer"
            className="dash-ihk__btn"
          >
            Zur Übersicht →
          </a>
        </div>

        {/* ── DEINE TOOLS ── */}
        <p className="dash-section-title">Deine Tools</p>
        <div className="dash-tools">
          {TOOLS.map(tool => (
            <a
              key={tool.label}
              href={tool.href}
              className={`dash-tool${tool.highlight ? ' dash-tool--highlight' : ''}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="dash-tool__icon">{tool.icon}</span>
              <span className="dash-tool__label">{tool.label}</span>
              <span className="dash-tool__sub">{tool.sub}</span>
            </a>
          ))}
        </div>

        {/* ── WICHTIGE INFOS ── */}
        <div className="dash-two-col">

          {/* Linke Spalte: Wichtige Infos & Regeln */}
          <div>
            <p className="dash-section-title">Wichtige Informationen & Termine</p>
            <div className="dash-info-list">
              {INFO_CARDS.map(item => (
                <a key={item.label} href={item.href} className="dash-info-item">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                  <span className="dash-info-arrow">→</span>
                </a>
              ))}
            </div>

            <p className="dash-section-title" style={{ marginTop: '24px' }}>Regeln & Glossar</p>
            <div className="dash-info-list">
              <a href="#" className="dash-info-item">
                <span>🔁</span><span>Kursregeln – digitales Kurszimmer</span><span className="dash-info-arrow">→</span>
              </a>
              <a href="#" className="dash-info-item">
                <span>📖</span><span>Glossar für Teilnehmende</span><span className="dash-info-arrow">→</span>
              </a>
              <a href="#" className="dash-info-item">
                <span>🔗</span><span>Linksammlung</span><span className="dash-info-arrow">→</span>
              </a>
              <a href="#" className="dash-info-item">
                <span>🎖️</span><span>Teilnehmer werben Teilnehmer</span><span className="dash-info-arrow">→</span>
              </a>
            </div>
          </div>

          {/* Rechte Spalte: Kursstart */}
          <div>
            <p className="dash-section-title">Kursstart – Vorbereitungsphase</p>
            <div className="dash-card-grid">
              {KURSSTART_CARDS.map(c => (
                <a key={c.label} href="#" className={`dash-card dash-card--${c.color}`}>
                  <span className="dash-card__icon">{c.icon}</span>
                  <span className="dash-card__label">{c.label}</span>
                  {c.sub && <span className="dash-card__sub">{c.sub}</span>}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── WEITERBILDUNG ── */}
        <p className="dash-section-title" style={{ marginTop: '40px' }}>Deine Weiterbildung</p>
        <div className="dash-card-grid dash-card-grid--2">
          <a href="#" className="dash-card dash-card--purple">
            <span className="dash-card__icon">🏅</span>
            <span className="dash-card__label">Zertifikate & Prüfungen</span>
          </a>
          <a href="#" className="dash-card dash-card--purple">
            <span className="dash-card__icon">📝</span>
            <span className="dash-card__label">Anleitung zur Prüfungsanmeldung</span>
          </a>
        </div>

        {/* ── JOB COACHING ── */}
        <p className="dash-section-title" style={{ marginTop: '40px' }}>Dein Weg zum neuen Job: Coaching, Bewerbung & Vorbereitung</p>
        <div className="dash-card-grid dash-card-grid--3">
          {JOB_CARDS.map(c => (
            <a key={c.label} href="#" className={`dash-card dash-card--${c.color}`}>
              <span className="dash-card__icon">{c.icon}</span>
              <span className="dash-card__label">{c.label}</span>
            </a>
          ))}
        </div>

        {/* ── LEKTIONEN ── */}
        <p className="dash-section-title" style={{ marginTop: '48px' }}>Kursinhalte – Alle Lektionen</p>
        <div className="dash-tracks">
          {TRACKS.map(track => {
            const trackDone = track.chapters.filter(ch => done[ch.id]).length;
            const pct = Math.round((trackDone / track.chapters.length) * 100);
            return (
              <div className="dash-track" key={track.id}>
                <div className="dash-track__header">
                  <div className={`dash-track__icon ${track.iconClass}`}>{track.icon}</div>
                  <div className="dash-track__meta">
                    <span className="dash-track__name">{track.name}</span>
                    <span className="dash-track__count">{trackDone} / {track.chapters.length} abgeschlossen</span>
                    <div className="dash-track__mini-bar">
                      <div className={`dash-track__mini-fill ${track.fillClass}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                </div>
                <div className="dash-track__chapters">
                  {track.chapters.map((ch, idx) => {
                    const isDone = done[ch.id];
                    const isNext = !isDone && track.chapters.slice(0, idx).every(c => done[c.id]);
                    const lab = ch.labId ? getLabProgress(ch.labId, LAB_EXERCISES_PER_CHAPTER) : null;
                    return (
                      <button
                        key={ch.id}
                        className={`dash-chapter-btn${isDone ? ' dash-chapter-btn--done' : ''}`}
                        onClick={() => onNavigate(ch.id)}
                      >
                        <span className="dash-chapter-btn__num">{ch.num}</span>
                        <span className="dash-chapter-btn__label">{ch.label}</span>
                        {lab && lab.done > 0 && (
                          <span className={`dash-chapter-btn__lab-badge${lab.done === lab.total ? ' dash-chapter-btn__lab-badge--complete' : ''}`}>
                            🧪 {lab.done}/{lab.total}
                          </span>
                        )}
                        {isDone && <span className="dash-chapter-btn__badge dash-chapter-btn__badge--done">✓ Fertig</span>}
                        {isNext && !isDone && <span className="dash-chapter-btn__badge dash-chapter-btn__badge--next">Weiter →</span>}
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
