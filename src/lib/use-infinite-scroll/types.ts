import { UseIntersectedElementProps } from '../use-intersected-element'

export type UseInfiniteScrollProps = {
  fetchNextPage: () => void
  options: UseIntersectedElementProps['options']
}
