import FAQAccordion from "@/components/FAQAccordion";

const items = [
  {
    q: "Quelles sont les formalités d’entrée aux Seychelles ?",
    a: (
      <>
        Les Seychelles ne demandent pas de visa préalable pour de nombreuses
        nationalités (notamment Camerounaise, Congolaise, Nigériane, Française,
        Américaine, Canadienne). En revanche, tous les voyageurs — quelle que
        soit leur nationalité — doivent obtenir une autorisation de voyage en
        ligne avant le départ (Travel Authorization).
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
        Les documents requis sont généralement : un passeport valide, un billet
        aller-retour, une confirmation d’hébergement et une preuve de moyens
        financiers. L’autorisation de voyage doit être présentée à l’embarquement
        ainsi qu’à l’arrivée.
      </>
    ),
  },
  {
    q: "Quelle est la tenue vestimentaire recommandée ?",
    a: "Une tenue chic & tropical : matières légères, tons naturels, et chaussures adaptées. L’objectif est d’être élégant tout en restant à l’aise.",
  },
  {
    q: "Puis-je amener des enfants ?",
    a: "Merci de vous référer à votre invitation. Si vous avez un doute, écrivez-nous via la page RSVP.",
  },
  {
    q: "Y a-t-il des hébergements à proximité ?",
    a: "Plusieurs options d’hébergement sont disponibles à proximité. Une liste de recommandations sera partagée prochainement.",
  },
  {
    q: "Quand dois-je confirmer ma présence ?",
    a: "Merci de confirmer votre présence dès que possible via le formulaire RSVP.",
  },
  {
    q: "Y a-t-il une liste de mariage ?",
    a: "Votre présence est le plus beau des cadeaux. Nous partagerons les détails d’une liste de mariage si nécessaire, plus près de la date.",
  },
];

export default function FAQPage() {
  return (
    <main className="pt-16 bg-cream">
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
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
      </section>
    </main>
  );
}