import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import reviewData from "../data/reviewData";
import "../styles/reviews.css";

export default function Reviews() {

  return (

    <section
      className="reviews"
      id="reviews"
    >

      <div className="reviews-container">

        <motion.div

          className="reviews-heading"

          initial={{
            opacity: 0,
            y: 60,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.8,
          }}

        >

          <p className="reviews-tag">
            CUSTOMER REVIEWS
          </p>

          <h2>
            Loved By
            <br />
            Coffee Lovers
          </h2>

          <p>
            Thousands of guests have made
            Greko their favorite coffee
            destination.
          </p>

        </motion.div>


        <div className="reviews-grid">

          {reviewData.map((review, index) => (

            <motion.div

              key={review.id}

              className="review-card"

              initial={{
                opacity: 0,
                y: 60,
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
              }}

            >

              <Quote
                className="quote-icon"
                size={40}
              />

              <div className="stars">

                {[...Array(review.rating)].map((_, i) => (

                  <Star
                    key={i}
                    fill="currentColor"
                    size={18}
                  />

                ))}

              </div>

              <p className="review-text">

                {review.review}

              </p>

              <div className="review-user">

                <div className="avatar">

                  {review.avatar}

                </div>

                <div>

                  <h4>

                    {review.name}

                  </h4>

                  <span>

                    {review.role} • {review.location}

                  </span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}
