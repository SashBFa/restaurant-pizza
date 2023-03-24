import Image from 'next/image';
import CallToActionBtn from '../buttons/callToActionBtn';
import pizzaBG from '../../app/images/pizza-header.png';
import Navigation from '../navigation';

export default function Header() {
  return (
    <header className="text-primary-white flex flex-col items-center text-center px-6 gap-6 relative pt-56 pb-12">
      <Image
        src={pizzaBG}
        alt="pizza"
        priority
        className="w-44 h-96 object-cover -rotate-90 -translate-y-28 absolute top-0 -z-10"
      />
      <Navigation />
      <h1 className="display-font text-4xl font-extralight">
        Exquisite dining since 1989
      </h1>
      <p className="text-sm">
        Experience our seasonal menu in beautiful country surroundfings. Eat the
        freshest produce from the comfort of our farmhouse.
      </p>
      <CallToActionBtn>Réservation</CallToActionBtn>
    </header>
  );
}
