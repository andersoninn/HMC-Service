import Navbar from './Navbar';

export default function Header() {
  return (
    <>
      <section className={`absolute top-0 w-full z-40 `}>
        <Navbar />
      </section>
    </>
  );
}
