/** Solutions + curriculum slugs and ordering — copy in dict.solutionPages / dict.curriculumPages. */

export const solutionOrder = ['leaders', 'teachers', 'students', 'trusts'] as const

export type SolutionSlug = (typeof solutionOrder)[number]

export function isSolutionSlug(slug: string): slug is SolutionSlug {
  return (solutionOrder as readonly string[]).includes(slug)
}

export const curriculumOrder = ['cambridge', 'edexcel'] as const

export type CurriculumSlug = (typeof curriculumOrder)[number]

export function isCurriculumSlug(slug: string): slug is CurriculumSlug {
  return (curriculumOrder as readonly string[]).includes(slug)
}
