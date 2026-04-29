'use client';

import { useState } from 'react';
import { contactCTA } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import { withNoBreak } from '@/lib/highlight';

const inputClasses =
  'w-full px-4 py-3 bg-n-150 rounded-input text-body-base font-body text-n-900 placeholder:text-n-400 focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all duration-base';

const labelClasses = 'block text-body-sm font-body font-bold text-navy mb-2';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    nome: '',
    telemovel: '',
    email: '',
    comentario: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [ref, inView] = useInView<HTMLElement>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'placeholder';
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nome: '', telemovel: '', email: '', comentario: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nome" className={labelClasses}>
                  {contactCTA.fields.nome.label}
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder={contactCTA.fields.nome.placeholder}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="telemovel" className={labelClasses}>
                  {contactCTA.fields.telemovel.label}
                </label>
                <input
                  type="tel"
                  id="telemovel"
                  name="telemovel"
                  value={formData.telemovel}
                  onChange={handleChange}
                  placeholder={contactCTA.fields.telemovel.placeholder}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  {contactCTA.fields.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={contactCTA.fields.email.placeholder}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="comentario" className={labelClasses}>
                  {contactCTA.fields.comentario.label}
                </label>
                <textarea
                  id="comentario"
                  name="comentario"
                  value={formData.comentario}
                  onChange={handleChange}
                  placeholder={contactCTA.fields.comentario.placeholder}
                  rows={4}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {status === 'success' && (
                <div className="p-4 bg-success-bg rounded-input">
                  <p className="text-body-sm font-body text-success-fg">
                    Mensagem enviada com sucesso! Entraremos em contacto em breve.
                  </p>
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-error-bg rounded-input">
                  <p className="text-body-sm font-body text-error-fg">
                    Erro ao enviar mensagem. Tente novamente.
                  </p>
                </div>
              )}

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
