import type React from "react";

export type LinkItem = {
  label: string;
  href: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: React.ReactNode;
};

export type QuoteItem = {
  quote: string;
  author: string;
  eyebrow?: string;
  highlights?: string[];
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  tag?: string;
};

export type BlogPostPreview = {
  title: string;
  excerpt: string;
  href: string;
  tag?: string;
};

export type DocsSection = {
  heading: string;
  body: string;
};

export type MetricItem = {
  eyebrow?: string;
  title: string;
  description: string;
  highlights?: string[];
};

export type ProcessStep = {
  phase: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type TestimonialItem = {
  preview: string;
  quote: string;
  author: string;
  role: string;
  rating?: number;
  image?: string;
};
