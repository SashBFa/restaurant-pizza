import Image from 'next/image';
import Buttons from '../buttons';
import Navigation from '../navigation';
import Title from '../title';
import pizzaHead from './../../public/images/pizza_head.png';

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-main-dark to-main-dark/80 w-screen h-[50vh] drop-shadow-md relative">
      <Navigation color="light" />
      <div className="w-full h-full mx-auto max-w-xs py-6">
        <div className="h-full w-52 flex flex-col items-center justify-end">
          <Title />
          <Buttons style="main">Réserver</Buttons>
          <Buttons style="secondary">Commander</Buttons>
        </div>
      </div>
      <Image
        src={pizzaHead}
        alt="pizza"
        priority
        className="absolute -top-4 -right-60 drop-shadow-md"
      />
    </header>
  );
}
