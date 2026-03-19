import Card           from '../components/ui/Card';
import TaskBox        from '../components/ui/TaskBox';
import PageNav        from '../components/ui/PageNav';
import ChapterTabs    from '../components/ui/ChapterTabs';
import CodeBlock      from '../components/ui/CodeBlock';
import Concept        from '../components/ui/Concept';
import MarkdownViewer from '../components/ui/MarkdownViewer';
import SlideCarousel  from '../components/ui/SlideCarousel';
import FillExercise    from '../components/interactive/FillExercise';
import DragDropExercise from '../components/interactive/DragDropExercise';
import CodeLab        from '../components/interactive/CodeLab';
import Quiz           from '../components/interactive/Quiz';
import { labChapter13 } from '../data/labData';
import { quizData }     from '../data/quizData';
import { fillChapter13, dragDropChapter13 } from '../data/exerciseData';
import ch13Md from '../data/md/uebung-ch13.md?raw';

export default function Chapter13({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">22.3</span>
        <h1>CSS Grundlagen: Styling, Selektoren &amp; Debugging</h1>
        <p>CSS einbinden, Selektoren, Box-Modell, Spezifität &amp; DevTools-Debugging</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={13} total={17} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <blockquote>
            „CSS ist das Outfit des Webs – HTML gibt die Struktur, CSS gibt den Style."
            <cite>— Tag 3, CSS Grundlagen</cite>
          </blockquote>

          <h3 className="section-title">🎨 CSS-Syntax</h3>
          <CodeBlock filename="style.css" lang="css">
            {'/* Selektor     Eigenschaft  Wert */\n'}
            {'h1           { color:        #333; }\n'}
            {'.card        { padding:      1rem; }\n'}
            {'#header      { background:  navy; }\n'}
            {'nav a        { color:        white; }  /* Nachfahren */\n'}
            {'ul > li      { font-weight:  bold; }   /* Direktkind */'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">🎯 Selektoren-Typen</h3>
          <div className="grid-3">
            <Card icon="🔤" title="Element">
              <code>p {'{ color: red; }'}</code><br/>
              Trifft alle <code>&lt;p&gt;</code>-Elemente.
            </Card>
            <Card icon="." title="Klasse">
              <code>.card {'{ padding: 1rem; }'}</code><br/>
              Wiederverwendbar. Bevorzugt gegenüber IDs.
            </Card>
            <Card icon="#" title="ID">
              <code>#header {'{ background: blue; }'}</code><br/>
              Nur einmal pro Seite. Höchste Spezifität.
            </Card>
          </div>

          <CodeBlock filename="pseudo-klassen.css" lang="css">
            {'a:hover      { text-decoration: underline; }  /* Maus drüber */\n'}
            {'input:focus  { outline: 2px solid blue; }     /* Eingabe aktiv */\n'}
            {'button:active{ transform: scale(0.98); }      /* Klick */\n'}
            {'li:first-child{ font-weight: bold; }          /* Erstes Kind */\n'}
            {'input:disabled{ opacity: 0.5; }               /* Deaktiviert */'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">📦 Das Box-Modell</h3>
          <p>Jedes HTML-Element ist eine Box mit vier Schichten:</p>
          <div className="grid-2">
            <Concept color="green" title="content">
              Der eigentliche Inhalt (Text, Bild). Breite/Höhe beziehen sich hierauf.
            </Concept>
            <Concept color="green" title="padding">
              Innenabstand zwischen Content und Border.
              Hintergrundfarbe gilt auch hier.
            </Concept>
            <Concept color="yellow" title="border">
              Rahmen um das Element.
              <code>border: 2px solid #333;</code>
            </Concept>
            <Concept color="orange" title="margin">
              Außenabstand zu benachbarten Elementen.
              Kollabiert vertikal bei Block-Elementen.
            </Concept>
          </div>
          <CodeBlock filename="box-model.css" lang="css">
            {'.box {\n'}
            {'  width: 200px;\n'}
            {'  padding: 16px;\n'}
            {'  border: 2px solid #333;\n'}
            {'  margin: 24px auto;\n\n'}
            {'  /* Padding und Border werden IN die Breite eingerechnet */\n'}
            {'  box-sizing: border-box;\n'}
            {'}'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">⚖️ Spezifität (Cascade)</h3>
          <CodeBlock filename="spezifitaet.css" lang="css">
            {'/* Spezifität:  (ID, Klasse, Element) */\n'}
            {'p           { color: black; }  /* (0, 0, 1) */\n'}
            {'.text       { color: blue;  }  /* (0, 1, 0) */\n'}
            {'#intro      { color: red;   }  /* (1, 0, 0) → gewinnt! */\n\n'}
            {'/* Empfehlung: Klassen bevorzugen, IDs und !important vermeiden */'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">🔍 DevTools – CSS debuggen</h3>
          <div className="grid-3">
            <Card icon="🖱️" title="Elements-Tab">
              Element im DOM anklicken, Stile live bearbeiten.
            </Card>
            <Card icon="📋" title="Styles-Tab">
              Alle CSS-Regeln sehen. Durchgestrichene = überschrieben.
            </Card>
            <Card icon="🧮" title="Computed-Tab">
              Endgültig berechnete Werte aller Eigenschaften.
            </Card>
          </div>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter13} />
          <DragDropExercise data={dragDropChapter13} />
          <Quiz questions={quizData.chapter13} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter13} labId="labChapter13" />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="HTML-Seite mit CSS stylen" time="40 Min">
            <ol>
              <li>Erstelle eine externe <code>style.css</code> und verlinke sie in deiner HTML-Seite</li>
              <li>Style <code>body</code>: Schriftart, Hintergrundfarbe, Standardabstände</li>
              <li>Erstelle eine <code>.card</code>-Klasse mit: weißem Hintergrund, Padding, abgerundeten Ecken und Box-Shadow</li>
              <li>Füge <code>:hover</code>-Effekte für Links und Buttons hinzu</li>
              <li>Öffne DevTools → Elements, klicke ein Element an und bearbeite Stile live</li>
              <li>Finde eine überschriebene (durchgestrichene) Regel im Styles-Tab</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch13Md} />
        </>}
      />

      <PageNav
        prevLabel="← HTML Struktur & Formulare"
        nextLabel="Weiter: CSS Layout & Responsive →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
