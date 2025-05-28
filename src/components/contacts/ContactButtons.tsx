import { BsInstagram } from 'react-icons/bs';
import { RiFacebookFill } from 'react-icons/ri';

import Link from 'next/link';

export default function ContactButtons() {
  return (
    <>
      <Link href="#" target="_blank" className="w-8 h-8 ">
        <BsInstagram className="w-full h-full text-white" />
      </Link>
    </>
  );
}
