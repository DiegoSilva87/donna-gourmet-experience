import logo from "@/assets/logo-donna.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-deep-brown py-12">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <img src={logo} alt="Donna Empório Gourmet" className="mx-auto h-16 brightness-0 invert opacity-60" />
        <p className="mt-6 font-body text-xs font-light tracking-wider text-cream/40">
          © {new Date().getFullYear()} Donna Empório Gourmet. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
