import Image from "next/image";
import Countdown from "./Countdown";
import Container from "@/components/Container";
import { cn } from "@/lib/cn";

export default function SectionWhere() {
  return (
    <section className="bg-cream">
      <Container
        className={cn(
          "pt-8 pb-12 md:py-20",
          "lg:pr-0 lg:pl-40" // desktop: right shift
        )}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
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
                <span className="text-ink/80 font-semibold">Lieu :</span> Mahé — Seychelles{" "}
                <span className="text-ink/40">•</span>{" "}
                <span className="text-ink/80 font-semibold">Date :</span> 21 juillet{" "}
                <span className="text-ink/40">•</span>{" "}
                <span className="text-ink/80 font-semibold">Tenue :</span> Chic & tropical
              </span>
            </p>

            <p className="mt-5 text-muted leading-relaxed">
              Les détails précis (horaires, point de rendez-vous, etc.) seront mis à jour dans la page
              Programme à mesure que l’on se rapproche du jour J.
            </p>
          </div>
        </div>

        <div className="h-16 md:h-20" />
      </Container>

      <div className="bg-forest">
        <Container className="py-10 text-center">
          <p className="text-cream/90 uppercase tracking-[0.30em] text-xs">
            Infos pratiques
          </p>
          <p className="mt-2 text-cream/75 text-sm">
            Toutes les informations pratiques — notamment les formalités d’entrée aux Seychelles —
            sont disponibles dans la page FAQ.
          </p>
        </Container>
      </div>
    </section>
  );
}