import { Language } from "../i18n/types";
import { useLanguage } from "../i18n/useLanguage";
import { useEffect, useRef, useState } from "react";

type Languages = { code: Language; name: string; flag: string }[];

const languages: Languages = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇺🇸" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (langCode: Language) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm cursor-pointer hover:text-blue-300 transition-all"
        aria-label="Cambiar idioma"
      >
        {languages.find((lang) => lang.code === language)?.flag}
      </button>
      {isOpen && (
        <div className="absolute right-0 bottom-full mb-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="block w-full text-left text-zinc-800 first:rounded-t-lg last:rounded-b-lg cursor-pointer text-sm px-4 py-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            >
              <span className="">{lang.flag}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
