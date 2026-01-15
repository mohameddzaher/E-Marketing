import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Energize Your Business - a leading marketing agency in Saudi Arabia. Discover our mission, vision, team, and commitment to delivering excellence in brand activation, event management, and digital marketing.",
  openGraph: {
    title: "About Us | Energize Your Business",
    description:
      "Learn about Energize Your Business - a leading marketing agency in Saudi Arabia. Discover our mission, vision, and team.",
    url: "https://energize-sa.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
