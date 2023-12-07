import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { cn } from "@/libs/utils";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Almenarez | Frontend Dev",
  description: "Portfolio Web",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={cn("bg-dark text-gray-300", font.className)}>
        <main className="lg:pl-[20vw] xl:pl-[15vw] px-5 xl:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
