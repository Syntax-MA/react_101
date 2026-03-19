import { useState, useRef } from 'react';
import './DragDropExercise.css';

/**
 * DragDropExercise – Drag-&-Drop Zuordnungsübung
 *
 * Props:
 *   data – { title, instruction, items[{id,label}], targets[{id,label}] }
 *           aus exerciseData.js
 */
export default function DragDropExercise({ data }) {
  const { title, instruction, items, targets } = data;

  // placed: { targetId: { id, label } | null }
  const [placed, setPlaced]     = useState({});
  const [checked, setChecked]   = useState(false);
  const [result, setResult]     = useState(null);
  const dragging                = useRef(null);

  // Welche Items sind noch in der Quelle?
  const usedIds = new Set(Object.values(placed).filter(Boolean).map(v => v.id));

  function handleDragStart(item) {
    dragging.current = item;
  }

  function handleDrop(targetId) {
    if (!dragging.current) return;
    // Snapshot vor setState ziehen, damit der Callback nicht auf null trifft
    const item = dragging.current;
    dragging.current = null;
    setPlaced(prev => {
      const next = { ...prev };
      // Entferne das gezogene Item aus einem evtl. anderen Slot
      Object.keys(next).forEach(k => {
        if (next[k]?.id === item.id) next[k] = null;
      });
      next[targetId] = item;
      return next;
    });
    setChecked(false);
    setResult(null);
  }

  function removePlaced(targetId) {
    setPlaced(prev => ({ ...prev, [targetId]: null }));
    setChecked(false);
    setResult(null);
  }

  function handleCheck() {
    let correct = 0;
    targets.forEach(t => {
      if (placed[t.id]?.id === t.id) correct++;
    });
    setChecked(true);
    const total = targets.length;
    setResult(correct === total
      ? { ok: true,  msg: `🎉 Perfekt! Alle ${total} Zuordnungen stimmen!` }
      : { ok: false, msg: `${correct} von ${total} richtig. Rote Felder korrigieren und erneut prüfen.` }
    );
  }

  function handleReset() {
    setPlaced({});
    setChecked(false);
    setResult(null);
  }

  return (
    <div className="dde">
      <div className="dde__header">
        <h2 className="dde__heading">🧩 Übung – {title}</h2>
        <p className="dde__sub">{instruction}</p>
      </div>

      <div className="dde__grid">
        {/* Quell-Begriffe */}
        <div className="dde__source">
          <h4 className="dde__col-title">Begriffe</h4>
          {items.map(item => (
            <div
              key={item.id}
              className={`dde__chip ${usedIds.has(item.id) ? 'dde__chip--used' : ''}`}
              draggable={!usedIds.has(item.id)}
              onDragStart={() => handleDragStart(item)}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Ziel-Slots */}
        <div className="dde__targets">
          <h4 className="dde__col-title">Beschreibungen</h4>
          {targets.map(target => {
            const p = placed[target.id];
            let zoneCls = 'dde__zone';
            if (checked && p) {
              zoneCls += p.id === target.id ? ' dde__zone--correct' : ' dde__zone--wrong';
            }
            return (
              <div
                key={target.id}
                className={zoneCls}
                onDragOver={e => e.preventDefault()}
                onDrop={() => handleDrop(target.id)}
              >
                <span className="dde__zone-label">{target.label}</span>
                {p && (
                  <span
                    className="dde__placed"
                    onClick={() => removePlaced(target.id)}
                    title="Klicken zum Entfernen"
                  >
                    {p.label} ✕
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="dde__actions">
        <button className="dde__check" onClick={handleCheck}>✓ Prüfen</button>
        <button className="dde__reset" onClick={handleReset}>↺ Zurücksetzen</button>
      </div>

      {result && (
        <div className={`dde__result ${result.ok ? 'dde__result--ok' : 'dde__result--partial'}`}>
          {result.msg}
        </div>
      )}
    </div>
  );
}
