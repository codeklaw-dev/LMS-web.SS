import { LegalRoute, legalMetadata } from '@components/landing/lib/legalRoute'

export function generateMetadata() {
  return legalMetadata('en', 'accessibility')
}

export default function Page() {
  return <LegalRoute locale='en' slug='accessibility' />
}
