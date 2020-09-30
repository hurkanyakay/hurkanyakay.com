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
import gif1 from './followent1.gif';
import gif2 from './followent2.gif';
import Image from '../../../components/Image';
import FrontmatterInfo from '../../../components/FrontmatterInfo';
import Background from '../../../components/Background';

export const frontmatter = {
  id: 'followent.com',
  isWork: true,
  isFeatured: true,
  title: 'Followent.com',
  subtitle: 'Event Tracking Website',
  date: '2014-01-01',
  enddate: '',
  cover: './followent.png',
  path: '/work/followentcom',
  devOnly: false,
  description: `Followent means follow + event. It is an event tracking website for students in our University(METU). There were hundreds of Social Community that organize many events during the semester and followent notified students related to this events.`,
  technologies: ['Php', 'Wordpress', 'MySQL', 'Apache'],
  role: 'Co-Founder, Lead Engineer',
  website: 'http://followent.com',
  github: false,
  npm: false,
};

export default class Followent extends React.Component {
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
                  <Image src={gif2} />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>
                        As Co-Founder of Followent, my role was dealing with all the technical aspect of the project.
                        Basically, getting domain, setting up Wordpress environment, finding suitable theme, editing
                        theme, designing logo and related graphics, finding and implementing and editing necessary
                        plugins, language support of website(Turkish), managing DB, backing-up DB and files, entegration
                        with other services like google calendar, notification system of users were my responsibilities.{' '}
                      </span>
                    </ProjectDesc>
                  </Text>
                </Column>

                <Column style={{ background: '#fff' }}>
                  <Image color="rgba(0,0,0,0.7)" src={gif1} />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>
                        We managed to reach hundreds of social clubs in multiple universities and provided them a
                        dedicated page to express themselves and ability to add their events.
                      </span>
                    </ProjectDesc>
                  </Text>
                </Column>

                <Column>
                  <Image fluid={this.props.data.glow} />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>
                        We organized a party to launch our project and tried to expand our network. I designed the
                        poster and related graphics.
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
  query Followentcom {
    intro: file(relativePath: { eq: "followentcom/followent.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    glow: file(relativePath: { eq: "followentcom/glowparty.png" }) {
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
