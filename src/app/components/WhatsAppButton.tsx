import { useLang } from "./LanguageContext";

export function WhatsAppButton() {
  const { lang } = useLang();
  const isRu = lang === "ru";

  const phoneNumber = "971581307969";

  // WhatsApp
  const waMessage = isRu
    ? "Здравствуйте JNK DIAM, меня интересуют ваши услуги по производству бриллиантов."
    : "Hello JNK DIAM, I'm interested in learning more about your diamond manufacturing services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;

  // Telegram
  const telegramUrl = "https://t.me/Jnkdiam";

  if (isRu) {
    // ── Telegram floating button (Russian) ──
    return (
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-0 group"
        aria-label="Написать нам в Telegram"
      >
        {/* Tooltip */}
        <span
          className="absolute right-full mr-4 px-4 py-2.5 text-white text-sm rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl translate-x-2 group-hover:translate-x-0"
          style={{ background: "#0088CC" }}
        >
          Написать в Telegram
          <span
            className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 border-4 border-transparent"
            style={{ borderLeftColor: "#0088CC" }}
          />
        </span>

        {/* Button */}
        <div
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110"
          style={{
            background: "linear-gradient(135deg, #29B6F6 0%, #0088CC 100%)",
            boxShadow: "0 4px 24px rgba(0,136,204,0.45)",
          }}
        >
          {/* Ripple */}
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-25"
            style={{ background: "#29B6F6" }}
          />
          {/* Telegram Plane SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="white"
          >
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
        </div>
      </a>
    );
  }

  // ── WhatsApp floating button (English) ──
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-0 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Tooltip label */}
      <span
        className="absolute right-full mr-4 px-4 py-2.5 text-white text-sm rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl translate-x-2 group-hover:translate-x-0"
        style={{ background: "#128C7E" }}
      >
        Chat on WhatsApp
        <span
          className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 border-4 border-transparent"
          style={{ borderLeftColor: "#128C7E" }}
        />
      </span>

      {/* Button */}
      <div
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          boxShadow: "0 4px 24px rgba(37,211,102,0.4)",
        }}
      >
        {/* Ripple ring */}
        <div
          className="absolute inset-0 rounded-full animate-ping opacity-25"
          style={{ background: "#25D366" }}
        />
        {/* WhatsApp Official SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
        >
          <path d="M16.004 2.667C8.641 2.667 2.667 8.641 2.667 16c0 2.354.636 4.558 1.738 6.461L2.667 29.333l7.07-1.706A13.27 13.27 0 0016.004 29.333C23.367 29.333 29.333 23.359 29.333 16S23.367 2.667 16.004 2.667zm0 2.4c5.982 0 10.929 4.946 10.929 10.933 0 5.988-4.947 10.933-10.929 10.933a10.88 10.88 0 01-5.546-1.52l-.398-.238-4.196 1.013 1.044-4.082-.261-.413A10.872 10.872 0 015.075 16c0-5.987 4.946-10.933 10.929-10.933zm-3.29 5.2c-.229 0-.601.086-.916.43-.315.343-1.2 1.172-1.2 2.857 0 1.686 1.228 3.315 1.4 3.544.171.229 2.4 3.658 5.828 4.986 2.886 1.1 3.429.882 4.044.826.614-.057 1.985-.814 2.271-1.6.286-.786.286-1.457.2-1.6-.086-.143-.315-.229-.658-.4-.344-.172-2.028-1-2.343-1.115-.315-.114-.543-.172-.772.172-.229.343-.885 1.115-1.085 1.343-.2.229-.4.258-.743.086-.343-.172-1.45-.535-2.762-1.704-1.02-.91-1.71-2.035-1.91-2.378-.2-.343-.022-.529.15-.7.155-.154.343-.4.514-.6.171-.2.229-.343.343-.572.114-.228.057-.429-.029-.6-.086-.172-.757-1.864-1.057-2.557-.257-.6-.524-.6-.714-.6z" />
        </svg>
      </div>
    </a>
  );
}
