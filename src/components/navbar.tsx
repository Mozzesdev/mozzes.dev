import { useState, useRef, useCallback, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTranslate } from "../i18n/useTranslate";

const Navbar = () => {
  const [underline, setUnderline] = useState({
    width: 0,
    left: 0,
    centerPosition: 0,
  });
  const navRef = useRef(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const t = useTranslate();

  const [location] = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const hash = window.location.hash;

      if (hash === "#about") {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 0);
  }, [location]);

  const goToAbout = () => {
    if (location === "/") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const updateUnderline = useCallback((target: any) => {
    const navRect = (navRef.current as any).getBoundingClientRect();
    const linkRect = target.getBoundingClientRect();

    const centerPosition = linkRect.left - navRect.left + linkRect.width / 2;

    setUnderline((prev) => ({
      width: linkRect.width,
      left: centerPosition - prev.width / 2,
      centerPosition: centerPosition,
    }));

    // Timeout para reiniciar la transición
    setTimeout(() => {
      setUnderline({
        width: linkRect.width,
        left: linkRect.left - navRect.left,
        centerPosition: centerPosition,
      });
    }, 10);
  }, []);

  const handleMouseLeave = () => {
    setUnderline((prev) => ({
      ...prev,
      width: 0,
      left: prev.centerPosition,
    }));
  };

  return (
    <nav
      ref={navRef}
      className="animate-entrance relative"
      style={{ animationDelay: "0.5s" }}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="flex gap-6">
        <li>
          <Link
            ref={(el) => (itemsRef.current[0] = el)}
            onMouseEnter={(e) => updateUnderline(e.target)}
            href="/#about"
            className="text-gray-600 hover:text-blue-600 text-sm relative block"
            onClick={goToAbout}
          >
            {t("about")}
          </Link>
        </li>
        {[
          { key: t("projects.title"), link: "/projects" },
          { key: "Blog", link: "/blog" },
        ].map((item, index) => (
          <li key={item.key}>
            <Link
              href={item.link}
              ref={(el) => (itemsRef.current[index + 1] = el)}
              className="text-gray-600 hover:text-blue-600 text-sm relative block"
              onMouseEnter={(e) => updateUnderline(e.target)}
            >
              {item.key}
            </Link>
          </li>
        ))}
      </ul>
      <span
        className="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300"
        style={{
          width: `${underline.width}px`,
          left: `${underline.left}px`,
          transformOrigin: "center",
        }}
      ></span>
    </nav>
  );
};

export default Navbar;
