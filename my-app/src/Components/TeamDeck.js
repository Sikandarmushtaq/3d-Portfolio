import { useRef, useState } from "react";
import "./TeamDeck.css";

export default function TeamDeck({ members = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? members.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === members.length - 1 ? 0 : prev + 1
    );
  };

  const onDragStart = (e) => {
    if (members.length < 2) return;

    dragStartX.current = e.clientX;
    setDragX(0);
    setIsDragging(true);

    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onDragMove = (e) => {
    if (dragStartX.current === null) return;

    setDragX(e.clientX - dragStartX.current);
  };

  const onDragEnd = (e) => {
    if (dragStartX.current === null) return;

    if (dragX < -60) {
      handleNext();
    } else if (dragX > 60) {
      handlePrev();
    }

    dragStartX.current = null;
    setDragX(0);
    setIsDragging(false);

    if (
      e?.currentTarget?.hasPointerCapture?.(e.pointerId)
    ) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  if (!members.length) {
    return null;
  }

  return (
    <div className="team-deck-wrap">
      <div
        className={`mdeck-stage ${
          isDragging ? "dragging" : ""
        }`}
        role="region"
        aria-label="Team members"
        onPointerDown={onDragStart}
        onPointerMove={onDragMove}
        onPointerUp={onDragEnd}
        onPointerCancel={onDragEnd}
      >
        {members.map((member, i) => {
          const offset =
            ((i - currentIndex) + members.length) %
            members.length;

          const pos =
            offset > members.length / 2
              ? offset - members.length
              : offset;

          const abs = Math.abs(pos);
          const isActive = pos === 0;

          const dragOffset = dragX * 0.32;

          return (
            <div
              key={member.name}
              className={`mdeck-card ${
                isActive ? "active" : ""
              }`}
              style={{
                transform: `
                  translateX(
                    calc(${pos * 54}% + ${dragOffset}px)
                  )
                  translateZ(${-abs * 125}px)
                  scale(${1 - abs * 0.055})
                  rotateY(${pos * -2.2}deg)
                `,
                zIndex: 30 - abs,
                opacity: abs > 2 ? 0 : 1,
                filter: isActive
                  ? "grayscale(0) brightness(1)"
                  : `grayscale(0.35) brightness(${
                      0.72 - abs * 0.07
                    })`,
              }}
              onClick={() => {
                if (
                  !isDragging &&
                  Math.abs(dragX) < 10 &&
                  !isActive
                ) {
                  setCurrentIndex(i);
                }
              }}
            >
              <div
                className="mdeck-photo"
                style={{
                  backgroundImage: member.img
                    ? `url(${member.img})`
                    : "none",
                }}
              >
                {!member.img && (
                  <span className="mdeck-initials">
                    {member.name
                      .split(" ")
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join("")}
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
          type="button"
          className="mdeck-arrow"
          onClick={handlePrev}
          aria-label="Previous member"
          disabled={members.length < 2}
        >
          &#8249;
        </button>

        <span className="mdeck-counter">
          {String(currentIndex + 1).padStart(2, "0")}
          <em>
            {" "}
            / {String(members.length).padStart(2, "0")}
          </em>
        </span>

        <button
          type="button"
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
          {members.map((member, i) => (
            <button
              type="button"
              key={`${member.name}-${i}`}
              className={`mdeck-dash ${
                i === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to ${member.name}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}