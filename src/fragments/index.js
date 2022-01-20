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
  fragment ResumeFragment on File {
    childResumeJson {
        id
        experience {
          link
          name
          role
          subrole
          startdate
          enddate
          location
          content
          skills
          projectLink
          image {
            src {
              ...BackgroundImageFragment
            }
          }

          isWork
          isFeatured
          subtitle
          devOnly
          github
          npm
        }
        education {
          link
          name
          role
          startdate
          enddate
          image {
            src {
              ...BackgroundImageFragment
            }
          }
        }
      }
  }
  fragment AllResumeFragment on ResumeJsonEdge {
      node {
        id
        experience {
          link
          name
          role
          subrole
          startdate
          enddate
          location
          content
          skills
          projectLink
          image {
            src {
              ...BackgroundImageFragment
            }
          }

          isWork
          isFeatured
          subtitle
          desc
          devOnly
          github
          npm
        }
        education {
          link
          name
          role
          startdate
          enddate
          image {
            src {
              ...BackgroundImageFragment
            }
          }
        }
      }
  }
`