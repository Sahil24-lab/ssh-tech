"use client";
import { createContext, useContext } from "react";

export const SubdomainContext = createContext<string | undefined>(undefined);
export const useSubdomain = () => useContext(SubdomainContext);
