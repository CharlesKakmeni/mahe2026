import Image from "next/image";

export default function SectionMessage() {
  return (
    <section className="bg-cream">
      {/* Mobile: padding + confortable | Desktop: plus à gauche */}
      <div className="mx-auto max-w-6xl px-5 sm:px-4 pt-14 md:pt-18 pb-4 md:pb-12 lg:pl-0 lg:pr-40">
        {/* Date block */}
        <div className="text-center">
          <p
            className="text-4xl md:text-6xl text-ink tracking-wide"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            21 JUILLET, 2026
          </p>
          <p className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.35em] text-muted">
            Mahé, Seychelles
          </p>
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
            <p className="uppercase tracking-[0.35em] text-xs text-muted">
              Un mot des mariés
            </p>

            <h2
              className="mt-3 text-4xl md:text-5xl text-ink"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Arlette & Paul-Richard
            </h2>

            <p className="mt-5 text-muted leading-relaxed">
              Nous sommes très heureux de vous inviter à partager ce moment unique avec nous.
              Votre présence compte énormément et nous avons hâte de vivre cette journée à vos côtés,
              dans le cadre magique de Mahé.
            </p>

            <p className="mt-4 text-muted leading-relaxed">
              Vous trouverez le programme, les infos pratiques et le RSVP sur ce site. Merci pour votre
              soutien, votre affection, et pour faire partie de notre histoire.
            </p>

            <p className="mt-5 text-ink/80" style={{ fontFamily: "var(--font-script)" }}>
              Avec amour, Arlette & Paul-Richard
            </p>
          </div>
        </div>
      </div>

      {/* Divider (quasi nul sur mobile pour éviter le grand espace) */}
      <div className="h-2 md:h-12 bg-gradient-to-b from-cream to-cream/60" />
    </section>
  );
}