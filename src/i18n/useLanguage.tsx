import { useContext } from "react";
import { LanguageContext } from "./context";

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
      throw new Error("useLanguage most be use inside on LanguageProvider");
    }
    return context;
  };