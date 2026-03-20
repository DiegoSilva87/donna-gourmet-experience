import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div ref={ref} className="container mx-auto max-w-4xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("about.label")}</span>
          <h2 className="mt-4 font-display text-3xl font-light italic text-foreground md:text-5xl">{t("about.title")}</h2>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-gold" />
        </motion.div>
        <motion.div className="mt-12 space-y-6 text-left md:text-center" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
          <p className="font-display text-xl italic text-gold md:text-2xl">{t("about.tagline")}</p>
          <p className="font-body text-sm font-light leading-relaxed text-muted-foreground md:text-base">{t("about.p1")}</p>
          <p className="font-body text-sm font-light leading-relaxed text-muted-foreground md:text-base">{t("about.p2")}</p>
          <p className="font-body text-sm font-light leading-relaxed text-muted-foreground md:text-base">{t("about.p3")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
