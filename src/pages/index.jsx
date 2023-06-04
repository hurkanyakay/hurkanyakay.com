/* global tw */
import React from 'react';
import { graphql } from 'gatsby';
import { config } from 'react-spring';
// import { Parallax, ParallaxLayer } from 'react-spring/renderprops'; 
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Waypoint } from 'react-waypoint';
import SEO from '../components/SEO';
import ProjectCards from '../components/ProjectCards';
import { Button, MiddleButtons, AnimButton } from '../components/Button';
import Menu from '../components/Menu';
import Image from '../components/Image';
import {
  Divider1,
  DividerMiddle1,
  Divider2,
  Divider3,
  Divider4,
  Divider5,
  Divider6,
  Content,
  Hero,
  BigTitle,
  Title,
  Subtitle,
  Inner,
  AboutHero,
  AboutDesc,
  AboutSub,
  ContactText,
  Footer,
  ProjectsWrapper,
  Type,
  ContactMain,
} from '../components/LayoutComponents';
import webconfig from '../../config/website';
import LogRocket from 'logrocket';
LogRocket.init('zgpmm3/home');
import {daysPassed} from '../utils/datefns'

class Index extends React.Component {
  state = {
    menuIcon: false,
  };

  render() {
    const { data } = this.props;
    const { avatar, allResumeJson } = data;
    const experiences = allResumeJson.edges[0].node.experience.filter(s=> s.isWork).map(s=> {return {...s, startdate: new Date(s.startdate)}}).sort((a,b)=>{
      return new Date(b.date) - new Date(a.date)
    })
    const filteredExp = experiences.slice(0,4)
    return (
      <Menu showMenu={this.state.menuIcon}>
        <SEO />
        <Parallax
          pages={5}
          config={config.slow}
          ref={(ref) => (this.parallax = ref)}
        >
          <ParallaxLayer offset={0}>
            <Waypoint
              onEnter={() => this.setState({ menuIcon: false })}
              onLeave={() => this.setState({ menuIcon: true })}
            />
          </ParallaxLayer>
          <Divider1 />
          <DividerMiddle1 />
          <Divider2 />
          <Divider3 />
          <Divider4 />
          <Divider5 />
          <Divider6 />
          <Content speed={0.4} offset={0} factor={1}>
            <Hero>
              <BigTitle id="MainBigTitle">
                Hello, <br />
                <div>I'm Hürkan Yakay</div>
                <div>Senior Developer</div>
              </BigTitle>
              <Subtitle>{webconfig.about.sub}</Subtitle>
              <AnimButton
                id="scrollButton1"
                onClick={() => this.parallax.scrollTo(1)}
                text="View Projects"
              />
            </Hero>
          </Content>
          <Content speed={0.4} offset={1} factor={2}>
            <Inner>
              <Title>Projects</Title>
              <ProjectsWrapper id="ProjectsWrapper">
                <ProjectCards projects={filteredExp} />
              </ProjectsWrapper>
              <MiddleButtons>
                <Button fontSize="2rem" to="/projects" id="ViewProjects">
                  View all {experiences.length} projects
                </Button>
              </MiddleButtons>
              <AnimButton
                onClick={() => this.parallax.scrollTo(3)}
                text="View About"
              />
            </Inner>
          </Content>
          <Content speed={0.4} offset={3} factor={1}>
            <Inner>
              <Title>About</Title>
              <AboutHero>
                <Image avatar fluid={avatar} alt="Hürkan Yakay" />
                <AboutSub>{webconfig.about.sub}</AboutSub>
              </AboutHero>
              <AboutDesc>
                {webconfig.about.desc.replace("#", daysPassed())}
              </AboutDesc>
            </Inner>
          </Content>
          <Content speed={0.4} offset={4} factor={1}>
            <ContactMain />

            <Footer>
              &copy; 2018 by Hürkan Yakay.{" "}
              <a
                target="_blank"
                rel="external nofollow"
                href={webconfig.githubUrl}
              >
                Github Repository
              </a>
              .
            </Footer>
          </Content>
        </Parallax>
      </Menu>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    avatar: file(relativePath: { eq: "avatar2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allResumeJson{
        edges {
          ...AllResumeFragment
        }
    }
  }
`;

export default Index;
