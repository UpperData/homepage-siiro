import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siiro | Tecnología que impulsa tu negocio",
  description:
    "Creamos soluciones de software para empresas, instituciones educativas y organizaciones que quieren avanzar.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
