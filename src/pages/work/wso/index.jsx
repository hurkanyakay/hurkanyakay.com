import React from 'react';
import { graphql } from 'gatsby';
import { Waypoint } from 'react-waypoint';
import SEO from '../../../components/SEO';
import Menu from '../../../components/Menu';
import {
  Title,
  Subtitle,
  Inner,
  ColumnWrapper,
  Column,
  Text,
  Container,
  ProjectDesc,
  ProjectDescIcon,
  ContactMain,
} from '../../../components/LayoutComponents';
import Image from '../../../components/Image';
import Background from '../../../components/Background';
import FrontmatterInfo from '../../../components/FrontmatterInfo';
import app1 from './app1.png';
import app2 from './app2.png';

export const frontmatter = {
  id: 'wso',
  isWork: true,
  isFeatured: true,
  title: 'Wall Street Oasis',
  subtitle: 'Wall Street Oasis Mobile App',
  date: '2019-03-01',
  enddate: '2019-07-01',
  cover: './app1.png',
  path: '/work/wso',
  devOnly: false,
  description: 'Mobile App development of Wall Street Oasis',
  technologies: ['React', 'Redux', 'React Native'],
  role: 'Senior Frontend Engineer',
  website: 'https://www.wallstreetoasis.com/',
  github: false,
};

export default class Wso extends React.Component {
  state = {
    menuIcon: false,
  }

  render() {
    return (
      <Menu showMenu={this.state.menuIcon} relative>
        <SEO />
        <Background data={this.props.data.background}/>
        <div className="absolute">
          <Waypoint
            onEnter={() => this.setState({ menuIcon: false })}
            onLeave={() => this.setState({ menuIcon: true })}
          />
          <Container>
            <Inner>
              <Title id="PageTitle">{frontmatter.title}</Title>
              <ColumnWrapper>
                <Column style={{ background: '#fff' }}>
                  <Image fluid={this.props.data.intro} />
                </Column>
                <Column>
                  <Text>
                    <FrontmatterInfo frontmatter={frontmatter} />
                  </Text>
                </Column>

                <Column>
                  <Image src={app2} fit />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>I worked on WSO mobile app based on their web forum</span>
                      <p>- I used existed forum api and constructed the App accordingly </p>
                      <p>- Challenging parts: </p>
                      <p>- There were too many categories to show and some of them were not suitable for the app </p>
                      <p>- Comment section required nested structure recursively </p>
                      <p>- New and edited comments needed to be highlighted</p>
                    </ProjectDesc>
                  </Text>
                </Column>

              </ColumnWrapper>
              <ContactMain style={{marginTop:'15rem'}}/>
            </Inner>  
          </Container>
        </div>
      </Menu>
    );
  }
}

export const query = graphql`
  query Wso {
    intro: file(relativePath: { eq: "wso/app1.png" }) {
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
  }
`;
