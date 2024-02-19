document.addEventListener('DOMContentLoaded', function () {
    // Dummy-Apps für die Highlights
    const dummyApps = [
        { name: 'Klingelton-Klamauk', description: 'Willkommen bei Klingelton-Klamauk, der ultimativen App für alle, die ihr Handy mit einem Hauch von Spaß und Humor personalisieren möchten! Bringe frischen Wind in deine Anrufe und Nachrichten mit unserer vielfältigen Sammlung von lustigen Klingeltönen und Benachrichtigungssounds.', image: 'Bilder/App/App1.png' },
        { name: 'Alien-Alphabet', description: 'Bist du bereit für eine außerirdische Sprachreise? Willkommen bei Alien-Alphabet, der revolutionären App, die dir die Geheimnisse ferner Galaxien näherbringt. Tauche ein in die faszinierende Welt der interstellaren Kommunikation und lerne ein Alien-Alphabet, das so einzigartig ist wie die Sterne selbst!', image: 'Bilder/App/App2.png' },
        { name: 'Pinguin-Polka', description: 'Bereite dich darauf vor, deine Welt mit Pinguin-Polka zu verzaubern, der coolsten App für alle, die nach einer eiskalten Tanzparty direkt auf ihrem Smartphone suchen! Tauche ein in eine frostige Welt voller Spaß, Musik und der charmanten Eleganz von Pinguinen.', image: 'Bilder/App/App3.png' },
        { name: 'Cybercity-Collage', description: 'Tauche ein in die aufregende Welt von Cybercity-Collage, einer innovativen App, die die Grenzen zwischen Kunst und Technologie verschwimmen lässt! Erschaffe deine eigene digitale Stadtlandschaft, indem du Bilder, Grafiken und futuristische Elemente kombinierst. Diese App ist nicht nur ein Werkzeug, sondern eine kreative Erfahrung, die deiner Fantasie Flügel verleiht.', image: 'Bilder/App/App4.png' },
        { name: 'Künstler-Knipser', description: 'Willkommen bei Künstler-Knipser, der App, die deine Fotos in wahre Kunstwerke verwandelt! Erobere die Welt der Fotografie mit unseren innovativen Funktionen, die deine künstlerische Seite zum Leben erwecken. Von inspirierenden Filtern bis hin zu leistungsstarken Bearbeitungswerkzeugen - entdecke unendliche Möglichkeiten, um deine Fotos zu individualisieren.', image: 'Bilder/App/App5.png' },
    ];

    // Index der aktuellen angezeigten App
    let currentIndex = -1;

    // Funktion, um die nächste App anzuzeigen
    function showNextApp() {
        // Aktuelles App-Fenster ausblenden
        const appWindow = document.querySelector('.app-highlight');
        appWindow.style.opacity = 0;

        // Nächsten Index für die nächste App aktualisieren
        currentIndex = (currentIndex + 1) % dummyApps.length;

        //das nächste App-Fenster wird anzeigen
            const currentApp = dummyApps[currentIndex];
            const appInfo = document.querySelector('.app-info');
            const appImage = document.querySelector('.app-highlight img');

            appInfo.querySelector('h2').textContent = currentApp.name;
            appInfo.querySelector('h2').style.marginBottom = '10px';
            appInfo.querySelector('p').textContent = currentApp.description;
            appInfo.style.maxHeight = '0%';

            appImage.src = currentApp.image;

            appInfo.style.top = '0%'; 
            appInfo.style.right = '0%'; 
            appInfo.style.transform = 'translate(-50%, -50%)';

            appWindow.style.opacity = 1;
    }

    // Intervall für den Wechsel zwischen den Apps
    setInterval(showNextApp, 11000);

    // Initial die erste App anzeigen
    showNextApp();
});
