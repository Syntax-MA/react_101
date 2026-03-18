import { useState } from 'react';
import './FillExercise.css';

/**
 * FillExercise – Lückentext-Übung
 *
 * Props:
 *   data – { title, instruction, lines[], wordBank[] } aus exerciseData.js
 *
 * Jedes Token in lines:
 *   { type: 'text'|'kw'|'fn'|'str'|'jsx'|'var'|'num'|'cmt'|'indent'|'blank',
 *     value, id?, answer? }
 */
export default function FillExercise({ data }) {
  const { title, instruction, lines, wordBank } = data;

  const [filled, setFilled]           = useState({});  // { blankId: word }
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedBlank, setSelectedBlank] = useState(null);
  const [checked, setChecked]         = useState(false);
  const [result, setResult]           = useState(null);

  // Alle Blank-Definitionen flach gesammelt
  const allBlanks = lines.flat().filter(t => t.type === 'blank');
  const usedWords = new Set(Object.values(filled));

  function handleWordClick(word) {
    if (usedWords.has(word)) return;
    if (selectedBlank !== null) {
      // Platzieren
      place(selectedBlank, word);
    } else {
      setSelectedWord(word === selectedWord ? null : word);
    }
  }

  function handleBlankClick(blankId) {
    // Lücke bereits gefüllt → leeren
    if (filled[blankId]) {
      setFilled(prev => { const n = { ...prev }; delete n[blankId]; return n; });
      setChecked(false); setResult(null);
      return;
    }
    if (selectedWord) {
      place(blankId, selectedWord);
    } else {
      setSelectedBlank(blankId === selectedBlank ? null : blankId);
    }
  }

  function place(blankId, word) {
    setFilled(prev => ({ ...prev, [blankId]: word }));
    setSelectedWord(null);
    setSelectedBlank(null);
    setChecked(false);
    setResult(null);
  }

  function handleCheck() {
    let correct = 0;
    allBlanks.forEach(b => {
      if (filled[b.id] === b.answer) correct++;
    });
    setChecked(true);
    const total = allBlanks.length;
    setResult(correct === total
      ? { ok: true,  msg: `🎉 Perfekt! Alle ${total} Lücken korrekt ausgefüllt!` }
      : { ok: false, msg: `${correct} von ${total} richtig. Rote Lücken korrigieren.` }
    );
  }

  function handleReset() {
    setFilled({});
    setSelectedWord(null);
    setSelectedBlank(null);
    setChecked(false);
    setResult(null);
  }

  function renderToken(token, i) {
    if (token.type === 'blank') {
      const val = filled[token.id];
      let cls = 'fill__blank';
      if (val) {
        cls += ' fill__blank--filled';
        if (checked) {
          cls += val === token.answer ? ' fill__blank--correct' : ' fill__blank--wrong';
        }
      }
      if (selectedBlank === token.id) cls += ' fill__blank--selected';
      return (
        <span
          key={i}
          className={cls}
          onClick={() => handleBlankClick(token.id)}
        >
          {val || '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
        </span>
      );
    }
    const cls = token.type !== 'text' && token.type !== 'indent' ? token.type : '';
    return (
      <span key={i} className={cls}>
        {token.value}
      </span>
    );
  }

  return (
    <div className="fill">
      <div className="fill__header">
        <h2 className="fill__heading">✏️ Übung – {title}</h2>
        <p className="fill__sub">{instruction}</p>
      </div>

      {/* Code-Bereich */}
      <div className="fill__code">
        {lines.map((line, li) => (
          <div key={li} className="fill__line">
            {line.map((token, ti) => renderToken(token, ti))}
          </div>
        ))}
      </div>

      {/* Wortbank */}
      <div className="fill__bank">
        <h4 className="fill__bank-title">Wortliste – klicke ein Wort, dann eine Lücke (oder umgekehrt)</h4>
        <div className="fill__chips">
          {wordBank.map(word => {
            let cls = 'fill__word';
            if (usedWords.has(word)) cls += ' fill__word--used';
            else if (selectedWord === word) cls += ' fill__word--selected';
            return (
              <span key={word} className={cls} onClick={() => handleWordClick(word)}>
                {word}
              </span>
            );
          })}
        </div>
      </div>

      <div className="fill__actions">
        <button className="fill__check" onClick={handleCheck}>✓ Prüfen</button>
        <button className="fill__reset" onClick={handleReset}>↺ Zurücksetzen</button>
      </div>

      {result && (
        <div className={`fill__result ${result.ok ? 'fill__result--ok' : 'fill__result--partial'}`}>
          {result.msg}
        </div>
      )}
    </div>
  );
}
