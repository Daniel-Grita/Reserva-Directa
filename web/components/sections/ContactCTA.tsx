'use client';

import { useState } from 'react';
import { contactCTA } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import { withNoBreak } from '@/lib/highlight';

const inputClasses =
  'w-full px-4 py-3 bg-n-150 rounded-input text-body-base font-body text-n-900 placeholder:text-n-400 focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all duration-base';

const labelClasses = 'block text-body-sm font-body font-bold text-navy mb-2';

const FALLBACK_EMAIL = 'agenciareservadireta@gmail.com';

function formatPhone(input: string): string {
  const digits = input.replace(/\D/g, '');
  const local = digits.startsWith('351') ? digits.slice(3) : digits;
  const truncated = local.slice(0, 9);
  if (!truncated) return '';
  const parts: string[] = [];
  parts.push(truncated.slice(0, 3));
  if (truncated.length > 3) parts.push(truncated.slice(3, 6));
  if (truncated.length > 6) parts.push(truncated.slice(6, 9));
  return `+351 ${parts.join(' ')}`;
}

function RequiredMark() {
  return (
    <span aria-hidden className="text-orange-text ml-0.5">*</span>
  );
}

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    nome: '',
    telemovel: '',
    email: '',
    comentario: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [ref, inView] = useInView<HTMLElement>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'telemovel') {
      setFormData(prev => ({ ...prev, telemovel: formatPhone(value) }));
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return;
    setStatus('loading');

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'placeholder';
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _gotcha: honeypot }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nome: '', telemovel: '', email: '', comentario: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        // Error persists until next submit so the mailto fallback stays readable.
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section ref={ref} data-reveal={inView} id="contacto" className="bg-navy py-section-y-lg">
      <div className="section-container max-w-2xl">
        <div className="reveal-stagger">
          <div className="text-center mb-10">
            <h2 className="text-display-md lg:text-display-lg font-display text-white mb-4 text-balance">
              {contactCTA.heading}
            </h2>
            <p className="text-body-base font-body text-white/70 max-w-xl mx-auto">
              {withNoBreak(contactCTA.subtitle, 'podemos ajudar')}
            </p>
          </div>

          <div className="bg-white rounded-card-lg p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="nome" className={labelClasses}>
                  {contactCTA.fields.nome.label}<RequiredMark />
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder={contactCTA.fields.nome.placeholder}
                  required
                  aria-required="true"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="telemovel" className={labelClasses}>
                  {contactCTA.fields.telemovel.label}<RequiredMark />
                </label>
                <input
                  type="tel"
                  id="telemovel"
                  name="telemovel"
                  value={formData.telemovel}
                  onChange={handleChange}
                  placeholder="+351 912 345 678"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  aria-required="true"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  {contactCTA.fields.email.label}<RequiredMark />
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={contactCTA.fields.email.placeholder}
                  autoComplete="email"
                  required
                  aria-required="true"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="comentario" className={labelClasses}>
                  {contactCTA.fields.comentario.label}<RequiredMark />
                </label>
                <textarea
                  id="comentario"
                  name="comentario"
                  value={formData.comentario}
                  onChange={handleChange}
                  placeholder={contactCTA.fields.comentario.placeholder}
                  rows={4}
                  required
                  aria-required="true"
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="hidden" aria-hidden>
                <label htmlFor="_gotcha">Não preencha este campo</label>
                <input
                  type="text"
                  id="_gotcha"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div role="status" aria-live="polite" className="empty:hidden">
                {status === 'success' && (
                  <div className="p-4 bg-success-bg rounded-input">
                    <p className="text-body-sm font-body text-success-fg">
                      Mensagem enviada com sucesso! Entraremos em contacto em breve.
                    </p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-error-bg rounded-input space-y-2">
                    <p className="text-body-sm font-body text-error-fg">
                      Erro ao enviar mensagem. Tente novamente, ou contacte-nos directamente:
                    </p>
                    <p className="text-body-sm font-body text-error-fg">
                      <a href={`mailto:${FALLBACK_EMAIL}`} className="font-bold underline hover:no-underline">
                        {FALLBACK_EMAIL}
                      </a>
                    </p>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-orange text-white text-button font-body font-bold py-4 rounded-btn hover:opacity-90 active:scale-[0.99] transition-all duration-base disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-navy"
              >
                {status === 'loading' ? 'A enviar...' : contactCTA.submit}
              </button>
            </form>
          </div>

          <p className="text-body-sm font-body text-white/60 text-center mt-6">
            {contactCTA.fine_print}
          </p>
        </div>
      </div>
    </section>
  );
}
