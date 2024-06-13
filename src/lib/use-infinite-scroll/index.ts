import useIntersectedElement from '../use-intersected-element'
import { UseInfiniteScrollProps } from './types'

const useInfiniteScroll = <ThresholdElement extends Element = Element>({
  fetchNextPage,
  options,
}: UseInfiniteScrollProps) => {
  const { thresholdElementRef } = useIntersectedElement<ThresholdElement>({
    callback: fetchNextPage,
    options,
  })

  return { thresholdElementRef }
}

export default useInfiniteScroll
