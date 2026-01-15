import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Energize Your Business. Contact our marketing agency in Jeddah, Saudi Arabia. Email: info@energize-sa.com | Phone: 0126825858",
  openGraph: {
    title: "Contact Us | Energize Your Business",
    description:
      "Get in touch with Energize Your Business. Contact our marketing agency in Jeddah, Saudi Arabia.",
    url: "https://energize-sa.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
