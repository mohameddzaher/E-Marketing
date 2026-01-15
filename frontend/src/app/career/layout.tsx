import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Opportunities",
  description:
    "Join the Energize Your Business team. Explore career opportunities with a leading marketing agency in Saudi Arabia. Contact us at info@energize-sa.com",
  openGraph: {
    title: "Career Opportunities | Energize Your Business",
    description:
      "Join the Energize Your Business team. Explore career opportunities with a leading marketing agency.",
    url: "https://energize-sa.com/career",
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
