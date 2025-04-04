"use client";

import React, { useState, useEffect } from "react";
import MainNavbar from "../components/MainNavbar";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "@/client/components/Footer";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

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
          className="fixed bottom-4 right-4 flex flex-col items-center cursor-pointer group z-40"
        >
          <div className="bg-indigo-600 size-10 rounded-full flex justify-center items-center">
            <ChevronUpIcon className="text-white size-5 -mt-0.5 stroke-3" />
          </div>
          <span className="mt-2 text-indigo-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll to Top
          </span>
        </button>
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
