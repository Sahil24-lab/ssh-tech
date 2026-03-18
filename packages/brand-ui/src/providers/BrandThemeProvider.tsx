"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { useMemo, useState } from "react";
import { createBrandTheme } from "../theme/createBrandTheme";

export function BrandThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useMemo(() => createBrandTheme(), []);

  const [cache] = useState(() => {
    const insertionPoint =
      typeof document !== "undefined"
        ? document.querySelector<HTMLMetaElement>('meta[name="emotion-insertion-point"]') ?? undefined
        : undefined;

    const muiCache = createCache({
      key: "mui",
      prepend: true,
      insertionPoint,
    });
    muiCache.compat = true;
    return muiCache;
  });

  const flush = () => {
    const inserted = cache.inserted;
    cache.inserted = {};
    return inserted;
  };

  useServerInsertedHTML(() => {
    const inserted = flush();
    const names = Object.keys(inserted);

    if (names.length === 0) {
      return null;
    }

    let styles = "";
    for (const name of names) {
      styles += inserted[name];
    }

    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
