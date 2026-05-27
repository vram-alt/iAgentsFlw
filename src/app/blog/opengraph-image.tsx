import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'AgentsFlow AI blog insights'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          color: 'white',
          background: 'linear-gradient(135deg, #0A0F1A 0%, #113445 52%, #F47F21 100%)',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 34, fontWeight: 700 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: '#F47F21',
            }}
          />
          AgentsFlow AI
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 86, fontWeight: 800, lineHeight: 1.02, maxWidth: 900 }}>
            AI Governance Insights
          </div>
          <div style={{ fontSize: 34, lineHeight: 1.35, maxWidth: 920, color: '#E2E8F0' }}>
            Practical guidance for compliance, guardrails, secure enterprise AI, and responsible operations.
          </div>
        </div>
      </div>
    ),
    size,
  )
}
