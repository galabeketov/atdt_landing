import "./App.css";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./view/About";
import Contact from "./view/Contact";
import Courses from "./view/Courses";
import Features from "./view/Features";
import Team from "./view/Team";
import Testimonial from "./view/Testimonial";

function App() {
  return (
    <>
      <FirebaseProvider>
        <Header />
        <About />
        <Features />
        <Courses />
        <Team />
        <Testimonial />
        <Contact />
        <Footer />
      </FirebaseProvider>
    </>
  );
}

export default App;
