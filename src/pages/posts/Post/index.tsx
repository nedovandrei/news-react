import { forwardRef, memo } from 'react'
import Parser from 'html-react-parser';
import { Container, Title, Thumbnail, ContentDiv, Intro } from './styles'
import { PostProps } from './types'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
const Post = forwardRef<HTMLDivElement, PostProps>(
  ({ title, thumbnail, url, description, ...props }, ref) => (
    <Container ref={ref} {...props}>
      <Link to={`/post/${url}`}>
        <Thumbnail src={`https://i.simpalsmedia.com/point.md/news/600x315/${thumbnail}`} />
      </Link>
      <ContentDiv>
        <Title>{Parser(title)}</Title>
        <Intro>{Parser(description?.intro)}</Intro>
      </ContentDiv>
    </Container>
  ),
)
export default memo(Post)
