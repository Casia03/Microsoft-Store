document.addEventListener('DOMContentLoaded', function () {
    // Dummy-Spiele für die Highlights
    const dummySpiele = [
        { name: 'Gurken-Gladiator', description: 'Willkommen im epischen Gemüse-Kampfarena des Gurken-Gladiators! Tauche ein in eine Welt voller spannender Kämpfe, lustiger Charaktere und knackiger Gemüse-Action. Bist du bereit, der ultimative Gurken-Gladiator zu werden?', image: 'Bilder/Spiel/Spiel1.png' },
        { name: 'Lach-O-Matic', description: 'Willkommen bei Lach-O-Matic, dem Spiel, das Lachen zu deinem neuen Lieblingssport macht! Tauche ein in eine Welt voller Spaß, Herausforderungen und jede Menge Lachanfälle. Dieses Spiel wurde entwickelt, um deine Lachmuskeln zu trainieren und dir eine Auszeit vom Alltag zu bieten.', image: 'Bilder/Spiel/Spiel2.png' },
        { name: 'Toiletten-Tycoon', description: 'Bist du bereit für das ultimative Toilettenerlebnis? Willkommen bei Toiletten-Tycoon, dem Spiel, das dich in die aufregende Welt der Sanitäranlagen entführt! Baue und verwalte dein eigenes Imperium, optimiere Toilettenräume und werde der Herrscher über die königliche Toilettenbranche.', image: 'Bilder/Spiel/Spiel3.png' },
        { name: 'Schwerkraft-Gurke', description: 'Tauche ein in die abgedrehte Welt von "Schwerkraft-Gurke", dem Spiel, das die Gesetze der Physik auf den Kopf stellt und dabei jede Menge Spaß garantiert! Begleite unsere heldenhafte Gurke auf einer galaktischen Mission durch verrückte Welten und erlebe ein Gravitationsabenteuer wie nie zuvor.', image: 'Bilder/Spiel/Spiel4.png' },
        { name: 'Katzen-Karate', description: 'Tauche ein in die faszinierende Welt von "Katzen-Karate", wo flauschige Fellknäuel zu wahren Karate-Meistern werden! In diesem einzigartigen Action-Spiel erlebst du epische Kämpfe, purr-fekte Moves und jede Menge humorvolle Momente mit unseren kämpferischen Katzenhelden.', image: 'Bilder/Spiel/Spiel5.png' },
    ];

    // Index der aktuellen angezeigten Spiel
    let currentIndex = -1;

    // Funktion, um die nächste Spiel anzuzeigen
    function showNextSpiel() {
        // Aktuelles Spiel-Fenster ausblenden
        const spielWindow = document.querySelector('.spiel-highlight');
        spielWindow.style.opacity = 0;

        // Nächsten Index für die nächste Spiel aktualisieren
        currentIndex = (currentIndex + 1) % dummySpiele.length;

        //das nächste Spiel-Fenster wird anzeigen
            const currentSpiel = dummySpiele[currentIndex];
            const spielInfo = document.querySelector('.spiel-info');
            const spielImage = document.querySelector('.spiel-highlight img');

            spielInfo.querySelector('h2').textContent = currentSpiel.name;
            spielInfo.querySelector('h2').style.marginBottom = '10px';
            spielInfo.querySelector('p').textContent = currentSpiel.description;
            spielInfo.style.maxHeight = '0%';

            spielImage.src = currentSpiel.image;

            spielInfo.style.top = '0%'; 
            spielInfo.style.right = '0%'; 
            spielInfo.style.transform = 'translate(-50%, -50%)';

            spielWindow.style.opacity = 1;
    }

    // Intervall für den Wechsel zwischen Spiele
    setInterval(showNextSpiel, 11000);

    // Initial die erste Spiel anzeigen
    showNextSpiel();
});
