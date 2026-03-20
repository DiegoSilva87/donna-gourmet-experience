import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import tabulaImg from "@/assets/tabua-frios.jpeg";
import boxCafeImg from "@/assets/box-cafe.jpeg";
import mesaImg from "@/assets/mesa-gastronomica.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const services = [
    { title: t("services.s1.title"), description: t("services.s1.desc"), image: tabulaImg },
    { title: t("services.s2.title"), description: t("services.s2.desc"), image: boxCafeImg },
    { title: t("services.s3.title"), description: t("services.s3.desc"), image: mesaImg },
  ];

  return (
    <section id="especialidades" className="bg-warm-beige py-24 md:py-32">
      <div ref={ref} className="container mx-auto max-w-6xl px-6">
        <motion.div className="text-center" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t("services.label")}</span>
          <h2 className="mt-4 font-display text-3xl font-light italic text-foreground md:text-5xl">{t("services.title")}</h2>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-gold" />
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div key={service.title} className="group overflow-hidden bg-background" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 * (i + 1) }}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-display text-xl font-medium text-foreground md:text-2xl">{service.title}</h3>
                <p className="mt-4 font-body text-sm font-light leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
