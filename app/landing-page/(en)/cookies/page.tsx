import { LegalRoute, legalMetadata } from '@components/landing/lib/legalRoute'

export function generateMetadata() {
  return legalMetadata('en', 'cookies')
}

export default function Page() {
  return <LegalRoute locale='en' slug='cookies' />
}
