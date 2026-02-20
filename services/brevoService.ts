const BREVO_LIST_ID = 2;

const SITUATION_LABELS: Record<string, string> = {
  pregnant: 'Enceinte',
  partner: 'Co-parent',
  parent: 'Déjà parent',
  other: 'Autre',
};

export async function addContactToBrevo(
  firstName: string,
  email: string,
  status: string
): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    throw new Error('BREVO_API_KEY manquante dans le build');
  }

  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey || '',
    },
    body: JSON.stringify({
      email,
      attributes: {
        PRENOM: firstName,
        SITUATION: SITUATION_LABELS[status] || status,
      },
      listIds: [BREVO_LIST_ID],
      updateEnabled: true,
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `Brevo error ${response.status}`);
  }
}
