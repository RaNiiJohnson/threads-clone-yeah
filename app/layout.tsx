import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import clsx from "clsx";
import { Header } from "@/src/features/layout/Header";
import { Footer } from "@/src/features/layout/Footer";

export const metadata: Metadata = {
  title: "Threads-clone-yeah",
  description: "the social nextwork for developer",
};

type LayoutProps = {
  children: React.ReactNode;
  modal?: React.ReactNode;
};

export default function RootLayout({ children, modal }: LayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx("bg-background")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col h-full">
            <Header />
            <div className="flex-1 max-w-lg m-auto py-14 w-full">
              {children}
            </div>
            <Footer />
          </div>
          {modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
