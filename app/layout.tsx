import { Raleway, Medula_One } from '@next/font/google';
import '../styles/index.css';
import clsx from 'clsx';

const raleway = Medula_One({
  variable: '--display-font',
  weight: '400',
});

const merriweather = Raleway({
  variable: '--body-font',
});

export const metadata = {
  title: "Pizza's Next.js App",
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={clsx(raleway.variable, merriweather.variable)}>
      <body className="min-h-screen w-screen bg-main-light flex flex-col items-center font-body">
        {children}
      </body>
    </html>
  );
}
