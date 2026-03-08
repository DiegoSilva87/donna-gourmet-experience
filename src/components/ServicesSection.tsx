import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import tabulaImg from "@/assets/tabua-frios.jpeg";
import boxCafeImg from "@/assets/box-cafe.jpeg";
import mesaImg from "@/assets/mesa-gastronomica.jpg";

const services = [
  {
    title: "Tábuas de Frios Artesanais",
    description:
      "Combinações sofisticadas de queijos, embutidos, frutas e acompanhamentos cuidadosamente selecionados para criar experiências gastronômicas únicas.",
    image: tabulaImg,
  },
  {
    title: "Box de Café Personalizado",
    description:
      "Boxes elegantes perfeitos para presentear ou surpreender alguém especial em momentos únicos.",
    image: boxCafeImg,
  },
  {
    title: "Mesas Gastronômicas à Domicílio",
    description:
      "Montagem de mesas completas para eventos, celebrações e encontros especiais com apresentação sofisticada.",
    image: mesaImg,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="especialidades" className="bg-warm-beige py-24 md:py-32">
      <div ref={ref} className="container mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            O que oferecemos
          </span>
          <h2 className="mt-4 font-display text-3xl font-light italic text-foreground md:text-5xl">
            Nossas Especialidades
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-gold" />
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group overflow-hidden bg-background"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * (i + 1) }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-display text-xl font-medium text-foreground md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-4 font-body text-sm font-light leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
