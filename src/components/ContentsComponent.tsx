// src/components/ContentsComponent.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import GET_CONTENTS from '../graphql/queries/getContents';

const ContentsComponent: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CONTENTS, {
    variables: {
      projectId: "5107de83-f208-4ca4-87ed-9b69d58d16e1",
      lang: "ru",
      skip: 0,
      take: 10
    }
  });
  console.log(loading, error, data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.contents.map((content: { id: string }) => (
        <div key={content.id}>{content.id}</div>
      ))}
    </div>
  );
};

export default ContentsComponent;
