import { ServiceCategory, ContactInfo } from './types';

export const CONTACT_INFO: ContactInfo = {
  name: "Bahari Kosmetikstudio",
  owner: "Inh. Nadin Kästner",
  address: "Dresdner Straße 149",
  zipCity: "01744 Dippoldiswalde OT Obercarsdorf",
  phone: "035052 189960",
  note: "Termine nach Vereinbarung"
};

export const SERVICES: ServiceCategory[] = [
  {
    title: "Gesichtspflege",
    subtitle: "Entspannen in afrikanischem Ambiente",
    theme: 'african',
    items: [
      {
        name: "Reinigungsbehandlung",
        description: "Professionelle Hautanalyse, Hautreinigung und sanftes Peeling, Kräuterbedampfung für die Tiefenreinigung, Augenbrauenkorrektur, Entfernen der Hautunreinheiten, typgerechte Crememaske sowie Abschlusspflege.",
        duration: "45 min",
        price: "44,50 €"
      },
      {
        name: "Kosmetische Grundbehandlung",
        description: "Inklusive entspannender Gesichts- und Dekolletémassage.",
        duration: "60 min",
        price: "53,00 €"
      },
      {
        name: "Spezialbehandlung",
        description: "Inklusive Nackenmassage und entspannender Gesichts- und Dekolletémassage.",
        duration: "75 min",
        price: "66,00 €"
      },
      {
        name: "Intensivbehandlung",
        description: "Inklusive Nackenmassage und wahlweise Kopf- oder Fußmassage, inklusive entspannender Gesichts- und Dekolletémassage.",
        duration: "90 min",
        price: "80,00 €"
      }
    ]
  },
  {
    title: "Balance Gesichtsmassage",
    subtitle: "Fernost... und einem Hauch",
    theme: 'asian',
    items: [
      {
        name: "Balance Massage (60 min)",
        description: "In unserer neuen asiatischen Oase bieten wir Ihnen Behandlungen, die über die Haut hinaus gehen und Ihre Seele berühren. Tauchen Sie ein in eine Welt, in der Schönheit und Wohlbefinden Hand in Hand gehen. Die Massage nimmt einen erfrischenden Einfluss auf die äußere Erscheinung des Gesichtes und wirkt ausgleichend auf den inneren Energiefluss des Körpers.",
        duration: "60 min",
        price: "59,00 €"
      },
      {
        name: "Balance Massage Intensiv (90 min)",
        description: "Hierbei verschmelzen Elemente östlicher und westlicher Massagetraditionen zu einer ganzheitlichen Behandlung. Merkmale ist die Einbeziehung energetischer Aspekte durch Stimulierung von Marmapunkten, Akupressurpunkten und Meridianen.",
        duration: "90 min",
        price: "80,00 €"
      }
    ]
  },
  {
    title: "Wohltat für Hand & Fuß",
    subtitle: "Pflege & Entspannung",
    theme: 'neutral',
    items: [
      {
        name: "Med. Fußpflege",
        description: "Wohltuendes Aromafußbad, Nägel kürzen, Entfernen der Nagelhaut, Beseitigen von Druckstellen und Hornhaut, anschließend kurzes Einmassieren der Fußcreme.",
        duration: "",
        price: "39,00 €"
      },
      {
        name: "Fußpflege inkl. Lack",
        description: "",
        duration: "",
        price: "41,00 €"
      },
      {
        name: "Fuß-French inkl. Fußpflege",
        description: "",
        duration: "",
        price: "58,00 €"
      },
      {
        name: "Maniküre",
        description: "Nägel kürzen und feilen, Schieben und Entfernen der Nagelhaut, pflegendes Nagelöl, anschließend kurzes Einmassieren der Handcreme.",
        duration: "",
        price: "39,00 €"
      },
      {
        name: "Maniküre inkl. Lack",
        description: "",
        duration: "",
        price: "44,50 €"
      },
      {
        name: "Shellac",
        description: "Durch UV-Licht gehärteter Nagellack.",
        duration: "",
        price: "44,50 €"
      }
    ]
  },
  {
    title: "Zusatzleistungen",
    subtitle: "Für den perfekten Augenblick",
    theme: 'neutral',
    items: [
      { name: "Augenbrauenkorrektur", price: "14,00 €" },
      { name: "Wimpern färben", price: "9,00 €" },
      { name: "Wimpern färben innerhalb Behandlung", price: "6,00 €" },
      { name: "Augenbrauen färben", price: "9,00 €" },
      { name: "Augenbrauen färben innerh. Behandlung", price: "6,00 €" },
      { name: "Nährstoffampulle", price: "4,50 €" },
      { name: "Wimpernwelle inkl. Färben", price: "44,50 €" }
    ]
  },
  {
    title: "Massagen & Enthaarung",
    subtitle: "Entspannung & Glätte",
    theme: 'african',
    items: [
      { name: "Fußmassage / Handmassage (15 min)", price: "15,00 €" },
      { name: "Nackenmassage (15 min)", price: "15,00 €" },
      { name: "Kopfmassage (15 min)", price: "15,00 €" },
      { name: "Rückenmassage (25 min)", price: "30,00 €" },
      { name: "Enthaaren Oberlippe", price: "4,50 €" },
      { name: "Enthaaren Kinn", price: "4,50 €" },
      { name: "Enthaaren Achseln", price: "15,00 €" },
      { name: "Enthaaren Bikinizone", price: "15,00 €" },
      { name: "Enthaaren Unterschenkel", price: "20,00 €" },
      { name: "Enthaaren Oberschenkel", price: "20,00 €" },
      { name: "Enthaaren Unterarme", price: "15,00 €" },
      { name: "Enthaaren Rücken", price: "30,00 €" },
      { name: "Enthaaren Brust", price: "30,00 €" },
      { name: "Massage und Relaxsessel (je 10 min)", price: "7,50 €" }
    ]
  },
  {
    title: "Nagelmodellage",
    subtitle: "Schöne Hände",
    theme: 'neutral',
    items: [
      { name: "Neumodellage inkl. Farbe", price: "75,00 €" },
      { name: "Auffüllen ohne Farbe", price: "49,00 €" },
      { name: "Auffüllen French einfarbig", price: "52,00 €" },
      { name: "French inkl. Design/Glitter", price: "56,00 €" },
      { name: "Reparaturnagel", price: "14,00 €" }
    ]
  }
];