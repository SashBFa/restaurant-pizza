import clsx from 'clsx';
import Image from 'next/image';
import logo from '../../app/images/logo_rounded.png';
import Link from 'next/link';
import BasketSVG from '../svg/basket/basket';
import RightBarsSVG from '../svg/rightBars/rightBars';

type NavigationType = {
  color: 'light' | 'dark';
};

export default function Navigation({ color }: NavigationType) {
  let nbrItems = 2;
  return (
    <nav
      className={clsx(
        'w-full max-w-xs flex items-center justify-between absolute top-0 left-1/2 -translate-x-1/2 py-2',
        color == 'light' ? 'text-main-light' : 'text-main-dark'
      )}
    >
      <Link href={'/'} className="flex items-center gap-1">
        <Image src={logo} alt="logo" priority className="w-10 aspect-square" />
        <h2 className="text-main-color font-light text-lg">Slice & Dice</h2>
      </Link>

      <div className="flex items-start gap-2 fill-main-light">
        <div className="relative">
          {nbrItems ? (
            <div className="bg-main-color rounded-full drop-shadow-md w-5 h-5 absolute text-main-light flex items-center justify-center -left-1/4 -top-2">
              {nbrItems}
            </div>
          ) : (
            <></>
          )}

          <BasketSVG />
        </div>
        <RightBarsSVG />
      </div>
    </nav>
  );
}
