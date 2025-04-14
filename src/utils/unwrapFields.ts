import { Document as RichTextDocument } from "@contentful/rich-text-types";

export function unwrapStringField(value: unknown): string | undefined {
  if (!value) return undefined;
  if (typeof value === "string") return value;
  if (typeof value === "object" && value !== null && "en-US" in value) {
    const unwrapped = (value as { [locale: string]: unknown })["en-US"];
    return typeof unwrapped === "string" ? unwrapped : undefined;
  }
  return undefined;
}

export function unwrapRichTextField(
  value: unknown
): RichTextDocument | undefined {
  if (!value) return undefined;
  if (typeof value === "object" && value !== null) {
    if ("nodeType" in value && "content" in value && "data" in value) {
      return value as RichTextDocument;
    }
    if ("en-US" in value) {
      const localized = (value as { [locale: string]: unknown })["en-US"];
      if (
        typeof localized === "object" &&
        localized !== null &&
        "nodeType" in localized &&
        "content" in localized &&
        "data" in localized
      ) {
        return localized as RichTextDocument;
      }
    }
  }
  return undefined;
}
