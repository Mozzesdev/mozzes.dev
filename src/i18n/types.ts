export type Language = "en" | "es";

export type Translations = {
  [key in Language]: {
    [key: string]: string | { [key: string]: string };
  };
};

export type LanguageContextType = {
  language: Language;
  translations: Translations[Language];
  changeLanguage: (lng: Language) => void;
};