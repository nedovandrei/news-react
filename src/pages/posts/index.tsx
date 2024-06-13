import useLayout from './hooks'
import Post from './Post'
import {
  Container,
  Header,
  List,
  Logo,
} from './styles'
import { Link } from 'react-router-dom';

const PostsLayout = () => {
  const { loading, posts, thresholdElementRef } = useLayout()
  return (
    <Container>
        <Header>
          <Link to={`/`}>
            <Logo src={`https://point.md/static/svg/new-point-logo.svg`} />
          </Link>
        </Header>
        {loading ? (
          <p>loading</p>
        ) : (
          <List>
            {posts.map((data: { id: string; url: string; title: { short: string }; thumbnail: string; description: object }, index: number) => (
              <Post
                id={data.id}
                key={data.id}
                ref={
                  index === posts.length - 1 ? thresholdElementRef : undefined
                }
                url={data.url}
                title={data.title.short}
                thumbnail={data.thumbnail}
                description={data.description}
              />
            ))}
          </List>
        )}
    </Container>
  )
}

export default PostsLayout
