import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUp
} from "lucide-react";

import "../styles/footer.css";

export default function Footer() {

  const scrollTop = () => {

    window.scrollTo({

      top:0,

      behavior:"smooth"

    });

  };

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-about">

          <div className="footer-logo">

            <Coffee size={30}/>

            <h2>GREKO</h2>

          </div>

          <p>

            Greko Coffee House is built for
            people who love handcrafted coffee,
            delicious food and unforgettable
            café experiences.

          </p>



        </div>


        {/* LINKS */}

        <div className="footer-links">

          <h3>

            Quick Links

          </h3>

          <a href="#home">Home</a>

          <a href="#story">About</a>

          <a href="#menu">Menu</a>

          <a href="#gallery">Gallery</a>

          <a href="#reviews">Reviews</a>

          <a href="#reservation">Reservation</a>

        </div>


        {/* CONTACT */}

        <div className="footer-contact">

          <h3>

            Contact

          </h3>

          <div>

            <MapPin size={18}/>

            <span>

              Jalandhar, Punjab

            </span>

          </div>

          <div>

            <Phone size={18}/>

            <span>

              +91 98765 43210

            </span>

          </div>

          <div>

            <Mail size={18}/>

            <span>

              hello@greko.in

            </span>

          </div>

          <div>

            <Clock3 size={18}/>

            <span>

              9 AM – 11 PM

            </span>

          </div>

        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">

        <p>

          © {new Date().getFullYear()} Greko Coffee House.
          All Rights Reserved.

        </p>

        <button

          onClick={scrollTop}

        >

          <ArrowUp size={18}/>

        </button>

      </div>

    </footer>

  );

}