import { Poppins } from "next/font/google";
import "@/app/sales/sales.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export function SalesShell({ children }: { children: React.ReactNode }) {
  return <div className={`sales-page ${poppins.variable}`}>{children}</div>;
}
