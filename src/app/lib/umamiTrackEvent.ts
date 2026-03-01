export const trackEvent = (eventName: string) => {
  if (typeof window === "undefined") return;
  const umami = (window as Window & { umami?: { track?: (name: string) => void } })
    .umami;
  if (umami?.track) umami.track(eventName);
};
