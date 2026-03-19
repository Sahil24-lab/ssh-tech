"use client";

import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
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
        <GlobalStyles
          styles={(theme) => ({
            "html, body": {
              backgroundColor: theme.palette.background.default,
              backgroundImage: `
                linear-gradient(rgba(5, 11, 43, 0.7), rgba(5, 11, 43, 0.1)),
                conic-gradient(from -23.81deg at 72.82% 162.44%, #0e534c -44.57deg, #067f71 7.76deg, #029f8c 20.98deg, #067f71 52deg, #0b645c 88.68deg, #067f71 315.43deg, #029f8c 367.76deg)
              `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% auto",
              backgroundPosition: "center top",
              backgroundAttachment: "fixed",
            },
          })}
        />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
