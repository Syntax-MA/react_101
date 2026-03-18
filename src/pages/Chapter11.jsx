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
import { labChapter11 } from '../data/labData';
import { quizData }     from '../data/quizData';
import { fillChapter11, dragDropChapter11 } from '../data/exerciseData';
import ch11Md from '../data/md/uebung-ch11.md?raw';

export default function Chapter11({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">22.1</span>
        <h1>Webarchitektur &amp; HTTP</h1>
        <p>Wie das Web funktioniert: Client-Server, HTTP-Methoden, Status-Codes &amp; URLs</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={11} total={20} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <blockquote>
            „Das Web ist kein Hexenwerk – es ist ein Protokoll: Client fragt, Server antwortet."
            <cite>— Tag 1, Webarchitektur &amp; HTTP</cite>
          </blockquote>

          <h3 className="section-title">🌐 Internet vs. World Wide Web</h3>
          <div className="grid-2">
            <Card icon="🔌" title="Internet">
              Die globale <strong>Infrastruktur</strong> aus Kabeln, Routern und Servern.
              Transportiert Daten zwischen Geräten weltweit.
            </Card>
            <Card icon="🕸️" title="World Wide Web">
              Ein <strong>Dienst</strong>, der über das Internet läuft.
              Webseiten, die über HTTP(S) abgerufen werden – einer von vielen Diensten.
            </Card>
          </div>

          <hr className="div" />
          <h3 className="section-title">🔄 Client-Server-Kommunikation</h3>
          <p>Jede Web-Interaktion folgt dem Request-Response-Zyklus:</p>
          <div className="grid-3">
            <Card icon="1️⃣" title="Request">
              Browser (Client) sendet eine <strong>HTTP-Anfrage</strong> an den Server
              (z. B. GET /index.html).
            </Card>
            <Card icon="2️⃣" title="Verarbeitung">
              Server verarbeitet die Anfrage und sucht die passende Ressource.
            </Card>
            <Card icon="3️⃣" title="Response">
              Server antwortet mit einem <strong>Status-Code</strong> und dem Inhalt
              (HTML, JSON, Bild …).
            </Card>
          </div>

          <hr className="div" />
          <h3 className="section-title">📡 HTTP-Methoden</h3>
          <CodeBlock filename="HTTP-Methoden.txt" lang="text">
            {'GET    → Daten abrufen          (sicher, idempotent)\n'}
            {'POST   → Neue Daten erstellen   (nicht idempotent)\n'}
            {'PUT    → Daten ersetzen         (idempotent)\n'}
            {'PATCH  → Daten teilweise ändern (idempotent)\n'}
            {'DELETE → Daten löschen          (idempotent)'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">🔢 HTTP Status-Codes</h3>
          <div className="grid-3">
            <Concept color="green" title="2xx – Erfolg">
              <strong>200</strong> OK · <strong>201</strong> Created · <strong>204</strong> No Content
            </Concept>
            <Concept color="yellow" title="3xx – Weiterleitung">
              <strong>301</strong> Moved Permanently · <strong>302</strong> Found
            </Concept>
            <Concept color="orange" title="4xx – Client-Fehler">
              <strong>400</strong> Bad Request · <strong>401</strong> Unauthorized ·
              <strong>403</strong> Forbidden · <strong>404</strong> Not Found
            </Concept>
          </div>
          <Concept color="purple" title="5xx – Server-Fehler">
            <strong>500</strong> Internal Server Error · <strong>502</strong> Bad Gateway ·
            <strong>503</strong> Service Unavailable
          </Concept>

          <hr className="div" />
          <h3 className="section-title">🔗 URL-Anatomie</h3>
          <CodeBlock filename="URL-Aufbau.txt" lang="text">
            {'https://api.example.com:443/users/42?sort=name&page=2#results\n'}
            {'│       │               │   │        │                 │\n'}
            {'Protokoll Domain        Port Pfad    Query-Parameter  Fragment'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">🌍 DNS – Wie Domains zu IPs werden</h3>
          <p>
            Das <strong>Domain Name System (DNS)</strong> übersetzt menschenlesbare Domain-Namen
            wie <code>github.com</code> in IP-Adressen wie <code>140.82.121.4</code>.
            Jeder Eintrag hat eine <strong>TTL (Time to Live)</strong> – nach Ablauf wird der
            Eintrag frisch abgefragt.
          </p>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter11} />
          <DragDropExercise data={dragDropChapter11} />
          <Quiz questions={quizData.chapter11} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter11} />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="HTTP &amp; DevTools erkunden" time="30 Min">
            <ol>
              <li>Öffne eine beliebige Website und starte die <strong>Browser-DevTools</strong> (<code>F12</code>)</li>
              <li>Gehe zum <strong>Network-Tab</strong> und lade die Seite neu</li>
              <li>Klicke auf den ersten Request und notiere: Methode, Status-Code, Antwortzeit</li>
              <li>Suche einen <code>404</code>-Fehler oder tippe absichtlich eine falsche URL ein</li>
              <li>Rufe <code>https://jsonplaceholder.typicode.com/posts/1</code> auf und analysiere die JSON-Antwort</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch11Md} />
        </>}
      />

      <PageNav
        nextLabel="Weiter: HTML Struktur & Formulare →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
