import { useState, useEffect } from 'react';
import './KanbanBoard.css';

/**
 * KanbanBoard – Sprint-Board für Freitagskapitel
 *
 * Props:
 *   data – { title, project, description, items[] } aus kanbanData.js
 *          item: { id, col, label, title, criteria[] }
 *
 * Persistenz: localStorage unter key "kanban_<boardId>"
 */

const COLUMNS = [
  { id: 'todo',       label: '📋 Zu tun',          color: 'col--todo'       },
  { id: 'inprogress', label: '🔄 In Bearbeitung',   color: 'col--inprogress' },
  { id: 'done',       label: '✅ Erledigt',          color: 'col--done'       },
];

function storageKey(boardId) {
  return `kanban_${boardId}`;
}

function loadFromStorage(boardId, items) {
  try {
    const saved = localStorage.getItem(storageKey(boardId));
    if (!saved) return items;
    const colMap = JSON.parse(saved);   // { id → col }
    return items.map(item => ({
      ...item,
      col: colMap[item.id] ?? item.col,
    }));
  } catch {
    return items;
  }
}

function saveToStorage(boardId, items) {
  try {
    const colMap = {};
    items.forEach(item => { colMap[item.id] = item.col; });
    localStorage.setItem(storageKey(boardId), JSON.stringify(colMap));
  } catch { /* ignore */ }
}

export default function KanbanBoard({ data }) {
  const { title, project, description, items: initialItems } = data;
  // stable board id from title
  const boardId = title.replace(/\W+/g, '_');

  const [items, setItems] = useState(() =>
    loadFromStorage(boardId, initialItems)
  );
  const [expanded, setExpanded] = useState({});   // { id → bool }
  const [dragId, setDragId]     = useState(null);

  // Persist on every change
  useEffect(() => {
    saveToStorage(boardId, items);
  }, [boardId, items]);

  // Reset when data prop changes (different chapter)
  useEffect(() => {
    setItems(loadFromStorage(boardId, initialItems));
    setExpanded({});
  }, [boardId]);  // eslint-disable-line react-hooks/exhaustive-deps

  /* ── helpers ── */
  function moveItem(id, targetCol) {
    setItems(prev =>
      prev.map(item => item.id === id ? { ...item, col: targetCol } : item)
    );
  }

  function resetBoard() {
    setItems(initialItems.map(i => ({ ...i, col: 'todo' })));
    localStorage.removeItem(storageKey(boardId));
  }

  function toggleExpand(id) {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  }

  /* ── drag handlers ── */
  function onDragStart(e, id) {
    setDragId(id);
    e.dataTransfer.effectAllowed = 'move';
  }

  function onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function onDrop(e, targetCol) {
    e.preventDefault();
    if (dragId) moveItem(dragId, targetCol);
    setDragId(null);
  }

  /* ── stats ── */
  const total = items.length;
  const done  = items.filter(i => i.col === 'done').length;
  const pct   = total > 0 ? Math.round((done / total) * 100) : 0;

  /* ── render ── */
  return (
    <div className="kanban">
      {/* Header */}
      <div className="kanban__header">
        <div className="kanban__header-left">
          <span className="kanban__badge">🗂 Sprint Board</span>
          <div>
            <h2 className="kanban__title">{title}</h2>
            <p className="kanban__project">{project}</p>
          </div>
        </div>
        <button className="kanban__reset" onClick={resetBoard} title="Board zurücksetzen">
          ↺ Reset
        </button>
      </div>

      {/* Description */}
      <div className="kanban__desc">
        <p>{description}</p>
      </div>

      {/* Progress bar */}
      <div className="kanban__progress-wrap">
        <div className="kanban__progress-bar">
          <div className="kanban__progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="kanban__progress-label">{done} / {total} erledigt</span>
      </div>

      {/* Columns */}
      <div className="kanban__board">
        {COLUMNS.map(col => {
          const colItems = items.filter(i => i.col === col.id);
          return (
            <div
              key={col.id}
              className={`kanban__col ${col.color}${dragId ? ' kanban__col--droptarget' : ''}`}
              onDragOver={onDragOver}
              onDrop={e => onDrop(e, col.id)}
            >
              <div className="kanban__col-header">
                <span className="kanban__col-label">{col.label}</span>
                <span className="kanban__col-count">{colItems.length}</span>
              </div>

              <div className="kanban__cards">
                {colItems.map(item => (
                  <KanbanCard
                    key={item.id}
                    item={item}
                    columns={COLUMNS}
                    expanded={!!expanded[item.id]}
                    onToggleExpand={() => toggleExpand(item.id)}
                    onMove={moveItem}
                    onDragStart={onDragStart}
                  />
                ))}

                {colItems.length === 0 && (
                  <div className="kanban__empty">
                    {col.id === 'todo' ? 'Alle Aufgaben bearbeitet 🎉' : 'Noch keine Karten hier'}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   KanbanCard – einzelne Aufgaben-Karte
══════════════════════════════════════════════ */
function KanbanCard({ item, columns, expanded, onToggleExpand, onMove, onDragStart }) {
  const currentIdx = columns.findIndex(c => c.id === item.col);
  const prevCol = currentIdx > 0                    ? columns[currentIdx - 1] : null;
  const nextCol = currentIdx < columns.length - 1   ? columns[currentIdx + 1] : null;

  return (
    <div
      className={`kanban__card${item.col === 'done' ? ' kanban__card--done' : ''}`}
      draggable
      onDragStart={e => onDragStart(e, item.id)}
    >
      {/* Card header */}
      <div className="kanban__card-top">
        <span className="kanban__card-label">{item.label}</span>
        <button
          className="kanban__card-expand"
          onClick={onToggleExpand}
          title={expanded ? 'Kriterien ausblenden' : 'Kriterien anzeigen'}
        >
          {expanded ? '▲' : '▼'}
        </button>
      </div>

      <p className="kanban__card-title">{item.title}</p>

      {/* Acceptance criteria */}
      {expanded && (
        <ul className="kanban__criteria">
          {item.criteria.map((c, i) => (
            <li key={i} className="kanban__criterion">
              <span className="kanban__criterion-icon">□</span>
              {c}
            </li>
          ))}
        </ul>
      )}

      {/* Move buttons */}
      <div className="kanban__card-actions">
        {prevCol && (
          <button
            className="kanban__move-btn kanban__move-btn--back"
            onClick={() => onMove(item.id, prevCol.id)}
            title={`Zurück: ${prevCol.label}`}
          >
            ← {prevCol.id === 'todo' ? 'Zu tun' : prevCol.id === 'inprogress' ? 'In Bearbeitung' : 'Erledigt'}
          </button>
        )}
        {nextCol && (
          <button
            className="kanban__move-btn kanban__move-btn--forward"
            onClick={() => onMove(item.id, nextCol.id)}
            title={`Weiter: ${nextCol.label}`}
          >
            {nextCol.id === 'inprogress' ? 'In Bearbeitung' : 'Erledigt'} →
          </button>
        )}
      </div>
    </div>
  );
}
