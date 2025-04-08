export const trackEvent = (eventName: string) => {
  if (typeof window !== "undefined" && (window as any).umami?.track) {
    (window as any).umami.track(eventName);
  }
};
