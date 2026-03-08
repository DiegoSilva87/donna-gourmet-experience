import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div ref={ref} className="container mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Nossa História
          </span>
          <h2 className="mt-4 font-display text-3xl font-light italic text-foreground md:text-5xl">
            Sobre a Donna Empório Gourmet
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-gold" />
        </motion.div>

        <motion.div
          className="mt-12 space-y-6 text-left md:text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-display text-xl italic text-gold md:text-2xl">
            Mais do que comida, criamos experiências.
          </p>
          <p className="font-body text-sm font-light leading-relaxed text-muted-foreground md:text-base">
            A Donna Empório nasceu de um sonho em 2020, quando foi montada a
            primeira tábua de frios para um aniversário em família. Mesmo sendo a
            primeira experiência, a montagem encantou todos presentes e recebeu
            muitos elogios.
          </p>
          <p className="font-body text-sm font-light leading-relaxed text-muted-foreground md:text-base">
            Alguns meses depois, surgiu a primeira venda e, desde então, cada
            nova tábua se tornou uma oportunidade de aprimorar técnicas, combinar
            sabores e criar apresentações cada vez mais sofisticadas.
          </p>
          <p className="font-body text-sm font-light leading-relaxed text-muted-foreground md:text-base">
            Hoje, cada montagem é feita com carinho, atenção aos detalhes e
            paixão pela gastronomia. A maior satisfação é ver cada cliente feliz
            ao receber uma experiência preparada com dedicação.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
