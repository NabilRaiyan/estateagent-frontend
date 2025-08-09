"use client";

import React, { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";

interface Props {
  children: React.ReactNode;
}

export default function I18nextProviderWrapper({ children }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "bn";
    i18n.changeLanguage(savedLang).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
