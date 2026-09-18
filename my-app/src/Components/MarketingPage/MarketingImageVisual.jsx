import "./MarketingImageVisual.css";

export default function MarketingImageVisual({
  src,
  alt,
  eyebrow = "",
  position = "center"
}) {
  return (
    <figure className="marketing-image-visual">
      <div className="marketing-image-visual__glow" aria-hidden="true" />
      <div className="marketing-image-visual__frame">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: position }}
        />
        <div className="marketing-image-visual__shade" aria-hidden="true" />
        {eyebrow && (
          <span className="marketing-image-visual__eyebrow">
            {eyebrow}
          </span>
        )}
      </div>
    </figure>
  );
}
