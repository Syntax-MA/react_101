import { useState } from 'react';
import './Quiz.css';

/**
 * Quiz – Multiple-Choice Quiz mit 3 Fragen
 *
 * Props:
 *   questions – Array von Fragen aus quizData.js
 *               { question, choices[{id,text}], correct, feedback{ok,nok} }
 */
export default function Quiz({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answered, setAnswered]         = useState({});  // { qIndex: choiceId }
  const [finished, setFinished]         = useState(false);

  const total   = questions.length;
  const score   = Object.entries(answered).filter(
    ([qi, ci]) => questions[parseInt(qi)].correct === ci
  ).length;

  function handleAnswer(choiceId) {
    if (answered[currentIndex] !== undefined) return; // bereits beantwortet
    setAnswered(prev => ({ ...prev, [currentIndex]: choiceId }));
  }

  function handleNext() {
    if (currentIndex < total - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setFinished(true);
    }
  }

  function handleRetry() {
    setAnswered({});
    setCurrentIndex(0);
    setFinished(false);
  }

  const q           = questions[currentIndex];
  const userAnswer  = answered[currentIndex];
  const hasAnswered  = userAnswer !== undefined;
  const isCorrect   = userAnswer === q?.correct;

  // Ergebnis-Bewertung
  function getResultMeta() {
    if (score === total) return { ring: '', title: 'Perfekt! 🎉', sub: 'Alle Fragen richtig – du hast dieses Kapitel verstanden.' };
    if (score >= total - 1) return { ring: 'partial', title: 'Fast!', sub: 'Eine Lücke noch. Noch einen Versuch?' };
    return { ring: 'low', title: 'Noch nicht ganz…', sub: 'Schau dir die Erklärungen noch einmal an und probiere es erneut.' };
  }

  return (
    <div className="quiz">
      <div className="quiz__header">
        <h2 className="quiz__heading">🎯 Quiz</h2>
        <p className="quiz__sub">Teste dein Wissen. {total} Fragen – so oft du willst.</p>
      </div>

      {/* Fortschritts-Punkte */}
      <div className="quiz__dots">
        {questions.map((_, i) => {
          const ans = answered[i];
          let state = '';
          if (ans !== undefined) state = ans === questions[i].correct ? 'correct' : 'wrong';
          else if (i === currentIndex && !finished) state = 'active';
          return <span key={i} className={`quiz__dot quiz__dot--${state || 'idle'}`} />;
        })}
      </div>

      {/* Fragen-Bereich */}
      {!finished && (
        <div className="quiz__question">
          <p className="quiz__q-num">Frage {currentIndex + 1} von {total}</p>
          <p className="quiz__q-text">{q.question}</p>

          <div className="quiz__choices">
            {q.choices.map(choice => {
              let cls = 'quiz__choice';
              if (hasAnswered) {
                if (choice.id === q.correct)   cls += ' quiz__choice--correct';
                if (choice.id === userAnswer && choice.id !== q.correct) cls += ' quiz__choice--wrong';
                cls += ' quiz__choice--disabled';
              }
              return (
                <button
                  key={choice.id}
                  className={cls}
                  onClick={() => handleAnswer(choice.id)}
                >
                  <span className="quiz__choice-dot">{choice.id.toUpperCase()}</span>
                  {choice.text}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {hasAnswered && (
            <div className={`quiz__feedback quiz__feedback--${isCorrect ? 'ok' : 'nok'}`}>
              <span dangerouslySetInnerHTML={{
                __html: isCorrect ? '✅ ' + q.feedback.ok : '❌ ' + q.feedback.nok
              }} />
            </div>
          )}

          {/* Weiter-Button */}
          {hasAnswered && (
            <button className="quiz__next" onClick={handleNext}>
              {currentIndex < total - 1 ? 'Nächste Frage →' : 'Ergebnis anzeigen ✓'}
            </button>
          )}
        </div>
      )}

      {/* Ergebnis */}
      {finished && (
        <div className="quiz__result">
          {(() => { const { ring, title, sub } = getResultMeta(); return (
            <>
              <div className={`quiz__ring quiz__ring--${ring || 'perfect'}`}>
                {score}/{total}
              </div>
              <h3 className="quiz__result-title">{title}</h3>
              <p className="quiz__result-sub">{sub}</p>
              <button className="quiz__retry" onClick={handleRetry}>🔄 Nochmal versuchen</button>
            </>
          ); })()}
        </div>
      )}
    </div>
  );
}
