import type { Metadata } from "next";
import { Rajdhani, DM_Sans } from "next/font/google";
import "./globals.css";
import { DigitalAurora } from "@/components/DigitalAurora";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Henning Automobil GmbH — Mercedes-Benz Partner in Herne",
  description:
    "Ihr offizieller Mercedes-Benz Händler in Herne seit 1902. Fahrzeugkauf, Service und Werkstatt für PKW, Transporter und LKW an zwei Standorten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${rajdhani.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-chrome">
        <DigitalAurora />
        {children}
      </body>
    </html>
  );
}
