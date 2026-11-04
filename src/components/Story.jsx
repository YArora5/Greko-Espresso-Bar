import { motion } from "framer-motion";

import "../styles/story.css";

export default function Story() {
  return (
    <section className="story" id="story">

      <div className="story-container">

        {/* LEFT */}

        <motion.div
          className="story-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="story-tag">
            OUR STORY
          </p>

          <h2>
            Coffee isn't made.
            <br />
            It's cultivated.
          </h2>

          <p className="story-text">
            What started as a dream between two passionate coffee lovers
            has grown into one of Punjab's most loved specialty coffee
            destinations. Every cup is brewed using premium Arabica beans,
            carefully roasted and crafted to create an unforgettable
            experience.
          </p>

          <div className="story-stats">

            <div className="stat-card">
              <h3>100%</h3>
              <span>Arabica Beans</span>
            </div>

            <div className="stat-card">
              <h3>4.8★</h3>
              <span>Google Rating</span>
            </div>

            <div className="stat-card">
              <h3>380+</h3>
              <span>Happy Reviews</span>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="story-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          <div className="story-card">

            <div className="bean bean1"></div>
            <div className="bean bean2"></div>
            <div className="bean bean3"></div>
            <div className="bean bean4"></div>

            <div className="story-overlay">

              <p className="story-small">
                FARM TO CUP
              </p>

              <h3>
                Crafted With Passion
              </h3>

              <p className="story-card-text">
                Every bean follows a beautiful journey —
                from carefully selected farms to skilled
                roasting, precise brewing and finally
                into the cup you enjoy every day.
              </p>

              <div className="timeline">

                <div className="timeline-item">
                  🌱 Farm
                </div>

                <div className="timeline-item">
                  🔥 Roast
                </div>

                <div className="timeline-item">
                  ☕ Brew
                </div>

                <div className="timeline-item">
                  ❤️ Enjoy
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}