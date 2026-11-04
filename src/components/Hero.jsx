import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { animate, stagger } from "animejs";

import "../styles/hero.css";

export default function Hero() {
  useEffect(() => {
    animate(".hero-letter", {
      translateY: [120, 0],
      opacity: [0, 1],
      delay: stagger(80),
      duration: 1000,
      ease: "outExpo",
    });
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background */}

      <div className="hero-bg"></div>

      <div className="hero-noise"></div>

      {/* Coffee Circle */}

      <div className="coffee-circle">
        <div className="coffee-shadow"></div>

        <div className="coffee-cup">
          <div className="cup-rim">
            <div className="coffee-fill">
              <div className="latte-art">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <div className="cup-handle"></div>
        </div>

        <div className="steam">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Hero Content */}

      <div className="hero-content">
        <motion.p
          className="hero-tag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          EASTWOOD VILLAGE • JALANDHAR
        </motion.p>

        <h1>
          {"GREKO".split("").map((letter, index) => (
            <span className="hero-letter" key={index}>
              {letter}
            </span>
          ))}
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          Espresso Bar
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          Freshly brewed 100% Arabica coffee,
          handcrafted beverages, delicious food
          and unforgettable conversations.
        </motion.p>

        <motion.a
          href="#story"
          className="hero-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          Discover More

          <ArrowDown size={18} />
        </motion.a>
      </div>

      {/* Rating */}

      <motion.div
        className="hero-rating"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
      >
        <strong>4.8</strong>

        <div>
          <span>★★★★★</span>

          <p>383 GOOGLE REVIEWS</p>
        </div>
      </motion.div>

      {/* Side Text */}

      <motion.div
        className="hero-side"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        OPEN DAILY • UNTIL 11 PM
      </motion.div>
    </section>
  );
}