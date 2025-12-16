import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Hola AI",
  description: "Smart AI Voicemail",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
