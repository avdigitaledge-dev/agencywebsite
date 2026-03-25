export async function subscribeToMailchimp(email: string, firstName?: string) {
  try {
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, firstName }),
    });
  } catch {
    // Silently fail — Formspree is the primary submission, Mailchimp is secondary
  }
}
