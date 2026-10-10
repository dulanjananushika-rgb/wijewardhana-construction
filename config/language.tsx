"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "si";

const messages = {
  en: {
    language: { label: "Choose language", english: "English", sinhala: "Sinhala" },
    nav: {
      overview: "Overview", build: "The build", about: "About", services: "Services",
      process: "Process", principles: "Principles", contact: "Contact", explore: "EXPLORE",
      primary: "Primary navigation", mobile: "Mobile navigation", open: "Open navigation menu",
      close: "Close navigation menu",
    },
    common: { skip: "Skip to content", whatsapp: "WhatsApp", backToTop: "BACK TO TOP", location: "Kurunegala, Sri Lanka" },
    hero: {
      eyebrow: "A HOME, SHAPED WITH INTENTION", line1: "FROM FOUNDATION.", line2: "TO YOUR",
      line3: "DREAM HOME.", description: "Thoughtfully built homes, from the first foundation to the final finishing touch.",
      primary: "START YOUR PROJECT", secondary: "REPLAY THE REVEAL", scroll: "VIEW THE CONCEPT FILMS",
      contactNote: "Message {phone} on WhatsApp.", missingContact: "Contact details are not configured yet.",
      scrollLabel: "View the architectural concept film", selectorLabel: "Select an architectural concept film",
      blueHour: "BLUE HOUR", daylight: "DAYLIGHT", blueTitle: "BLUE-HOUR RESIDENCE STUDY",
      daylightTitle: "DAYLIGHT RESIDENCE STUDY", conceptFilm: "ARCHITECTURAL CONCEPT FILM",
      blueAlt: "Architectural concept film showing a contemporary tropical residence at blue hour; not a completed Wijewardhana Construction project.",
      daylightAlt: "Architectural concept film showing a contemporary two-storey tropical residence in daylight; not a completed Wijewardhana Construction project.",
      mediaFallback: "Your browser does not support embedded video. The architectural concept image remains available above.",
      play: "PLAY FILM", retry: "RETRY FILM", replay: "REPLAY FILM", playLabel: "Play the architectural concept film",
    },
    story: {
      eyebrow: "THE CONSTRUCTION STORY", label: "ARCHITECTURAL CONCEPT MODEL", titleStart: "A home takes", titleAccent: "shape.",
      intro: "Follow one contemporary tropical residence as its structure, shelter and character come together.",
      scroll: "SCROLL TO BUILD", disclosure: "A digital architectural study. It does not depict a completed Wijewardhana Construction project.",
      scene: "Interactive house concept model", sceneFallback: "Static architectural illustration of the same house concept, shown at the selected construction stage", scene3d: "Scroll-driven three-dimensional architectural house model", study: "WIJEWARDHANA / STUDY 01", concept: "CONCEPT MODEL",
      progress: "House construction stages", stages: "Construction stages", stage: "Stage {number}: {label}",
      planningLabel: "The plan", planningTitle: "A place to begin.", planningDescription: "The building footprint is set into the site. A clear plan gives the home its orientation, proportions and place in the landscape.",
      foundationLabel: "Foundation", foundationTitle: "Grounded with care.", foundationDescription: "Isolated footings, ground beams and the base slab establish the support beneath the residence.",
      structureLabel: "Concrete frame", structureTitle: "The frame rises.", structureDescription: "Reinforced concrete columns, beams and floor plates define a balanced two-storey structure.",
      wallsLabel: "Walls", wallsTitle: "Rooms take form.", wallsDescription: "Masonry walls enclose the rooms while generous openings keep the living spaces connected to daylight and garden.",
      roofLabel: "Roof & shade", roofTitle: "Shelter from the sun.", roofDescription: "A broad, low-profile roof and deep eaves create shade for the home and its upper terrace.",
      finishesLabel: "Finishes", finishesTitle: "Material brings warmth.", finishesDescription: "Plaster, textured stone, timber screens, dark frames and glass give the same structure its finished architectural character.",
      residenceLabel: "The residence", residenceTitle: "A home, ready to live in.", residenceDescription: "Planting, a quiet arrival path and warm evening light complete the residence concept.",
    },
    about: {
      eyebrow: "THE PERSON BEHIND THE WORK", kicker: "WIJEWARDHANA CONSTRUCTION", titleStart: "A home should feel like",
      titleAccent: "yours.", description: "For {years} years, {name} has been building homes. The belief behind the work is simple: a home should be planned around the people who live in it, built with care, and finished with attention to detail.",
      signatureNote: "Building homes · {location}", drawing: "A HOME, CONSIDERED", drawingTitle: "Architectural line study",
      drawingDescription: "An abstract line drawing of a contemporary two-storey home, used as an editorial illustration.",
      caption: "Every home begins with a clear idea of how it should feel to live there.", talk: "Talk through your home project",
    },
    services: {
      eyebrow: "HOW WE CAN HELP", proposal: "PROPOSED SERVICES · FOR REVIEW",
      kicker: "FROM THE FIRST PLAN TO THE LAST DETAIL", titleStart: "One home.", titleEnd: "Many ways", titleAccent: "forward.",
      description: "Explore the types of residential building work Wijewardhana Construction may offer. These categories are proposals and should be confirmed before they are published as services.",
      listLabel: "Proposed residential construction services",
      service1: "Residential construction", service1Description: "New homes planned and built around the needs of the people who will live in them.",
      service2: "Renovations & remodeling", service2Description: "Improvements that give existing rooms, homes and living spaces a new purpose.",
      service3: "Foundation & structural work", service3Description: "The groundwork and structural elements that support a home from the beginning.",
      service4: "Roofing & exterior construction", service4Description: "Roof and exterior work that shapes the home's shelter, character and arrival.",
      service5: "Interior & exterior finishing", service5Description: "Finishing work that brings surfaces, materials and architectural details together.",
      service6: "Complete home construction", service6Description: "A proposed end-to-end building service, from early planning through final handover.",
    },
    process: {
      eyebrow: "THE WAY FORWARD", proposal: "SUGGESTED CUSTOMER JOURNEY · FOR REVIEW", kicker: "A HOME, STEP BY STEP",
      titleStart: "From first conversation", titleEnd: "to", titleAccent: "coming home.",
      description: "A considered home project moves through clear decisions and stages of work. This suggested sequence is here for discussion and should be confirmed with the company.",
      listLabel: "Suggested home construction process", endNote: "THE BEGINNING OF SOMETHING THAT'S YOURS",
      consultation: "Consultation", consultationDescription: "Share your ideas, needs and the kind of home you have in mind.",
      planning: "Planning", planningDescription: "Discuss the scope, layout and key decisions before work begins.",
      foundation: "Foundation", foundationDescription: "Prepare the site and establish the base for the home.",
      structure: "Structure", structureDescription: "Build the primary structural form and define the spaces within.",
      finishing: "Finishing", finishingDescription: "Bring surfaces, materials and details together as the home takes shape.",
      handover: "Handover", handoverDescription: "Review the completed work and prepare the home for its next chapter.",
    },
    principles: {
      eyebrow: "WORKMANSHIP PRINCIPLES", proposal: "PROPOSED PRINCIPLES · FOR REVIEW", kicker: "THE THOUGHT BEHIND THE BUILD",
      titleStart: "Good work is felt in the", titleAccent: "details.",
      lead: "A home takes shape through hundreds of decisions. These proposed principles offer a way to think about each one.",
      listLabel: "Proposed workmanship principles", planTitle: "Plan for real life",
      planDescription: "Begin with the people who will live in the home, and consider how each space should work for them.",
      planMarker: "UNDERSTAND", structureTitle: "Respect the structure",
      structureDescription: "Give the sequence of building, the choice of materials and the home's underlying form careful thought.",
      structureMarker: "RESOLVE", detailTitle: "Care in the details",
      detailDescription: "Bring surfaces, fittings and finishes together so the whole home feels considered and coherent.",
      detailMarker: "REFINE",
    },
    contact: {
      eyebrow: "START A CONVERSATION", kicker: "TELL US WHAT YOU HAVE IN MIND",
      titleStart: "Let's talk about the place you'll", titleAccent: "call home.",
      description: "Share a little about your plans. Your message will open in WhatsApp, where you can review and send it.",
      direct: "CALL DIRECTLY", name: "Your name", phone: "Your contact number", project: "A little about your project",
      required: "required", optional: "(optional)", submit: "CONTINUE IN WHATSAPP",
      whatsappReady: "WhatsApp opens with your message ready for you to review and send.",
      whatsappMissing: "WhatsApp contact is not configured yet.",
      messageIntro: "Hello {name}, I would like to discuss a home project.", messageName: "Name", messagePhone: "Contact number", messageProject: "Project details",
    },
    footer: {
      tagline: "Thoughtful homes, from the first plan to the finishing details.", explore: "EXPLORE", getInTouch: "GET IN TOUCH",
      disclosure: "Architectural films and digital models are concept visualizations, not completed company projects.",
    },
  },
  si: {
    language: { label: "භාෂාව තෝරන්න", english: "English", sinhala: "සිංහල" },
    nav: {
      overview: "ප්‍රධාන පිටුව", build: "ඉදිකිරීම", about: "අප ගැන", services: "සේවාවන්",
      process: "ක්‍රියාවලිය", principles: "වැඩ පිළිවෙත", contact: "විමසන්න", explore: "සොයා බලන්න",
      primary: "ප්‍රධාන සංචාලනය", mobile: "ජංගම සංචාලනය", open: "සංචාලන මෙනුව විවෘත කරන්න",
      close: "සංචාලන මෙනුව වසන්න",
    },
    common: { skip: "අන්තර්ගතයට යන්න", whatsapp: "WhatsApp", backToTop: "ඉහළට යන්න", location: "කුරුණෑගල, ශ්‍රී ලංකාව" },
    hero: {
      eyebrow: "සිතාමතා හැඩගැන්වෙන නිවසක්", line1: "අත්තිවාරමේ සිට", line2: "ඔබේ",
      line3: "සිහින නිවහන දක්වා.", description: "පළමු අත්තිවාරමේ සිට අවසන් නිමාව දක්වා, සැලකිල්ලෙන් ගොඩනඟන නිවාස.",
      primary: "ඔබේ ව්‍යාපෘතිය අරඹන්න", secondary: "නැවත නරඹන්න", scroll: "සංකල්ප චිත්‍රපට බලන්න",
      contactNote: "WhatsApp හරහා {phone} අංකයට පණිවිඩයක් යවන්න.", missingContact: "සම්බන්ධතා තොරතුරු තවම සකසා නැත.",
      scrollLabel: "වාස්තු සංකල්ප චිත්‍රපටය බලන්න", selectorLabel: "වාස්තු සංකල්ප චිත්‍රපටයක් තෝරන්න",
      blueHour: "සන්ධ්‍යා ආලෝකය", daylight: "දහවල් ආලෝකය", blueTitle: "සන්ධ්‍යා නිවාස සංකල්පය",
      daylightTitle: "දහවල් නිවාස සංකල්පය", conceptFilm: "වාස්තු සංකල්ප චිත්‍රපටය",
      blueAlt: "සන්ධ්‍යා ආලෝකයේ නවීන නිවර්තන නිවසක් පෙන්වන වාස්තු සංකල්ප චිත්‍රපටයකි; මෙය Wijewardhana Construction විසින් නිම කළ ව්‍යාපෘතියක් නොවේ.",
      daylightAlt: "දහවල් ආලෝකයේ දෙමහල් නිවර්තන නිවසක් පෙන්වන වාස්තු සංකල්ප චිත්‍රපටයකි; මෙය Wijewardhana Construction විසින් නිම කළ ව්‍යාපෘතියක් නොවේ.",
      mediaFallback: "ඔබේ බ්‍රවුසරයට වීඩියෝව ධාවනය කළ නොහැක. වාස්තු සංකල්ප රූපය මෙහි පවතී.",
      play: "චිත්‍රපටය ධාවනය කරන්න", retry: "නැවත උත්සාහ කරන්න", replay: "නැවත ධාවනය කරන්න", playLabel: "වාස්තු සංකල්ප චිත්‍රපටය ධාවනය කරන්න",
    },
    story: {
      eyebrow: "ඉදිකිරීමේ කතාව", label: "වාස්තු සංකල්ප ආකෘතිය", titleStart: "නිවසක්", titleAccent: "හැඩගැසෙන හැටි.",
      intro: "නවීන නිවර්තන නිවසක ව්‍යුහය, ආවරණය සහ පෙනුම එකට ගොඩනැගෙන අයුරු බලන්න.",
      scroll: "ඉදිකිරීම බලන්න", disclosure: "මෙය ඩිජිටල් වාස්තු අධ්‍යයනයකි. Wijewardhana Construction විසින් නිම කළ ව්‍යාපෘතියක් නොවේ.",
      scene: "අන්තර්ක්‍රියාකාරී නිවාස සංකල්ප ආකෘතිය", sceneFallback: "තෝරාගත් ඉදිකිරීම් අදියරට අනුව දැක්වෙන එම නිවාස සංකල්පයේ ස්ථිතික වාස්තු නිදර්ශනය", scene3d: "අනුචලනය අනුව වෙනස් වන ත්‍රිමාණ නිවාස වාස්තු ආකෘතිය", study: "WIJEWARDHANA / අධ්‍යයනය 01", concept: "සංකල්ප ආකෘතිය",
      progress: "නිවාස ඉදිකිරීමේ අදියර", stages: "ඉදිකිරීමේ අදියර", stage: "අදියර {number}: {label}",
      planningLabel: "සැලැස්ම", planningTitle: "ආරම්භයට තැනක්.", planningDescription: "ගොඩනැගිල්ලේ සැලැස්ම භූමියට ගැළපෙන ලෙස තීරණය කරයි. පැහැදිලි සැලැස්මක් නිවසේ දිශානතිය, ප්‍රමාණය සහ වටපිටාව සමඟ ඇති සම්බන්ධය තීරණය කරයි.",
      foundationLabel: "අත්තිවාරම", foundationTitle: "සැලකිල්ලෙන් පදනම දමමු.", foundationDescription: "හුදකලා පාදම්, බිම් බාල්ක සහ බේස් ස්ලැබ් නිවසට අවශ්‍ය ශක්තිමත් පදනම සකසයි.",
      structureLabel: "කොන්ක්‍රීට් රාමුව", structureTitle: "ව්‍යුහය ඉහළට නැඟේ.", structureDescription: "ශක්තිමත් කළ කොන්ක්‍රීට් කණු, බාල්ක සහ මහල් පුවරු දෙමහල් නිවසේ ව්‍යුහය හැඩගස්වයි.",
      wallsLabel: "බිත්ති", wallsTitle: "කාමර හැඩගැසේ.", wallsDescription: "ගඩොල් බිත්ති කාමර වටා ගොඩනැගෙන අතර, විවෘත ඉඩකඩ නිවසට ආලෝකය සහ උද්‍යානය සමඟ සම්බන්ධයක් ලබා දෙයි.",
      roofLabel: "වහල සහ සෙවණ", roofTitle: "හිරු රශ්මියෙන් ආරක්ෂාව.", roofDescription: "පළල්, පහත් වහලය සහ දිගු වහල දාර නිවසටත් ඉහළ ටෙරසයටත් සෙවණ ලබා දෙයි.",
      finishesLabel: "නිමාවන්", finishesTitle: "ද්‍රව්‍ය නිවසට උණුසුම එක් කරයි.", finishesDescription: "ප්ලාස්ටර්, රළු ගල්, දැව පැනල්, අඳුරු රාමු සහ වීදුරු එකම ව්‍යුහයට අවසන් වාස්තුමය පෙනුම ලබා දෙයි.",
      residenceLabel: "නිවස", residenceTitle: "ජීවත්වීමට සූදානම් නිවසක්.", residenceDescription: "පැළෑටි, සරල පිවිසුම් මාර්ගය සහ උණුසුම් සන්ධ්‍යා ආලෝකය මෙම නිවාස සංකල්පය සම්පූර්ණ කරයි.",
    },
    about: {
      eyebrow: "මෙම කාර්යය පිටුපස සිටින පුද්ගලයා", kicker: "WIJEWARDHANA CONSTRUCTION", titleStart: "නිවසක් ඔබේම තැනක් ලෙස",
      titleAccent: "දැනෙන්න ඕන.", description: "වසර {years}ක් පුරා {name} නිවාස ඉදිකරයි. එහි අදහස සරලයි: ජීවත් වන අයගේ අවශ්‍යතා අනුව සැලසුම් කර, සැලකිල්ලෙන් ගොඩනඟා, සෑම විස්තරයක්ම අවධානයෙන් නිම කිරීම.",
      signatureNote: "නිවාස ඉදිකිරීම · {location}", drawing: "සිතා බැලූ නිවසක්", drawingTitle: "වාස්තු රේඛා අධ්‍යයනය",
      drawingDescription: "සංස්කාරක නිදර්ශනයක් ලෙස යොදා ඇති නවීන දෙමහල් නිවසක රේඛා සටහනකි.",
      caption: "සෑම නිවසක්ම එහි ජීවත් වීම කෙසේ දැනිය යුතුද යන පැහැදිලි අදහසකින් ඇරඹේ.", talk: "ඔබේ නිවාස ව්‍යාපෘතිය ගැන කතා කරමු",
    },
    services: {
      eyebrow: "අපට කළ හැකි දේ", proposal: "යෝජිත සේවාවන් · තහවුරු කිරීමට",
      kicker: "පළමු සැලැස්මේ සිට අවසන් විස්තරය දක්වා", titleStart: "එකම නිවසක්.", titleEnd: "ඉදිරියට යන", titleAccent: "මාර්ග රැසක්.",
      description: "Wijewardhana Construction විසින් ලබා දිය හැකි නිවාස ඉදිකිරීම් සේවා වර්ග මෙහි දැක්වේ. ප්‍රකාශයට පෙර මෙම යෝජිත සේවාවන් තහවුරු කළ යුතුය.",
      listLabel: "යෝජිත නිවාස ඉදිකිරීම් සේවාවන්",
      service1: "නිවාස ඉදිකිරීම", service1Description: "එහි ජීවත් වන අයගේ අවශ්‍යතා අනුව සැලසුම් කර ඉදිකරන නව නිවාස.",
      service2: "අලුත්වැඩියා සහ ප්‍රතිසංස්කරණ", service2Description: "දැනට ඇති කාමර, නිවාස සහ ජීවන අවකාශ නව අරමුණකට සකස් කිරීම.",
      service3: "අත්තිවාරම් සහ ව්‍යුහාත්මක වැඩ", service3Description: "ආරම්භයේ සිටම නිවසට ශක්තිය සපයන බිම් සැකසුම් සහ ව්‍යුහාත්මක අංග.",
      service4: "වහල සහ බාහිර ඉදිකිරීම්", service4Description: "නිවසේ ආවරණය, පෙනුම සහ පිවිසුම හැඩගස්වන වහල සහ බාහිර වැඩ.",
      service5: "අභ්‍යන්තර සහ බාහිර නිමාව", service5Description: "මතුපිට, ද්‍රව්‍ය සහ වාස්තු විස්තර එකට ගළපන නිම කිරීමේ වැඩ.",
      service6: "සම්පූර්ණ නිවාස ඉදිකිරීම", service6Description: "මුල් සැලසුමේ සිට අවසන් භාරදීම දක්වා වූ යෝජිත සම්පූර්ණ ඉදිකිරීම් සේවාව.",
    },
    process: {
      eyebrow: "ඉදිරියට යන මඟ", proposal: "යෝජිත පාරිභෝගික ගමන්මඟ · තහවුරු කිරීමට", kicker: "පියවරෙන් පියවර නිවසක්",
      titleStart: "පළමු කතාබහේ සිට", titleEnd: "ඔබේ නිවසට", titleAccent: "පැමිණෙන තුරු.",
      description: "සැලකිල්ලෙන් කරන නිවාස ව්‍යාපෘතියක් පැහැදිලි තීරණ සහ වැඩ අදියර ඔස්සේ ඉදිරියට යයි. මෙය සාකච්ඡාව සඳහා වූ යෝජිත ක්‍රියාවලියක් බැවින් සමාගම සමඟ තහවුරු කළ යුතුය.",
      listLabel: "යෝජිත නිවාස ඉදිකිරීමේ ක්‍රියාවලිය", endNote: "ඔබේම නිවසක ඇරඹුම",
      consultation: "සාකච්ඡාව", consultationDescription: "ඔබේ අදහස්, අවශ්‍යතා සහ සිතේ ඇති නිවස ගැන බෙදාගන්න.",
      planning: "සැලසුම් කිරීම", planningDescription: "වැඩ ඇරඹීමට පෙර විෂය පථය, සැලැස්ම සහ ප්‍රධාන තීරණ සාකච්ඡා කරන්න.",
      foundation: "අත්තිවාරම", foundationDescription: "භූමිය සකස් කර නිවසේ පදනම පිහිටුවන්න.",
      structure: "ව්‍යුහය", structureDescription: "ප්‍රධාන ගොඩනැගිලි ව්‍යුහය ඉදිකර ඇතුළත අවකාශ හැඩගස්වන්න.",
      finishing: "නිම කිරීම", finishingDescription: "නිවස හැඩගැසෙන විට මතුපිට, ද්‍රව්‍ය සහ විස්තර එකට සකස් කරන්න.",
      handover: "භාරදීම", handoverDescription: "නිම කළ වැඩ සමාලෝචනය කර නිවසේ ඊළඟ පියවරට සූදානම් කරන්න.",
    },
    principles: {
      eyebrow: "වැඩ කිරීමේ මූලධර්ම", proposal: "යෝජිත මූලධර්ම · තහවුරු කිරීමට", kicker: "ඉදිකිරීම පිටුපස ඇති සිතුවිල්ල",
      titleStart: "හොඳ කාර්යයක් දැනෙන්නේ", titleAccent: "විස්තරවලින්.",
      lead: "තීරණ සිය ගණනකින් නිවසක් හැඩගැසේ. මේ යෝජිත මූලධර්ම ඒ එක් එක් තීරණය ගැන සිතීමට මඟ පෙන්වයි.",
      listLabel: "යෝජිත වැඩ කිරීමේ මූලධර්ම", planTitle: "ජීවිතයට ගැළපෙන සැලැස්මක්",
      planDescription: "නිවසේ ජීවත් වන අයගෙන් පටන්ගෙන, සෑම අවකාශයක්ම ඔවුන්ට ගැළපෙන ලෙස සලකා බලන්න.",
      planMarker: "අවබෝධය", structureTitle: "ව්‍යුහයට ගරු කිරීම",
      structureDescription: "ඉදිකිරීමේ අනුපිළිවෙළ, ද්‍රව්‍ය තේරීම සහ නිවසේ මූලික හැඩය ගැන සැලකිල්ලෙන් සිතන්න.",
      structureMarker: "සැලසුම", detailTitle: "විස්තර ගැන සැලකිල්ල",
      detailDescription: "මුළු නිවසම සලකා නිම කළ බවක් දැනෙන ලෙස මතුපිට, සවිකිරීම් සහ නිමාවන් එකට ගළපන්න.",
      detailMarker: "නිමාව",
    },
    contact: {
      eyebrow: "කතාබහක් අරඹමු", kicker: "ඔබේ අදහස අපට කියන්න",
      titleStart: "ඔබේ නිවස කරගන්නා තැන ගැන", titleAccent: "කතා කරමු.",
      description: "ඔබේ සැලසුම් ගැන කෙටියෙන් කියන්න. පණිවිඩය WhatsApp තුළ විවෘත වන අතර යැවීමට පෙර ඔබට එය පරීක්ෂා කළ හැකියි.",
      direct: "දුරකථනයෙන් අමතන්න", name: "ඔබේ නම", phone: "සම්බන්ධතා අංකය", project: "ඔබේ ව්‍යාපෘතිය ගැන",
      required: "අවශ්‍යයි", optional: "(අනිවාර්ය නැත)", submit: "WHATSAPP තුළ ඉදිරියට යන්න",
      whatsappReady: "ඔබට පරීක්ෂා කර යැවිය හැකි ලෙස පණිවිඩය WhatsApp තුළ විවෘත වේ.",
      whatsappMissing: "WhatsApp සම්බන්ධතාව තවම සකසා නැත.",
      messageIntro: "ආයුබෝවන් {name}, නිවාස ව්‍යාපෘතියක් ගැන සාකච්ඡා කිරීමට කැමතියි.", messageName: "නම", messagePhone: "සම්බන්ධතා අංකය", messageProject: "ව්‍යාපෘති විස්තර",
    },
    footer: {
      tagline: "මුල් සැලැස්මේ සිට අවසන් නිමාව දක්වා, සැලකිල්ලෙන් ගොඩනඟන නිවාස.", explore: "සොයා බලන්න", getInTouch: "අමතන්න",
      disclosure: "වාස්තු චිත්‍රපට සහ ඩිජිටල් ආකෘති සංකල්ප දර්ශන වන අතර සමාගම නිම කළ ව්‍යාපෘති නොවේ.",
    },
  },
} as const;

export type Messages = (typeof messages)[Language];

type LanguageContextValue = {
  language: Language;
  messages: Messages;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("wijewardhana-language");
    if (saved === "si" || saved === "en") setLanguage(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    if (ready) window.localStorage.setItem("wijewardhana-language", language);
  }, [language, ready]);

  return (
    <LanguageContext.Provider value={{ language, messages: messages[language], setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
