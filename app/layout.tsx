import { Raleway, Rubik } from '@next/font/google';
import '../styles/index.css';
import clsx from 'clsx';

const raleway = Raleway({
  variable: '--display-font',
});

const merriweather = Rubik({
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
      <body className="min-h-screen w-full bg-primary-black overflow-hidden flex flex-col items-center font-body">
        {children}
      </body>
    </html>
  );
}
