// src/contexts/SubdomainContext.ts
import { createContext, useContext } from "react";

export const SubdomainContext = createContext<string | undefined>(undefined);

export const useSubdomain = () => useContext(SubdomainContext);
