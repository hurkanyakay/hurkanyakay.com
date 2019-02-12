import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Menu from '../../components/Menu';
import Waypoint from 'react-waypoint';
import { Title, Inner, Container, ProjectsWrapper, ContactMain } from '../../components/LayoutComponents';
import Background from '../../components/Background';

class Resume extends React.Component {
  state = {
    menuIcon: false,
  };

  render() {
    const { data } = this.props;
    const { background } = data;
    console.log("this.props",this.props);
    

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
              <Title>Projects</Title>
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
    background: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allResumeJson {
      totalCount
      edges {
        node {
          id
          children {
            id
          }
          experience {
            image
            link
            role
            startdate
            enddate
            location
          }
        }
      }
    }
  }
`;

export default Resume;
