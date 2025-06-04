import { ArrowRightIcon, MobileIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className=" pt-20 bg-stone-900 text-white z-0" id="footer">
      <section className="max-w-[1240px] w-[90%] m-auto flex flex-col md:flex-row gap-8 md:gap-12">
        <section className="flex flex-col gap-4 md:w-1/3">
          <article className="flex gap-2 items-center justify-start">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />{' '}
            <article className="flex flex-col items-start mt-4 -ml-2">
              <span className="text-white font-bold text-3xl">HMC</span>
              <span className="font-bold -mt-1">TRANSPORTES</span>
            </article>
          </article>
          <p className="font-light text-gray-400">
            Somos uma emrpesa especializada em soluções logísticas com
            agilidade, segurança e compromisso. Com anos de experiência no
            mercado, oferecemos serviços de transporte que atendem aos mais
            altos padrões de qualidade, sempre focados na pontualidade e na
            satisfação dos nossos clientes.
          </p>
        </section>

        <section className="md:w-1/3 flex flex-col gap-2">
          <h3 className="text-2xl font-semibold pb-4">
            Informações e serviços
          </h3>
          <Link
            href="#"
            className="hover:text-gray-300 flex gap-2 items-center justify-start"
          >
            <ArrowRightIcon className="w-3 h-3 font-semibold" /> Mudanças
            Nacionais
          </Link>
          <Link
            href="#"
            className="hover:text-gray-300 flex gap-2 items-center justify-start"
          >
            <ArrowRightIcon className="w-3 h-3 font-semibold" /> Mudanças
            Internacionais
          </Link>
          <Link
            href="#"
            className="hover:text-gray-300 flex gap-2 items-center justify-start"
          >
            <ArrowRightIcon className="w-3 h-3 font-semibold" /> Embalamento
          </Link>
          <Link
            href="#"
            className="hover:text-gray-300 flex gap-2 items-center justify-start"
          >
            <ArrowRightIcon className="w-3 h-3 font-semibold" /> Armazenamento
          </Link>
          <Link
            href="#"
            className="hover:text-gray-300 flex gap-2 items-center justify-start"
          >
            <ArrowRightIcon className="w-3 h-3 font-semibold" /> Limpeza
            profissional
          </Link>
          <Link
            href="#"
            className="hover:text-gray-300 flex gap-2 items-center justify-start"
          >
            <ArrowRightIcon className="w-3 h-3 font-semibold" /> Profissional
            Organizer
          </Link>
        </section>

        <article className="md:w-1/3 flex flex-col gap-2">
          <h3 className="text-2xl font-semibold pb-4">Contatos</h3>
          <p className="flex gap-2 items-center justify-start text-sky-300 font-semibold">
            <MobileIcon className="w-4 h-4" />
            <span>+351 919 393 811</span>{' '}
            <span className="text-gray-400 font-light">/cooperação e loja</span>
          </p>
          <p className="flex gap-2 items-center justify-start font-semibold">
            <span>@</span>
            hmcservices.lorem@gmail.com
          </p>
        </article>
      </section>
      <aside className="bg-bgMenu2 mt-20 py-6 font-light text-gray-400">
        <article className="max-w-[1240px] w-[90%] m-auto flex flex-col items-center justify-center text-center">
          <p>© Copyright Todos os direitos reservados a HMC Transportes</p>
          <h3>
            Produzido por{' '}
            <Link
              href="https://www.andersoninn.dev/"
              className="hover:text-gray-100"
              target="_blank"
            >
              Anderson Carvalho.
            </Link>
          </h3>
        </article>
      </aside>
    </section>
  );
}
