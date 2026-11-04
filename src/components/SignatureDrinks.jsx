import { motion } from "framer-motion";
import { Coffee, Snowflake, Flame } from "lucide-react";

import "../styles/drinks.css";

const drinks = [
  {
    id: 1,
    name: "Roasted Hazelnut Latte",
    category: "Signature Coffee",
    price: "₹295",
    icon: <Coffee size={26} />,
    color: "#8B5E3C",
    description:
      "Fresh espresso blended with creamy milk and roasted hazelnut.",
  },

  {
    id: 2,
    name: "Belgian Hot Chocolate",
    category: "Chocolate",
    price: "₹340",
    icon: <Flame size={26} />,
    color: "#5A3825",
    description:
      "Premium Belgian chocolate served rich, smooth and comforting.",
  },

  {
    id: 3,
    name: "Iced Matcha",
    category: "Refreshing",
    price: "₹315",
    icon: <Snowflake size={26} />,
    color: "#5D7A4A",
    description:
      "Ceremonial matcha with chilled milk for a refreshing experience.",
  },
];

export default function SignatureDrinks() {
  return (
    <section className="drinks" id="coffee">
      <div className="drinks-container">
        <motion.div
          className="drinks-heading"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="drinks-tag">
            SIGNATURE COLLECTION
          </p>

          <h2>
            Coffee Crafted
            <br />
            With Passion
          </h2>

          <p className="drinks-description">
            Our most loved handcrafted beverages prepared
            with premium Arabica beans and barista precision.
          </p>
        </motion.div>

        <div className="drinks-grid">
          {drinks.map((drink, index) => (
            <motion.div
              className="drink-card"
              key={drink.id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
            >
              <div
                className="drink-icon"
                style={{
                  background: drink.color,
                }}
              >
                {drink.icon}
              </div>

              <span className="drink-category">
                {drink.category}
              </span>

              <h3>
                {drink.name}
              </h3>

              <p>
                {drink.description}
              </p>

              <div className="drink-footer">
                <strong>
                  {drink.price}
                </strong>

                <button>
                  View Drink
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}