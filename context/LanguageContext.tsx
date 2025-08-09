"use client"

import React, { createContext, useState, ReactNode, useContext } from "react";

type Language = "en" | "bn";

const translations = {
  en: {
    login: "Login",
    signup: "Signup",
    buy: "Buy",
    rent: "Rent",
    sell: "Sell",
    lease: "Lease",
    getMortgage: "Get Mortgage",
    english: "English",
    bengali: "বাংলা",
  },
  bn: {
    login: "লগইন",
    signup: "সাইন আপ",
    buy: "কিনুন",
    rent: "ভাড়া",
    sell: "বিক্রয়",
    lease: "ভাড়ার জন্য",
    getMortgage: "ঋণ নিন",
    english: "ইংরেজি",
    bengali: "বাংলা",
  },
} as const;

type TranslationKey = keyof typeof translations["en"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  // translation function depends on current language state
  const t = (key: TranslationKey) => {
    return translations[language][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
