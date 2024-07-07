import Navbar from "../components/Navbar/Navbar.jsx";
import Banner from "../components/Banner/Banner.jsx"
import About from "../components/About/About.jsx"
import Venue from "../components/Venue/Venue.jsx"
export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <About />
      <Venue />
    </div>
  )
}