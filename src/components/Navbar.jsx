import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";

import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* LOGO */}

      <a href="#home" className="logo">
        <span className="logo-main">
          GR<span className="logo-accent">Ē</span>KO
        </span>

        <span className="logo-sub">
          ESPRESSO BAR
        </span>
      </a>

      {/* DESKTOP MENU */}

      <ul className="nav-links">
        <li><a href="#story">Story</a></li>

        <li><a href="#brew">Find Brew</a></li>

        <li><a href="#coffee">Coffee</a></li>

        <li><a href="#menu">Menu</a></li>

        <li><a href="#gallery">Gallery</a></li>

        <li><a href="#reviews">Reviews</a></li>
      </ul>

      {/* BUTTON */}

      <a href="#reservation" className="visit-btn">
        <MapPin size={16} />

        Visit Greko
      </a>

      {/* MOBILE ICON */}

      <button
        className="mobile-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE MENU */}

      <motion.div
        className={`mobile-menu ${menuOpen ? "active" : ""}`}
        initial={false}
        animate={{
          opacity: menuOpen ? 1 : 0,
          y: menuOpen ? 0 : -20,
        }}
      >
        <a href="#story" onClick={closeMenu}>
          Story
        </a>

        <a href="#brew" onClick={closeMenu}>
          Find Brew
        </a>

        <a href="#coffee" onClick={closeMenu}>
          Coffee
        </a>

        <a href="#menu" onClick={closeMenu}>
          Menu
        </a>

        <a href="#gallery" onClick={closeMenu}>
          Gallery
        </a>

        <a href="#reviews" onClick={closeMenu}>
          Reviews
        </a>

        <a href="#reservation" onClick={closeMenu}>
          Reservation
        </a>
      </motion.div>
    </motion.nav>
  );
}