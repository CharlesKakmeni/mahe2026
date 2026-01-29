export default function MonogramLogo() {
  return (
    <div className="select-none">
      <div
        className="text-white/90 leading-none"
        style={{ fontFamily: "var(--font-script)" }}
      >
        <span className="text-2xl md:text-3xl tracking-wide">A</span>
        <span className="mx-2 text-xl md:text-2xl">&</span>
        <span className="text-2xl md:text-3xl tracking-wide">P</span>
      </div>
    </div>
  );
}