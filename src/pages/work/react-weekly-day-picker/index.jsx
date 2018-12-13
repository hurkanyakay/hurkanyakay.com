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

export const frontmatter = {
  id: 'react-weekly-day-picker',
  isWork: true,
  isFeatured: true,
  title: 'React Weekly Day Picker',
  subtitle: 'React component provides weekly view and day picker option like calendly.  ',
  date: '2017-12-01',
  enddate: false,
  cover: './weeklydaypicker.png',
  path: '/work/react-weekly-day-picker',
  devOnly: false,
  description: 'I developed this component and published to github.com to provide day picker option like calendly',
  technologies: ['React', 'Webpack', 'Rollup', 'Styled-Components'],
  role: false,
  website: false,
  github: 'https://github.com/hurkanyakay/react-weekly-day-picker',
  npm: 'https://www.npmjs.com/package/react-weekly-day-picker',
};

export default class ReactWeeklyDayPicker extends React.Component {
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
              <Title>{frontmatter.title}</Title>
              <ColumnWrapper>
                <Column style={{ background: '#fff' }}>
                  <Image fluid={this.props.data.intro} />
                </Column>
                <Column>
                  <Text>
                    {/* <Subtitle style={{marginTop:0}}>{frontmatter.subtitle}</Subtitle> */}
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
  query ReactWeeklyDayPicker {
    intro: file(relativePath: { eq: "react-weekly-day-picker/weeklydaypicker.png" }) {
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
