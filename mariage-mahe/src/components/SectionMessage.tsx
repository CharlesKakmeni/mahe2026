import Image from "next/image";

export default function SectionMessage() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-4 pt-14 md:pt-18 pb-4 md:pb-12 lg:pl-0 lg:pr-40 lg:pb-6">
        {/* Date block */}
        <div className="w-full flex justify-center">
          <div className="text-center">
            {/* ✅ Même taille VISUELLE : on corrige "JUILLET" */}
            <p
              className="text-2xl md:text-2xl text-ink uppercase tracking-[0.14em]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              <span className="inline-block align-baseline">21</span>

              {/* JUILLET paraît + grand visuellement -> on le compresse légèrement */}
              <span className="inline-block align-baseline mx-2 md:mx-3 origin-center scale-y-[0.92]">
                Juillet,
              </span>

              <span className="inline-block align-baseline">2026</span>
            </p>

            <p className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.35em] text-muted">
              Une journée à célébrer ensemble
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-7 md:mt-12 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-xl2 overflow-hidden shadow-soft border border-black/5 bg-white">
              <Image
                src="/images/message-1.jpg"
                alt="Arlette & Paul-Richard"
                width={1000}
                height={800}
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2
              className="mt-3 text-3xl md:text-5xl text-ink"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Un mot des mariés
            </h2>

            <p className="mt-5 text-muted leading-relaxed">
              Le 21 juillet 2007, nous nous sommes dit « OUI ».
              Après 19 années d'amour, de rires, de complicité et de souvenirs, nous choisissons de bénir notre union et de renouveler nos vœux… avec vous à nos côtés.
            </p>

            <p className="mt-4 text-muted leading-relaxed">
              Votre présence est une lumière qui rend ce moment encore plus magique.
              Merci de faire partie de notre histoire, de nos joies et de nos instants partagés.
              Votre affection et votre soutien nous honorent et c’est le cœur rempli de joie et de gratitude que nous célébrerons cet instant unique avec vous.
            </p>

            <p className="mt-5 text-ink/80" style={{ fontFamily: "var(--font-script)" }}>
              Avec tout notre amour, Arlette &amp; Paul Richard
            </p>
          </div>
        </div>
      </div>

      <div className="h-2 md:h-12 bg-gradient-to-b from-cream to-cream/60" />
    </section>
  );
}