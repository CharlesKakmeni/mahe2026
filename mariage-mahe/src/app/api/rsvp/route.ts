import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY manquante (env)" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();
    const { name, email, attending, guests, message } = body as {
      name: string;
      email: string;
      attending: boolean;
      guests?: string | number;
      message?: string;
    };

    // Validation basique
    if (!name || !email || attending === undefined) {
      return NextResponse.json(
        { error: "Informations manquantes" },
        { status: 400 }
      );
    }

    const receivedAt = new Date().toLocaleString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // ✅ IMPORTANT : utilise une vraie adresse de ton domaine (pas resend._domainkey)
    const FROM_MAIN = "RSVP Mariage <rsvp@apj-love-seychelles.com>";
    const FROM_CONFIRM = "Arlette & Paul Richard <rsvp@apj-love-seychelles.com>";

    // ✅ Mets ton vrai email de réception ici
    const TO_OWNERS = ["charlesstevek@gmail.com"];

    // Email pour les mariés
    const { data, error } = await resend.emails.send({
      from: FROM_MAIN,
      to: TO_OWNERS,
      replyTo: email,
      subject: `Nouvelle réponse RSVP - ${name}`,
      html: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- Aide certains clients à éviter le "dark mode rewrite" -->
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <style>
      body {
        font-family: 'Cormorant Garamond', Georgia, serif;
        background-color: #FAF7F2;
        margin: 0;
        padding: 40px 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background: white;
        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 16px;
        overflow: hidden;
      }
      .header {
        background: linear-gradient(135deg, #FED7D7 0%, #FBD5C3 100%);
        padding: 40px 30px;
        text-align: center;
      }
      /* On garde une base, mais le vrai fix est en inline sur le <h1> */
      .content {
        padding: 40px 30px;
      }
      .field {
        margin-bottom: 24px;
      }
      .label {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.28em;
        color: rgba(45, 55, 72, 0.7);
        margin-bottom: 8px;
      }
      .value {
        font-size: 18px;
        color: #2D3748;
        line-height: 1.6;
      }
      .attending-yes {
        display: inline-block;
        background: #C6F6D5;
        color: #22543D;
        padding: 8px 16px;
        border-radius: 8px;
        font-weight: 600;
      }
      .attending-no {
        display: inline-block;
        background: #FED7D7;
        color: #742A2A;
        padding: 8px 16px;
        border-radius: 8px;
        font-weight: 600;
      }
      .footer {
        padding: 30px;
        text-align: center;
        font-size: 14px;
        color: rgba(45, 55, 72, 0.6);
        border-top: 1px solid rgba(0,0,0,0.05);
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <!-- ✅ FIX LISIBILITÉ DARK MODE (inline + webkit) -->
        <h1 style="
          margin:0;
          font-size:32px;
          color:#111827 !important;
          -webkit-text-fill-color:#111827 !important;
          letter-spacing:0.02em;
          text-shadow:0 1px 0 rgba(255,255,255,0.65);
        ">
          Nouvelle réponse RSVP
        </h1>
      </div>

      <div class="content">
        <div class="field">
          <div class="label">Nom</div>
          <div class="value">${escapeHtml(name)}</div>
        </div>

        <div class="field">
          <div class="label">Email</div>
          <div class="value">${escapeHtml(email)}</div>
        </div>

        <div class="field">
          <div class="label">Présence</div>
          <div class="value">
            <span class="${attending ? "attending-yes" : "attending-no"}">
              ${attending ? "✓ Sera présent(e)" : "✗ Ne pourra pas venir"}
            </span>
          </div>
        </div>

        ${
          guests
            ? `
          <div class="field">
            <div class="label">Nombre d'invités</div>
            <div class="value">${escapeHtml(String(guests))}</div>
          </div>
        `
            : ""
        }

        ${
          message
            ? `
          <div class="field">
            <div class="label">Message</div>
            <div class="value">${escapeHtml(message)}</div>
          </div>
        `
            : ""
        }
      </div>

      <div class="footer">
        Reçu le ${escapeHtml(receivedAt)}
      </div>
    </div>
  </body>
</html>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Email de confirmation à l'invité (optionnel)
    if (attending) {
      await resend.emails.send({
        from: FROM_CONFIRM,
        to: [email],
        subject: "Confirmation de votre présence à notre mariage 💍",
        html: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <style>
      body {
        font-family: 'Cormorant Garamond', Georgia, serif;
        background-color: #FAF7F2;
        margin: 0;
        padding: 40px 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background: white;
        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 16px;
        padding: 40px;
      }
      h1 {
        font-size: 36px;
        text-align: center;
        color: #2D3748;
        margin-bottom: 24px;
      }
      p {
        font-size: 18px;
        line-height: 1.8;
        color: rgba(45, 55, 72, 0.8);
        margin-bottom: 16px;
      }
      .signature {
        margin-top: 40px;
        text-align: center;
        font-size: 24px;
        font-style: italic;
        color: #2D3748;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Merci ${escapeHtml(name)} ! 🌴</h1>
      <p>
        Nous sommes ravis de savoir que vous serez parmi nous pour célébrer
        notre mariage à Mahé, Seychelles.
      </p>
      <p>
        Vous recevrez prochainement plus d'informations sur les détails pratiques
        de la cérémonie et de la réception.
      </p>
      <p>À très bientôt !</p>
      <div class="signature">Arlette &amp; Paul Richard</div>
    </div>
  </body>
</html>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      messageId: data?.id,
    });
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}

// Petit helper pour éviter d'injecter du HTML si quelqu'un met des caractères spéciaux dans le formulaire
function escapeHtml(input: string) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}