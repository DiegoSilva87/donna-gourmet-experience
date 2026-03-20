import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";
import tabulaImg from "@/assets/tabua-frios.jpeg";
import boxCafeImg from "@/assets/box-cafe.jpeg";
import mesaImg from "@/assets/mesa-gastronomica.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const images = [tabulaImg, boxCafeImg, mesaImg, tabulaImg, boxCafeImg, mesaImg];

const InstagramSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="instagram" className="bg-background py-24 md:py-32">
      <div ref={ref} className="container mx-auto max-w-6xl px-6">
        <motion.div className="text-center" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">@donna_emporio_gourmet</span>
          <h2 className="mt-4 font-display text-3xl font-light italic text-foreground md:text-5xl">{t("insta.title")}</h2>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-gold" />
        </motion.div>
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3">
          {images.map((img, i) => (
            <motion.a key={i} href="https://instagram.com/donna_emporio_gourmet" target="_blank" rel="noopener noreferrer" className="group relative aspect-square overflow-hidden" initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.1 * i }}>
              <img src={img} alt="Donna Empório Gourmet" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center bg-deep-brown/0 transition-all duration-300 group-hover:bg-deep-brown/60">
                <Instagram className="h-8 w-8 text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="https://instagram.com/donna_emporio_gourmet" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-foreground">
            <Instagram className="h-4 w-4" />
            {t("insta.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
