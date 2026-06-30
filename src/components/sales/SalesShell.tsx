import { Syne, Playfair_Display } from "next/font/google";
import "@/app/sales/sales.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

export function SalesShell({ children }: { children: React.ReactNode }) {
  return <div className={`sales-page ${syne.variable} ${playfair.variable}`}>{children}</div>;
}
