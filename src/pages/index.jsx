/* global tw */
import React from 'react';
import { graphql } from 'gatsby';
import { config } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Waypoint } from 'react-waypoint';
import Seo from '../components/SEO';
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
  Type,
  ContactMain,
} from '../components/LayoutComponents';
import webconfig from '../../config/website';
import LogRocket from 'logrocket';
LogRocket.init('zgpmm3/home');
import {daysPassed} from '../utils/datefns'
import ProjectsContainer from "../components/ProjectsContainer";

class Index extends React.Component {
  state = {
    menuIcon: false,
  };

  render() {
    const { data } = this.props;
    const { avatar } = data;
    return (
      <Menu showMenu={this.state.menuIcon}>
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
              <ProjectsContainer />
              <MiddleButtons>
                <Button fontSize="2rem" to="/projects" id="ViewProjects">
                  View all projects
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
      ...AvatarFragment
    }
  }
`;
export const Head = () => <Seo title="Index" />;
export default Index;
