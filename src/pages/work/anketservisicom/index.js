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
import anket from './anket.gif';
import anket2 from './anket2.gif';

export const frontmatter = {
  id: 'anketservisi.com',
  isWork: true,
  isFeatured: true,
  title: 'Anketservisi.com',
  subtitle: 'Feedback/survey system for businesses',
  date: '2015-01-01',
  cover: './anketservisi.png',
  path: '/work/anketservisicom',
  devOnly: false,
  description:
    'Anketservisi.com was a service that provides survey system for businesses. Customers scan the QR code on the tables, then our responsive page welcomes them and provide survey that customized for bussiness.',
  technologies: ['Php', 'Wordpress', 'MySQL', 'Apache'],
  role: 'Co-Founder, Lead Engineer',
  website: 'http://anketservisi.com',
  github: false,
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
              <Title>{frontmatter.title}</Title>
              <ColumnWrapper>
                <Column>
                  <Image fluid={this.props.data.intro} />
                </Column>
                <Column>
                  <Text>
                    <Subtitle style={{ marginTop: 0 }}>{frontmatter.subtitle}</Subtitle>
                    <ProjectDesc>
                      <span>Description:</span>
                      <span>{frontmatter.description}</span>
                    </ProjectDesc>
                    <ProjectDesc wrap="true">
                      <span>Technology:</span>
                      {frontmatter.technologies.map(a => (
                        <span style={{ marginRight: '0.5rem' }} key={a}>
                          {a},
                        </span>
                      ))}
                    </ProjectDesc>
                    <ProjectDesc>
                      <span>Role:</span>
                      <span>{frontmatter.role}</span>
                    </ProjectDesc>
                    {frontmatter.enddate ? (
                      <ProjectDesc>
                        <span>Date:</span>
                        <span>{frontmatter.date}</span> / <span>{frontmatter.enddate}</span>
                      </ProjectDesc>
                    ) : null}
                    {frontmatter.website ? (
                      <ProjectDesc>
                        <span>Website:</span>
                        <span>
                          <a href={frontmatter.website} target="_blank">
                            {frontmatter.website}
                          </a>{' '}
                        </span>
                      </ProjectDesc>
                    ) : null}
                    {frontmatter.github ? <ProjectDescIcon icon="github" link={frontmatter.github} /> : null}
                    {frontmatter.npm ? <ProjectDescIcon icon="npm" link={frontmatter.npm} /> : null}
                    <ProjectDesc>
                      <span />
                      <span>
                        As Co-Founder of Anketservisi.com, my role was dealing with all the technical aspect of the
                        project like
                        <p>- Getting domain, </p>
                        <p>- Setting up Wordpress environment, </p>
                        <p>- Finding suitable theme, editing theme, </p>
                        <p>- Designing logo and related graphics, </p>
                        <p>- Finding and implementing and editing necessary plugins, </p>
                        <p>- Managing DB, backing-up DB and files, </p>
                        <p>- Language support of website(Turkish), </p>
                        entegration with other services like emailing were my responsibilities.{' '}
                      </span>
                    </ProjectDesc>
                  </Text>
                </Column>
                <Column>
                  <Image fluid={this.props.data.table} caption="We designed bussiness specific QR codes for tables" />
                </Column>
                <Column>
                  <Image src={anket2} caption="Detailed statistics and feedbacks provided to businesses" />
                </Column>
                <Column>
                  <Image src={anket} fit />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>Our survey system were supporting many different tools like:</span>
                      <p>- Form elements </p>
                      <p>- File upload </p>
                      <p>- Multiple selection </p>
                      <p>- Like - Dislike </p>
                      <p>- Rich text editor </p>
                      <p>- Code embedding </p>
                      <p>- Captcha </p>
                      <p>- Rating </p>
                      <p>- Sliders </p>
                      <p>- Smileys </p>
                      <span>We stopped service of Anketservisi.com and it is not online anymore.</span>
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
  query AnketServisi {
    intro: file(relativePath: { eq: "anketservisicom/home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    table: file(relativePath: { eq: "anketservisicom/table.jpg" }) {
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
