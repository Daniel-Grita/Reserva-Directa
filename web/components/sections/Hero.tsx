import Image from 'next/image';
import { hero } from '@/lib/constants';
import { withHighlight } from '@/lib/highlight';
import { LinkButton } from '../ui/Button';

const floatingImages = [
  {
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=700&q=80',
    alt: 'Suite de hotel boutique com luz natural',
    position: 'left-[7%] top-[24%]',
    size: 'w-[255px] h-[335px]',
    layer: 'z-10',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=700&q=80',
    alt: 'Quarto de alojamento local minimalista',
    position: 'left-[11%] top-[62%]',
    size: 'w-[290px] h-[230px]',
    layer: 'z-20',
  },
  {
    src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=700&q=80',
    alt: 'Sala de estar moderna num alojamento turístico',
    position: 'right-[7%] top-[20%]',
    size: 'w-[310px] h-[240px]',
    layer: 'z-10',
  },
  {
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=700&q=80',
    alt: 'Quarto rústico com decoração contemporânea',
    position: 'right-[15%] top-[44%]',
    size: 'w-[240px] h-[310px]',
    layer: 'z-20',
  },
];

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[640px] overflow-hidden bg-light-blue">
      <span
        aria-hidden
        className="hero-blob-a pointer-events-none absolute -top-32 -left-24 w-[36rem] h-[36rem] rounded-full bg-orange/8 blur-3xl"
      />
      <span
        aria-hidden
        className="hero-blob-b pointer-events-none absolute -bottom-32 -right-24 w-[36rem] h-[36rem] rounded-full bg-navy/8 blur-3xl"
      />

      <div className="hero-floats hidden lg:block absolute inset-0 pointer-events-none">
        {floatingImages.map((img) => (
          <div
            key={img.src}
            className={`group absolute pointer-events-auto ${img.position} ${img.size} ${img.layer}`}
          >
            <div className="w-full h-full rounded-card-lg bg-white p-2 shadow-card transition-[transform,box-shadow] duration-slow group-hover:shadow-card-hover group-hover:-translate-y-2 group-hover:scale-[1.02]">
              <div className="relative w-full h-full rounded-card overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-slow group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative h-full flex items-center justify-center px-6 sm:px-8 md:px-16 lg:px-section-x pt-[72px]">
        <div className="hero-stagger max-w-3xl text-center space-y-6">
          <h1 className="text-display-md lg:text-display-lg font-display text-navy">
            <span className="block whitespace-pre-line">{hero.heading}</span>
            <span className="block mt-1 lg:mt-2">{hero.headingSecondary}</span>
          </h1>

          <p className="text-body-base font-body text-n-600 max-w-2xl mx-auto whitespace-pre-line">
            {withHighlight(hero.subtitle, 'reservas diretas')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
            <LinkButton href={hero.cta1.href} variant="primary">
              {hero.cta1.label}
            </LinkButton>
            <LinkButton href={hero.cta2.href} variant="secondary">
              {hero.cta2.label}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
