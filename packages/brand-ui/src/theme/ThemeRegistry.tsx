"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import theme from "./theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState(() => {
    const insertionPoint =
      typeof document !== "undefined"
        ? document.querySelector<HTMLMetaElement>(
            'meta[name="emotion-insertion-point"]'
          ) ?? undefined
        : undefined;

    const cache = createCache({
      key: "mui",
      prepend: true,
      insertionPoint,
    });
    cache.compat = true;
    return cache;
  });

  const flush = () => {
    const inserted = cache.inserted;
    cache.inserted = {};
    return inserted;
  };

  useServerInsertedHTML(() => (
    (() => {
      const inserted = flush();
      const names = Object.keys(inserted);
      if (names.length === 0) return null;
      let styles = "";
      names.forEach((name) => {
        styles += inserted[name];
      });
      return (
        <style
          data-emotion={`${cache.key} ${names.join(" ")}`}
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      );
    })()
  ));

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
