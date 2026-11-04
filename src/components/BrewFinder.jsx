import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Sparkles, ArrowRight } from "lucide-react";

import "../styles/brewFinder.css";

export default function BrewFinder() {

  const [selectedMood, setSelectedMood] = useState("");

  const coffees = {

    Relax: {
      name: "Cafe Latte",
      desc: "Smooth espresso blended with silky steamed milk. Perfect for slow evenings.",
      emoji: "☕"
    },

    Focus: {
      name: "Espresso",
      desc: "Pure, bold and intense. Crafted for maximum focus.",
      emoji: "⚡"
    },

    Refresh: {
      name: "Iced Matcha",
      desc: "Refreshing ceremonial matcha served chilled.",
      emoji: "🍵"
    },

    Sweet: {
      name: "Belgian Hot Chocolate",
      desc: "Rich chocolate with velvety texture for dessert lovers.",
      emoji: "🍫"
    },

    Energy: {
      name: "Roasted Hazelnut Latte",
      desc: "Nutty espresso with creamy milk and hazelnut aroma.",
      emoji: "🌰"
    }

  };

  return (

    <section
      className="brew"
      id="brew"
    >

      <div className="brew-container">

        <motion.div
          className="brew-left"

          initial={{
            opacity:0,
            x:-70
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.8
          }}
        >

          <p className="brew-tag">

            FIND YOUR BREW

          </p>

          <h2>

            Coffee
            <br />

            Based On
            <br />

            Your Mood

          </h2>

          <p className="brew-text">

            Every mood deserves a different coffee.
            Select how you're feeling today and
            we'll recommend the perfect Greko drink.

          </p>

          <div className="mood-grid">

            {

              Object.keys(coffees).map((mood)=>(

                <button

                  key={mood}

                  className={selectedMood===mood ? "active" : ""}

                  onClick={()=>setSelectedMood(mood)}

                >

                  {mood}

                </button>

              ))

            }

          </div>

        </motion.div>



        <motion.div

          className="brew-right"

          initial={{
            opacity:0,
            x:70
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.8
          }}

        >

          <AnimatePresence mode="wait">

            {

              selectedMood ?

              <motion.div

                key={selectedMood}

                className="brew-card"

                initial={{
                  opacity:0,
                  scale:.9,
                  y:30
                }}

                animate={{
                  opacity:1,
                  scale:1,
                  y:0
                }}

                exit={{
                  opacity:0,
                  scale:.9,
                  y:-30
                }}

              >

                <div className="coffee-icon">

                  {coffees[selectedMood].emoji}

                </div>

                <h3>

                  {coffees[selectedMood].name}

                </h3>

                <p>

                  {coffees[selectedMood].desc}

                </p>

                <div className="brew-info">

                  <span>

                    <Coffee size={16}/>

                    Premium Arabica

                  </span>

                  <span>

                    <Sparkles size={16}/>

                    Barista Choice

                  </span>

                </div>

                <button>

                  Explore Drink

                  <ArrowRight size={18}/>

                </button>

              </motion.div>

              :

              <motion.div

                className="brew-placeholder"

                initial={{
                  opacity:0
                }}

                animate={{
                  opacity:1
                }}

              >

                <Coffee size={70}/>

                <h3>

                  Select Your Mood

                </h3>

                <p>

                  Choose one option on the left
                  and discover your perfect cup.

                </p>

              </motion.div>

            }

          </AnimatePresence>

        </motion.div>

      </div>

    </section>

  );

}