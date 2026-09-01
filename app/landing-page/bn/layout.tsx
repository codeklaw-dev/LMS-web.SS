import LandingShell from '@components/landing/layout/LandingShell'
import { getDictionary } from '@components/landing/lib/dictionary'

/** Bengali shell: lang="bn" on the wrapper drives the Hind Siliguri remap
 *  in tokens.css. <html lang> stays "en" — a nested layout cannot change
 *  it; flagged in README-DROP-IN.md for the platform repo. */
export default function BnLayout({ children }: { children: React.ReactNode }) {
  return <LandingShell dict={getDictionary('bn')} locale="bn">{children}</LandingShell>
}
