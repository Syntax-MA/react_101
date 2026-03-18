import DragDropExercise from '../components/interactive/DragDropExercise';
import FillExercise    from '../components/interactive/FillExercise';
import Quiz            from '../components/interactive/Quiz';
import TaskBox        from '../components/ui/TaskBox';
import PageNav        from '../components/ui/PageNav';
import ChapterTabs    from '../components/ui/ChapterTabs';
import MarkdownViewer from '../components/ui/MarkdownViewer';
import { quizData }    from '../data/quizData';
import { fillChapter9, dragDropChapter9 } from '../data/exerciseData';
import ch9Md from '../data/md/uebung-ch9.md?raw';

export default function Chapter9({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">23.5</span>
        <h1>JavaScript Mini-App</h1>
        <p>Optionales Abschluss-Assignment – Woche 2: Webentwicklung Grundlagen II</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <div className="check-empty">
            <p className="check-note">📋 Für dieses Kapitel gibt es keine Slide-Präsentation.</p>
          </div>
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={
          <div className="check-empty">
            <p className="check-note">
              🗓 Dies ist das <strong>optionale Wochenabschluss-Assignment</strong> für Woche 2.<br />
              Es bündelt alle Themen der Woche: JS Fundamentals, Arrays &amp; Objects, DOM, Events, Fetch &amp; Async/Await.<br />
              Schau in die <strong>Übung</strong>, um das vollständige Assignment zu finden.
            </p>
          </div>
        }

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter9} />
          <DragDropExercise data={dragDropChapter9} />
          <Quiz questions={quizData.chapter9} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <div className="check-empty">
            <p className="check-note">📋 Kein Code-Lab für dieses Bonus-Kapitel.</p>
          </div>
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="JavaScript Mini-App (freiwillig)" time="Flex">
            <ol>
              <li>Lies die vollständige Aufgabenstellung unten durch.</li>
              <li>Wähle einen der beiden Ansätze (geführt oder frei).</li>
              <li>Erstelle <code>index.html</code>, <code>style.css</code> und <code>app.js</code>.</li>
              <li>Optionale Abgabe: bis Montag 23:59 Uhr als ZIP hochladen.</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch9Md} />
        </>}
      />

      <PageNav
        prevLabel="← 23.4 Fetch & Async/Await"
        nextLabel="Weiter: React Setup & JSX →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
