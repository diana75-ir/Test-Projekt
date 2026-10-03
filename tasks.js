// Aufgabenliste für das Dashboard (index.html).
// BEISPIELDATEN – durch echte Aufgaben aus Confluence, OneNote und Outlook ersetzen.
//
// Felder pro Aufgabe:
//   quelle   "Confluence" | "OneNote" | "Outlook"
//   erstellt Erstellungsdatum, Format JJJJ-MM-TT
//   meeting  Meeting bzw. Zusammenhang, aus dem die Aufgabe stammt
//   task     Beschreibung der Aufgabe
//   faellig  Fälligkeitsdatum, Format JJJJ-MM-TT (leer lassen, wenn keins)
//   thema    Thema für die Cluster-Bildung
//   link     optional: Link zur Originalseite / -mail

window.TASKS = [
  { quelle: "Confluence", erstellt: "2026-09-14", meeting: "Projekt-Kickoff Digitalisierung", task: "Anforderungen an das neue Ticket-Tool zusammenstellen", faellig: "2026-09-30", thema: "Digitalisierung" },
  { quelle: "OneNote", erstellt: "2026-09-22", meeting: "Jour fixe Team", task: "Feedback zur Prozessbeschreibung einholen", faellig: "2026-10-03", thema: "Prozesse" },
  { quelle: "Outlook", erstellt: "2026-09-25", meeting: "Budgetrunde Q4", task: "Kostenschätzung für externe Unterstützung erstellen", faellig: "2026-10-06", thema: "Budget" },
  { quelle: "Confluence", erstellt: "2026-09-25", meeting: "Budgetrunde Q4", task: "Budgetantrag im Wiki aktualisieren", faellig: "2026-10-09", thema: "Budget" },
  { quelle: "OneNote", erstellt: "2026-09-28", meeting: "Workshop Kundeninformation", task: "Entwurf für Newsletter-Text schreiben", faellig: "2026-10-08", thema: "Kommunikation" },
  { quelle: "Outlook", erstellt: "2026-09-29", meeting: "Mail: Anfrage Stakeholder", task: "Termin für Abstimmung mit Fachbereich vorschlagen", faellig: "2026-10-02", thema: "Kommunikation" },
  { quelle: "Confluence", erstellt: "2026-09-30", meeting: "Sprint Review", task: "Retrospektive-Ergebnisse dokumentieren", faellig: "2026-10-14", thema: "Digitalisierung" },
  { quelle: "OneNote", erstellt: "2026-10-01", meeting: "1:1 mit Teamleitung", task: "Weiterbildungswünsche für 2027 formulieren", faellig: "2026-10-31", thema: "Team & HR" },
  { quelle: "Outlook", erstellt: "2026-10-01", meeting: "Teamsitzung Oktober", task: "Ferienplanung Dezember eintragen", faellig: "2026-10-20", thema: "Team & HR" },
  { quelle: "Confluence", erstellt: "2026-10-02", meeting: "Prozess-Review", task: "Checkliste für Onboarding überarbeiten", faellig: "2026-11-15", thema: "Prozesse" },
  { quelle: "OneNote", erstellt: "2026-10-02", meeting: "Ideensammlung", task: "Ideen für Self-Service-Portal priorisieren", faellig: "", thema: "Digitalisierung" },
  { quelle: "Outlook", erstellt: "2026-10-03", meeting: "Mail: Controlling", task: "Spesenabrechnung September einreichen", faellig: "2026-10-05", thema: "Budget" },
];
