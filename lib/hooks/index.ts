// Custom hook for intersection observer using framer-motion
import { useInView as useFramerInView } from 'framer-motion'
import { useRef } from 'react'

export function useInView(options?: { triggerOnce?: boolean; threshold?: number }) {
  const ref = useRef(null)
  const isInView = useFramerInView(ref, {
    once: options?.triggerOnce ?? false,
    amount: options?.threshold ?? 0.1,
  })

  return [ref, isInView] as const
}
