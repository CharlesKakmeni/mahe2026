import Container from "@/components/Container";
import { cn } from "@/lib/cn";

const days = [
  {
    dayLabel: "20 Juillet",
    title: "Découverte & activités",
    subtitle: "Découverte de l’île • Ambiance détendue • Détails à venir",
    items: [
      {
        time: "Journée",
        title: "Activités & découverte",
        desc:
          "Temps libre dédié à la découverte de l’île et diverses activités. Le programme détaillé sera communiqué ultérieurement, une fois finalisé.",
      },
    ],
  },
  {
    dayLabel: "21 Juillet",
    title: "Le Mariage",
    subtitle: "Le grand jour • Horaires détaillés ci-dessous",
    items: [
      {
        time: "15:00",
        title: "Arrivée des invités",
        desc:
          "Accueil des invités et installation. Nous vous invitons à arriver légèrement en avance afin de profiter pleinement et sereinement du début de la cérémonie.",
      },
      {
        time: "15:30",
        title: "Cocktail",
        desc:
          "Un moment convivial pour se retrouver : rafraîchissements, quelques amuse-bouches et premières photos.",
      },
      {
        time: "16:00 – 17:00",
        title: "Cérémonie",
        desc:
          "La cérémonie se déroulera dans un cadre naturel, intime et élégant.",
      },
      {
        time: "18:00",
        title: "Réception",
        desc:
          "Transition vers le lieu de réception, installation et début des festivités dans une ambiance chaleureuse.",
      },
    ],
  },
  {
    dayLabel: "22 Juillet",
    title: "Dîner de clôture",
    subtitle: "Un dernier moment ensemble • Détails à venir",
    items: [
      {
        time: "Soirée",
        title: "Dîner de clôture",
        desc:
          "Un dernier dîner ensemble pour conclure ces journées en beauté. Les détails seront partagés dès que possible.",
      },
    ],
  },
];

export default function ProgrammePage() {
  return (
    <main className="pt-16 bg-cream">
      <Container className="py-12 md:py-16">
        {/* Header */}
        <div className="text-center">

          <h1
            className="mt-3 text-4xl md:text-5xl text-ink"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Le Programme
          </h1>
          <p className="mt-4 text-muted max-w-2xl mx-auto leading-relaxed text-center">
            Trois journées pour se retrouver, célébrer et partager des souvenirs.
          </p>
        </div>

        {/* Days */}
        <div className="mt-12 md:mt-14 space-y-10 md:space-y-12">
          {days.map((d, dayIndex) => (
            <section
              key={d.dayLabel}
              className={cn(
                "rounded-xl2 border border-black/5 shadow-soft overflow-hidden",
                "bg-white/55"
              )}
            >
              {/* Day header */}
              <div className="px-6 md:px-10 py-7 md:py-8 bg-peach/35 border-b border-black/5">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                  <div>
                    <p className="uppercase tracking-[0.35em] text-[11px] text-muted">
                      {d.dayLabel}
                    </p>
                    <h2
                      className="mt-2 text-3xl md:text-4xl text-ink"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {d.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted">{d.subtitle}</p>
                  </div>

                  {/* Small pill */}
                  <div className="inline-flex md:justify-end">
                    <span className="inline-flex items-center rounded-full bg-forest/10 text-forest px-4 py-2 text-xs tracking-wider uppercase">
                      Jour {dayIndex + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Timeline body */}
              <div className="px-6 md:px-10 py-8 md:py-10">
                <div className="relative">
                  <div className="absolute left-4 top-0 h-full w-px bg-gold/60" />
                  <div className="space-y-8 md:space-y-9">
                    {d.items.map((it) => (
                      <div key={d.dayLabel + it.time + it.title} className="relative pl-10">
                        <div
                          className={cn(
                            "absolute left-4 top-2 h-2.5 w-2.5 rounded-full bg-gold",
                            "shadow-[0_0_0_4px_rgba(217,154,114,0.18)]",
                            "-translate-x-1/2"
                          )}
                        />
                        <ProgramCard time={it.time} title={it.title} desc={it.desc} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Note */}
        <div className="mt-14 md:mt-16">
          <div className="mx-auto max-w-3xl p-6 rounded-xl2 bg-forest text-cream border border-white/10 shadow-soft">
            <p className="uppercase tracking-[0.28em] text-[11px] text-cream/80">À noter</p>
            <p className="mt-2 text-sm text-cream/90 leading-relaxed">
              Certaines informations, notamment les activités, seront communiquées progressivement.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

function ProgramCard({
  time,
  title,
  desc,
}: {
  time: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl2 bg-white/70 border border-black/5 shadow-soft",
        "px-6 py-5",
        "md:hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] md:transition-shadow"
      )}
      style={{ maxWidth: 520 }}
    >
      <p className="text-gold text-sm tracking-wider">{time}</p>
      <h3 className="mt-1 text-xl text-ink" style={{ fontFamily: "var(--font-serif)" }}>
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{desc}</p>
    </div>
  );
}