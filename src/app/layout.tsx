import type { Metadata } from "next";
import { Suspense } from "react";

import AppNavbar from "@components/app-navbar";
import Providers from "@components/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Autoresearch Writer",
  description: "Intelligent Research Assistant & Writing Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body className="min-h-screen">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <nav className="nav-bg">
              <AppNavbar />
            </nav>
            <main className="flex-1 bg-[url(/images/aerial-view-winding-road.jpg)] bg-cover bg-fixed dark:bg-[url(/images/dark-bg.svg)]">
              <div className="container mx-auto p-4">
                <div className="component-bg rounded-lg p-6 shadow-lg">
                  <Suspense>{children}</Suspense>
                </div>
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
