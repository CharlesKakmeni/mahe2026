"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// Durée d'inactivité avant expiration (en millisecondes)
// 1 heure = 60 * 60 * 1000
const INACTIVITY_TIMEOUT = 60 * 60 * 1000;

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fonction pour mettre à jour la dernière activité
  const updateLastActivity = () => {
    localStorage.setItem("wedding_last_activity", Date.now().toString());
  };

  useEffect(() => {
    // Ne pas vérifier l'auth sur la page de login
    if (pathname === "/login") {
      setIsLoading(false);
      return;
    }

    // Vérifier l'authentification
    const authStatus = localStorage.getItem("wedding_auth");
    const lastActivity = localStorage.getItem("wedding_last_activity");

    if (authStatus === "true" && lastActivity) {
      const timeSinceLastActivity = Date.now() - parseInt(lastActivity);

      // Vérifier si la session n'a pas expiré
      if (timeSinceLastActivity < INACTIVITY_TIMEOUT) {
        setIsAuthenticated(true);
        setIsLoading(false);
        // Mettre à jour la dernière activité
        updateLastActivity();
      } else {
        // Session expirée à cause de l'inactivité
        localStorage.removeItem("wedding_auth");
        localStorage.removeItem("wedding_last_activity");
        router.push("/login");
      }
    } else {
      // Non authentifié
      router.push("/login");
    }
  }, [pathname, router]);

  // Mettre à jour l'activité lors des interactions
  useEffect(() => {
    if (isAuthenticated && pathname !== "/login") {
      // Écouter les événements d'activité
      const handleActivity = () => {
        updateLastActivity();
      };

      // Événements qui indiquent une activité
      window.addEventListener("click", handleActivity);
      window.addEventListener("scroll", handleActivity);
      window.addEventListener("keypress", handleActivity);
      window.addEventListener("mousemove", handleActivity);

      // Nettoyer les écouteurs
      return () => {
        window.removeEventListener("click", handleActivity);
        window.removeEventListener("scroll", handleActivity);
        window.removeEventListener("keypress", handleActivity);
        window.removeEventListener("mousemove", handleActivity);
      };
    }
  }, [isAuthenticated, pathname]);

  // Afficher un loader pendant la vérification
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-peach/20 border-t-peach"></div>
          <p className="mt-4 text-muted" style={{ fontFamily: "var(--font-serif)" }}>
            Chargement...
          </p>
        </div>
      </div>
    );
  }

  // Si on est sur /login, afficher directement sans Nav/Footer
  if (pathname === "/login") {
    return <>{children}</>;
  }

  // Si authentifié, afficher le contenu
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Par défaut, ne rien afficher (redirection en cours)
  return null;
}
