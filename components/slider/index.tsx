'use client';
import { PizzasType, pizzasData } from '@/app/pizzasData';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import NextSVG from '../svg/next/next';
import PreviousSVG from '../svg/previous/previous';

const subArr = (array: PizzasType[]) => {
  let tempArr = [];
  for (let i = 0; i < array.length - 1; i = i + 4) {
    tempArr.push(array.slice(i, i + 4));
  }
  return tempArr;
};

export default function Slider() {
  const [showIndex, setShowIndex] = useState<number>(2);
  const [largeIndex, setLargeIndex] = useState<number>(1);
  const pizzas = subArr(pizzasData);

  const prevIndex = () => {
    if (!showIndex) {
      setShowIndex(pizzas.length - 1);
    } else {
      setShowIndex(showIndex - 1);
    }
  };

  const nextIndex = () => {
    if (showIndex === pizzas.length - 1) {
      setShowIndex(0);
    } else {
      setShowIndex(showIndex + 1);
    }
  };

  return (
    <div className="w-full mx-auto max-w-xs py-6 flex justify-between gap-2 h-screen">
      <button onClick={prevIndex} className="fill-main-color">
        <PreviousSVG />
      </button>
      <div className="flex flex-col items-center grow">
        <div className="flex flex-col h-full gap-3 pb-6 w-full">
          {pizzas[showIndex].map((pizza, index) => (
            <div
              key={pizza.id}
              onClick={() => setLargeIndex(index)}
              className={clsx(
                'bg-main-light w-full min-h-[100px] rounded shadow-lg flex overflow-hidden relative transition-all duration-100 ease-in-out',
                index === largeIndex && 'grow'
              )}
            >
              <Image
                src={pizza.img}
                alt={pizza.name}
                priority
                width={350}
                height={350}
                className="absolute top-0 left-1/2 -translate-x-1/2"
              />
              <div className="z-10 bg-gradient-to-t from-main-dark to-transparent w-full h-full text-main-light flex flex-col justify-end p-2">
                <p className="text-center text-2xl font-thin">{pizza.name}</p>
                {index === largeIndex && (
                  <p className="text-center text-xs">{pizza.ingredients}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1">
          {pizzas.map((dot, index) => (
            <div
              key={index}
              className={clsx(
                'rounded-full drop-shadow-lg',
                index === showIndex
                  ? 'w-5 h-5 bg-main-color'
                  : 'w-3 h-3 bg-main-dark/50'
              )}
            />
          ))}
        </div>
      </div>
      <button onClick={nextIndex} className="fill-main-color">
        <NextSVG />
      </button>
    </div>
  );
}
