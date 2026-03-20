import { motion } from "framer-motion";
import logo from "@/assets/logo-donna.png";
import { useLanguage } from "@/contexts/LanguageContext";

const WHATSAPP_URL = "https://wa.me/5511917303024?text=Olá! Gostaria de fazer um pedido.";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/video-capa.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.img
          src={logo}
          alt="Donna Empório Gourmet"
          className="mb-8 h-24 w-auto brightness-0 invert md:h-32"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.h1
          className="font-display text-4xl font-light italic tracking-wide text-cream md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {t("hero.headline1")}
          <br />
          <span className="text-gold">{t("hero.headline2")}</span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl font-body text-sm font-light leading-relaxed tracking-wider text-cream/80 md:text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {t("hero.sub")}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-none border-2 border-gold bg-gold px-10 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-transparent hover:text-cream"
          >
            {t("hero.cta1")}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-none border-2 border-cream/40 px-10 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:border-gold hover:text-gold"
          >
            {t("hero.cta2")}
          </a>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
