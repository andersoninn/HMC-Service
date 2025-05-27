import Navbar from '../header/Navbar';
import Slider from './Slider';

export default function Hero() {
  return (
    <>
      <section className="min-h-full relative">
        <Navbar />
        <Slider />
      </section>
    </>
  );
}
