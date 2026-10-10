"use client";

import { useLanguage } from "@/config/language";

export function LanguageSkipLink() {
  const { messages } = useLanguage();
  return <a className="skip-link" href="#main-content">{messages.common.skip}</a>;
}
