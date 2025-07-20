"use client";

import { useContext } from "react";

import TopPanner from "@/components/TopPanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FetchProvider, fetchingContext } from "@/Contexts/fetchingContext";
import { MenusProvider } from "@/Contexts/MenusContext";
import "@/Styles/globals.css";
import "@/Styles/components/header-footer.css";

export default function RootLayout({ children }) {
  return (
    <MenusProvider>
      <FetchProvider>
        <LayoutContent>{children}</LayoutContent>
      </FetchProvider>
    </MenusProvider>
  );
}

function LayoutContent({ children }) {
  const { screenSize, pathname } = useContext(fetchingContext);

  return (
    <html lang="en">
      <body>
        {(pathname.includes("home") || pathname === "/") && <TopPanner />}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
