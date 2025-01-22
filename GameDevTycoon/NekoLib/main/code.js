var NekoLib = {};
(function() {
  // Importing Libraries
  const anime = require('./lib/anime-master/lib/anime.js');
  const Chart = require('./lib/chart.js-master/dist/chart.js');
  const dayjs = require('./lib/dayjs-dev/src/index.js');
  const { Howl, Howler } = require('./lib/howler.js-master/dist/howler.js');
  const JSZip = require('./lib/jszip-main/lib/index.js');

  // Add a method to expose libraries for other mods
  NekoLib.getLibrary = function(libName) {
    const libraries = {
      anime,
      Chart,
      dayjs,
      Howl,
      Howler,
      JSZip
    };
    return libraries[libName] || null;
  };

  // Add an event to the game
  GDT.addEvent({
    id: "65695d89-6601-4052-86b9-d754eba9c25e",
    date: "1/1/3",
    isRandom: false,
    ignoreGameLengthModifier: true,
    maxTriggers: 1,
    getNotification: function(company) {
      return new Notification({
        header: "User License Agreement - NekoLib",
        text: "Please read the User License Agreement carefully. By using this service, you agree to the terms of this agreement.\nThe full terms of the User License Agreement are available at: https://nekolib.justinsanjp.de/agreement.\n\nBy agreeing, you confirm:\n\nThe service will only be used in accordance with the stated terms.\nYou will refrain from any illegal or abusive actions in connection with this service.\nAll applicable privacy policies and legal regulations will be adhered to.\nBy clicking \"Agree,\" you confirm your acceptance of this agreement. If you do not agree, please do not use this service.",
        image: "",
        buttonText: "Agree",
        weeksUntilFired: 1
      });
    }
  });

  // Add general guidelines event
  GDT.addEvent({
    id: "4222ebef-1826-4f82-8dbd-d33876075c71",
    date: "1/1/3",
    isRandom: false,
    ignoreGameLengthModifier: true,
    maxTriggers: 1,
    getNotification: function(company) {
      return new Notification({
        header: "General Guidelines - NekoLib",
        text: "\n1. Do not share this mod with others – This mod is for your personal use only.  \n2. Do not publish this mod without permission – Any public release requires prior written consent.  \n3. **Do not modify this mod** – Altering, editing, or reverse-engineering this mod is strictly prohibited.  \n4. Respect intellectual property – The content and assets of this mod are protected and must not be used outside the intended purpose.  \n5. Follow the terms of use – Ensure compliance with any additional terms provided by the mod creator.  \n\nBy using this mod, you agree to adhere to these guidelines. Failure to comply may result in revoked access or further actions.  \n",
        image: "",
        buttonText: "OK",
        weeksUntilFired: 1
      });
    }
  });

  // Add achievements using UltimateLib
  UltimateLib.Achievements.add(UltimateLib.Achievements.create({
    id: "192230a9-99e1-4611-82f8-155cdfd42a4c",
    title: "NekoLib Activated",
    description: "You have successfully activated NekoLib",
    tint: "#FFFFFF",
    value: 1,
    hidden: false,
    canEarnMultiple: false,
    isAchieved: function() {
      return true;
    }
  }));

  UltimateLib.Achievements.add(UltimateLib.Achievements.create({
    id: "8ce47117-4bdc-4c13-8d76-b5a3131db386",
    title: "New Achievement",
    description: "New Achievement Description",
    tint: "#FFFFFF",
    value: 1,
    hidden: false,
    canEarnMultiple: false,
    isAchieved: function() {
      return true;
    }
  }));
})();
