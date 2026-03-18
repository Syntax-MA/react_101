import DragDropExercise from '../components/interactive/DragDropExercise';
import FillExercise    from '../components/interactive/FillExercise';
import Quiz            from '../components/interactive/Quiz';
import TaskBox        from '../components/ui/TaskBox';
import PageNav        from '../components/ui/PageNav';
import ChapterTabs    from '../components/ui/ChapterTabs';
import MarkdownViewer from '../components/ui/MarkdownViewer';
import { quizData }    from '../data/quizData';
import { fillChapter10, dragDropChapter10 } from '../data/exerciseData';
import ch10Md from '../data/md/uebung-ch10.md?raw';

export default function Chapter10({ onPrev, onFinish }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">24.5</span>
        <h1>React Mini-App</h1>
        <p>Optionales Abschluss-Assignment – Woche 3: React Grundlagen</p>
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
              🗓 Dies ist das <strong>optionale Wochenabschluss-Assignment</strong> für Woche 3.<br />
              Es bündelt alle React-Themen der Woche: Setup, JSX, Komponenten, Props, useState, Listen &amp; Keys.<br />
              Schau in die <strong>Übung</strong>, um das vollständige Assignment zu finden.
            </p>
          </div>
        }

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter10} />
          <DragDropExercise data={dragDropChapter10} />
          <Quiz questions={quizData.chapter10} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <div className="check-empty">
            <p className="check-note">📋 Kein Code-Lab für dieses Bonus-Kapitel.</p>
          </div>
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="React Mini-App (freiwillig)" time="Flex">
            <ol>
              <li>Lies die vollständige Aufgabenstellung unten durch.</li>
              <li>Wähle einen der vorgeschlagenen App-Ideen oder eine eigene.</li>
              <li>Erstelle dein Vite-React-Projekt und entwickle deine Komponenten.</li>
              <li>Optionale Abgabe: bis Montag 23:59 Uhr als ZIP (ohne node_modules) hochladen.</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch10Md} />
        </>}
      />

      <PageNav
        prevLabel="← 24.4 Rendering & Listen"
        nextLabel="🎉 Kurs abschließen"
        onPrev={onPrev}
        onNext={onFinish}
      />
    </div>
  );
}
