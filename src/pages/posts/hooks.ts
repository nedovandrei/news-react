import usePosts from '../../hooks/usePosts'
import useInfiniteScroll from '../../lib/use-infinite-scroll'

const useLayout = () => {
  const { fetchMorePosts, loading, posts } = usePosts()

  const { thresholdElementRef } = useInfiniteScroll({
    fetchNextPage: fetchMorePosts,
    options: { rootMargin: '400px' },
  })

  return { loading, posts, thresholdElementRef }
}

export default useLayout
