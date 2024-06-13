import { useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'

import GET_CONTENTS from '../../graphql/queries/getContents';

const usePosts = () => {
  const { data = [], fetchMore, loading } = useQuery(GET_CONTENTS, {
    variables: {
      projectId: "5107de83-f208-4ca4-87ed-9b69d58d16e1",
      lang: "ru",
      skip: 0,
      take: 10
    }
  })

  const posts = useMemo(
    () => (data ? data?.contents : []),
    [data],
  )

  const fetchMorePosts = useCallback(() => {
    fetchMore({
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        return {contents: [...prev.contents, ...fetchMoreResult.contents ]}
      },
      variables: {
        projectId: "5107de83-f208-4ca4-87ed-9b69d58d16e1",
        lang: "ru",
        skip: posts.length,
        take: 10
      }
    })
  }, [fetchMore, posts])

  return { fetchMorePosts, loading, posts }
}

export default usePosts
