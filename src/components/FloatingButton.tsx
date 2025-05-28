import Link from 'next/link';
import Image from 'next/image';

export default function FloatingButton() {
  return (
    <Link
      href="https://wa.me/351919393811"
      className="fixed bottom-8 md:bottom-12 right-4 bg-green-500 text-white p-3 px-6 hover:bg-green-600 rounded-full shadow-xl hover:shadow-2xl z-50 flex items-center justify-center gap-4 "
      target="_blank"
    >
      <Image
        src="/whatsapp.png"
        alt="Ícone do botão"
        width={24}
        height={24}
        className="w-6 h-6 "
      />
      <span>Contacte-nos</span>
    </Link>
  );
}
351919393811;
