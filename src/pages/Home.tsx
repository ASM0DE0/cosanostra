import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Promotions from '../components/Promotions';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Promotions />
      <Gallery />
      <Testimonials />
      <About />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Home;
