import Image from 'next/image';
import logo from '../../app/images/logo.png';
import menu from '../../app/images/svg/bars-left.svg';
import phone from '../../app/images/svg/phone.svg';

export default function Navigation() {
  return (
    <nav className="w-full flex items-start justify-between">
      <button>
        <Image src={menu} alt="menu" priority className="w-8 aspect-square" />
      </button>
      <Image src={logo} alt="logo" priority className="w-32 aspect-square" />
      <button>
        <Image src={phone} alt="menu" priority className="w-8 aspect-square" />
      </button>
    </nav>
  );
}
