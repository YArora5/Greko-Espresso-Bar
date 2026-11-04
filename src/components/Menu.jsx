import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Coffee,
  IceCream,
  UtensilsCrossed,
  GlassWater
} from "lucide-react";

import menuData from "../data/menuData";
import "../styles/menu.css";

const categories = [
  "All",
  "Coffee",
  "Cold Brews",
  "Tea",
  "Food",
  "Shakes"
];

export default function Menu() {

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu =
    activeCategory === "All"
      ? menuData
      : menuData.filter(
          (item) => item.category === activeCategory
        );

  const getIcon = (category) => {

    switch (category) {

      case "Coffee":
        return <Coffee size={20} />;

      case "Cold Brews":
        return <IceCream size={20} />;

      case "Tea":
        return <GlassWater size={20} />;

      case "Food":
        return <UtensilsCrossed size={20} />;

      default:
        return <Coffee size={20} />;

    }

  };

  return (

    <section
      className="menu-section"
      id="menu"
    >

      <div className="menu-container">

        <motion.div
          className="menu-heading"

          initial={{
            opacity:0,
            y:60
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.8
          }}

        >

          <p className="menu-tag">

            GREKO MENU

          </p>

          <h2>

            Crafted
            <br />

            For Every Taste

          </h2>

          <p>

            From specialty coffees to
            handcrafted meals and desserts,
            every item is prepared with
            premium ingredients.

          </p>

        </motion.div>


        {/* CATEGORY BUTTONS */}

        <div className="menu-tabs">

          {

            categories.map((category)=>(

              <button

                key={category}

                className={
                  activeCategory===category
                  ? "active"
                  : ""
                }

                onClick={()=>

                  setActiveCategory(category)

                }

              >

                {category}

              </button>

            ))

          }

        </div>


        {/* MENU GRID */}

        <AnimatePresence mode="wait">

          <motion.div

            key={activeCategory}

            className="menu-grid"

            initial={{
              opacity:0,
              y:30
            }}

            animate={{
              opacity:1,
              y:0
            }}

            exit={{
              opacity:0,
              y:-20
            }}

            transition={{
              duration:.4
            }}

          >

            {

              filteredMenu.map(

                (item,index)=>(

                  <motion.div

                    key={item.id}

                    className="menu-card"

                    initial={{
                      opacity:0,
                      y:60
                    }}

                    whileInView={{
                      opacity:1,
                      y:0
                    }}

                    viewport={{
                      once:true
                    }}

                    transition={{
                      delay:index*.05
                    }}

                  >

                    <div className="menu-card-top">

                      <div className="menu-icon">

                        {

                          getIcon(item.category)

                        }

                      </div>

                      <span>

                        {item.category}

                      </span>

                    </div>

                    <h3>

                      {item.name}

                    </h3>

                    <p>

                      {item.description}

                    </p>

                    <div className="menu-bottom">

                      <strong>

                        ₹{item.price}

                      </strong>

                      <button>

                        Add to Cart

                      </button>

                    </div>

                  </motion.div>

                )

              )

            }

          </motion.div>

        </AnimatePresence>

      </div>

    </section>

  );

}