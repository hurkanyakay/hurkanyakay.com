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
import app1 from './IMG_4815.png';
import app2 from './IMG_4816.png';
import app3 from './IMG_4817.png';
// import agif from './availyst.gif';

export const frontmatter = {
  id: 'Yoreevo',
  isWork: true,
  isFeatured: true,
  title: 'Yoreevo',
  subtitle: 'Yoreevo Mobile App',
  date: '2020-10-5',
  enddate: '2021-12-25', 
  cover: './IMG_4815.png',
  path: '/work/yoreevo',
  devOnly: false,
  description: 'Mobile App development of Yoreevo',
  technologies: ['React', 'Recoil', 'React Native'],
  role: 'Senior Mobile Engineer',
  website: 'https://yoreevo.com/',
  github: false,
};

export default class Yoreevo extends React.Component {
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
                      <span>Yoreevo is Real Estate platform for New York, Manhattan, Broklyn areas.</span>
                      <p>I led the mobile app team to design mobile version of https://yoreevo.com/</p>
                      <p>
                        I structured the main frame of the app based on React Native, React.
                      </p>
                      <p>
                      State management was RecoilJs and created atomic file structure for presentational and container components, used hooks for side effects and services,.
                      </p>
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
    intro: file(relativePath: { eq: "yoreevo/IMG_4815.png" }) {
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
