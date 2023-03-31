import Buttons from '@/components/buttons';
import Header from '@/components/header';
import Slider from '@/components/slider';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="w-full mx-auto max-w-xs py-6 flex flex-col gap-6">
        <h3 className="font-display text-5xl pr-8">
          Là où la qualité et le goût se rencontrent...
        </h3>
        <p>
          Nous sommes passionnés par la création de pizzas délicieuses, fraîches
          et à base d&apos;ingrédients locaux, avec notre propre pâte
          artisanale. Notre engagement en faveur du développement durable et du
          soutien à notre communauté locale est au cœur de tout ce que nous
          faisons. Rejoignez-nous pour déguster la meilleure pizza en ville !
        </p>
        <Buttons style="callToAction">Notre histoire</Buttons>
      </div>
      <Slider />
    </main>
  );
}
