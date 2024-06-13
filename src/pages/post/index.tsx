import {
  Container,
  Header,
  Logo,
  PostContainer,
  Title,
  Long,
  Intro,
  Thumbnail
} from './styles';

import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';

const PostLayout = () => {
  const { id } = useParams();
  const GET_LOCATIONS = gql`
    query GetContent($id: String!) {
      content(
        id: "",
        project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1",
        full_url: $id
      ) {
        title {
          short
        },
        thumbnail,
        description {
          intro,
          long,
        },
      }
    }
  `;
  
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { id }
  });

  const content = data?.content || {};
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <Header>
        <Link to={`/`}>
          <Logo src={`https://point.md/static/svg/new-point-logo.svg`} />
        </Link>
      </Header>
      <PostContainer>
        <Title>{Parser(content?.title?.short)}</Title>
        <Intro>
          {Parser(content?.description?.intro)}
        </Intro>
        <Thumbnail src={`https://i.simpalsmedia.com/point.md/news/900x900/${content?.thumbnail}`} />
        <Long>
          {Parser(content?.description?.long)}
        </Long>
        
        
      </PostContainer>
    </Container>
  );
}

export default PostLayout;
