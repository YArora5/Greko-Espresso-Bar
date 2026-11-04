import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Users,
  Phone,
  Mail,
} from "lucide-react";

import "../styles/reservation.css";

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  const today = new Date();
  const minDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);

  return (

    <section
      className="reservation"
      id="reservation"
    >

      <div className="reservation-container">

        <motion.div

          className="reservation-left"

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

          <p className="reservation-tag">

            RESERVE YOUR TABLE

          </p>

          <h2>

            Great Coffee
            <br/>

            Begins With
            <br/>

            A Reservation

          </h2>

          <p>

            Reserve your table today and
            enjoy handcrafted coffee,
            delicious food and an
            unforgettable Greko experience.

          </p>


          <div className="reservation-info">

            <div>

              <CalendarDays size={20}/>

              <span>

                Open Every Day

              </span>

            </div>

            <div>

              <Clock3 size={20}/>

              <span>

                9:00 AM – 11:00 PM

              </span>

            </div>

            <div>

              <Users size={20}/>

              <span>

                Family Friendly

              </span>

            </div>

            <div>

              <Phone size={20}/>

              <span>

                +91 98765 43210

              </span>

            </div>

            <div>

              <Mail size={20}/>

              <span>

                hello@greko.in

              </span>

            </div>

          </div>

        </motion.div>



        <motion.form

          className="reservation-form"
          onSubmit={handleSubmit}

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

          <h3>

            Book A Table

          </h3>


          <input
            type="text"
            name="name"
            placeholder="Full Name"
            autoComplete="name"
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            required
          />


          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            autoComplete="tel"
            required
          />


          <div className="double-input">

            <input
              type="date"
              name="date"
              min={minDate}
              aria-label="Reservation date"
              required
            />

            <input
              type="time"
              name="time"
              aria-label="Reservation time"
              required
            />

          </div>


          <input

            type="number"
            name="guests"
            min="1"
            max="20"
            placeholder="Guests"
            required

          />


          <textarea

            rows="5"
            name="requests"
            placeholder="Special Requests"

          ></textarea>


          <button type="submit">
            Reserve Now
          </button>

          {submitted && (
            <p className="reservation-success" role="status">
              Thanks! Your reservation request has been recorded in this demo. No booking has been sent to the café.
            </p>
          )}

        </motion.form>

      </div>

    </section>

  );

}