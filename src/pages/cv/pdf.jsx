import React from 'react';
import { graphql } from 'gatsby';

let ViewerComp = null;
class Pdf extends React.Component {
  state = {
    pdfloaded: false,
  };

  async componentDidMount() {
    const { Viewer } = await import(/* webpackChunkName: "cvpdf" */ '../../components/cvpdf/index');
    ViewerComp = Viewer;
    this.setState({
      pdfloaded: true,
    });
  }

  render() {
    const { data } = this.props;
    const { resumedata, avatar, projects } = data;
    const { childResumeJson } = resumedata;
    if (this.state.pdfloaded) {
      return <ViewerComp avatar={avatar} projects={projects} resumeData={childResumeJson}/>;
    }
    return <div>Loading...</div>;
  }
}

export const query = graphql`
  query Pdf {
    background: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    avatar: file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resumedata: file(relativePath: { eq: "resume.json" }) {
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
              childImageSharp {
                fluid(maxWidth: 1400, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        education {
          link
          name
          role
          startdate
          enddate
          image {
            src {
              childImageSharp {
                fluid(maxWidth: 1400, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    projects: allJavascriptFrontmatter(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            id
            path
            devOnly
            title
            subtitle
            date
            enddate
            description
            technologies
            cover {
              childImageSharp {
                fluid(maxWidth: 1100, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Pdf;
