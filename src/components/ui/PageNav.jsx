import './PageNav.css';

/**
 * PageNav – Vorwärts/Rückwärts-Navigation am Seitenende
 *
 * Props:
 *   onPrev       – Callback für "Zurück"-Button (undefined = deaktiviert)
 *   onNext       – Callback für "Weiter"-Button (undefined = deaktiviert)
 *   prevLabel    – Label "Zurück"-Button (string)
 *   nextLabel    – Label "Weiter"-Button (string)
 *   nextPrimary  – Weiter-Button hervorgehoben (boolean, default true)
 */
export default function PageNav({
  onPrev,
  onNext,
  prevLabel = '← Zurück',
  nextLabel = 'Weiter →',
  nextPrimary = true,
}) {
  return (
    <div className="page-nav">
      <button
        className="page-nav__btn"
        onClick={onPrev}
        disabled={!onPrev}
      >
        {prevLabel}
      </button>
      <button
        className={`page-nav__btn ${nextPrimary ? 'page-nav__btn--primary' : ''}`}
        onClick={onNext}
        disabled={!onNext}
      >
        {nextLabel}
      </button>
    </div>
  );
}
