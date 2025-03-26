import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "GIGPLUG",
  description: "Get plugged to your next gig",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
