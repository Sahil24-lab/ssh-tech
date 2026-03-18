"use client";

import { Container } from "@ssh/brand-ui";

export default function ConstrainedContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
