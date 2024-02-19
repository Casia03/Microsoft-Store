document.addEventListener("DOMContentLoaded", function () {

  const data = [
    "Lach-O-Matic, Hilarious Joke Generator, Kostenlos, 0, spiel, 2012, Entertainment",
    "Prankster Pro, Ultimate Prank app, 5, 16, app, 2012, Entertainment",
    "Haar-Rückgängig-Macher, Virtual Baldness Reversal, 10, 12, film, 2012, Simulation",
    "Toiletten-Tycoon, Bathroom Business Simulator, 15, 18, spiel, 2012, Simulation",
    "Klingelton-Klamauk, Ridiculous Ringtone Maker, Kostenlos, 0, app, 2012, Musik; Tool",
    "Pinguin-Polka, Silly Dance Revolution, 8, 6, app, 2012, Musik",
    "Flugzeug-Furzer, Airplane Flatulence Simulator, 3, 12, app, 2012, Simulation",
    "Zombie-Zahnarzt, Undead Dentist Adventure, 12, 16, film, 2012, Action",
    "Kartoffel-Kanonade, Potato Cannon Shooter, Kostenlos, 12, app, 2012, Action",
    "Alien-Alphabet, Extraterrestrial Language Learning, 7, 0, app, 2012, Bildung",
    "Einhorn-Eskapaden, Magical Unicorn Quest, 10, 6, app, 2012, Abenteuer",
    "Superhelden-Schlafanzug, Heroic Pajama Dress-Up, Kostenlos, 0, film, 2012, Simulation",
    "Kaffeetassen-Karaoke, Mug-Singing Party, 5, 12, app, 2012, Musik",
    "Keks-Krampf, Cookie Crumbles and Hurt, 15, 12, film, 2012, Abenteuer",
    "Robo-Rasierer, Robot Shaving Challenge, Kostenlos, 0, app, 2012, Simulation",
    "Chaos-Chef, Kitchen Mayhem Manager, 10, 12, app, 2012, Simulation",
    "Schwerkraft-Gurke, Gravity-Defying Cucumber Game, 8, 6,spiel,2012, Geschicklichkeit",
    "Hula-Hoop-Held, HoopMaster Adventure, 12, 6,film,2012, Action",
    "Katzen-Karate, Feline Martial Arts Showdown, 6, 12,spiel,2012, Kampfspiel; Action",
    "Blumenstrauß-Bomber, Bouquet Bombing Challenge, Kostenlos, 0,spiel,2012, Geschicklichkeit",
    "Charme-Chaos, Charm School Mayhem, 18, 12, film,2012, Simulation",
    "Sinnlose-Socken-Saga, Pointless Sock Epic, 7, 6,film,2012, Abenteuer",
    "Zombie-Zirkus, Undead Circus Extravaganza, €, 16, film,2012, Action",
    "Lustiger-Lotterielos, Comedy Lottery Simulator, 12, 0, film,2012, Glücksspiel",
    "Pizza-Time, A Tobey classic, 5, 0, film,2012, Action",
    "Schlafwandel-Symphonie, Sleepwalker Orchestra, 8, 12,app,2012, Musik",
    "Retro-Roboter-Rodeo, Vintage Robot Roundup, 12, 6,film,2012, Action",
    "Märchenhafter-Magnet, Fairytale Magnet Madness, Kostenlos, 0, film, 2012, Abenteuer",
    "Hamster-Hunter, Rodent Rescue Adventure, 10, 6,film,2012, Abenteuer",
    "Gurken-Gladiator, Cucumber Gladiator Arena, 15, 12,spiel,2012, Kampfspiel; Action",
    "Schlüsselbrett-Simulator, Key Rack Tycoon, 7, 0,spiel,2012, Simulation",
    "Yeti-Yoga, Abominable Yoga Challenge, 8, 6,app,2012, Sport",
    "Lustige-Lockenwickler, Hilarious Curler Simulator, Kostenlos, 0,spiel,2012, Simulation",
    "Bananen-Billard, Banana Billiards Championship, 10, 0,spiel,2012, Sport",
    "Mond-Mikado, Moon Pick-Up Sticks, 5, 0, app,2012, Geschicklichkeit",
    "Paprika-Pantomime, Pepper Pantomime Showdown, 12, 12, film,2012, Party; Entertainment",
    "Nudel-Narr, Pasta Madness Adventure, 9, 6,spiel,2012, Abenteuer",
    "Schnurrbart-Sprint, Mustache Sprint Race, 12, 0,film,2012, Sport",
    "Chaos-Karawane, Chaos Caravan, 14, 12,spiel,2012, Simulation",
    "Quallen-Jongleur, Jellyfish Juggling Extravaganza, 6, 0,spiel,2012, Geschicklichkeit",
    "Känguru-Karaoke, Kangaroo Sing-Along Party, 8, 0,app,2012, Musik",
    "Wackel-Waschbär, Wobbly Raccoon Rescue, 11, 6,spiel,2012, Puzzle",
    "Robo-Rätsel, Robot Puzzle Challenge, Kostenlos, 0,spiel,2012, Puzzle",
    "Pinguin-Plattmacher, Penguin Flattening Simulator, 7, 12, film,2012, Simulation",
    "Zombie-Zauberer, Undead Wizard RPG, 16, 16,spiel,2012, Rollenspiel",
    "Fisch-Fänger, Fish Catcher Tycoon, 10, 6, film,2012, Simulation",
    "Chaos-Chor, Choir Mayhem Simulator, Kostenlos, 0, app,2012, Musik",
    "Enten-Ernte, Duck Harvest Farming, 13, 6,spiel,2012, Simulation",
    "Keks-Kratzer, Cookie Scratch Card Mania, 4, 0, film,2012, Entertainment",
    "Tanzende-Torten, Dancing Cake Party, 9, 0,app,2012, Musik",
    "Schnecken-Sprint, Snail Sprint Racing, 6, 0, app,2012, Sport",
    "Astronauten-Ananas, Astronaut Pineapple Adventure, 11, 6, film,2012,Abenteuer",
    "Chamäleon-Chaos, Chameleon Color Confusion, Kostenlos, 0,spiel,2012, Geschicklichkeit",
    "Schlafmützen-Saga, Sleepyhead Epic Quest, 15, 12, spiel,2012, Puzzle; Ratespiele; Rollenspiel",
    "Fliegender-Frosch, Flying Frog Simulator, 8, 0, spiel,2012, Simulation; Entertainment",
    "Pizza-Pogo, Pizza Pogo Stick Challenge, 7, 6,film,2012, Sport",
    "Schlüsselanhänger-Saga, Keychain Collector RPG, Kostenlos, 0, spiel, 2012, Rollenspiel;Simulation",
    "Cybercity-Collage, Cybercity Builder, 20, 0, app, 2020, Simulation; Entertainment; Tool",
    "Künstler-Knipser, AI Image Generator, Kostenlos, 0, app, 2001, Tool",
    "Lora Craft, Action Movie, 10, 12, film, 2023, Action; Abenteuer; Thriller; Krimi",
    "Schmar Wars, Space SciFi adventure, 30, 12, film, 2017, Drama; SciFi; Fantasy; Thriller; Krimi",
    "Wulfpuzzler, Wolf jump' n' run, 20, 6, spiel, 2020, Strategie; Klassiker;  Puzzle;Ratespiele; Jump' n' Run",
    "Blue Life condemnation, Not Red Dead Redemption, 50, 18, spiel, 2013, Action; Abenteuer",
  ];


  function handleInputEvent(event, data) {
    let searchTerm = event.target.value.toLowerCase();

    let filteredData = data.filter(function (item) {
      return item.toLowerCase().includes(searchTerm);
    });


  }

  document.getElementById('searchInput').addEventListener('input', function (event) {
    handleInputEvent(event, data);
  });

  document.getElementById('searchInput').addEventListener('input', function (event) {
    let searchTerm = event.target.value.toLowerCase();
    if (searchTerm.length > 0) {
      let filteredData = data.filter(function (item) {
        return item.toLowerCase().includes(searchTerm);
      });
      const filteredObjects = filteredData.map(app => {
        const [name, description, price, alter, typ, jahr, tags] = app.split(',');

        return {
          name,
          description,
          price,
          alter,
          typ,
          jahr,
          tags: tags.split(';'),
        };
      });

      renderApps(filteredObjects);
    } else {
      // If no tags are selected, show all apps
      renderApps(objects);
    }
  });


  const objects = data.map(app => {
    const [name, description, price, alter, typ, jahr, tags] = app.split(',');

    return {
      name,
      description,
      price,
      alter,
      typ,
      jahr,
      tags: tags.split(';'), // mit ; kann mann mehrere tags eingeben
    };
  });


  const sortSelect = document.getElementById('sortSelect');

  // Event listener fur dropdown menu
  sortSelect.addEventListener('change', function () {
      const selectedSortOrder = sortSelect.value; 
      const sortedEntries = sortEntries(objects, selectedSortOrder); 
      renderApps(sortedEntries); 
  });


  const container = document.querySelector('.search-results');

  function renderApps(apps) {
    container.innerHTML = '';
    apps.forEach(app => {
      const elements = document.createElement('div');
      elements.classList.add('app-container'); // neuer Container klasse

      const imageElement = document.createElement('div');
      imageElement.classList.add('app-image');
      imageElement.style.backgroundImage = `url('Bilder/Untitled_2.png')`;

      const detailsElement = document.createElement('div');
      detailsElement.classList.add('app-details');
      detailsElement.innerHTML = `<h2>${app.name}</h2>
                                 <p>${app.description}</p>
                                 <p>${app.price}<strong>€</strong> </p>
                                 <p><strong>USK</strong>${app.alter} </p>
                                 <p>${app.typ}<strong></strong> </p>
                                 <p>${app.jahr}<strong></strong> </p>
                                 <p><strong>Tags:</strong> ${app.tags.join(', ')}</p>`;

      detailsElement.style.color = 'white';
      elements.appendChild(imageElement);
      elements.appendChild(detailsElement);
      container.appendChild(elements);
    });
  }

  renderApps(objects);

  // Entferne die alten Event-Listener
  document.querySelectorAll('.filters input[type="checkbox"]').forEach(checkbox => {
    checkbox.removeEventListener('change', filterData);
  });

  document.querySelectorAll('.year-input input').forEach(input => {
    input.removeEventListener('input', filterData);
  });

  document.querySelectorAll('.price-input input').forEach(input => {
    input.removeEventListener('input', filterData);
  });

  // Füge für die Checkboxen Event-Listener hinzu
  document.querySelectorAll('.filters input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterData);
  });

  document.querySelector(".year-input .input-min").addEventListener("input", function () {
    if (parseInt(this.value) > parseInt(document.querySelector(".year-input .input-max").value) || parseInt(this.value) < 0) {
      this.value = Math.max(0, parseInt(document.querySelector(".year-input .input-max").value));
    }
    filterData();
  });
  document.querySelector(".year-input .input-max").addEventListener("input", function () {
    if (parseInt(this.value) < parseInt(document.querySelector(".year-input .input-min").value) || parseInt(this.value) > 2024) {
      this.value = Math.min(2024, parseInt(document.querySelector(".year-input .input-min").value));
    }
    filterData();
  });

  document.querySelector(".price-input .input-min").addEventListener("input", function () {
    if (parseInt(this.value) > parseInt(document.querySelector(".price-input .input-max").value) || parseInt(this.value) < 0) {
      this.value = Math.max(0, parseInt(document.querySelector(".price-input .input-max").value));
    }
    filterData();
  });

  document.querySelector(".price-input .input-max").addEventListener("input", function () {
    if (parseInt(this.value) < parseInt(document.querySelector(".price-input .input-min").value) || parseInt(this.value) > 60) {
      this.value = Math.min(60, parseInt(document.querySelector(".price-input .input-min").value));
    }
    filterData();
  });

  document.querySelector(".year-input .input-min").addEventListener("input", filterData);
  document.querySelector(".year-input .input-max").addEventListener("input", filterData);
  document.querySelector(".price-input .input-min").addEventListener("input", filterData);
  document.querySelector(".price-input .input-max").addEventListener("input", filterData);

  function filterData() {
    let selectedTags = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.id);

    let minYear = parseInt(document.querySelector(".year-input .input-min").value);
    let maxYear = parseInt(document.querySelector(".year-input .input-max").value);
    let minPrice = parseInt(document.querySelector(".price-input .input-min").value);
    let maxPrice = parseInt(document.querySelector(".price-input .input-max").value);

    let searchTerm = document.getElementById('searchInput').value.toLowerCase();

    let filteredData = data.filter(app => {
      const [name, description, price, alter, typ, jahr, tags] = app.split(',');

      const tagMatch = selectedTags.length === 0 || selectedTags.every(tag => tags.includes(tag));
      const yearMatch = parseInt(jahr) >= minYear && parseInt(jahr) <= maxYear;
      const priceMatch = parseInt(price) >= minPrice && parseInt(price) <= maxPrice;
      const searchMatch = searchTerm.length === 0 || name.toLowerCase().includes(searchTerm);

      return tagMatch && yearMatch && priceMatch && searchMatch;
    });

    const filteredObjects = filteredData.map(app => {
      const [name, description, price, alter, typ, jahr, tags] = app.split(',');

      return {
        name,
        description,
        price,
        alter,
        typ,
        jahr,
        tags: tags.split(';'),
      };
    });

    renderApps(filteredObjects);
  }

  document.getElementById('searchInput').addEventListener('input', function (event) {
    handleInputEvent(event);
  });

  const entries = data.map(entry => {
    const parts = entry.split(", ");
    return {
      name: parts[0],
      description: parts[1],
      price: parts[2],
      rating: parts[3],
      type: parts[4],
      year: parts[5],
      category: parts[6]
    };
  });

  function sortEntries(entries, sortOrder) {
    switch (sortOrder) {
      case "priceAsc":
        return entries.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      case "priceDesc":
        return entries.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      case "yearAsc":
        return entries.sort((a, b) => parseFloat(a.jahr) - parseFloat(b.jahr));
      case "yearDesc":
        return entries.sort((a, b) => parseFloat(b.jahr) - parseFloat(a.jahr));
      case "alphaAsc":
        return entries.sort((a, b) => a.name.localeCompare(b.name));
      case "alphaDesc":
        return entries.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return entries;
    }
  }


});
