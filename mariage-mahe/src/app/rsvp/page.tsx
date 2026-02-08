"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { cn } from "@/lib/cn";

export default function RSVPPage() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("fullName") as string,
      email: formData.get("email") as string,
      guests: formData.get("guests") as string,
      attending: formData.get("attendance") === "yes",
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur lors de l'envoi");
      }

      setSent(true);
    } catch (err) {
      console.error("Erreur:", err);
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="pt-16 bg-cream">
      <Container className="py-12 md:py-16">
        <div className="text-center">
          <h1
            className="text-3xl md:text-5xl text-ink"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Confirmez votre présence
          </h1>
          <p className="mt-3 text-muted max-w-xl mx-auto leading-relaxed">
            Merci de remplir ce formulaire pour nous aider à organiser cette journée.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-[560px] rounded-xl2 bg-white/75 border border-black/5 shadow-soft px-6 md:px-8 py-7 md:py-9">
            {sent ? (
              <div className="text-center py-10">
                <p className="text-3xl text-ink" style={{ fontFamily: "var(--font-serif)" }}>
                  Merci !
                </p>
                <p className="mt-3 text-muted">Votre réponse a bien été enregistrée.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <Field label="Nom complet *">
                  <Input required name="fullName" disabled={isSubmitting} />
                </Field>

                <Field label="Email *">
                  <Input required type="email" name="email" disabled={isSubmitting} />
                </Field>

                <Field label="Nombre d'invités">
                  <Select name="guests" defaultValue="1" disabled={isSubmitting}>
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                  </Select>
                </Field>

                <Field label="Présence *">
                  <Select required name="attendance" defaultValue="" disabled={isSubmitting}>
                    <option value="" disabled>
                      Sélectionnez une option
                    </option>
                    <option value="yes">Oui, je serai présent(e)</option>
                    <option value="no">Non, je ne pourrai pas</option>
                  </Select>
                </Field>

                <Field label="Message pour les mariés">
                  <Textarea 
                    name="message" 
                    rows={5} 
                    placeholder="Partagez vos vœux..." 
                    disabled={isSubmitting}
                  />
                </Field>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-3 w-full rounded-lg bg-forest py-3 text-cream font-semibold tracking-[0.22em] uppercase hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                >
                  {isSubmitting ? "Envoi en cours..." : "Confirmer"}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.28em] text-ink/70 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

function baseControl() {
  return cn(
    "w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-ink outline-none",
    "focus:ring-2 focus:ring-forest/25"
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(baseControl(), props.className)} />;
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(baseControl(), props.className)} />;
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(baseControl(), "resize-none", props.className)}
    />
  );
}
