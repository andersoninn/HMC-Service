import FloatingButton from '@/components/FloatingButton';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/hero/Hero';
import ServicesContainer from '@/components/services/ServicesContainer';

export default function Home() {
  return (
    <>
      <section>
        <Hero />
        <ServicesContainer />
        <Footer />
        <FloatingButton />
      </section>
    </>
  );
}
