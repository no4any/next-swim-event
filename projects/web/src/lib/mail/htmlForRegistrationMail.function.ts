export default function htmlForRegistrationMail(link: string, name: string): string {
    return `<h1>Deine Anmeldung zum 11. Gießener 24-Stunden-Schwimmen (2025)</h1>
    <p>Mit dieser Mail erhältst du den Link zu deinen Anmeldedaten. Sollte Änderungen nötig sein, kannst du diese beim Check-In am Veranstaltungstag vornehmen lassen.</p>
    <p>Teamleiter können über ihren Link auch die Strecken ihrer Mannschaft einsehen.</p>
    <p>Teilnehmer: ${name}</p>
    <p><a href="${link}">Link zu deinen Anmeldedaten</a></p>`
}