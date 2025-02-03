import { useTranslate } from "@/i18n/useTranslate";
import LanguageSwitcher from "./langswitcher";

export function Footer() {
  const t = useTranslate();
  return (
    <footer className="bg-blue-600 text-white px-6 py-4 relative z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="/" className="font-bold">
          MOZZES
        </a>
        <div className="flex gap-1 items-center">
          <p className="text-sm h-full">2024 © Moisés Zambrano - {t("reserved")}</p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
