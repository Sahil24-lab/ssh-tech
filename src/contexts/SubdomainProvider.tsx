// src/contexts/SubdomainProvider.tsx
"use client";

import React from "react";
import { SubdomainContext } from "./SubdomainContext";

export default function SubdomainProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string | undefined;
}) {
  return (
    <SubdomainContext.Provider value={value}>
      {children}
    </SubdomainContext.Provider>
  );
}
