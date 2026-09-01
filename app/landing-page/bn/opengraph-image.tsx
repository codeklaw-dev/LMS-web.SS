import { ImageResponse } from 'next/og'

export const alt = 'রাকোলার্নহাব — স্কুলের জন্য এআই-ভিত্তিক লার্নিং প্ল্যাটফর্ম'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '96px',
          background: 'linear-gradient(135deg, #2A0930 0%, #320B35 55%, #43124A 100%)',
          color: '#ECE9BE',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #320B35, #7C3AED)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
              fontWeight: 700,
              color: '#F6F4DA',
            }}
          >
            R
          </div>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em' }}>
            <span>Raco</span>
            <span style={{ color: '#C084FC' }}>LearnHub</span>
          </div>
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.25, maxWidth: 920 }}>
          প্রতিটি শিক্ষার্থীর নিজস্ব শিক্ষক। শিক্ষকদের ফিরে পাওয়া সময়।
        </div>
        <div style={{ fontSize: 28, color: '#C4B8C6', marginTop: 32 }}>
          কারিকুলাম-সমর্থিত · ২০+ ভাষা · আপনার স্কুলের নিজস্ব ব্র্যান্ডে
        </div>
      </div>
    ),
    size,
  )
}
