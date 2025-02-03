import { Language } from "./types";
import { useLanguage } from "./useLanguage";

export const useTranslate = () => {
  const { language, translations } = useLanguage();

  const t = <
    K extends keyof typeof translations[Language] | string,
    V extends Record<string, any>
  >(
    key: K,
    variables?: V
  ) => {
    let text = translations[key];
    
    if (typeof text === "object") {
      // Lógica para plurales (usando Intl.PluralRules)
      const count = variables?.count || 0;
      const pluralRule = new Intl.PluralRules(language).select(count);
      text = text[pluralRule] as any;
    }

    return (text as string).replace(/{{(\w+)}}/g, (_, varName) => 
      variables?.[varName]?.toString() ?? varName
    );
  };

  return t;
};