"use client";

import React, { useState, useEffect } from "react";
import MainNavbar from "../components/MainNavbar";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "@/client/components/Footer";

const MainLayout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (typeof window !== "undefined") {
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div>
      <MainNavbar />
      <main className="min-h-screen overflow-y-auto">{children}</main>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-2 right-2 md:bottom-[38px] flex flex-col items-center group z-40"
        >
          <div className="bg-[#ff9900] w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center">
            <IoIosArrowUp className="text-white text-base sm:text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-1" />
          </div>
          <span className="mt-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Back to Top
          </span>
        </button>
      )}

      <Footer />
    </div>
  );
};

export default MainLayout;
