// Re-export from framer-motion for convenience
// If you prefer react-intersection-observer, install it separately: npm install react-intersection-observer

import { useInView as useFramerInView } from 'framer-motion'
import { useRef } from 'react'

interface InViewOptions {
  once?: boolean
  amount?: number | 'some' | 'all'
  margin?: string
}

export function useInView(options?: InViewOptions) {
  const ref = useRef(null)
  const isInView = useFramerInView(ref, {
    once: options?.once ?? false,
    amount: options?.amount ?? 0.1,
    margin: options?.margin,
  })

  return [ref, isInView] as const
}
