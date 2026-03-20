import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "pt" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.about": { pt: "Sobre", en: "About" },
  "nav.services": { pt: "Especialidades", en: "Specialties" },
  "nav.instagram": { pt: "Instagram", en: "Instagram" },
  "nav.contact": { pt: "Contato", en: "Contact" },

  // Hero
  "hero.headline1": { pt: "Experiências gastronômicas", en: "Gourmet experiences" },
  "hero.headline2": { pt: "que encantam.", en: "that delight." },
  "hero.sub": {
    pt: "Tábuas de frios artesanais, boxes de café personalizados e mesas gastronômicas montadas para transformar qualquer momento em uma experiência inesquecível.",
    en: "Artisan charcuterie boards, personalized coffee boxes and gourmet table setups to transform any moment into an unforgettable experience.",
  },
  "hero.cta1": { pt: "Fazer um pedido", en: "Place an order" },
  "hero.cta2": { pt: "Falar no WhatsApp", en: "Chat on WhatsApp" },

  // About
  "about.label": { pt: "Nossa História", en: "Our Story" },
  "about.title": { pt: "Sobre a Donna Empório Gourmet", en: "About Donna Empório Gourmet" },
  "about.tagline": { pt: "Mais do que comida, criamos experiências.", en: "More than food, we create experiences." },
  "about.p1": {
    pt: "A Donna Empório nasceu de um sonho em 2020, quando foi montada a primeira tábua de frios para um aniversário em família. Mesmo sendo a primeira experiência, a montagem encantou todos presentes e recebeu muitos elogios.",
    en: "Donna Empório was born from a dream in 2020, when the first charcuterie board was assembled for a family birthday. Even as a first experience, the arrangement delighted everyone and received many compliments.",
  },
  "about.p2": {
    pt: "Alguns meses depois, surgiu a primeira venda e, desde então, cada nova tábua se tornou uma oportunidade de aprimorar técnicas, combinar sabores e criar apresentações cada vez mais sofisticadas.",
    en: "A few months later, the first sale came, and since then, every new board has been an opportunity to refine techniques, combine flavors and create increasingly sophisticated presentations.",
  },
  "about.p3": {
    pt: "Hoje, cada montagem é feita com carinho, atenção aos detalhes e paixão pela gastronomia. A maior satisfação é ver cada cliente feliz ao receber uma experiência preparada com dedicação.",
    en: "Today, each creation is made with care, attention to detail and passion for gastronomy. The greatest satisfaction is seeing each client happy when receiving an experience prepared with dedication.",
  },

  // Services
  "services.label": { pt: "O que oferecemos", en: "What we offer" },
  "services.title": { pt: "Nossas Especialidades", en: "Our Specialties" },
  "services.s1.title": { pt: "Tábuas de Frios Artesanais", en: "Artisan Charcuterie Boards" },
  "services.s1.desc": {
    pt: "Combinações sofisticadas de queijos, embutidos, frutas e acompanhamentos cuidadosamente selecionados para criar experiências gastronômicas únicas.",
    en: "Sophisticated combinations of cheeses, cured meats, fruits and carefully selected accompaniments to create unique gourmet experiences.",
  },
  "services.s2.title": { pt: "Box de Café Personalizado", en: "Personalized Coffee Box" },
  "services.s2.desc": {
    pt: "Boxes elegantes perfeitos para presentear ou surpreender alguém especial em momentos únicos.",
    en: "Elegant boxes perfect for gifting or surprising someone special on unique occasions.",
  },
  "services.s3.title": { pt: "Mesas Gastronômicas à Domicílio", en: "Home Gourmet Tables" },
  "services.s3.desc": {
    pt: "Montagem de mesas completas para eventos, celebrações e encontros especiais com apresentação sofisticada.",
    en: "Full table setups for events, celebrations and special gatherings with sophisticated presentation.",
  },

  // Experience
  "exp.label": { pt: "Nosso Diferencial", en: "Our Difference" },
  "exp.title": { pt: "Transformamos momentos em experiências memoráveis", en: "We transform moments into memorable experiences" },
  "exp.h1": { pt: "Qualidade dos ingredientes", en: "Quality ingredients" },
  "exp.h2": { pt: "Cuidado na montagem", en: "Careful assembly" },
  "exp.h3": { pt: "Apresentação sofisticada", en: "Sophisticated presentation" },
  "exp.h4": { pt: "Experiência gastronômica diferenciada", en: "Unique gourmet experience" },

  // Instagram
  "insta.title": { pt: "Acompanhe nossas criações", en: "Follow our creations" },
  "insta.cta": { pt: "Seguir no Instagram", en: "Follow on Instagram" },

  // CTA
  "cta.title1": { pt: "Quer surpreender alguém com uma experiência gastronômica", en: "Want to surprise someone with a gourmet experience" },
  "cta.title2": { pt: "especial?", en: "to remember?" },
  "cta.text": {
    pt: "Entre em contato agora e peça sua tábua de frios, box personalizado ou mesa gastronômica.",
    en: "Get in touch now and order your charcuterie board, personalized box or gourmet table.",
  },
  "cta.button": { pt: "Fazer pedido no WhatsApp", en: "Order on WhatsApp" },

  // Contact
  "contact.label": { pt: "Fale Conosco", en: "Get in Touch" },
  "contact.title": { pt: "Contato", en: "Contact" },
  "contact.whatsapp": { pt: "WhatsApp", en: "WhatsApp" },
  "contact.location": { pt: "Localização", en: "Location" },

  // Footer
  "footer.rights": { pt: "Todos os direitos reservados.", en: "All rights reserved." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("pt");

  const toggleLang = () => setLang((prev) => (prev === "pt" ? "en" : "pt"));

  const t = (key: string): string => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
