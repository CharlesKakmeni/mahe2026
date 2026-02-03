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

            <p className="mt-5 text-muted leading-relaxed">
              Du <b>20</b> au <b>22 juillet</b>, entre ciel et océan, là où le temps semble suspendu, nous vous invitons à partager ce moment unique et précieux pour nous.
            </p>

            <p className="mt-4 text-muted leading-relaxed">
              Nous célébrerons l’amour,  l’engagement et la joie d’être entourés, dans le cadre idyllique des Seychelles.
            </p>

            <p className="mt-4 text-muted leading-relaxed">
              Pour ce moment inoubliable, soyons beaux et rayonnants. Osons le chic, osons l’originalité, osons la couleur !
            </p>

            <p className="mt-5 text-muted leading-relaxed">
              Dans les jours à venir, les détails pratiques seront dévoilés dans la rubrique Programme.
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
            Pour vous aider à préparer votre séjour, nous avons regroupé toutes les informations utiles dans la FAQ. Pensez à la consulter.
          </p>
        </div>
      </div>
    </section>
  );
}