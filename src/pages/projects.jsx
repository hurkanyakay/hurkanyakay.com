import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/SEO';
import Menu from '../components/Menu';
import { Waypoint } from 'react-waypoint';
import { Title, Inner, Container, ContactMain } from '../components/LayoutComponents';
import Background from '../components/Background';
import ProjectsContainer from "../components/ProjectsContainer";

class Projects extends React.Component {
  state = {
    menuIcon: false,
  };

  render() {
    const { data } = this.props;
    const { background } = data;
    return (
      <Menu showMenu={this.state.menuIcon} relative>
        <Background data={background} />
        <div className="absolute">
          <Waypoint
            onEnter={() => this.setState({ menuIcon: false })}
            onLeave={() => this.setState({ menuIcon: true })}
          />
          <Container>
            <Inner>
              <Title id="PageTitle">Projects</Title>
              <ProjectsContainer clean={true} />
              <ContactMain style={{ marginTop: "15rem" }} />
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
      ...BackgroundImageFragment
    }
  }
`;

export const Head = () => <Seo title="Projects" />;
export default Projects;
