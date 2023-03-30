import clsx from 'clsx';

type ButtonsType = {
  children: JSX.Element | string;
  style: 'main' | 'callToAction' | 'secondary';
};

export default function Buttons({ children, style = 'main' }: ButtonsType) {
  let global_style = '';
  switch (style) {
    case 'main':
      global_style = 'bg-main-light text-main-dark';
      break;
    case 'callToAction':
      global_style = 'bg-main-color text-main-light';
      break;
    case 'secondary':
      global_style = 'text-main-light border-2 border-main-light';
      break;
    default:
      global_style = '';
  }

  return (
    <button
      className={clsx(
        'h-8 w-36 font-medium capitalize rounded-sm drop-shadow-md mb-4',
        global_style
      )}
    >
      {children}
    </button>
  );
}
