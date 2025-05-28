import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { BsCircleFill, BsWhatsapp } from 'react-icons/bs';
import ContactButtons from '../contacts/ContactButtons';

export default function Footer() {
  return (
    <>
      <footer className="bg-stone-900 text-center text-sm font-medium text-white mt-12 py-12 ">
        <section className="container-1024 max-w-[80%] m-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <article className="md:w-1/4 flex flex-wrap md:flex-col gap-2 text-start ">
            <h3 className="font-bold text-xl">Quem somos</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              modi minus saepe, ducimus corrupti laboriosam alias, laudantium
              neque similique vero quisquam beatae a deserunt dolores accusamus
              libero sit assumenda ratione! deserunt dolores accusamus libero
              sit assumenda ratione!
            </p>
            <p>Endereço - Rua da Marrota, 350 - Landim, Famalicão</p>
          </article>{' '}
          <section className="md:w-1/3 md:flex md:justify-center">
            <article className="flex flex-col  items-start md:-ml-8">
              {' '}
              <h3 className="font-bold text-xl">Contate-nos</h3>
              <article className="flex gap-4 my-2 justify-center items-center">
                <ContactButtons />
                <BsCircleFill className="text-white w-2 h-2" />
                <Link href="https://wa.me/351914122413" target="_blank">
                  <Button variant="service">
                    <BsWhatsapp />
                    <span>Fale conosco!</span>
                  </Button>
                </Link>
                {/* <div className="w-8 h-8 bg-gray-100" />
                <div className="w-8 h-8 bg-gray-100" />
                <div className="w-8 h-8 bg-gray-100" />
                <div className="w-8 h-8 bg-gray-100" /> */}
              </article>
              {/* <p>WhatsApp: +351 914 122 413</p> */}
              {/* <Button className="mt-4 bg-customBrown200 hover:bg-customBrown200/90">
                <BsWhatsapp />
                <span>Fale conosco!</span>
              </Button> */}
            </article>
            {/* <article className="md:w-1/4 flex flex-col gap-2 items-start md:items-center">
            <h3 className="font-bold text-xl">Contacte-nos</h3>
          </article> */}
          </section>
          <article className="md:w-1/4 flex flex-wrap md:flex-col gap-2 items-start">
            <h3 className="font-bold text-xl">Links úteis</h3>
            <article className="flex flex-wrap md:flex-col gap-4 md:gap-3">
              <Link href="#" className="uppercase hover:text-brandYellow100">
                lorem ipsum
              </Link>
               <Link href="#" className="uppercase hover:text-brandYellow100">
                lorem ipsum
              </Link>
               <Link href="#" className="uppercase hover:text-brandYellow100">
                lorem ipsum
              </Link>
               <Link href="#" className="uppercase hover:text-brandYellow100">
                lorem ipsum
              </Link>
               <Link href="#" className="uppercase hover:text-brandYellow100">
                lorem ipsum
              </Link>
               <Link href="#" className="uppercase hover:text-brandYellow100">
                lorem ipsum
              </Link>
            </article>
          </article>
          <article className="md:w-1/4 flex flex-col items-start gap-2">
            <h3 className="font-bold text-xl">Instagram</h3>
            <div className="flex flex-wrap gap-4 md:max-w-[176px]">
              {/* RETIRAR O  unoptimized QUANDO FOR COLOCAR AS IMAGENS REAIS */}
              <Image
                src="/footer/movingChange/movingChange1.jpg"
                alt="Ícone 1"
                width={48}
                height={48}
                className="w-12 h-12 object-cover"
                unoptimized
              />
              <Image
                src="/footer/movingChange/movingChange2.jpg"
                alt="Ícone 2"
                width={48}
                height={48}
                className="w-12 h-12 object-cover"
                unoptimized
              />
              <Image
                src="/footer/movingChange/movingChange3.jpg"
                alt="Ícone 3"
                width={48}
                height={48}
                className="w-12 h-12 object-cover"
                unoptimized
              />
              <Image
                src="/footer/cleaning/cleaning1.jpg"
                alt="Ícone 4"
                width={48}
                height={48}
                className="w-12 h-12 object-cover"
                unoptimized
              />
              <Image
                src="/footer/cleaning/cleaning2.jpg"
                alt="Ícone 5"
                width={48}
                height={48}
                className="w-12 h-12 object-cover"
                unoptimized
              />
              <Image
                src="/footer/cleaning/cleaning3.jpg"
                alt="Ícone 6"
                width={48}
                height={48}
                className="w-12 h-12 object-cover"
                unoptimized
              />
              <Image
                src="/footer/organizer/organizer1.jpg"
                alt="Ícone 7"
                width={48}
                height={48}
                className="w-12 h-12 object-cover"
                unoptimized
              />
              <Image
                src="/footer/organizer/organizer2.jpg"
                alt="Ícone 8"
                width={48}
                height={48}
                className="w-12 h-12 object-cover"
                unoptimized
              />
              <Image
                src="/footer/organizer/organizer3.jpg"
                alt="Ícone 9"
                width={48}
                height={48}
                className="w-12 h-12 object-cover"
                unoptimized
              />
              <Image
                src="/footer/organizer/organizer4.jpg"
                alt="Ícone 10"
                width={48}
                height={48}
                className="w-12 h-12 object-cover md:hidden"
                unoptimized
              />
            </div>
          </article>
        </section>
        <section className="mt-12">
          &copy; 2025 Your Company. All rights reserved.
        </section>
      </footer>
    </>
  );
}
