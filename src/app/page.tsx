import CallToAction from '@/components/callToAction/CallToAction';
import FloatingButton from '@/components/FloatingButton';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/hero/Hero';
import ServicesContainer from '@/components/services/ServicesContainer';
import Testimonials from '@/components/testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <section>
        <Hero />
        <ServicesContainer />
        <Testimonials />
        <CallToAction />
        <Footer />
        <FloatingButton />
      </section>
    </>
  );
}
