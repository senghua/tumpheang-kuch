import { ui, defaultLang } from "./ui";

export type Key = keyof (typeof ui)[typeof defaultLang];

/**
 * Every bilingual pair renders as { km, en } — Khmer full-size and primary,
 * English as a smaller, muted caption alongside or beneath it (via the
 * <Bilingual> component for inline labels, or two stacked elements for
 * headings/paragraphs). No punctuation is used to join the two languages.
 */
export function useBilingual(_lang?: string) {
  return function tt(key: Key): { km: string; en: string } {
    return { km: ui.km[key], en: ui.en[key] };
  };
}
