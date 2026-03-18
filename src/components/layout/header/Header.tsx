"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BookCallModal from "@/components/book-call-modal/BookCallModal";
import { trackEvent } from "@/app/lib/umamiTrackEvent";
import { SiteHeader, type HeaderNavItem } from "@ssh/brand-ui";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [subdomain, setSubdomain] = useState<string | null>(null);

  useEffect(() => {
    setSubdomain(getSubdomain());
  }, []);

  const getSubdomain = () => {
    if (typeof window === "undefined") return null;
    const host = window.location.hostname;
    if (host.endsWith(".localhost")) return host.split(".")[0];
    const parts = host.split(".");
    return parts.length >= 3 ? parts[0] : null;
  };

  const handleCTAClick = () => {
    trackEvent("header_cta_click");
    const currentSubdomain = getSubdomain();
    if (currentSubdomain === "sahil") {
      window.open("https://cal.com/ssh-tech/30min-call", "_blank");
    } else {
      setOpen(true);
    }
  };

  const scrollToSection = (id: string) => {
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.location.href = `/#${id}`;
  };

  const allNavItems: HeaderNavItem[] = [
    { label: "Services", sectionId: "services" },
    { label: "Process", sectionId: "process" },
    { label: "Proof Of Work", href: "/proof-of-work" },
    { label: "Pricing", sectionId: "pricing" },
    { label: "FAQ", sectionId: "faq" },
  ];

  const aiNavItems: HeaderNavItem[] = [
    { label: "Services", sectionId: "services" },
    { label: "Process", sectionId: "process" },
    { label: "Products", href: "/products" },
    { label: "Proof Of Work", href: "/proof-of-work" },
    { label: "Pricing", sectionId: "pricing" },
    { label: "FAQ", sectionId: "faq" },
  ];

  const navItems =
    subdomain === "sahil"
      ? allNavItems.filter((item) => item.label === "Proof Of Work")
      : subdomain === "ai"
        ? aiNavItems
        : allNavItems;

  return (
    <>
      <SiteHeader
        brandLabel="SSH Tech"
        brandHref="/"
        navItems={navItems}
        currentPath={pathname}
        onCtaClick={handleCTAClick}
        onSectionNavigate={scrollToSection}
        linkComponent={Link}
      />
      <BookCallModal open={open} handleClose={() => setOpen(false)} />
    </>
  );
}
