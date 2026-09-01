import LandingShell from '@components/landing/layout/LandingShell'
import { getDictionary } from '@components/landing/lib/dictionary'

/** English shell: the .landing wrapper with lang/dir and the theme boot. */
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <LandingShell dict={getDictionary('en')} locale="en">{children}</LandingShell>
}
