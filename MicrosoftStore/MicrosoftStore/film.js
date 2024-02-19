document.addEventListener('DOMContentLoaded', function () {
    // Dummy-Filme für die Highlights
    const dummyFilme = [
        { name: 'Haar-Rückgängig-Macher', description: 'In diesem haarsträubend komischen Abenteuer begibt sich der exzentrische Erfinder Dr. Wolfgang Haarschneider auf eine Mission, die die Grenzen der Haarwissenschaft sprengt. Nach einem missglückten Experiment entwickelt er den ultimativen "Haar-Rückgängig-Macher", eine bahnbrechende Maschine, die alles verändern wird – zumindest für diejenigen, die sich dem Schicksal ihrer Frisuren stellen müssen.', image: 'Bilder/Film/Film1.png' },
        { name: 'Hula-Hoop-Held', description: 'Tauche ein in die faszinierende Welt des "Hula-Hoop-Helden", einem herzerwärmenden Abenteuer, das die Kraft des Durchhaltens und die Magie des Hula-Hoops feiert. Die Geschichte folgt Alex, einer schüchternen Träumerin, die die Kunst des Hula-Hoops entdeckt und ihr Leben auf unerwartete Weise verändert.', image: 'Bilder/Film/Film2.png' },
        { name: 'Charme-Chaos', description: 'Emma, eine quirlige junge Frau, die sich inmitten ihres scheinbar perfekten Lebens plötzlich im absoluten Charme-Chaos wiederfindet. Als sie auf den charmanten, aber leicht chaotischen Künstler Max trifft, beginnt eine Kettenreaktion von Ereignissen, die ihr wohlgeordnetes Dasein auf den Kopf stellen.', image: 'Bilder/Film/Film3.png' },
        { name: 'Sinnlose-Socken-Saga', description: 'Als der schrullige Professor Wollbert von Strumpfhausen, ein Sockenforscher mit einer Vorliebe für verrückte Experimente, auf geheime Codes in den Socken stößt, entfaltet sich eine wahnwitzige Verschwörung, die die Existenz der gesamten Sockenwelt bedroht. Begleitet von seinem trotteligen Assistenten, Herrn Filzlatsch, und einer bunt gemischten Gruppe von Socken, die zum Leben erweckt wurden, begibt sich Professor Wollbert auf eine Mission, die mehr ist, als sie auf den ersten Blick zu sein scheint.', image: 'Bilder/Film/Film4.png' },
        { name: 'Lustiger-Lotterielos', description: 'Bob Mulligan, gespielt von der Comedy-Ikone Chuck McLaughlin, ist ein durchschnittlicher Typ mit einem durchschnittlichen Leben. Seine Tage sind geprägt von der langweiligen Routine eines 9-5-Jobs und dem Ärger seines schrulligen Nachbarn. Das ändert sich jedoch schlagartig, als Bob auf einem vermeintlich gewöhnlichen Lotterielos einen skurrilen Satz Zahlen entdeckt, der sein Schicksal für immer verändern wird.', image: 'Bilder/Film/Film5.png' },
    ];

    // Index des aktuellen angezeigten Films
    let currentIndex = -1;

    // Funktion, um den nächste Film anzuzeigen
    function showNextFilm() {
        // Aktuelles Film-Fenster ausblenden
        const filmWindow = document.querySelector('.film-highlight');
        filmWindow.style.opacity = 0;

        // Nächsten Index für den nächsten Film aktualisieren
        currentIndex = (currentIndex + 1) % dummyFilme.length;

        //das nächste Film-Fenster wird anzeigen
            const currentFilm = dummyFilme[currentIndex];
            const filmInfo = document.querySelector('.film-info');
            const filmImage = document.querySelector('.film-highlight img');

            filmInfo.querySelector('h2').textContent = currentFilm.name;
            filmInfo.querySelector('h2').style.marginBottom = '10px';
            filmInfo.querySelector('p').textContent = currentFilm.description;
            filmInfo.style.maxHeight = '0%';

            filmImage.src = currentFilm.image;

            filmInfo.style.top = '0%'; 
            filmInfo.style.right = '0%'; 
            filmInfo.style.transform = 'translate(-50%, -50%)';

            filmWindow.style.opacity = 1;
    }

    // Intervall für den Wechsel zwischen Spiele
    setInterval(showNextFilm, 11000);

    // Initial die ersten Film anzeigen
    showNextFilm();
});
