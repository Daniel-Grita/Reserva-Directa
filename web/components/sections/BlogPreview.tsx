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
            label={blog.label}
            heading={blog.heading}
            intro={withHighlight(blog.intro, 'guias práticos')}
          />
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {blog.cards.map((article, i) => (
            <div
              key={i}
              className="bg-white border border-n-200 rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-slow"
            >
              <div className="w-full h-44 bg-n-300 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/reservadireta-blog-${i + 1}/800/450`}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-display-xs font-display text-navy mb-3 leading-tight">
                  {article.title}
                </h3>
                <a
                  href="#"
                  className="text-button font-body font-bold text-orange hover:underline transition-all duration-base"
                >
                  {article.cta}
                </a>
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
