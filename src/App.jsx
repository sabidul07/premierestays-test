import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Company from "./components/Icons/Company";
import Navbar from "./components/Navbar";
import OurFeature from "./components/OurFeature";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Header />
      <Company />
      <AboutUs />
      <OurFeature />
      <Services />
    </>
  );
}

export default App;
