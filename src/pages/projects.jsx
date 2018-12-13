import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import ProjectCards from '../components/ProjectCards';
import '../styles/global';
import Menu from '../components/Menu';
import Waypoint from 'react-waypoint';
import { Title, Inner, Container, ProjectsWrapper, ContactMain } from '../components/LayoutComponents';
import Background from '../components/Background';

class Projects extends React.Component {
  state = {
    menuIcon: false,
  };

  render() {
    const { data } = this.props;
    const { allJavascriptFrontmatter, background } = data;
    const articles = allJavascriptFrontmatter.edges;

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
              <ProjectsWrapper>
                <ProjectCards clean articles={articles} />
              </ProjectsWrapper>
              <ContactMain style={{ marginTop: '15rem' }} />
            </Inner>
          </Container>
        </div>
      </Menu>
    );
  }
}

export const query = graphql`
  query PQuery {
    background: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allJavascriptFrontmatter(
      filter: { frontmatter: { isWork: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            id
            path
            devOnly
            title
            subtitle
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

export default Projects;
