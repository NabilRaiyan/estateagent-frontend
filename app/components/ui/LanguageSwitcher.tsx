"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLng = i18n.language === "en" ? "bn" : "en";
    i18n.changeLanguage(newLng);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition"
      aria-label="Toggle language"
    >
      {i18n.language === "en" ? "English" : "বাংলা"}
    </button>
  );
};

export default LanguageSwitcher;
