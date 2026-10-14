const siteData = {
  nav: {
    brandName: "GI",
    brandSubtitle: "Creative Space",
    menu: {
      telugu: ["హోమ్", "జలం", "అగ్ని", "భూమి", "వాయువు", "ఆకాశం"],
      english: ["Home", "Water", "Fire", "Earth", "Air", "Space"]
    },
    langToggle: "తెలుగు | EN"
  },

  hero: {
    tagline: {
      telugu: "గోదావరి ఒడ్డున పుట్టిన ఆలోచనలకు ఒక ప్రపంచం.",
      english: "A world of thoughts born on the banks of Godavari."
    },
    subLine: {
      telugu: "మనసులో పుట్టే ప్రతి ఆలోచనకు ఒక ప్రవాహం ఉంటుంది.",
      english: "Every thought born in the heart has a flow."
    },
    description: {
      telugu: "ఆలోచనలు, భావాలు, జ్ఞానం, సృజనాత్మకత మరియు భవిష్యత్ విజన్స్ — ఇవన్నీ ఒకే చోట కలుసుకునే స్థలం.",
      english: "A place where thoughts, emotions, knowledge, creativity, and future visions meet."
    },
    ctaButton: {
      telugu: "మన ప్రపంచాన్ని చూడండి →",
      english: "Explore Our World →"
    }
  },

  ourThought: {
    label: { telugu: "మన ఆలోచన", english: "Our Thought" },
    heading: { telugu: "ఆలోచనకు ఒక స్థలం కావాలి.", english: "A thought needs a space." }
  },

  worlds: [
    {
      id: "writings",
      elementTelugu: "🌊 జలం",
      elementEnglish: "Water",
      nameTelugu: "GI.Writings",
      nameEnglish: "GI.Writings",
      descTelugu: "కవిత్వం, కథలు, మరియు భావ ప్రవాహం.",
      descEnglish: "Poetry, stories, and the flow of expression.",
      link: "pages/writings.html"
    },
    {
      id: "devotional",
      elementTelugu: "🔥 అగ్ని",
      elementEnglish: "Fire",
      nameTelugu: "GI.Devotional",
      nameEnglish: "GI.Devotional",
      descTelugu: "భక్తి గీతాలు, ఆలోచనాత్మక ఆధ్యాత్మిక రచనలు.",
      descEnglish: "Devotional lyrics and spiritual reflections.",
      link: "pages/devotional.html"
    },
    {
      id: "education",
      elementTelugu: "◇ భూమి",
      elementEnglish: "Earth",
      nameTelugu: "GI.Education",
      nameEnglish: "GI.Education",
      descTelugu: "తెలుసుకోవడం మొదటి అడుగు. అర్థం చేసుకోవడం ప్రయాణం.",
      descEnglish: "Knowing is the first step. Understanding is the journey.",
      link: "pages/education.html"
    },
    {
      id: "media",
      elementTelugu: "〰️ వాయువు",
      elementEnglish: "Air",
      nameTelugu: "GI.Media",
      nameEnglish: "GI.Media",
      descTelugu: "వీడియోలు, స్క్రిప్ట్స్, అడ్వర్టైజింగ్ కాన్సెప్ట్స్.",
      descEnglish: "Videos, scripts, and advertising concepts.",
      link: "pages/media.html"
    },
    {
      id: "space",
      elementTelugu: "∞ ఆకాశం",
      elementEnglish: "Space",
      nameTelugu: "GI.Space",
      nameEnglish: "GI.Space",
      descTelugu: "ఇంకా పేరు పెట్టని ఆలోచనలకు ఒక స్థలం.",
      descEnglish: "A space for yet-unnamed thoughts.",
      link: "pages/space.html"
    }
  ],

  // Page-wise Dual Language Content
  pagesContent: {
    writings: {
      title: { telugu: "GI.Writings - జలం", english: "GI.Writings - Water" },
      element: { telugu: "🌊 జలం", english: "🌊 Water" },
      heading: { telugu: "మనసులో పుట్టిన మాటలకు ఒక చోటు.", english: "A place for the words born in the mind." },
      sub: { telugu: "కొన్ని ఆలోచనలు చెప్పడానికి కాదు… రాయడానికి పుడతాయి.", english: "Some thoughts are not meant to be spoken… they are born to be written." },
      p1: { 
        telugu: "మన చుట్టూ కనిపించే చిన్న విషయాల నుంచి, మనసులో మిగిలిపోయే పెద్ద భావాల వరకు — ప్రతి అనుభవానికి ఒక కథ ఉంటుంది.", 
        english: "From the small things we see around us to the deep feelings left in the heart — every experience has a story." 
      },
      p2: { 
        telugu: "ఊరి అరుగు, గోదావరి గట్టు, మట్టివాసన, మనుషుల మాటలు, జ్ఞాపకాలు, నవ్వులు, బాధలు… ఇవన్నీ మన రాతల్లోకి వస్తాయి.", 
        english: "The village veranda, the Godavari bund, the scent of earth, people's words, memories, smiles, sorrows… all of these flow into our writings." 
      },
      p3: { 
        telugu: "ఇక్కడ రాసేది కేవలం అక్షరాలు కాదు. మనకు అనిపించినదాన్ని మనసుకు అర్థమయ్యేలా చెప్పే ప్రయత్నం.", 
        english: "What is written here is not just letters. It is an effort to convey what we feel in a way the heart understands." 
      },
      boxTitle: { telugu: "Possible Categories", english: "Possible Categories" },
      boxText: { telugu: "కథలు • కవితలు • గోదావరి కబుర్లు • జ్ఞాపకాలు • ఆలోచనలు • చిన్న పరిశీలనలు", english: "Stories • Poems • Godavari Chats • Memories • Thoughts • Small Observations" }
    },
    devotional: {
      title: { telugu: "GI.Devotional - అగ్ని", english: "GI.Devotional - Fire" },
      element: { telugu: "🔥 అగ్ని", english: "🔥 Fire" },
      heading: { telugu: "భక్తికి మాటలు అవసరం లేదు. భావం చాలు.", english: "Devotion needs no words. Emotion is enough." },
      sub: { telugu: "మన సంస్కృతిలో కథలు కేవలం గతాన్ని చెప్పవు. మనకు ఎలా జీవించాలో కూడా చెబుతాయి.", english: "Stories in our culture do not just tell the past; they teach us how to live." },
      p1: { 
        telugu: "దేవతల కథల్లో మనం చూసేది అద్భుతాలు మాత్రమే కాదు. ధైర్యం, నమ్మకం, మంచితనం, ధర్మం, కరుణ, సహనం — మన జీవితానికి అవసరమైన ఎన్నో భావాలు అందులో ఉంటాయి.", 
        english: "What we see in divine stories are not just miracles. Courage, belief, goodness, righteousness, compassion, patience — many values essential to life are found within them." 
      },
      p2: { 
        telugu: "పండుగలు, అమ్మవారి అలంకారాలు, పురాణ కథలు, మన ఊరి ఆచారాలు — వాటి వెనుక ఉన్న భావాన్ని సులభమైన మాటల్లో తెలుసుకునే స్థలం ఇది.", 
        english: "Festivals, divine adornments, mythological tales, and our village traditions — this is a place to understand the essence behind them in simple words." 
      },
      boxText: { telugu: "భక్తి మనసులో మొదలవుతుంది. భావం జీవితంలో కనిపిస్తుంది.", english: "Devotion begins in the heart. Emotion is seen in life." }
    },
    education: {
      title: { telugu: "GI.Education - భూమి", english: "GI.Education - Earth" },
      element: { telugu: "◇ భూమి", english: "◇ Earth" },
      heading: { telugu: "తెలుసుకోవడం మొదటి అడుగు. అర్థం చేసుకోవడం అసలు ప్రయాణం.", english: "Knowing is the first step. Understanding is the true journey." },
      sub: { telugu: "ప్రతి ప్రశ్నకు వెంటనే సమాధానం ఉండకపోవచ్చు. కానీ ప్రతి ప్రశ్న ఒక కొత్త ఆలోచనకు తలుపు తెరుస్తుంది.", english: "Every question may not have an immediate answer, but every question opens a door to a new thought." },
      p1: { 
        telugu: "మన చుట్టూ ఉన్న ప్రపంచం గురించి, విషయాల గురించి — క్లిష్టమైన విషయాలను సులభమైన భాషలో అర్థం చేసుకునే ప్రయత్నం.", 
        english: "An effort to understand complex things about the world around us in simple language." 
      },
      p2: { 
        telugu: "చదువు అంటే పుస్తకాల్లో ఉన్నదే కాదు. మన అనుభవం కూడా ఒక పాఠమే. మన తప్పు కూడా ఒక పాఠమే. మన ప్రశ్న కూడా ఒక పాఠమే.", 
        english: "Education is not just what is in books. Our experience is a lesson. Our mistake is a lesson. Our question is a lesson." 
      },
      boxText: { telugu: "ప్రశ్నించండి. తెలుసుకోండి. అర్థం చేసుకోండి. ముందుకు వెళ్లండి.", english: "Question. Learn. Understand. Move forward." }
    },
    media: {
      title: { telugu: "GI.Media - వాయువు", english: "GI.Media - Air" },
      element: { telugu: "〰️ వాయువు", english: "〰️ Air" },
      heading: { telugu: "చెప్పే కథను చూపిస్తే… అది ఒక అనుభవం అవుతుంది.", english: "If you show the story you tell… it becomes an experience." },
      sub: { telugu: "కొన్ని భావాలు మాటల్లో కంటే ఒక దృశ్యంలో ఎక్కువగా కనిపిస్తాయి.", english: "Some feelings appear more vividly in a visual than in words." },
      p1: { 
        telugu: "వీడియోలు, చిన్న కథలు, visual experiments, brand stories, AI creations, creative concepts — ఆలోచనలకు దృశ్యరూపం ఇచ్చే స్థలం GI.Media.", 
        english: "Videos, short stories, visual experiments, brand stories, AI creations, creative concepts — GI.Media is the place that gives visual form to thoughts." 
      },
      p2: { 
        telugu: "ఒక చిన్న వీడియో కూడా ఒక కథ చెప్పగలదు. ఒక frame ఒక భావాన్ని గుర్తు చేయగలదు.", 
        english: "Even a short video can tell a story. A single frame can evoke an emotion." 
      },
      boxText: { telugu: "ఆలోచన → దృశ్యం → అనుభవం.", english: "Thought → Vision → Experience." }
    },
    space: {
      title: { telugu: "GI.Space - ఆకాశం", english: "GI.Space - Space" },
      element: { telugu: "∞ ఆకాశం", english: "∞ Space" },
      heading: { telugu: "ఇంకా పేరు పెట్టని ఆలోచనలకు ఒక స్థలం.", english: "A space for yet-unnamed thoughts." },
      sub: { telugu: "ప్రతి ఆలోచనను ఒక categoryలో పెట్టాల్సిన అవసరం లేదు.", english: "Every thought does not need to be put into a category." },
      p1: { 
        telugu: "కొన్ని ఆలోచనలు రాతగా మొదలవుతాయి. కొన్ని వీడియోగా మారతాయి. మరికొన్ని… ఇంకా ఏ రూపం తీసుకోవాలో కూడా తెలియదు. అలాంటి ఆలోచనల కోసం ఈ space.", 
        english: "Some thoughts start as writing. Some become videos. Others… don't even know what form to take yet. This space is for such thoughts." 
      },
      p2: { 
        telugu: "ఇది ఒక category కాదు. ఇది ఒక అవకాశం. ఇక్కడి నుంచే కొత్త projects పుట్టవచ్చు. కొత్త worlds పుట్టవచ్చు.", 
        english: "This is not a category. This is an opportunity. From here new projects may be born. New worlds may emerge." 
      },
      boxText: { telugu: "ఇక్కడ ముగింపు లేదు.\nఇక్కడి నుంచే ఇంకేదో మొదలవుతుంది.", english: "There is no end here.\nSomething else begins right from here." }
    }
  },

  roots: {
    titleTelugu: "గోదావరి మూలాలు. ఇప్పనపాడు ఆత్మ.",
    titleEnglish: "Godavari Roots. Ippanapadu Soul.",
    descTelugu: "మనం ఎక్కడి నుంచి వచ్చామో మర్చిపోకుండా, మనం ఎక్కడికి వెళ్లాలనుకుంటున్నామో ఊహించుకునే ప్రపంచం.\nగోదావరి మనకు కేవలం ఒక నది కాదు — అది జ్ఞాపకం, జీవితం, మనుషులు, మాట, మన మూలం.",
    descEnglish: "A world where we imagine where we want to go, without forgetting where we came from."
  }
};
