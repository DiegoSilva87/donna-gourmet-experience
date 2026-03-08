import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511917303024?text=Olá! Gostaria de fazer um pedido.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
