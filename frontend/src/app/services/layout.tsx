import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive marketing services including brand activation, event management, digital marketing, merchandising, and more. Transform your brand with Energize Your Business in Saudi Arabia.",
  openGraph: {
    title: "Our Services | Energize Your Business",
    description:
      "Comprehensive marketing services including brand activation, event management, digital marketing, and merchandising.",
    url: "https://energize-sa.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
