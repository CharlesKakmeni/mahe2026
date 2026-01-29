import Image from "next/image";
import Countdown from "./Countdown";

export default function SectionWhere() {
  return (
    <section className="bg-cream">
      {/* Mobile: padding confortable | Tablette: plus de marge | Desktop: décale à droite mais moins */}
      <div
        className="
          mx-auto max-w-6xl
          px-5 sm:px-4 md:px-6
          pt-8 pb-12 md:py-20
          lg:pr-0 lg:pl-24 lg:pt-10 lg:pb-14
        "
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Image + countdown */}
          <div className="relative">
            <div className="relative rounded-xl2 overflow-hidden shadow-soft border border-black/5">
              <Image
                src="/images/where-1.jpg"
                alt="Mahé, Seychelles"
                width={900}
                height={600}
                className="w-full h-[340px] md:h-[460px] object-cover"
              />
            </div>

            <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-[min(92%,460px)]">
              <Countdown />
            </div>
          </div>

          {/* Text */}
          <div className="pt-6 lg:pt-2">
            <p className="uppercase tracking-[0.35em] text-xs text-muted">
              Where it all happens
            </p>

            <h2
              className="mt-3 text-4xl md:text-5xl text-ink"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Mahé, Seychelles
            </h2>

            <p className="mt-5 text-muted leading-relaxed">
              Nous vous donnons rendez-vous sur l’île de Mahé, entre lagons turquoise, reliefs tropicaux
              et couchers de soleil inoubliables.
              <span className="block mt-3">
                <span className="text-ink/80 font-semibold">Tenue :</span> Chic & tropical
              </span>
            </p>

            <p className="mt-5 text-muted leading-relaxed">
              Les détails précis (horaires, point de rendez-vous, etc.) seront mis à jour dans la page
              Programme à mesure que l’on se rapproche du jour J.
            </p>
          </div>
        </div>

        {/* spacing because countdown overlaps */}
        <div className="h-16 md:h-20" />
      </div>

      {/* Band */}
      <div className="bg-forest">
        <div className="mx-auto max-w-6xl px-5 sm:px-4 md:px-6 py-10 text-center">
          <p className="text-cream/90 uppercase tracking-[0.30em] text-xs">
            Infos pratiques
          </p>
          <p className="mt-2 text-cream/75 text-sm">
            Toutes les informations pratiques, notamment les formalités d’entrée aux Seychelles,
            sont disponibles dans la page FAQ.
          </p>
        </div>
      </div>
    </section>
  );
}