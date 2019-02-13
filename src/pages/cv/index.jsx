import React from 'react';
import { graphql } from 'gatsby';
import Waypoint from 'react-waypoint';
import SEO from '../../components/SEO';
import Menu from '../../components/Menu';
import { Title, Inner, Container, ContactMain } from '../../components/LayoutComponents';
import Background from '../../components/Background';

class Resume extends React.Component {
  state = {
    menuIcon: false,
  };

  render() {
    const { data } = this.props;
    const { background, allFile, resumedata } = data;
    const { childResumeJson } = resumedata
    console.log('this.props', childResumeJson);

    return (
      <Menu showMenu={this.state.menuIcon} relative>
        <SEO />
        <Background data={background} />
        <div className="absolute">
          <Waypoint
            onEnter={() => this.setState({ menuIcon: false })}
            onLeave={() => this.setState({ menuIcon: true })}
          />
          <Container>
            <Inner>
              <Title>Resume</Title>
              <ContactMain style={{ marginTop: '15rem' }} />
            </Inner>
          </Container>
        </div>
      </Menu>
    );
  }
}

export const query = graphql`
  query Resume {
    background: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "resume" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 1400, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
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
        whatido
        experience {
          link
          role
          startdate
          enddate
          location
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
  }
`;

export default Resume;
