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
import agif from './availyst.gif';

export const frontmatter = {
  id: 'Availyst',
  isWork: true,
  isFeatured: true,
  title: 'Availyst',
  subtitle: 'Availyst Mobile App',
  date: '2020-09-25',
  enddate: '2021-02-19', 
  cover: './app1.png',
  path: '/work/availyst',
  devOnly: false,
  description: 'Mobile App development of Availyst',
  technologies: ['React', 'Redux', 'React Native'],
  role: 'Senior Mobile Engineer',
  website: 'https://availyst.com/',
  github: false,
};

export default class Availyst extends React.Component {
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
                  <Image src={agif} fit />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>Availyst is the first delivery management platform. 
                      Availyst show you more local delivery options and give you the tools to organize it all
                      : Groceries, Takeout, Convenience, Spirits </span>
                      <p>When I join the team there was already a codebase.
                        I worked on performance and adding new features/pages.
                      </p>
                      <p>Challenging parts: </p>
                      <p>- Working with map and geo data for location specific information </p>
                      <p>- Improving performance of listed items (RecycleListView) and infinite data based loading. </p>
                      <p>- Consistent data flow with state management(Recoil.js) </p>
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
  query {
    intro: file(relativePath: { eq: "availyst/app1.png" }) {
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
