import en from "@/app/[lang]/dictionaries/en.json";
import es from "@/app/[lang]/dictionaries/es.json";

const dictionaries = {
  en,
  es,
};

export function getClientDictionary(lang: "en" | "es") {
  return dictionaries[lang];
}
