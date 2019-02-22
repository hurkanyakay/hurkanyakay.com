import React from 'react';
import { graphql } from 'gatsby';
import Waypoint from 'react-waypoint';
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
import gustav1 from './gustav1.gif';
import gustav2 from './gustav2.gif';

export const frontmatter = {
  id: 'hellogustav.com',
  isWork: true,
  isFeatured: true,
  title: 'Hellogustav.com',
  subtitle: 'Applicant tracking system',
  date: '2017-01-01',
  enddate: '2018-02-01',
  cover: './ats.jpg',
  path: '/work/hellogustavcom',
  devOnly: false,
  description:
    'HelloGustav is streamline the distribution of job requisitions and communication with sub-vendor community through full integration into applicant tracking system.',
  technologies: ['React', 'Redux', 'Phonix.js', 'Styled Components', 'Webpack'],
  role: 'Senior Frontend Engineer',
  website: 'https://hellogustav.com',
  github: 'https://github.com/hellogustav',
  npm: false,
};

export default class AnketServisi extends React.Component {
  state = {
    menuIcon: false,
  };

  render() {
    return (
      <Menu showMenu={this.state.menuIcon} relative>
        <SEO />
        <Background data={this.props.data.background} />
        <div className="absolute">
          <Waypoint
            onEnter={() => this.setState({ menuIcon: false })}
            onLeave={() => this.setState({ menuIcon: true })}
          />
          <Container>
            <Inner>
              <Title id="PageTitle">{frontmatter.title}</Title>
              <ColumnWrapper>
                <Column>
                  <Image fluid={this.props.data.intro} />
                </Column>
                <Column>
                  <Text>
                    <FrontmatterInfo frontmatter={frontmatter} />
                  </Text>
                </Column>

                <Column>
                  <Image src={gustav1} />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>
                        HelloGustav was a Vienna based start-up. Team was remote and distrubuted to all over the world.
                      </span>
                      <p />
                      <span>
                        We designed a real-time dashboard like trello, drag and drop support for candidate management.
                        React DnD used for this usage.
                      </span>
                      <p />
                      <span>
                        My role started with creation of Smart Containers, Redux layer and data connection of these
                        containers. I was involved in the beginning of project and bootstraped the web app. I used React
                        Boilerplate and followed best practices of React Community, configured Webpack for our need.
                        Configured routing, dynamic reducer, saga injection, connected socket layer to Redux. After
                        structural part was completed, I started helping other developers about UI components.
                      </span>
                    </ProjectDesc>
                  </Text>
                </Column>

                <Column>
                  <Image src={gustav2} />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>We implemented custom PDF Reader for React and real-time internal messaging system.</span>
                      <p />
                      <span>I coded the PDF Reader part by using Pdf.Js</span>
                      <p />
                    </ProjectDesc>
                  </Text>
                </Column>
              </ColumnWrapper>
              <ContactMain style={{ marginTop: '15rem' }} />
            </Inner>
          </Container>
        </div>
      </Menu>
    );
  }
}

export const query = graphql`
  query Gustav {
    intro: file(relativePath: { eq: "hellogustavcom/ats.jpg" }) {
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
