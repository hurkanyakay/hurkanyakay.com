import { useStaticQuery, graphql } from 'gatsby';

export default function useImage(path) {
  // const filename = "anketservisicom/table.jpg"
  const data = useStaticQuery(graphql`
    query {
      table: file(relativePath: { eq: "anketservisicom/table.jpg" }) {
       ...BackgroundImageFragment
      }
    }
  `);

  console.log('img data',data);
    return data
}
