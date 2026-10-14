const siteData = {
  nav: {
    brandName: "GI",
    brandSubtitle: "Creative Space",
    menu: {
      telugu: ["హోమ్", "విశ్వం", "పంచభూతాలు", "మన ఆలోచన", "సంప్రదించండి"],
      english: ["Home", "Universe", "Panchabhutas", "Our Thought", "Contact"]
    }
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

  worlds: [
    {
      id: "writings",
      elementTelugu: "🌊 జలం",
      elementEnglish: "Water",
      nameTelugu: "GI.Writings",
      nameEnglish: "GI.Writings",
      descTelugu: "కవిత్వం, కథలు, మరియు భావ ప్రవాహం.",
      descEnglish: "Poetry, stories, and the flow of expression.",
      link: "writings.html"
    },
    {
      id: "devotional",
      elementTelugu: "🔥 అగ్ని",
      elementEnglish: "Fire",
      nameTelugu: "GI.Devotional",
      nameEnglish: "GI.Devotional",
      descTelugu: "భక్తి గీతాలు, ఆలోచనాత్మక ఆధ్యాత్మిక రచనలు.",
      descEnglish: "Devotional lyrics and spiritual reflections.",
      link: "devotional.html"
    },
    {
      id: "education",
      elementTelugu: "◇ భూమి",
      elementEnglish: "Earth",
      nameTelugu: "GI.Education",
      nameEnglish: "GI.Education",
      descTelugu: "తెలుసుకోవడం మొదటి అడుగు. అర్థం చేసుకోవడం ప్రయాణం.",
      descEnglish: "Knowing is the first step. Understanding is the journey.",
      link: "education.html"
    },
    {
      id: "media",
      elementTelugu: "〰️ వాయువు",
      elementEnglish: "Air",
      nameTelugu: "GI.Media",
      nameEnglish: "GI.Media",
      descTelugu: "వీడియోలు, స్క్రిప్ట్స్, అడ్వర్టైజింగ్ కాన్సెప్ట్స్.",
      descEnglish: "Videos, scripts, and advertising concepts.",
      link: "media.html"
    },
    {
      id: "space",
      elementTelugu: "∞ ఆకాశం",
      elementEnglish: "Space",
      nameTelugu: "GI.Space",
      nameEnglish: "GI.Space",
      descTelugu: "ఇంకా పేరు పెట్టని ఆలోచనలకు ఒక స్థలం.",
      descEnglish: "A space for yet-unnamed thoughts.",
      link: "space.html"
    }
  ],

  // Page Specific Content for Language Toggle
  pageContent: {
    writings: {
      title: { telugu: "మనసులో పుట్టిన మాటలకు ఒక చోటు.", english: "A place for words born in the heart." },
      subtitle: { telugu: "కొన్ని ఆలోచనలు చెప్పడానికి కాదు… రాయడానికి పుడతాయి.", english: "Some thoughts are not meant to be spoken… they are born to be written." },
      p1: { 
        telugu: "మన చుట్టూ కనిపించే చిన్న విషయాల నుంచి, మనసులో మిగిలిపోయే పెద్ద భావాల వరకు — ప్రతి అనుభవానికి ఒక కథ ఉంటుంది.", 
        english: "From the small things we see around us to the grand feelings left in the mind — every experience has a story." 
      },
      p2: { 
        telugu: "ఊరి అరుగు, గోదావరి గట్టు, మట్టివాసన, మనుషుల మాటలు, జ్ఞాపకాలు, నవ్వులు, బాధలు… ఇవన్నీ మన రాతల్లోకి వస్తాయి.", 
        english: "The village veranda, the Godavari bund, the scent of earth, people's words, memories, smiles, sorrows… all these flow into our writings." 
      },
      p3: { 
        telugu: "ఇక్కడ రాసేది కేవలం అక్షరాలు కాదు. మనకు అనిపించినదాన్ని మనసుకు అర్థమయ్యేలా చెప్పే ప్రయత్నం.", 
        english: "What is written here is not just letters. It is an attempt to make our feelings understood by the heart." 
      },
      categoryTitle: { telugu: "Possible Categories", english: "Possible Categories" },
      categoryText: { 
        telugu: "కథలు • కవితలు • గోదావరి కబుర్లు • జ్ఞాపకాలు • ఆలోచనలు • చిన్న పరిశీలనలు", 
        english: "Stories • Poems • Godavari Chats • Memories • Thoughts • Small Observations" 
      }
    },
    devotional: {
      title: { telugu: "భక్తికి మాటలు అవసరం లేదు. భావం చాలు.", english: "Devotion needs no words. Feeling is enough." },
      subtitle: { telugu: "మన సంస్కృతిలో కథలు కేవలం గతాన్ని చెప్పవు. మనకు ఎలా జీవించాలో కూడా చెబుతాయి.", english: "Stories in our culture do not just tell the past; they tell us how to live." },
      p1: { 
        telugu: "దేవతల కథల్లో మనం చూసేది అద్భుతాలు మాత్రమే కాదు. ధైర్యం, నమ్మకం, మంచితనం, ధర్మం, కరుణ, సహనం — మన జీవితానికి అవసరమైన ఎన్నో భావాలు అందులో ఉంటాయి.", 
        english: "What we see in divine stories are not just miracles. Courage, trust, goodness, righteousness, compassion, patience — many values essential to our life reside in them." 
      },
      p2: { 
        telugu: "పండుగలు, అమ్మవారి అలంకారాలు, పురాణ కథలు, మన ఊరి ఆచారాలు — వాటి వెనుక ఉన్న భావాన్ని సులభమైన మాటల్లో తెలుసుకునే స్థలం ఇది.", 
        english: "Festivals, divine adornments, mythological tales, our village traditions — this is a place to understand the essence behind them in simple words." 
      },
      quote: { 
        telugu: "భక్తి మనసులో మొదలవుతుంది. భావం జీవితంలో కనిపిస్తుంది.", 
        english: "Devotion begins in the heart. The essence appears in life." 
      }
    },
    education: {
      title: { telugu:
