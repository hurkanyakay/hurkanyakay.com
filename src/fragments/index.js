import { graphql } from "gatsby"

export const FluidImageFragment = graphql`
  fragment BackgroundImageFragment on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1400) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment AvatarFragment on File {
    childImageSharp {
      fluid(maxWidth: 150, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;