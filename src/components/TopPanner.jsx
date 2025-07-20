"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext, useRef } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FetchProvider, fetchingContext } from "@/Contexts/fetchingContext";

function TopPanner() {
  const { screenSize, pathname } = useContext(fetchingContext);
  const [render, setRender] = useState(true);

  return render ? (
    <div className="top-panner">
      <div className="container">
        <p>
          🤖 Wondering how AI powers our work?{" "}
          <Link href={"/"}>Discover our approach here.</Link>
        </p>
        {screenSize === "small" && (
          <IoClose
            style={{ color: `white`, fontSize: `39px` }}
            onClick={() => {
              setRender(false);
              const oneWeekLater = new Date();
              oneWeekLater.setDate(oneWeekLater.getDate() + 7); // أسبوع من الآن
              localStorage.setItem(
                "topPannerClosedUntil",
                oneWeekLater.toISOString()
              );
            }}
          />
        )}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default TopPanner;
