"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { MenusContext } from "@/Contexts/MenusContext";
import { usePathname } from "next/navigation";

export const fetchingContext = createContext();

export const FetchProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState("large");

  const pathname = usePathname();

  useEffect(() => {
    function getScreenSize() {
      const width = window.innerWidth;
      if (width < 768) return "small";
      if (width < 992) return "med";
      return "large";
    }

    setScreenSize(getScreenSize());

    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <fetchingContext.Provider
      value={{
        pathname,
        screenSize,
      }}
    >
      {children}
    </fetchingContext.Provider>
  );
};
