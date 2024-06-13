// src/graphql/queries/getContents.ts
import { gql } from '@apollo/client';

const GET_CONTENTS = gql`
  query GetContents($projectId: String!, $lang: String!, $skip: Int!, $take: Int!) {
    contents(project_id: $projectId, lang: $lang, skip: $skip, take: $take) {
      id,
      title {
          short
      },
      description {
        intro
      },
      url,
      thumbnail,
      dates {
        posted(format: "2 $$January$$ 2006")
      }
    }
  }
`;

export default GET_CONTENTS;
