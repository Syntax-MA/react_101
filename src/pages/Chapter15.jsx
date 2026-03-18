import Card           from '../components/ui/Card';
import TaskBox        from '../components/ui/TaskBox';
import PageNav        from '../components/ui/PageNav';
import ChapterTabs    from '../components/ui/ChapterTabs';
import Concept        from '../components/ui/Concept';
import MarkdownViewer from '../components/ui/MarkdownViewer';
import FillExercise    from '../components/interactive/FillExercise';
import DragDropExercise from '../components/interactive/DragDropExercise';
import CodeLab        from '../components/interactive/CodeLab';
import Quiz           from '../components/interactive/Quiz';
import { quizData }    from '../data/quizData';
import { labChapter15 } from '../data/labData';
import { fillChapter15, dragDropChapter15 } from '../data/exerciseData';
import ch15Md from '../data/md/uebung-ch15.md?raw';

export default function Chapter15({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">22.5</span>
        <h1>Portfolio-Projekt ✨</h1>
        <p>Alles zusammenbringen: HTML, CSS, Flexbox, Grid &amp; Responsive Design</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <div className="check-empty">
            <p className="check-note">
              📄 Keine separaten Folien für das Portfolio-Projekt.
              Die vollständige Aufgabenstellung findest du im Tab <strong>Übung</strong>.
            </p>
          </div>
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <blockquote>
            „Ein Portfolio ist dein erster Beweis – bau es mit allem, was du gelernt hast."
            <cite>— Tag 5, Portfolio-Projekt</cite>
          </blockquote>

          <h3 className="section-title">🎯 Was du in Woche 22 gelernt hast</h3>
          <div className="grid-2">
            <Card icon="🌐" title="22.1 – Webarchitektur & HTTP">
              Client-Server-Kommunikation, HTTP-Methoden &amp; Status-Codes, URLs &amp; DNS,
              DevTools Network-Tab, REST APIs.
            </Card>
            <Card icon="📄" title="22.2 – HTML Struktur">
              HTML5-Grundgerüst, semantische Elemente, Links &amp; Pfade,
              Formulare mit Validierung, Request Cascade.
            </Card>
            <Card icon="🎨" title="22.3 – CSS Grundlagen">
              Selektoren, Box-Modell, Spezifität, Pseudo-Klassen, Farben &amp; Schriften,
              DevTools Styles-Tab.
            </Card>
            <Card icon="📱" title="22.4 – Layout & Responsive">
              Flexbox, CSS Grid, Media Queries, Mobile-First,
              DevTools Responsive Mode &amp; Overlays.
            </Card>
          </div>

          <hr className="div" />
          <h3 className="section-title">✅ Bewertungskriterien</h3>
          <div className="grid-2">
            <Concept color="green" title="HTML (40 Punkte)">
              Valides HTML5 · semantische Elemente · Formular mit Validierung ·
              korrekte Links und Pfade
            </Concept>
            <Concept color="green" title="CSS (40 Punkte)">
              Externes Stylesheet · Flexbox/Grid · :hover-Effekte ·
              Box-Modell korrekt angewendet
            </Concept>
            <Concept color="yellow" title="Qualität (20 Punkte)">
              Funktionsfähig im Browser · lesbarer Code · README vorhanden
            </Concept>
            <Concept color="purple" title="Bonus (+10 Punkte)">
              Responsive Design · Animationen · Kreativität &amp; Eigeninitiative
            </Concept>
          </div>

          <hr className="div" />
          <h3 className="section-title">🚀 Zwei Wege</h3>
          <div className="grid-2">
            <Card icon="🆓" title="Weg A – Freie Wahl">
              Erstelle eine Website zu einem Thema deiner Wahl:
              Portfolio, Fan-Seite, Produktseite oder Unternehmens-Mock.
              Alle Kriterien müssen trotzdem erfüllt sein.
            </Card>
            <Card icon="📋" title="Weg B – Geführtes Portfolio">
              Folge den Schritten in der Aufgabenstellung (Tab Übung).
              Header + Nav, drei Sektionen, Kontaktformular, CSS-Styling, Responsive.
            </Card>
          </div>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter15} />
          <DragDropExercise data={dragDropChapter15} />
          <Quiz questions={quizData.chapter15} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter15} />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="Portfolio-Projekt bauen" time="90–120 Min">
            <ol>
              <li>Wähle <strong>Weg A</strong> (freies Thema) oder <strong>Weg B</strong> (geführtes Portfolio)</li>
              <li>Erstelle die Projektstruktur: <code>portfolio/index.html</code> und <code>portfolio/style.css</code></li>
              <li>Baue das HTML-Gerüst mit allen semantischen Elementen</li>
              <li>Style die Seite mit CSS: Navigation (Flexbox), Inhaltsbereich, Karten (Grid)</li>
              <li>Füge mindestens 2 Media Queries für Responsive Design hinzu</li>
              <li>Schreibe eine kurze <code>README.md</code>: Was hast du gebaut? Was hast du gelernt?</li>
              <li>Mache einen Screenshot und stelle das Projekt vor</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch15Md} />
        </>}
      />

      <PageNav
        prevLabel="← CSS Layout & Responsive"
        nextLabel="Weiter: JavaScript Fundamentals →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
