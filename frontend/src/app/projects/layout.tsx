import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore our portfolio of successful marketing campaigns, brand activations, and events. See how Energize Your Business has helped leading brands in Saudi Arabia achieve remarkable results.",
  openGraph: {
    title: "Our Projects | Energize Your Business",
    description:
      "Explore our portfolio of successful marketing campaigns, brand activations, and events.",
    url: "https://energize-sa.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
