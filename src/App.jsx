import "./styles/globals.css";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Story from "./components/Story.jsx";
import BrewFinder from "./components/BrewFinder.jsx";
import SignatureDrinks from "./components/SignatureDrinks.jsx";
import BrewingJourney from "./components/BrewingJourney.jsx";
import Menu from "./components/Menu.jsx";
import Gallery from "./components/gallery.jsx";
import Reviews from "./components/Reviews.jsx";
import Reservation from "./components/Reservation.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <main>

      <Navbar />

      <Hero />

      <Story />

      <BrewFinder />

      <SignatureDrinks />

      <BrewingJourney />

      <Menu />

      <Gallery />

      <Reviews />

      <Reservation />

      <Footer />

    </main>
  );
}

export default App;