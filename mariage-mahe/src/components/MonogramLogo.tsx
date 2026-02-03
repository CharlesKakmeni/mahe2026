export default function MonogramLogo() {
  return (
    <div className="select-none">
      <div
        className="text-white/90 leading-none"
        style={{
          fontFamily: "var(--font-script)",
          // petite astuce : évite certains effets typographiques selon les polices
          fontVariantLigatures: "none",
        }}
      >
        <span className="text-[26px] md:text-[34px] tracking-wide">A</span>
        <span className="mx-2 text-[20px] md:text-[26px]">&amp;</span>
        <span className="text-[26px] md:text-[34px] tracking-wide">P</span>
      </div>
    </div>
  );
}