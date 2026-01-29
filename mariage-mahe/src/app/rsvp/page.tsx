"use client";

import { useState } from "react";

export default function RSVPPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="pt-16 bg-cream">
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Title */}
        <div className="text-center">
          <h1
            className="text-3xl md:text-5xl text-ink"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Confirmez votre Présence
          </h1>
          <p className="mt-3 text-muted max-w-xl mx-auto leading-relaxed">
            Merci de remplir ce formulaire pour nous aider à organiser cette journée.
          </p>
        </div>

        {/* Form card */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-[560px] rounded-xl2 bg-white/75 border border-black/5 shadow-soft px-6 md:px-8 py-7 md:py-9">
            {sent ? (
              <div className="text-center py-10">
                <p
                  className="text-3xl text-ink"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Merci !
                </p>
                <p className="mt-3 text-muted">
                  Votre réponse a bien été enregistrée.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <Field label="Nom complet *">
                  <input
                    required
                    name="fullName"
                    placeholder=""
                    className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-forest/25"
                  />
                </Field>

                <Field label="Email *">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder=""
                    className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-forest/25"
                  />
                </Field>

                <Field label="Nombre d'invités">
                  <select
                    name="guests"
                    className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-forest/25"
                    defaultValue="1"
                  >
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                  </select>
                </Field>

                <Field label="Présence *">
                  <select
                    required
                    name="attendance"
                    defaultValue=""
                    className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-forest/25"
                  >
                    <option value="" disabled>
                      Sélectionnez une option
                    </option>
                    <option value="yes">Oui, je serai présent(e)</option>
                    <option value="no">Non, je ne pourrai pas</option>
                  </select>
                </Field>

                {/* ✅ Restrictions alimentaires supprimées */}

                <Field label="Message pour les mariés">
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Partagez vos vœux..."
                    className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-forest/25 resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  className="mt-3 w-full rounded-lg bg-forest py-3 text-cream font-semibold tracking-[0.22em] uppercase hover:opacity-95"
                >
                  Confirmer
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.28em] text-ink/70 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}