import Image from 'next/image';
import type { ReactNode } from 'react';

type ImageProp = { src: string; width: number; height: number };

type Props = {
  label: string;
  image?: ImageProp;
  imageAlt?: string;
  priority?: boolean;
  // Placeholder fallback (used when image is undefined)
  aspect?: string;
  icon?: ReactNode;
};

export default function UseCaseCard({ label, image, imageAlt, priority, aspect, icon }: Props) {
  return (
    <figure className="bg-white rounded-card-lg border border-n-200 shadow-card overflow-hidden flex flex-col transition-shadow duration-slow hover:shadow-card-hover">
      {image ? (
        <Image
          src={image.src}
          alt={imageAlt ?? label}
          width={image.width}
          height={image.height}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-auto"
          priority={priority}
        />
      ) : (
        <div className={`${aspect ?? 'aspect-[4/3]'} bg-n-100 flex flex-col items-center justify-center gap-3 text-n-400`}>
          {icon}
          <span className="text-body-sm font-body text-center px-4">Screenshot a adicionar</span>
        </div>
      )}
      <figcaption className="text-label font-body text-n-600 uppercase tracking-label text-center py-3 px-4 border-t border-n-200">
        {label}
      </figcaption>
    </figure>
  );
}
