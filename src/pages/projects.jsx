import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import ProjectCards from '../components/ProjectCards';
import Menu from '../components/Menu';
import { Waypoint } from 'react-waypoint';
import { Title, Inner, Container, ProjectsWrapper, ContactMain } from '../components/LayoutComponents';
import Background from '../components/Background';
import Loading, { LoadingSpinnerContainer } from "../components/Loading";
import { useQuery, gql } from "@apollo/client";
import { GET_EXPERIENCES } from "../fragments/experiences";

export function ProjectsW(props) {
  const { loading, error, data } = useQuery(GET_EXPERIENCES);

  let list = null;
  if(data){
    const flat = data.experiences.data.map((s) => {
      return {
        id: s.id,
        imageurl:
          process.env.STRAPI_API_URL +
          s.attributes.image?.data?.attributes?.url,
        ...s.attributes,
      };
    });
    const sorted = flat
      // .filter((s) => s.isWork)
      .map((s) => {
        return { ...s, startdate: new Date(s.startdate) };
      })
      .sort((a, b) => {
        return new Date(b.startdate) - new Date(a.startdate);
      });
    list = sorted;
    if (!props.clean) {
      list = sorted.slice(0, 4);
    }
  }
  if (loading) return (
    <LoadingSpinnerContainer>
      <Loading />
    </LoadingSpinnerContainer>
  );
  return (
    <ProjectsWrapper id="ProjectsWrapper">
      <ProjectCards clean={props.clean} projects={list} />
    </ProjectsWrapper>
  );
}

class Projects extends React.Component {
  state = {
    menuIcon: false,
  };

  render() {
    const { data } = this.props;
    const { background } = data;
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
              <ProjectsW clean={true}/>
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

export default Projects;
