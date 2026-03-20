import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-donna.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const links = [
    { label: t("nav.about"), href: "#sobre" },
    { label: t("nav.services"), href: "#especialidades" },
    { label: t("nav.instagram"), href: "#instagram" },
    { label: t("nav.contact"), href: "#contato" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-40 w-full transition-all duration-500 ${
        scrolled ? "bg-deep-brown/95 py-3 shadow-lg backdrop-blur-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#">
          <img src={logo} alt="Donna Empório Gourmet" className="h-10 brightness-0 invert" />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="ml-4 rounded-full border border-cream/30 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-cream/70 transition-all duration-300 hover:border-gold hover:text-gold"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLang}
            className="rounded-full border border-cream/30 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-cream/70 transition-all duration-300 hover:border-gold hover:text-gold"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <button className="text-cream" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-0 top-full w-full bg-deep-brown/95 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
