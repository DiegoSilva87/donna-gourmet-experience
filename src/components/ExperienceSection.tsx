import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import tabulaImg from "@/assets/tabua-frios.jpeg";
import boxCafeImg from "@/assets/box-cafe.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const highlights = [t("exp.h1"), t("exp.h2"), t("exp.h3"), t("exp.h4")];

  return (
    <section className="bg-espresso py-24 md:py-32">
      <div ref={ref} className="container mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div className="relative" initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={tabulaImg} alt="Tábua de frios artesanal" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden aspect-square w-48 overflow-hidden border-4 border-espresso md:block">
              <img src={boxCafeImg} alt="Box de café personalizado" className="h-full w-full object-cover" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("exp.label")}</span>
            <h2 className="mt-4 font-display text-3xl font-light italic text-cream md:text-4xl lg:text-5xl">{t("exp.title")}</h2>
            <div className="mt-6 h-[1px] w-16 bg-gold" />
            <ul className="mt-10 space-y-6">
              {highlights.map((item, i) => (
                <motion.li key={item} className="flex items-center gap-4" initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}>
                  <span className="flex h-2 w-2 rounded-full bg-gold" />
                  <span className="font-body text-sm font-light tracking-wider text-cream/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
