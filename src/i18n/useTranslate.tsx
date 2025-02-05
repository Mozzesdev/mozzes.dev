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
    // Manejo de claves anidadas
    let text: any;
    if ((key as string).includes(".")) {
      const keys = (key as string).split(".");
      text = keys.reduce((obj, k) => obj?.[k] as any, translations);
    } else {
      text = translations[key];
    }

    // Manejo de plurales
    if (typeof text === "object" && !Array.isArray(text)) {
      const count = variables?.count || 0;
      const pluralRule = new Intl.PluralRules(language).select(count);
      text = text[pluralRule] as any;
    }

    // Si no se encuentra la traducción, devolver la clave
    if (!text) {
      return `[${key}]`;
    }

    // Reemplazo de variables en la cadena
    if (typeof text === "string") {
      return text.replace(/{{(\w+)}}/g, (_, varName) => 
        variables?.[varName]?.toString() ?? `{{${varName}}}`
      );
    }

    // Si llegamos aquí, algo salió mal
    return `[${key}]`;
  };

  return t;
};