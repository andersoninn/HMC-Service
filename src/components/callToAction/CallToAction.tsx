import Link from 'next/link';
import { Button } from '../ui/button';

export default function CallToAction() {
  return (
    <>
      <section className="bg-brandYellow100 my-2 py-16" id="callToAction">
        <section className="max-w-[80%] md:container-1024 m-auto flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl font-bold mb-2">
            Agende agora o seu serviço
          </h2>
          <p className="text-gray-800 text-lg max-w-xl  md:mb-0 md:mr-6 mb-6  ">
            Não adie o que pode transformar seu dia a dia. Escolha praticidade,
            segurança e eficiência agora mesmo.
          </p>
          <Link
            href="https://wa.me/351919393811"
            className="md:w-1/3 w-full"
            target="_blank"
          >
            <Button className="w-full" variant="dark">
              Agendar
            </Button>
          </Link>
        </section>
      </section>
    </>
  );
}
