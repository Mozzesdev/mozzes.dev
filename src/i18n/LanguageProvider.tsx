import { ReactNode, useEffect, useState } from "react";
import { Language } from "./types";
import { LanguageContext } from "./context";
import { translations } from "./translations";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem("userLanguage") as Language | null;
    const browserLang = navigator.language.split("-")[0] as Language;
    return savedLang || (translations[browserLang] ? browserLang : "es");
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [language]);

  const changeLanguage = (lng: Language) => {
    setLanguage(lng);
    localStorage.setItem("userLanguage", lng);
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations: translations[language], changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
