import { motion } from "framer-motion";
import { Camera, Image } from "lucide-react";

import "../styles/gallery.css";

const gallery = [
  {
    id: 1,
    title: "Signature Coffee",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900",
  },

  {
    id: 2,
    title: "Latte Art",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900",
  },

  {
    id: 3,
    title: "Cafe Interior",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900",
  },

  {
    id: 4,
    title: "Fresh Desserts",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=900",
  },

  {
    id: 5,
    title: "Coffee Beans",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900",
  },

  {
    id: 6,
    title: "Barista",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900",
  }

];

export default function Gallery() {

  return (

    <section
      className="gallery"
      id="gallery"
    >

      <div className="gallery-container">

        <motion.div

          className="gallery-heading"

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

          <p className="gallery-tag">

            GALLERY

          </p>

          <h2>

            Every Corner
            <br />

            Tells A Story

          </h2>

          <p>

            From handcrafted coffees to warm
            interiors and beautiful moments,
            explore Greko through our gallery.

          </p>

        </motion.div>



        <div className="gallery-grid">

          {

            gallery.map(

              (item,index)=>(

                <motion.div

                  key={item.id}

                  className="gallery-card"

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
                    delay:index*.1
                  }}

                >

                  <img

                    src={item.image}

                    alt={item.title}

                  />

                  <div className="gallery-overlay">

                    <Camera size={26}/>

                    <h3>

                      {item.title}

                    </h3>

                  </div>

                </motion.div>

              )

            )

          }

        </div>


        <motion.a

          href="https://instagram.com"

          target="_blank"

          rel="noreferrer"

          className="gallery-button"

          initial={{
            opacity:0
          }}

          whileInView={{
            opacity:1
          }}

          viewport={{
            once:true
          }}

        >

          <Image size={18}/>

          Follow Greko on Instagram

        </motion.a>

      </div>

    </section>

  );

}