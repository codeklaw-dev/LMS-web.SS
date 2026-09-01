import { LegalRoute, legalMetadata } from '@components/landing/lib/legalRoute'

export function generateMetadata() {
  return legalMetadata('bn', 'cookies')
}

export default function Page() {
  return <LegalRoute locale='bn' slug='cookies' />
}
