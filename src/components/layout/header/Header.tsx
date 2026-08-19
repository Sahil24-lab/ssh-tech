"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BookCallModal from "@/components/book-call-modal/BookCallModal";
import { trackEvent } from "@/app/lib/umamiTrackEvent";
import { Header as BrandHeader, type HeaderNavItem } from "@ssh/brand-ui";
import { useSubdomain } from "@/contexts/SubdomainContext";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const subdomain = useSubdomain();

  const handleCTAClick = () => {
    trackEvent("header_cta_click");
    if (subdomain === "sahil") {
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

  const engineeringNavItems: HeaderNavItem[] = [
    { label: "Capabilities", sectionId: "capabilities" },
    { label: "Selected Work", sectionId: "work" },
    { label: "How We Engage", sectionId: "approach" },
    { label: "About", sectionId: "about" },
  ];

  const navItems =
    subdomain === "sahil"
      ? allNavItems.filter((item) => item.label === "Proof Of Work")
      : subdomain === "ai"
        ? aiNavItems
        : subdomain === "web3"
          ? allNavItems
          : engineeringNavItems;

  const ctaLabel =
    subdomain === "ai" || subdomain === "web3" ? "Book a Call" : "Discuss a project";

  return (
    <>
      <BrandHeader
        brandLabel="SSH Tech"
        brandHref="/"
        navItems={navItems}
        ctaLabel={ctaLabel}
        currentPath={pathname}
        onCtaClick={handleCTAClick}
        onSectionNavigate={scrollToSection}
        linkComponent={Link}
      />
      <BookCallModal open={open} handleClose={() => setOpen(false)} />
    </>
  );
}
