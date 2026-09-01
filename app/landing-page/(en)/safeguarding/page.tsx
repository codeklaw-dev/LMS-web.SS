import { LegalRoute, legalMetadata } from '@components/landing/lib/legalRoute'

export function generateMetadata() {
  return legalMetadata('en', 'safeguarding')
}

export default function Page() {
  return <LegalRoute locale='en' slug='safeguarding' />
}
