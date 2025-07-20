"use client";
import React from "react";
import { useState, useEffect, useContext, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import * as MdIcons from "react-icons/md";
import { FaAngleRight, FaArrowUpLong, FaAngleDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FetchProvider, fetchingContext } from "@/Contexts/fetchingContext";
import { IoMenu, IoClose } from "react-icons/io5";

const navLinks = [
  {
    title: "Industries",
    departments: [
      {
        name: "Retail Banking",
        icon: "MdOutlineAccountBalance",
        categories: [
          "Digital lending products",
          "Mobile apps",
          "Super apps",
          "Wealth management",
        ],
      },
      {
        name: "B2B Banking",
        icon: "MdBusiness",
        categories: [
          "Digital lending management",
          "Fraud detection",
          "KYB solutions",
          "Product innovation",
        ],
      },
      {
        name: "Fintech and Neobanks",
        icon: "MdCreditCard",
        categories: ["End-to-end greenfield solutions", "Fintech engineering"],
      },
      {
        name: "Wealthtech",
        icon: "MdShowChart",
        categories: ["Trading and investment", "Portfolio management"],
      },
    ],
  },
  {
    title: "Services",
    departments: [
      {
        name: "Product",
        icon: "MdOutlineLightbulb",
        categories: [
          "Product innovation",
          "Product strategy",
          "AI powered product discovery",
        ],
      },
      {
        name: "Engineering",
        icon: "MdOutlineMemory",
        categories: [
          "Core banking",
          "Digital transformation",
          "Software development",
          "Solution architecture",
          "Payment solution",
        ],
      },
      {
        name: "Operations",
        icon: "MdCloud",
        categories: [
          "AWS consulting",
          "DevOps cloud engineering",
          "Feature development",
        ],
      },
      {
        name: "Ai",
        icon: "MdOutlineAutoAwesome",
        categories: ["AI automation", "AI transformation"],
      },
      {
        name: "Blockchain",
        icon: "MdCurrencyBitcoin",
        categories: [
          "Blockchain adoption",
          "Blockchain consultation",
          "Smart contract auditing",
        ],
      },
    ],
  },
  {
    title: "Insights",
    departments: [
      { name: "Knowledge Hub", icon: "MdOutlineLightbulb", categories: [] },
      { name: "Whitepapers", icon: "MdOutlineLightbulb", categories: [] },
      { name: "Case Studies", icon: "MdOutlineLightbulb", categories: [] },
      { name: "Fintech Academy", icon: "MdOutlineLightbulb", categories: [] },
    ],
  },
  {
    title: "Company",
    departments: [
      { name: "Careers", icon: "MdWork", categories: [] },
      { name: "Partnerships", icon: "MdHandshake", categories: [] },
      { name: "Press Releases", icon: "MdCampaign", categories: [] },
      { name: "About", icon: "MdInfoOutline", categories: [] },
      { name: "Billing Info", icon: "MdPayment", categories: [] },
      { name: "Locations", icon: "MdLocationOn", categories: [] },
    ],
  },
];

function Header() {
  const { screenSize, pathname } = useContext(fetchingContext);
  const [activeNav, setActiveNav] = useState(0);
  const [activeBtn, setActiveBtn] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);

  console.log(activeNav);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">
          <Image className="resetPosition" src={`/logo.png`} fill />
        </Link>
        {screenSize !== "large" && (
          <IoMenu
            className="menu-ico"
            onClick={() => {
              setMobileMenu(true);
            }}
          />
        )}
        <div
          ref={mobileMenuRef}
          className={`holder ${mobileMenu ? "active" : ""}`}
        >
          <nav>
            {screenSize !== "large" && (
              <div className="top">
                <Link href="/" className="logo">
                  <Image className="resetPosition" src={`/logo.png`} fill />
                </Link>
                <IoClose
                  className="menu-ico-close"
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                />
              </div>
            )}
            <ul>
              {navLinks.map((x, index) => (
                <li
                  key={index}
                  className={activeBtn === index ? `active` : ``}
                  onMouseEnter={() => {
                    setActiveNav(index);
                    setActiveBtn(null);
                  }}
                  onClick={() => {
                    setActiveNav(index);
                    setActiveBtn(null);
                    console.log("xxxx");
                  }}
                >
                  {x.title} <FaAngleDown />
                </li>
              ))}
              <div
                className={`routs-menu`}
                style={{
                  top:
                    screenSize !== "large"
                      ? `${
                          activeNav == 0 ? 67 + 53 : (activeNav + 1) * 67 + 53
                        }px`
                      : "90px",
                }}
                onMouseEnter={() => setActiveBtn(activeNav)}
              >
                <div className={`container ${activeNav > 1 ? "wrap" : ""}`}>
                  {navLinks[activeNav]?.departments?.map((dept, index) => {
                    const Icon =
                      MdIcons[dept.icon] || MdIcons["MdOutlineLightbulb"];
                    return (
                      <div key={index}>
                        <h4>
                          <Icon />
                          <Link href={`/`}>{dept.name}</Link>
                          {activeNav > 1 && (
                            <FaAngleRight className="arrow-right" />
                          )}
                        </h4>
                        <ul>
                          {dept.categories?.map((cat, idx) => (
                            <Link href={`/`} key={idx}>
                              {cat}
                            </Link>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                {activeNav == 2 && (
                  <div className="holder container">
                    <div className="left">
                      <div className="top">
                        <h4>LATEST WHITEPAPERS</h4>
                        <Link href={`/`}>See all</Link>
                      </div>
                      <div className="row">
                        <div className="card">
                          <Image
                            src={`/header1.png`}
                            fill
                            className={`resetPosition`}
                          />
                          <h5>Fintech Trends 2025 Guide</h5>
                          <FaArrowUpLong />
                        </div>
                        <div className="card">
                          <Image
                            src={`/header2.png`}
                            fill
                            className={`resetPosition`}
                          />
                          <h5>Fintech Trends 2025 Guide</h5>
                          <FaArrowUpLong />
                        </div>
                      </div>
                    </div>
                    <div className="right">
                      <div className="hold">
                        <div className="colomn">
                          <h4>Interested in a specific topic?</h4>
                          <h5>Let us know - we are happy to help</h5>
                        </div>
                        <button>
                          Talk to an expert <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ul>
          </nav>
          <button className="main-button">Contact us</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
