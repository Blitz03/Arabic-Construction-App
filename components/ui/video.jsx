export default function Video({ width, height, src, className }) {
  return (
    <video
      width={width}
      height={height}
      className={className}
      controls
      preload="none"
      poster="/assets/about-01.jpg">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
