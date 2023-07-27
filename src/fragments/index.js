import { graphql } from "gatsby"

export const FluidImageFragment = graphql`
  fragment BackgroundImageFragment on File {
    childImageSharp {
      gatsbyImageData(width: 1000)
    }
  }
  fragment AvatarFragment on File {
    childImageSharp {
      gatsbyImageData(width: 150)
    }
  }
`;