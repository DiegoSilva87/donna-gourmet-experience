import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const WHATSAPP_URL = "https://wa.me/5511917303024?text=Olá! Gostaria de fazer um pedido.";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-deep-brown py-24 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-gold blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gold blur-[120px]" />
      </div>
      <div ref={ref} className="container relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <h2 className="font-display text-3xl font-light italic text-cream md:text-5xl">
            {t("cta.title1")}{" "}<span className="text-gold">{t("cta.title2")}</span>
          </h2>
          <p className="mt-6 font-body text-sm font-light leading-relaxed tracking-wider text-cream/70 md:text-base">{t("cta.text")}</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-10 inline-block rounded-none border-2 border-gold bg-gold px-12 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-transparent hover:text-cream">
            {t("cta.button")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
