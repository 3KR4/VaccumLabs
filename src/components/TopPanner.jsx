"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext, useRef } from "react";

function TopPanner() {
  return (
    <div className="top-panner">
      <div className="container">
        <p>
          🤖 Wondering how AI powers our work?{" "}
          <Link href={"/"}>Discover our approach here.</Link>
        </p>
      </div>
    </div>
  );
}

export default TopPanner;
