export const homeContent = {
  hero: {
    title: "Emelt díjas telefonszám igénylés egyszerűen",
    subtitle:
      "Átlátható feltételek, gyors bekapcsolás, segítség az igénylés minden lépésében (Audiotex, Audiofix).",
    primaryCta: { href: "/kapcsolat/", label: "Visszahívást kérek" },
    secondaryCta: { href: "/igenyles/", label: "Feltételek" },
    stats: [
      { label: "Tapasztalat", value: "11+ év" },
      { label: "Típusok", value: "Audiotex / Audiofix" },
      { label: "Indulás", value: "akár pár nap" },
      { label: "Fókusz", value: "Emelt díjas szám" },
    ],
  },
  whyUs: {
    title: "Miért minket választanak?",
    items: [
      {
        title: "11 éves tapasztalat",
        body:
          "A sok év alatt megoldott helyzetek és ügyféligények olyan hátteret adnak, amivel az elképzeléseidre is gyors és hatékony megoldást találunk.",
      },
      {
        title: "Alacsony költségek",
        body:
          "A díjak a forgalom függvényében csökkenhetnek, és rendszeres akciókkal is segítjük a vállalkozások indulását.",
      },
      {
        title: "Megbízhatóság",
        body:
          "Nincsenek apróbetűs részek: azt kapod, amit megbeszéltünk, és nem módosítunk egyoldalúan bejelentés nélkül.",
      },
    ],
  },
  about: {
    kicker: "Az emelt díjas számokról néhány szóban",
    body: [
      "Az emelt díjas telefonszámok felhívását követően a hívó fél a szolgáltatás igénybevételéért a szokásos tarifáknál nagyobb percdíjat vagy hívásdíjat fizet.",
      "Ezen a díjon osztozik a szolgáltató és a tartalomszolgáltató. Az általunk biztosított számok esetében ez a díjmegoszlás jellemzően 50-50% körüli, és a választott tarifasáv nagyságával arányosan a részesedésed növekedhet.",
    ],
  },
  requirements: {
    title: "A hozzájutás feltételei",
    intro:
      "Az emelt díjas számok elindítása gyorsan pénzt termelő vállalkozások közé tartozhat. Ehhez igazodva négy pontra szűkítettük a szükséges feltételeket.",
    cta: { href: "/igenyles/", label: "A feltételekről részletesen" },
    items: [
      {
        title: "Számlaképesség",
        body:
          "A számok igényléséhez üzleti adószám szükséges — csak vállalkozás vagy cég igényelhet emelt díjas számot.",
      },
      {
        title: "Cégkivonat",
        body:
          "A vállalkozás cégkivonatára vagy a bejegyzés igazolására szükség van, elektronikusan is beküldhető.",
      },
      {
        title: "Átirányítási hívószám",
        body:
          "Szükséges egy mobil vagy vezetékes telefonszám, ahová az emelt díjas számra beérkező hívásokat át tudjuk irányítani.",
      },
      {
        title: "Egy éves szerződés",
        body: "A szám igénylése minimum 1 évre történik, a szerződések határozott idejűek.",
      },
    ],
  },
  types: {
    title: "Két típus létezik",
    items: [
      {
        tag: "A legnépszerűbb",
        title: "Audiotex",
        body:
          "Percdíj alapú elszámolás: a hívás időtartama alapján történik a díjazás (másodperc pontossággal).",
        href: "/audiotex/",
        cta: "Részletesebben",
      },
      {
        tag: "Hívásesemény alapú",
        title: "Audiofix",
        body:
          "Hívásesemény alapon elszámolt szolgáltatás, több tarifasávban igényelhető.",
        href: "/audiofix/",
        cta: "Részletesebben",
      },
    ],
  },
  steps: {
    kicker: "Minden út az első lépéssel kezdődik",
    title: "Segíteni fogjuk az igénylés minden lépésében",
    intro:
      "A szerződéskötés után sem hagyunk magadra: figyeljük a számok teljesítményét, és tanácsokkal segítünk a magasabb forgalom érdekében.",
    items: [
      {
        step: "01",
        title: "Elküldjük a papírokat",
        body: "A kitöltött igénylőlap alapján elkészített szerződést elküldjük neked.",
      },
      {
        step: "02",
        title: "Visszaküldöd a papírokat",
        body:
          "A szerződés beérkezése után előkészítjük a számot a bekapcsolásra az induló díjak megérkezéséig.",
      },
      {
        step: "03",
        title: "Bekapcsoljuk a számo(ka)t",
        body:
          "Sokszor már 3 nap alatt eljutunk idáig — a valós idő a te gyorsaságodtól is függ.",
      },
    ],
    cta: { href: "/igenyles/", label: "Részletesebben" },
  },
  testimonials: {
    kicker: "Kényszer nélkül mondták",
    title: "Ügyfeleink ajánlásai",
    items: [
      {
        quote:
          "A veletek való tárgyalás során éreztem azt, hogy nálatok több leszek, mint egy ügyfél a sok közül. Azóta is minden évben azt érzem, hogy jó döntés voltatok.",
        author: "B. Gábor",
      },
      {
        quote:
          "Családiasabb, segítőkészebb, rugalmasabb környezetben dolgozhattam volna már évekkel ezelőtt — és tőletek nagyobb részesedést kapok.",
        author: "V. T. Emma",
      },
      {
        quote:
          "Problémamentesség, rugalmasság, korrektség, segítőkészség és pontosság. Idővel a problémamentesség nagyon felértékelődik egy üzletben.",
        author: "F. Ildikó",
      },
    ],
  },
  finalCta: {
    title: "Ön a legjobbat érdemli",
    body: "Amikor a tapasztalat az Ön szolgálatába áll — induljunk el együtt.",
    cta: { href: "/kapcsolat/", label: "Visszahívást kérek" },
  },
} as const;

