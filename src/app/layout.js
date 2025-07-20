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

const shouldShowTopPanner = () => {
  if (typeof window === "undefined") return false; // ممنوع التنفيذ على السيرفر

  const closedUntil = localStorage.getItem("topPannerClosedUntil");

  if (!closedUntil) return true;

  const now = new Date();
  const closedDate = new Date(closedUntil);

  return now > closedDate;
};

function LayoutContent({ children }) {
  const { screenSize, pathname } = useContext(fetchingContext);

  return (
    <html lang="en">
      <body>
        {(pathname.includes("home") || pathname === "/") &&
          shouldShowTopPanner() && <TopPanner />}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
