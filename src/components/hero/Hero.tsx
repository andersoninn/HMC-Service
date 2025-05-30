import Header from '../header/Header';
import Slider from './Slider';

export default function Hero() {
  return (
    <>
      <section className="min-h-full relative">
        <Header />
        <Slider />
      </section>
    </>
  );
}
