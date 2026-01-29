import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-[92vh] min-h-[640px]">
      {/* Images (disposition inchangée : object-cover) */}
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

        {/* Overlay léger */}
        <div className="absolute inset-0 bg-black/14" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/18" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-24 sm:pb-20 lg:items-center lg:pb-0">
        <div className="mx-auto max-w-6xl px-5 sm:px-4 w-full">
          <div className="max-w-[680px] mx-auto text-center">
            {/* ✅ Forcé centré, quoi qu’il arrive */}
            <p className="w-full text-center text-white/85 uppercase tracking-[0.35em] text-[11px] sm:text-sm">
              Mariage religieux &amp; célébration
            </p>

            <h1
              className="mt-3 text-white leading-[0.95] break-words hyphens-auto"
              style={{ fontFamily: "var(--font-script)" }}
            >
              <span className="block drop-shadow text-[clamp(44px,10.5vw,78px)]">
                Arlette
              </span>

              <span className="block drop-shadow mt-2 text-[clamp(38px,9.5vw,70px)]">
                &amp; 
              </span>

                <span className="block drop-shadow mt-2 text-[clamp(38px,9.5vw,70px)]">
                Paul-Richard
              </span>
            </h1>

            <div className="mt-6 sm:mt-8 inline-flex flex-col gap-2 items-center">
              <p
                className="text-white/90 uppercase tracking-[0.22em] text-sm sm:text-base"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Mahé, Seychelles
              </p>
              <p className="text-white/80 text-xs sm:text-sm tracking-wider">
                Cérémonie &amp; célébration — Juillet 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transition bas discrète */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-cream/45 via-cream/10 to-transparent" />
    </section>
  );
}