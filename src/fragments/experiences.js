import { gql } from "@apollo/client";
export const GET_EXPERIENCES = gql`
  query getExperience {
    experiences(sort: "createdAt:asc", pagination: { limit: 100 }) {
      data {
        id
        attributes {
          link
          devOnly
          desc
          enddate
          image {
            data {
              attributes {
                url
                formats
              }
            }
          }
          isFeatured
          isWork
          location
          name
          projectLink
          role
          skills
          startdate
          subrole
          subtitle
          richcontent
          content
        }
      }
    }
  }
`;
export const GET_ABOUT = gql`
  query getAbout {
    about {
      data {
        attributes {
          Text1
          Text2
          avatar {
            data {
              attributes {
                url
                formats
              }
            }
          }
        }
      }
    }
  }
`;
