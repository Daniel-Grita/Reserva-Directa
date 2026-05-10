'use client';

import { blog } from '@/lib/constants';
import SectionHeader from '../ui/SectionHeader';
import { LinkButton } from '../ui/Button';
import { useInView } from '@/lib/useInView';
import { withHighlight } from '@/lib/highlight';

export default function BlogPreview() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} data-reveal={inView} id="blog" className="bg-cream py-section-y">
      <div className="section-container">
        <div className="reveal-up">
          <SectionHeader
            className="!max-w-xl"
            label={blog.label}
            heading={blog.heading}
            intro={withHighlight(blog.intro, 'guias práticos')}
          />
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {blog.cards.map((article) => (
            <div
              key={article.title}
              className="bg-white border border-n-200 rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-slow"
            >
              <div className="w-full aspect-[16/9] bg-n-300 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.image.src}
                  alt={article.image.alt}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-card-title font-display text-navy mb-3 leading-tight">
                  {article.title}
                </h3>
                <span
                  aria-disabled="true"
                  className="text-button font-body font-bold text-n-400 cursor-not-allowed select-none"
                  title="Em breve"
                >
                  {article.cta}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-up">
          <LinkButton href={blog.cta.href} variant="dark">
            {blog.cta.label}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
