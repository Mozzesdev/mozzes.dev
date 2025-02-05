import { Github, Instagram, Linkedin } from "lucide-react";
import { useTranslate } from "../i18n/useTranslate";

export function Contact() {
  const t = useTranslate();
  return (
    <section
      className="px-6 py-12 relative z-10 min-h-dvh flex items-center justify-center"
      id="contact"
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-5xl font-light text-zinc-800">
          {t("work")}
          <br />
          {t("together")}
        </h2>
        <p className="text-g-blue text-2xl underline decoration-blue-500">
          moiseszambrano488@gmail.com
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/mozzesdev"
            target="_blank"
            className="p-2 rounded-full border hover:bg-gray-50 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/mozzes.dev"
            target="_blank"
            className="p-2 rounded-full border hover:bg-gray-50 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/mozzesdev/"
            target="_blank"
            className="p-2 rounded-full border hover:bg-gray-50 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
