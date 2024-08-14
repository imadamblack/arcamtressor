import Link from 'next/link';
import { info } from '../../../info';
import Image from 'next/image';
import logo from '../../../public/logo-h.png';

export default function Header() {
  return (

    <header
      className={`sticky top-0 bg-brand-2 backdrop-blur-lg w-screen shadow-sm h-[8rem] flex justify-center z-[99] hover:top-0`}
    >
      <div className="flex items-center z-[1]">
        <div className="relative flex justify-center items-center w-[24rem]">
          <Link href="/" passhref>
            <Image src={logo} alt={info.companyName} objectFit="contain" />
          </Link>
        </div>
      </div>
    </header>

  );
}
