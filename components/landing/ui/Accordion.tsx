'use client'

import { useId, useState } from 'react'
import Icon from './Icon'

/**
 * FAQ accordion. Native button + aria-expanded + region association —
 * fully operable by keyboard, announced correctly by screen readers.
 */
export default function Accordion({
  items,
  allowMultiple = false,
}: {
  items: { q: string; a: string }[]
  allowMultiple?: boolean
}) {
  const baseId = useId()
  const [open, setOpen] = useState<Set<number>>(() => new Set())

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : [])
      if (prev.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open.has(i)
        const btnId = `${baseId}-btn-${i}`
        const panelId = `${baseId}-panel-${i}`

        return (
          <div className="accordion__item" key={item.q} data-open={isOpen}>
            <h3 className="accordion__heading">
              <button
                type="button"
                id={btnId}
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
              >
                <span>{item.q}</span>
                <Icon name="Plus" size={20} className="accordion__chevron" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="accordion__panel"
              hidden={!isOpen}
            >
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
