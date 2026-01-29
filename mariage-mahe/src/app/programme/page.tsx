const events = [
  {
    time: "14:00",
    title: "Cérémonie",
    desc:
      "La cérémonie se déroulera dans un cadre naturel, intime et élégant. Merci d’arriver quelques minutes en avance.",
  },
  {
    time: "15:30",
    title: "Cocktail",
    desc:
      "Nous partagerons un cocktail rafraîchissant, quelques amuse-bouches et des photos dans une ambiance détendue.",
  },
  {
    time: "17:00",
    title: "Dîner",
    desc:
      "Un dîner convivial pour célébrer ensemble. Les options alimentaires seront prises en compte via le RSVP.",
  },
  {
    time: "20:00",
    title: "Soirée Dansante",
    desc:
      "On célèbre jusqu’au bout de la nuit : musique, danse et moments mémorables.",
  },
];

export default function ProgrammePage() {
  return (
    <main className="pt-16 bg-cream">
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Title */}
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-muted">
            Le jour J
          </p>
          <h1
            className="mt-3 text-4xl md:text-5xl text-ink"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Le Programme
          </h1>
          <p className="mt-4 text-muted max-w-2xl mx-auto leading-relaxed">
            Le déroulé ci-dessous vous donne une vue d’ensemble de la journée.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-12 md:mt-14">
          <div className="relative">
            {/* Center line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gold/70" />

            {/* Left line (mobile) */}
            <div className="md:hidden absolute left-4 top-0 h-full w-px bg-gold/70" />

            <div className="space-y-10 md:space-y-12">
              {events.map((ev, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                  <div key={ev.time + ev.title} className="relative">
                    {/* Dot */}
                    <div
                      className={[
                        "absolute top-6 h-2.5 w-2.5 rounded-full bg-gold",
                        "shadow-[0_0_0_4px_rgba(183,155,108,0.18)]",
                        "md:left-1/2 md:-translate-x-1/2",
                        "left-4 -translate-x-1/2 md:translate-x-0",
                      ].join(" ")}
                    />

                    {/* Card wrapper */}
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                      {/* Left column (desktop) */}
                      <div className={["hidden md:block", isLeft ? "md:pr-10" : ""].join(" ")}>
                        {isLeft && <ProgramCard {...ev} align="left" />}
                      </div>

                      {/* Right column (desktop) */}
                      <div className={["hidden md:block", !isLeft ? "md:pl-10" : ""].join(" ")}>
                        {!isLeft && <ProgramCard {...ev} align="right" />}
                      </div>

                      {/* Mobile: single column cards */}
                      <div className="md:hidden pl-10">
                        <ProgramCard {...ev} align="left" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ✅ Green note card (kept at the end) */}
        <div className="mt-14 md:mt-16">
          <div className="mx-auto max-w-3xl p-6 rounded-xl2 bg-forest text-cream border border-white/10 shadow-soft">
            <p className="uppercase tracking-[0.28em] text-[11px] text-cream/80">
              À noter
            </p>
            <p className="mt-2 text-sm text-cream/90 leading-relaxed">
              Les horaires peuvent évoluer légèrement. Nous mettrons cette page à jour si besoin à
              mesure que l’on se rapproche du jour J.
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-muted">
            Une question ? Consulte la FAQ ou écris-nous via RSVP.
          </p>
        </div>
      </section>
    </main>
  );
}

function ProgramCard({
  time,
  title,
  desc,
  align,
}: {
  time: string;
  title: string;
  desc: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={[
        "rounded-xl2 bg-white/70 border border-black/5 shadow-soft",
        "px-6 py-5",
        "md:hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] md:transition-shadow",
        align === "right" ? "md:ml-auto" : "",
      ].join(" ")}
      style={{ maxWidth: 360 }}
    >
      <p className="text-gold text-sm tracking-wider">{time}</p>
      <h3
        className="mt-1 text-xl text-ink"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{desc}</p>
    </div>
  );
}