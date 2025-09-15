import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import PopularDeals from '../components/PopularDeals';
import Testimonials from '../components/Testimonials';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <PopularDeals />
        <Testimonials />
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
