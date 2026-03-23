# Übung – 25.2 React Hooks

## Aufgabe: Performance-Optimierung mit Hooks

In dieser Übung lernst du die erweiterten Hooks `useCallback`, `useMemo` und `useRef` kennen und schreibst deinen ersten Custom Hook.

## Teil 1: useCallback – stabile Funktionen

Erstelle eine `TodoList`-Komponente mit einem State-Array `todos` und einer `addTodo`-Funktion. Ohne `useCallback` wird bei jedem Re-Render eine neue Funktionsreferenz erstellt.

Wrape die `addTodo`-Funktion mit `useCallback` und gib das leere Dependency-Array `[]` an, wenn die Funktion keine äußeren Variablen benötigt. Öffne die React DevTools und beobachte, wie Child-Komponenten seltener neu gerendert werden.

## Teil 2: useMemo – berechnete Werte cachen

Füge der `TodoList` eine gefilterte Ansicht hinzu. Die Filterfunktion soll nur erneut berechnet werden, wenn sich `todos` oder `filter` ändert:

```js
const filteredTodos = useMemo(
  () => todos.filter(t => t.text.includes(filter)),
  [todos, filter]
);
```

Teste mit einer großen Liste (100+ Einträge per Array.from), dass das Filtern spürbar schneller ist als ohne `useMemo`.

## Teil 3: useRef – DOM-Zugriff ohne Re-Render

Erstelle eine `FocusInput`-Komponente mit einem Texteingabefeld und einem Button. Beim Klick auf den Button soll der Fokus automatisch in das Eingabefeld springen, ohne dass ein Re-Render ausgelöst wird:

```js
const inputRef = useRef(null);
// Im Button-Handler:
inputRef.current.focus();
```

Verwende `useRef` außerdem als Instanzvariable: Speichere die Anzahl der Renders in einer `renderCount`-Ref und gib sie in der Konsole aus. Beachte, dass dies keinen Re-Render auslöst!

## Teil 4: Custom Hook schreiben

Schreibe einen Custom Hook `useLocalStorage(key, initialValue)`, der einen Wert im `localStorage` speichert und synchronisiert. Der Hook soll:
- Den Wert aus `localStorage` lesen (oder `initialValue` verwenden)
- Eine `setValue`-Funktion zurückgeben, die sowohl State als auch `localStorage` aktualisiert
- Das übliche `[value, setValue]`-Tupel zurückgeben

Teste den Hook in einer `ThemeToggle`-Komponente: Nach einem Seiten-Reload soll die Theme-Einstellung erhalten bleiben.

## Abgabe

Demonstriere alle vier Teile und erkläre jeweils, warum du welchen Hook gewählt hast.
