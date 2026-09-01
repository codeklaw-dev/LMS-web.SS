import type { Metadata } from 'next'
import '../styles/globals.css'

/**
 * Local-dev stand-in for the platform's app/layout.tsx (which already renders
 * <html>/<body>, the Wix Madefor Text font variable and its own globals.css).
 * NOT part of the drop-in bundle — nothing under app/landing-page may depend
 * on anything declared here.
 */
export const metadata: Metadata = {
  title: 'RacoLearnHub',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
