import { useState, useEffect, useCallback } from 'react';
import './SlideCarousel.css';

/**
 * Slide carousel component.
 *
 * Props:
 *   chapter  – 1-4  (determines which /slides/chX/ folder to load from)
 *   total    – total number of slides
 */
export default function SlideCarousel({ chapter, total }) {
  const [current, setCurrent] = useState(1);
  const [zoomed, setZoomed] = useState(false);

  const prev = useCallback(() => setCurrent(c => Math.max(1, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(total, c + 1)), [total]);

  // Keyboard navigation
  useEffect(() => {
    if (zoomed) return;
    function onKey(e) {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape')     setZoomed(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next, zoomed]);

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  const src = `/slides/ch${chapter}/slide-${pad(current)}.png`;

  return (
    <div className="slide-carousel">
      {/* Main slide */}
      <div className="slide-stage" onClick={() => setZoomed(true)} title="Klicken zum Vergrößern">
        <img
          key={src}
          src={src}
          alt={`Slide ${current} von ${total}`}
          className="slide-img"
          draggable={false}
        />
        <span className="zoom-hint">🔍 Klicken zum Vergrößern</span>
      </div>

      {/* Controls */}
      <div className="slide-controls">
        <button
          className="slide-btn"
          onClick={prev}
          disabled={current === 1}
          aria-label="Vorherige Folie"
        >
          ‹
        </button>

        <div className="slide-counter">
          <span className="slide-current">{current}</span>
          <span className="slide-sep"> / </span>
          <span className="slide-total">{total}</span>
        </div>

        <button
          className="slide-btn"
          onClick={next}
          disabled={current === total}
          aria-label="Nächste Folie"
        >
          ›
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="slide-thumbs">
        {Array.from({ length: total }, (_, i) => i + 1).map(n => (
          <button
            key={n}
            className={`thumb-btn${n === current ? ' active' : ''}`}
            onClick={() => setCurrent(n)}
            aria-label={`Folie ${n}`}
          >
            <img
              src={`/slides/ch${chapter}/slide-${pad(n)}.png`}
              alt={`Folie ${n}`}
              loading="lazy"
            />
            <span className="thumb-num">{n}</span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {zoomed && (
        <div
          className="slide-lightbox"
          onClick={() => setZoomed(false)}
        >
          <button
            className="lightbox-close"
            onClick={e => { e.stopPropagation(); setZoomed(false); }}
          >
            ✕
          </button>
          <img
            src={src}
            alt={`Slide ${current}`}
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
          />
          <div className="lightbox-nav">
            <button onClick={e => { e.stopPropagation(); prev(); }} disabled={current === 1}>‹</button>
            <span>{current} / {total}</span>
            <button onClick={e => { e.stopPropagation(); next(); }} disabled={current === total}>›</button>
          </div>
        </div>
      )}
    </div>
  );
}
