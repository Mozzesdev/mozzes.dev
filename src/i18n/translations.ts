import { Translations } from "./types";

export const translations: Translations = {
  en: {
    workTogether: "Welcome!",
    change_language: "Change language",
    greeting: "Hello, {{name}}!",
    messages: {
      one: "You have 1 message",
      other: "You have {{count}} messages",
    },
    reserved: "All Rights Reserved."
  },
  es: {
    welcome: "¡Bienvenido!",
    change_language: "Cambiar idioma",
    greeting: "Hola, {{name}}!",
    messages: {
      one: "Tienes 1 mensaje",
      other: "Tienes {{count}} mensajes",
    },
    reserved: "Todos los derechos reservados."
  },
} as const;