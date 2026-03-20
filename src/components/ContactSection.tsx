import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="contato" className="bg-warm-beige py-24 md:py-32">
      <div ref={ref} className="container mx-auto max-w-4xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("contact.label")}</span>
          <h2 className="mt-4 font-display text-3xl font-light italic text-foreground md:text-5xl">{t("contact.title")}</h2>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-gold" />
        </motion.div>
        <motion.div className="mt-16 grid gap-8 md:grid-cols-3" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
          <a href="https://wa.me/5511917303024" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-6 transition-colors hover:text-gold">
            <Phone className="h-6 w-6 text-gold" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{t("contact.whatsapp")}</span>
            <span className="font-body text-sm text-foreground">+55 11 91730-3024</span>
          </a>
          <div className="flex flex-col items-center gap-3 p-6">
            <MapPin className="h-6 w-6 text-gold" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{t("contact.location")}</span>
            <span className="font-body text-sm text-foreground">Bragança Paulista – SP – Brasil</span>
          </div>
          <a href="https://instagram.com/donna_emporio_gourmet" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-6 transition-colors hover:text-gold">
            <Instagram className="h-6 w-6 text-gold" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Instagram</span>
            <span className="font-body text-sm text-foreground">@donna_emporio_gourmet</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
