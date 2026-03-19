import { useState } from 'react';
import './ChapterTabs.css';

/**
 * 6-tab chapter layout:
 *   Slides | Key Learnings | Knowledge Check | Lab | Übung | Bugs
 *
 * Props:
 *   slidesContent   – SlideCarousel
 *   learningsContent – Concept boxes, CodeBlocks, Cards, TaskBoxes
 *   checkContent     – Quiz + interactive exercises
 *   labContent       – CodeLab
 *   uebungContent    – MarkdownViewer (markdown exercise file)
 *   bugsContent      – BugFinder (optional)
 */
export default function ChapterTabs({
  slidesContent,
  learningsContent,
  checkContent,
  labContent,
  uebungContent,
  bugsContent,
}) {
  const [active, setActive] = useState('slides');

  const tabs = [
    { id: 'slides',    label: '🖥 Slides'            },
    { id: 'learnings', label: '📖 Key Learnings'     },
    { id: 'check',     label: '✅ Knowledge Check'   },
    ...(bugsContent ? [{ id: 'bugs', label: '🐛 Bughunter' }] : []),
    { id: 'lab',       label: '💻 Lab'               },
    { id: 'uebung',    label: '✏️ Übung'              },
  ];

  const panels = {
    slides:    slidesContent,
    learnings: learningsContent,
    check:     checkContent,
    lab:       labContent,
    uebung:    uebungContent,
    bugs:      bugsContent,
  };

  return (
    <div className="chapter-tabs">
      <nav className="tabs-nav" role="tablist">
        {tabs.map(t => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            className={`tab-btn${active === t.id ? ' active' : ''}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className="tabs-content">
        <div className="tab-panel">
          {panels[active]}
        </div>
      </div>
    </div>
  );
}
