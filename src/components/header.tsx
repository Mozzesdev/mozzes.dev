import { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "wouter";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`px-6 py-5 sticky top-0 z-20 transition-colors duration-300 ${
        isScrolled ? "bg-[#ffffffe9] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between relative z-10">
        <Link
          href="/"
          className="text-xl font-bold relative group animate-entrance"
        >
          <span className="text-g-blue z-[1] inline-block relative group-hover:-translate-y-[8%] group-hover:duration-150 duration-500">
            MOZZES
          </span>
          <span className="absolute inset-0 text-blue-900 inline-block z-0">
            MOZZES
          </span>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}