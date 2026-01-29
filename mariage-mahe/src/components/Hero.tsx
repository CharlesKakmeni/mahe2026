import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      {/* Images */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-1.jpg"
          alt="Arlette & Paul-Richard"
          fill
          priority
          className="object-cover hero-img-a"
        />
        <Image
          src="/images/hero-2.jpg"
          alt="Arlette & Paul-Richard"
          fill
          className="object-cover hero-img-b"
        />
        <Image
          src="/images/hero-3.jpg"
          alt="Arlette & Paul-Richard"
          fill
          className="object-cover hero-img-c"
        />

        {/* ✅ Overlay léger mais présent (sans “voile” trop fort) */}
        <div className="absolute inset-0 bg-black/14" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/18" />
      </div>

      {/* Overlay text */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-4 w-full">
          <div className="max-w-3xl">
            <p className="text-white/85 uppercase tracking-[0.35em] text-xs md:text-sm">
              Rejoignez-nous pour le mariage de
            </p>

            <h1
              className="mt-3 text-white leading-[0.9]"
              style={{ fontFamily: "var(--font-script)" }}
            >
              <span className="block text-5xl md:text-7xl lg:text-8xl drop-shadow">
                Arlette
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl drop-shadow mt-2">
                & Paul-Richard
              </span>
            </h1>

            <div className="mt-8 inline-flex flex-col gap-2">
              <p
                className="text-white/90 uppercase tracking-[0.22em] text-sm md:text-base"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Mahé, Seychelles
              </p>
              <p className="text-white/80 text-xs md:text-sm tracking-wider">
                Cérémonie & célébration — Juillet 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Transition bas discrète mais visible (évite le gros bandeau) */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-cream/45 via-cream/10 to-transparent" />
    </section>
  );
}