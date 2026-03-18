import { useState } from 'react';
import './ChapterTabs.css';

/**
 * 5-tab chapter layout:
 *   Slides | Key Learnings | Knowledge Check | Lab | Übung
 *
 * Props:
 *   slidesContent   – SlideCarousel
 *   learningsContent – Concept boxes, CodeBlocks, Cards, TaskBoxes
 *   checkContent     – Quiz + interactive exercises
 *   labContent       – CodeLab
 *   uebungContent    – MarkdownViewer (markdown exercise file)
 */
export default function ChapterTabs({
  slidesContent,
  learningsContent,
  checkContent,
  labContent,
  uebungContent,
}) {
  const [active, setActive] = useState('slides');

  const tabs = [
    { id: 'slides',    label: '🖥 Slides'          },
    { id: 'learnings', label: '📖 Key Learnings'   },
    { id: 'check',     label: '✅ Knowledge Check' },
    { id: 'lab',       label: '💻 Lab'             },
    { id: 'uebung',    label: '✏️ Übung'            },
  ];

  const panels = {
    slides:    slidesContent,
    learnings: learningsContent,
    check:     checkContent,
    lab:       labContent,
    uebung:    uebungContent,
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
