import { useState, useRef } from 'react';
import './TeamDeck.css';


export default function TeamDeck({ members = [] }) {

  /* ---------- state ---------- */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(null);

 
  const handlePrev = () =>
    setCurrentIndex((p) => (p === 0 ? members.length - 1 : p - 1));

  const handleNext = () =>
    setCurrentIndex((p) => (p === members.length - 1 ? 0 : p + 1));


  const onDragStart = (e) => {
    dragStartX.current = e.clientX;
    setIsDragging(true);
  };

  const onDragMove = (e) => {
    if (dragStartX.current === null) return;
    setDragX(e.clientX - dragStartX.current);
  };

  const onDragEnd = () => {
    if (dragStartX.current === null) return;

    /* 60px se zyada drag → next/prev */
    if (dragX < -60) handleNext();
    else if (dragX > 60) handlePrev();

    dragStartX.current = null;
    setDragX(0);
    setIsDragging(false);
  };


  if (!members.length) return null;

  return (
    <div className="team-deck-wrap">

  
      <div
        className={`mdeck-stage ${isDragging ? 'dragging' : ''}`}
        role="region"
        aria-label="Team members"
        onPointerDown={onDragStart}
        onPointerMove={onDragMove}
        onPointerUp={onDragEnd}
        onPointerLeave={onDragEnd}
      >
        {members.map((member, i) => {

     
          const offset =
            ((i - currentIndex) + members.length) % members.length;
          const pos =
            offset > members.length / 2
              ? offset - members.length
              : offset;
          const abs = Math.abs(pos);
          const isActive = pos === 0;

          return (
            <div
              key={member.name}
              className={`mdeck-card ${isActive ? 'active' : ''}`}
              style={{
                transform: `translateX(calc(${pos * 46}% + ${dragX * 0.3}px))
                            translateZ(${-abs * 150}px)
                            scale(${1 - abs * 0.06})`,
                zIndex: 20 - abs,
                opacity: abs > 2 ? 0 : 1,
                filter: isActive
                  ? 'grayscale(0) brightness(1)'
                  : 'grayscale(1) brightness(0.75)',
              }}
              onClick={() => !isActive && setCurrentIndex(i)}
            >
           
              <div
                className="mdeck-photo"
                style={{
                  backgroundImage: member.img ? `url(${member.img})` : 'none',
                }}
              >
                {!member.img && (
                  <span className="mdeck-initials">
                    {member.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                  </span>
                )}
              </div>

           
              <div className="mdeck-plate">
                <b>{member.name}</b>
                <i>{member.role}</i>
              </div>
            </div>
          );
        })}
      </div>

    
      <div className="mdeck-controls">

        <button
          className="mdeck-arrow"
          onClick={handlePrev}
          aria-label="Previous member"
          disabled={members.length < 2}
        >
          &#8249;
        </button>

        <span className="mdeck-counter">
          {String(currentIndex + 1).padStart(2, '0')}
          <em> / {String(members.length).padStart(2, '0')}</em>
        </span>

        <button
          className="mdeck-arrow"
          onClick={handleNext}
          aria-label="Next member"
          disabled={members.length < 2}
        >
          &#8250;
        </button>
      </div>

    
      {members.length > 1 && (
        <div className="mdeck-dashes">
          {members.map((_, i) => (
            <button
              key={i}
              className={`mdeck-dash ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to ${members[i].name}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}