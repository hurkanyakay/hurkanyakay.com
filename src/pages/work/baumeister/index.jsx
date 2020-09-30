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
import powerpoint from './powerpoint.png';

export const frontmatter = {
  id: 'baumeister',
  isWork: true,
  isFeatured: true,
  title: 'Baumeister',
  subtitle: 'AI based template engine',
  date: '2019-12-01',
  enddate: '2020-03-03',
  cover: './powerpoint.png',
  path: '/work/baumeister',
  devOnly: false,
  description: 'Mobile and Web App frontend development of AI based template engine',
  technologies: ['React', 'Redux', 'React Native', 'MSOffice'],
  role: 'Senior Frontend Engineer',
  website: 'https://www.baumeister-ai.com/',
  github: false,
};

export default class Baumeister extends React.Component {
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
                  <Image src={app1} fit />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>Baumeister is Germany/Berlin based AI company focusing on Powerpoint automation.</span>
                      <p>- I worked on Powerpoint Addon which based on Progressive Web App + Office.js </p>
                      <p>- Addon can be installed through Office Marketplace </p>
                      <p>- Addon has access to data of Office documents and can send to server. </p>
                      <p>- Then I worked on Baumeister mobile app. </p>
                      <p>- React Native based mobile app had authorization features.</p>
                      <p>- App has ability to take a picture and send it to server for processing. </p>
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
  query Baumeister {
    intro: file(relativePath: { eq: "baumeister/powerpoint.png" }) {
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
