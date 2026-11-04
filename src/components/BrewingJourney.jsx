import { motion } from "framer-motion";
import {
  Sprout,
  Flame,
  Coffee,
  Heart,
} from "lucide-react";

import "../styles/brewing.css";

const journey = [
  {
    id: 1,
    icon: <Sprout size={34} />,
    title: "Farm",
    text:
      "Premium Arabica beans are sourced from carefully selected coffee farms around the world.",
  },

  {
    id: 2,
    icon: <Flame size={34} />,
    title: "Roasting",
    text:
      "Each batch is roasted with precision to unlock rich aroma and balanced flavour.",
  },

  {
    id: 3,
    icon: <Coffee size={34} />,
    title: "Brewing",
    text:
      "Our baristas extract every shot using perfect pressure and brewing techniques.",
  },

  {
    id: 4,
    icon: <Heart size={34} />,
    title: "Serve",
    text:
      "Every drink is handcrafted with passion before reaching your table.",
  },
];

export default function BrewingJourney() {

  return (

    <section
      className="journey"
      id="experience"
    >

      <div className="journey-container">

        <motion.div
          className="journey-heading"

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

          <p className="journey-tag">

            FROM FARM TO CUP

          </p>

          <h2>

            Every Cup
            <br />

            Has A Story

          </h2>

          <p className="journey-text">

            Discover how every Greko coffee
            travels through passion,
            craftsmanship and perfection.

          </p>

        </motion.div>


        <div className="journey-grid">

          {

            journey.map((step,index)=>(

              <motion.div

                key={step.id}

                className="journey-card"

                initial={{
                  opacity:0,
                  y:80
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  delay:index*.18,
                  duration:.7
                }}

              >

                <div className="journey-number">

                  0{step.id}

                </div>

                <div className="journey-icon">

                  {step.icon}

                </div>

                <h3>

                  {step.title}

                </h3>

                <p>

                  {step.text}

                </p>

              </motion.div>

            ))

          }

        </div>

      </div>

    </section>

  );

}