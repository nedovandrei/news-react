import { useEffect, useMemo, useState } from 'react'

import { UseIntersectedElementProps } from './types'

const useIntersectedElement = <ThresholdElement extends Element = Element>({
  callback,
  options,
}: UseIntersectedElementProps) => {
  const [thresholdElement, thresholdElementRef] =
    useState<ThresholdElement | null>(null)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return

        callback()
      }, options),
    [callback, options],
  )

  useEffect(() => {
    if (!thresholdElement) return

    observer.observe(thresholdElement)

    return () => {
      observer.unobserve(thresholdElement)
    }
  }, [observer, thresholdElement])

  return { thresholdElementRef }
}

export default useIntersectedElement

export type { UseIntersectedElementProps }
