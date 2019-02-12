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

export const frontmatter = {
  id: 'scorebeyond.com',
  isWork: true,
  isFeatured: true,
  title: 'Scorebeyond.com',
  subtitle: 'The modern way to prep for tests',
  date: '2017-01-01',
  enddate: '2017-11-01',
  cover: './scorebeyond-landing.png',
  path: '/work/scorebeyondcom',
  devOnly: false,
  description:
    'ScoreBeyond, a service that helps students prepare for standardized tests like the SAT,ACT. The ScoreBeyond app gives students a daily progress report of their skills as they prepare for the test, as well as daily exercises to improve their skills in certain subjects.',
  technologies: ['React', 'Redux', 'React Native', 'Styled Components', 'Webpack'],
  role: 'Senior Frontend Engineer',
  website: 'https://angel.co/scorebeyond/',
  github: false,
  npm: false,
};

export default class ScoreBeyond extends React.Component {
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
              <Title>{frontmatter.title}</Title>
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
                  <Image fluid={this.props.data.full} />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>
                        ScoreBeyond was a Menlo Park based start-up that acquired by LinkedIn in Jan 2018. ScoreBeyond
                        had a mobile DNA, and it brings together disparate technologies (mobile, personalization, in-app
                        purchasing, push notifications, data visualization, motivation science, neuroscience) to offer
                        the most effective test prep ever. ScoreBeyond had overwhelming support from educators,
                        investors, and especially over 160,000 students who have used and loved product. Score Beyond
                        was proud to have helped thousands of students excel on standardized tests and accomplish their
                        educational goals.
                      </span>
                      <p />
                      <span>
                        Linkedin:{' '}
                        <a target="_blank" href="https://www.linkedin.com/company/score-beyond/about/">
                          Scorebeyond
                        </a>
                        <p />
                        Techcrunch.com:{' '}
                        <a
                          target="_blank"
                          href="https://techcrunch.com/2015/06/30/scorebeyond-a-standardized-test-prep-app-raises-2-8m/"
                        >
                          ScoreBeyond, A Standardized Test Prep App, Raises $2.8M
                        </a>
                        <p />
                        Crunchbase.com:{' '}
                        <a target="_blank" href="https://www.crunchbase.com/organization/score-beyond#section-overview">
                          ScoreBeyond
                        </a>
                      </span>
                    </ProjectDesc>
                  </Text>
                </Column>
                <Column>
                  <Image fluid={this.props.data.hd} />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>
                        My role in ScoreBeyond as only Front End Engineer was working closely with CTO, developing and
                        launching new features.
                      </span>
                      <p />
                      <span>
                        I was responsible with 3 Web Apps and 2 Mobile Apps coded with React and React Native. I applied
                        best practices of React, therefore it became easy to manage all these apps.
                      </span>
                      <p />
                      <span>
                        I set up Jenkins in AWS instance and configured CI, CD tools to speed up development and
                        deployment and testing process.Connected to our github and slack accounts.
                      </span>
                      <p />
                      <span>I managed to share codes between web and mobile with React Components.</span>
                      <p />
                    </ProjectDesc>
                  </Text>
                </Column>
                <Column style={{ background: '#fff' }} row>
                  <Image fluid={this.props.data.actapp} />
                  <Image fluid={this.props.data.satupapp} />
                  <Image fluid={this.props.data.parentupapp} />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>Scorebeyond is part of LinkedIn now, therefore there is no online website.</span>
                      <p />
                      <span>Mobile apps I contributed:</span>
                      <p />
                      <span>
                        <a target="_blank" href="https://itunes.apple.com/tr/developer/scorebeyond-inc/id582725373">
                          itunes.apple.com scorebeyond-inc
                        </a>
                      </span>
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
  query ScoreBeyond {
    intro: file(relativePath: { eq: "scorebeyondcom/scorebeyond-landing.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    full: file(relativePath: { eq: "scorebeyondcom/scorebeyondFull.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hd: file(relativePath: { eq: "scorebeyondcom/hd.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    actapp: file(relativePath: { eq: "scorebeyondcom/actapp.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    parentupapp: file(relativePath: { eq: "scorebeyondcom/parentupapp.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    satupapp: file(relativePath: { eq: "scorebeyondcom/satup.png" }) {
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
