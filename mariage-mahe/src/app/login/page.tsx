"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // ⚠️ CHANGEZ CE MOT DE PASSE !
  const WEDDING_PASSWORD = "LoveInSeychelles2026";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (password === WEDDING_PASSWORD) {
      // Stocker l'authentification avec le timestamp actuel
      localStorage.setItem("wedding_auth", "true");
      localStorage.setItem("wedding_last_activity", Date.now().toString());
      
      router.push("/");
      router.refresh();
    } else {
      setError("Mot de passe incorrect");
      setIsLoading(false);
      setPassword("");
    }
  };

  return (
    <main className="min-h-screen bg-cream flex items-center">
      <Container className="py-16">
        <div className="mx-auto max-w-[520px] rounded-xl bg-white/75 border border-black/5 shadow-soft px-6 md:px-8 py-8">
          <h1
            className="text-3xl md:text-4xl text-ink text-center"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Accès privé
          </h1>
          <p className="mt-3 text-muted text-center leading-relaxed">
            Entrez le mot de passe pour accéder au site.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <label className="block text-[11px] uppercase tracking-[0.28em] text-ink/70">
              Mot de passe
            </label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-peach/40"
              placeholder="••••••••"
              autoFocus
            />

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading || !password}
              className="mt-2 w-full rounded-lg bg-peach py-3 text-ink font-semibold tracking-[0.22em] uppercase hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Connexion..." : "Entrer"}
            </button>
          </form>

          <p className="mt-6 text-xs text-muted text-center">
            Si vous n'avez pas le mot de passe, contactez les mariés.
          </p>
        </div>
      </Container>
    </main>
  );
}
