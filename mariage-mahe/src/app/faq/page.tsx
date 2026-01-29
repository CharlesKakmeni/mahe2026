import Container from "@/components/Container";
import FAQAccordion from "@/components/FAQAccordion";

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
        La monnaie officielle est la roupie seychelloise (SCR). Cependant, les euros (€) sont très
        souvent acceptés dans les hôtels, restaurants et lieux touristiques.
        <br />
        <br />
        À titre indicatif : 1 € ≈ 16 à 17 roupies seychelloises (SCR).{" "}
        <span className="text-muted">
          (Le taux peut légèrement varier selon les lieux de change.)
        </span>
      </>
    ),
  },
  {
    q: "Quelle est la tenue vestimentaire recommandée ?",
    a: "Une tenue chic & colorée : matières légères, tons naturels, et chaussures adaptées. L’objectif est d’être élégant tout en restant à l’aise.",
  },
  {
    q: "Y a-t-il des hébergements à proximité ?",
    a: "Plusieurs options d’hébergement sont disponibles à proximité. Une liste de recommandations sera partagée prochainement.",
  },
  {
    q: "Quand dois-je confirmer ma présence ?",
    a: "Merci de confirmer votre présence avant le 14 Février 2026, via le formulaire RSVP.",
  },
   {
    q: "Y a-t-il une liste de cadeaux ?",
    a: "« Oui » encore une fois, avec vous à nos côtés.\n Votre présence pour célébrer ce renouvellement de vœux est le plus précieux des cadeaux.\n Cependant, la cérémonie ayant lieu à l’étranger, les présents matériels ne pourront être aisément acheminés.\n Pour ceux qui le souhaitent, une cagnotte sera proposée afin de nous accompagner dans la suite de cette belle aventure.",
  },
  {
    q: "Qui contacter en cas de question ?",
    a: "Pour toute question concernant le mariage ou l’organisation du séjour, vous pouvez contacter Arlette.",
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