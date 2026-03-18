/**
 * Quiz-Daten für alle Kapitel
 * Jedes Quiz hat 3 Fragen mit je 4 Antwortmöglichkeiten.
 *
 * Felder:
 *   question  – Fragetext
 *   choices   – Array von { id, text }
 *   correct   – id der richtigen Antwort
 *   feedback  – { ok, nok } Erklärungstexte (HTML-String erlaubt)
 */

export const quizData = {
  // ── 24.2 Komponenten & Props ──────────────────────────────
  chapter2: [
    {
      question: 'Wie heißt die spezielle Prop, über die eine Komponente eingebettete Kinderkomponenten erhält?',
      choices: [
        { id: 'a', text: 'content' },
        { id: 'b', text: 'slot' },
        { id: 'c', text: 'children' },
        { id: 'd', text: 'inner' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <strong>children</strong> ist die spezielle Prop für eingebettete Kinderkomponenten.',
        nok: 'Falsch. Die richtige Antwort ist <strong>children</strong>.',
      },
    },
    {
      question: 'Welches Keyword exportiert eine Komponente so, dass der Importname frei gewählt werden kann?',
      choices: [
        { id: 'a', text: 'export named' },
        { id: 'b', text: 'export default' },
        { id: 'c', text: 'module.exports' },
        { id: 'd', text: 'export const' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>export default</strong> erlaubt einen frei wählbaren Importnamen.',
        nok: 'Falsch. Die richtige Antwort ist <strong>export default</strong>.',
      },
    },
    {
      question: 'Was ist ein Fragment (<>...</>) in React?',
      choices: [
        { id: 'a', text: 'Ein CSS-Klassen-Selektor für React-Komponenten' },
        { id: 'b', text: 'Ein JSX-Container, der kein echtes DOM-Element erzeugt' },
        { id: 'c', text: 'Eine spezielle Methode zum Laden von Daten' },
        { id: 'd', text: 'Ein unsichtbares <div>-Element' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! Ein Fragment erzeugt im DOM kein echtes Element – nur seine Kinder werden gerendert.',
        nok: 'Falsch. Ein Fragment (<>…</>) erzeugt <strong>kein</strong> echtes DOM-Element.',
      },
    },
  ],

  // ── 24.3 useState & Controlled Inputs ────────────────────
  chapter3: [
    {
      question: 'Wie importiert man useState in einer React-Datei?',
      choices: [
        { id: 'a', text: "import useState from 'react'" },
        { id: 'b', text: "import { useState } from 'react'" },
        { id: 'c', text: "require('react').useState" },
        { id: 'd', text: "import useState from 'react-hooks'" },
      ],
      correct: 'b',
      feedback: {
        ok: "Richtig! <strong>import { useState } from 'react'</strong> – mit geschweiften Klammern, da useState kein Default-Export ist.",
        nok: "Falsch. Korrekt: <strong>import { useState } from 'react'</strong> (mit {}).",
      },
    },
    {
      question: 'Was verhindert das Neuladen der Seite beim Absenden eines Formulars?',
      choices: [
        { id: 'a', text: 'e.stopPropagation()' },
        { id: 'b', text: 'return false' },
        { id: 'c', text: 'e.preventDefault()' },
        { id: 'd', text: 'e.cancelDefault()' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <strong>e.preventDefault()</strong> verhindert das Standard-Verhalten des Browsers beim Absenden.',
        nok: 'Falsch. Die korrekte Methode ist <strong>e.preventDefault()</strong>.',
      },
    },
    {
      question: 'Was ist ein „Controlled Input" in React?',
      choices: [
        { id: 'a', text: 'Ein Input mit einem festen, unveränderlichen Wert' },
        { id: 'b', text: 'Ein Input, dessen Wert durch React-State gesteuert und über onChange synchronisiert wird' },
        { id: 'c', text: 'Ein Input mit eingebautem Validierungssystem' },
        { id: 'd', text: 'Ein Input, der nur gelesen, aber nicht verändert werden kann' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! Ein Controlled Input verknüpft den Eingabewert mit einem React-State und hält ihn über onChange synchron.',
        nok: 'Falsch. Ein Controlled Input hat seinen Wert an einen State gebunden und verwendet onChange.',
      },
    },
  ],

  // ── 24.4 Rendering, Listen & Keys ────────────────────────
  chapter4: [
    {
      question: 'Warum benötigen Listenelemente in React ein key-Attribut?',
      choices: [
        { id: 'a', text: 'Damit das Element in CSS angesprochen werden kann' },
        { id: 'b', text: 'Damit React Elemente beim Neu-Rendern auseinanderhalten und optimal aktualisieren kann' },
        { id: 'c', text: 'Damit der Browser die Elemente sortieren kann' },
        { id: 'd', text: 'Damit Props weitergegeben werden können' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! Der key hilft React beim effizienten Vergleich und Aktualisieren von Listenelementen (Reconciliation).',
        nok: 'Falsch. Keys helfen React, Elemente beim Neu-Rendern auseinanderzuhalten.',
      },
    },
    {
      question: 'Welcher dieser Werte wird von JSX NICHT gerendert (also unsichtbar im DOM)?',
      choices: [
        { id: 'a', text: '0 (die Zahl Null)' },
        { id: 'b', text: '"Hallo" (ein String)' },
        { id: 'c', text: 'null' },
        { id: 'd', text: '42 (eine Zahl)' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <strong>null</strong> (wie auch false und undefined) wird nicht gerendert. Achtung: Die Zahl 0 wird tatsächlich angezeigt!',
        nok: 'Falsch. <strong>null</strong> wird nicht gerendert. Achtung: Die Zahl 0 hingegen wird angezeigt!',
      },
    },
    {
      question: 'Was macht der Ausdruck {isLoggedIn && <Welcome />}?',
      choices: [
        { id: 'a', text: 'Zeigt immer <Welcome /> an' },
        { id: 'b', text: 'Rendert <Welcome /> nur wenn isLoggedIn truthy ist, sonst nichts' },
        { id: 'c', text: 'Gibt einen Fehler, wenn isLoggedIn false ist' },
        { id: 'd', text: 'Zeigt <Welcome /> wenn isLoggedIn false ist' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>&&</strong> rendert die rechte Seite nur wenn die linke Bedingung truthy ist.',
        nok: 'Falsch. {isLoggedIn && <Welcome />} rendert <Welcome /> <strong>nur wenn</strong> isLoggedIn truthy ist.',
      },
    },
  ],
};
