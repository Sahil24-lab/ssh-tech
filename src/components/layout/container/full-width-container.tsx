"use client";

import { FullWidthSection } from "@ssh/brand-ui";

export default function FullWidthContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FullWidthSection>{children}</FullWidthSection>;
}
