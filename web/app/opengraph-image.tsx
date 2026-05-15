import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Reserva Direta — Mais reservas diretas. Menos comissões.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'linear-gradient(135deg, #002F6D 0%, #003F8F 60%, #004BAA 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: '#FF9202',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 36,
              fontWeight: 800,
              color: '#002F6D',
              lineHeight: 1,
            }}
          >
            R
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.01em' }}>
            Reserva Direta
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: '#FF9202',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Reservas Diretas
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              maxWidth: 1000,
            }}
          >
            <span>Mais reservas diretas.</span>
            <span>Menos comissões.</span>
          </div>
          <div
            style={{
              fontSize: 30,
              color: 'rgba(255,255,255,0.75)',
              maxWidth: 900,
            }}
          >
            Ajudamos alojamentos em Portugal a ganhar independência das OTAs.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          <div>reservadireta.pt</div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 24px',
              borderRadius: 999,
              background: '#FF9202',
              color: '#002F6D',
              fontWeight: 700,
              fontSize: 22,
            }}
          >
            Agendar reunião →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
