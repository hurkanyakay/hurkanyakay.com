import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import ProjectCards from '../components/ProjectCards';
import Menu from '../components/Menu';
import { Waypoint } from 'react-waypoint';
import { Title, Inner, Container, ProjectsWrapper, ContactMain } from '../components/LayoutComponents';
import Background from '../components/Background';

class Projects extends React.Component {
  state = {
    menuIcon: false,
  };

  render() {
    const { data } = this.props;
    const { allResumeJson, background } = data;
    const experiences = allResumeJson.edges[0].node.experience.filter(s=> s.isWork).map(s=> {return {...s, startdate: new Date(s.startdate)}}).sort((a,b)=>{
      return new Date(b.date) - new Date(a.date)
    })
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
              <Title id="PageTitle">Projects</Title>
              <ProjectsWrapper id="ProjectsWrapper">
                <ProjectCards clean projects={experiences} />
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
      ...BackgroundImageFragment
    }
    allResumeJson{
        edges {
          ...AllResumeFragment
        }
    }
  }
`;

export default Projects;
