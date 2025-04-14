"use client";

import { useEffect, useState } from "react";
import TableOfContents from "./TableOfContents";
import { Document } from "@contentful/rich-text-types";

interface Props {
  content?: Document;
  includeSubheadings?: boolean;
}

export default function TableOfContentsWrapper({
  content,
  includeSubheadings = true,
}: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll("h2[id], h3[id]")
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-40% 0% -50% 0%",
        threshold: 0.1,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  return (
    <TableOfContents
      content={content}
      includeSubheadings={includeSubheadings}
      activeId={activeId}
    />
  );
}
