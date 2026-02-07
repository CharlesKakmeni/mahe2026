import Container from "@/components/Container";
import FAQAccordion from "@/components/FAQAccordion";
import Image from "next/image";

const items = [
  {
    q: "Quelles sont les formalités d’entrée aux Seychelles ?",
    a: (
      <>
        Les Seychelles ne demandent pas de visa préalable pour de nombreuses nationalités (notamment
        Camerounaise, Congolaise, Nigériane, Française, Américaine, Canadienne). En revanche, tous
        les voyageurs — quelle que soit leur nationalité — doivent obtenir une autorisation de voyage
        en ligne avant le départ (Travel Authorization).
        <br />
        <br />
        La demande se fait sur le site officiel :{" "}
        <a
          href="https://seychelles.govtas.com"
          target="_blank"
          rel="noreferrer"
          className="text-forest underline underline-offset-4 decoration-forest/40 hover:decoration-forest"
        >
          seychelles.govtas.com
        </a>
        .
        <br />
        <br />
        Les documents requis sont généralement : un passeport valide, un billet aller-retour, une
        confirmation d’hébergement et une preuve de moyens financiers. L’autorisation de voyage doit
        être présentée à l’embarquement ainsi qu’à l’arrivée.
      </>
    ),
  },
  {
    q: "Quel temps fera-t-il aux Seychelles en juillet ?",
    a: "Le mois de juillet correspond à la saison sèche aux Seychelles. Il fait généralement beau et agréable, avec des températures autour de 24 à 28°C.",
  },
  {
    q: "Quelle est la monnaie utilisée aux Seychelles ?",
    a: (
      <>
        La monnaie officielle est la roupie seychelloise (SCR). Cependant, les euros (€) et dollars ($)
        sont très souvent acceptés dans les hôtels, restaurants et lieux touristiques.
        <br />
        <br />
        À titre indicatif :
        <br />
        • 1 € ≈ 17,3 SCR
        <br />
        • 1 $ ≈ 14,6 SCR
        <br />
        • 1 000 FCFA ≈ 26,3 SCR (donc 10 000 FCFA ≈ 263 SCR)
        <br />
        <span className="text-muted">
          (Le taux peut légèrement varier selon les lieux de change et les frais.)
        </span>
      </>
    ),
  },

  {
    q: "Quelle est la tenue vestimentaire recommandée ?",
    a: (
      <>
        Une tenue chic & colorée : matières légères et tons colorés. L’objectif est d’être élégant tout
        en restant à l’aise.
        <br />
        <br />

        <div className="grid gap-4 md:grid-cols-2">
          <figure className="rounded-2xl overflow-hidden border border-ink/10 bg-white">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/faq/looks-femmes.jpg"
                alt="Idées de tenues femmes : chic et coloré"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="px-4 py-3 text-sm text-muted">
              Inspirations tenues femmes
            </figcaption>
          </figure>

          <figure className="rounded-2xl overflow-hidden border border-ink/10 bg-white">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/faq/looks-hommes.jpg"
                alt="Idées de tenues hommes : chic et coloré"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="px-4 py-3 text-sm text-muted">
              Inspirations tenues hommes
            </figcaption>
          </figure>
        </div>

        <div className="mt-4 text-sm text-muted">
          Astuce : Privilégie des chaussures confortables et pense à une paire de lunettes / un chapeau.
        </div>
      </>
    ),
  },

  {
    q: "Y a-t-il des hébergements à proximité ?",
    a: "La ceremonie se deroulera dans le quartier du Beau Vallon, nous vous recommandons d'y choisir vos logements. Nous vous proposerons très prochainement des hotels et appartements meublés se trouvant dans le secteur",
  },
  {
    q: "Quand dois-je confirmer ma présence ?",
    a: "Merci de confirmer votre présence avant le 14 Février 2026, via le formulaire RSVP.",
  },
  {
    q: "Y a-t-il une liste de cadeaux ?",
    a: "Votre présence à nos côtés pour célébrer ce renouvellement de vœux est, à nos yeux, le plus beau des cadeaux. La cérémonie ayant lieu à l’étranger, il nous sera toutefois difficile d’acheminer des présents matériels. Pour celles et ceux qui le souhaitent, une cagnotte en ligne sera proposée, en toute simplicité, pour la symbolique du geste.Nous vous communiquerons le lien dès que possible.",
  },
  {
    q: "Qui contacter en cas de question ?",
    a: "Pour toute question concernant le mariage ou l’organisation du séjour, vous pouvez contacter Arlette et Rita au +237 96 26 92 59",
  },
  {
    q: "Y’a t’il un décalage horaire avec les Seychelles ?",
    a: "Les Seychelles fonctionnent toute l’année sur le fuseau horaire GMT+4. Nous vous invitons à en tenir compte lors de l’organisation de votre séjour.",
  },

  // ✅ SIM + image sans "bande blanche" (caption en texte séparé)
  {
    q: "Comment rester connecté aux Seychelles ?",
    a: (
      <>
        Le Wifi est disponible dans de nombreux hôtels, restaurants et lieux publics. Pour plus de
        confort, il est également possible d’acheter une SIM locale à l’aéroport ou en ville chez des
        opérateurs comme Airtel. (Voir le site :{" "}
        <a
          href="https://www.airtel.sc"
          target="_blank"
          rel="noreferrer"
          className="text-forest underline underline-offset-4 decoration-forest/40 hover:decoration-forest"
        >
          www.airtel.sc
        </a>
        ).
        <br />
        <br />

        <div className="rounded-2xl overflow-hidden border border-ink/10 bg-white">
          <div className="relative w-full h-[260px] md:h-[420px] bg-cream">
            <Image
              src="/faq/tarifs-sim.jpg"
              alt="Tarifs indicatifs des cartes SIM aux Seychelles"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>

        <p className="mt-3 text-sm text-muted">
          Tarifs indicatifs des cartes SIM (à titre d’information)
        </p>
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <main className="pt-16 bg-cream">
      <Container className="py-12 md:py-16">
        <div className="text-center">
          <h1
            className="text-3xl md:text-5xl text-ink"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Questions Fréquentes
          </h1>
        </div>

        <div className="mt-10 md:mt-12 mx-auto max-w-4xl">
          <FAQAccordion items={items} />
        </div>
      </Container>
    </main>
  );
}