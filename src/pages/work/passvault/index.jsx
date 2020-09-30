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
import pwvaultgif from './pwault.gif';

export const frontmatter = {
  id: 'pass-vault',
  isWork: true,
  isFeatured: true,
  title: 'Pass Vault',
  subtitle: '1Password Clone coded with React and Nodejs',
  date: '2017-12-01',
  enddate: '',
  cover: './pwvault.png',
  path: '/work/passvault',
  devOnly: false,
  description: 'I wanted to create password storage solution for myself. React-Redux power frontend, Nodejs and SQLite power backend.',
  technologies: ['React', 'Redux', 'Nodejs', 'SQLite'],
  role: false,
  website: false,
  github: 'https://github.com/hurkanyakay/pwault',
};

export default class PassVault extends React.Component {
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
                  <Image src={pwvaultgif} fit />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>Fullstack app basically CRUD operations for passwords based on NodeJs, SQLite and React/Redux/Redux-Saga</span>
                      <p>- Bookmarklet support: You can drag bookmarklet to bookmarks and when you click the bookmarklet on a website, PWault will search existed passwords using domain and will list those entries(domains and subdomains may need different passwords) </p>
                      <p>- Favicon support: Automatically gets the favicon when url is set in the form and saves DB as base64 image </p>
                      <p>- Simply generates passwords </p>
                      <p>- Revealing passwords </p>
                      <p>- Copy button that copies to clipboard </p>
                      <p>- Password Generator: Adjustable length, string, numeric, punctuation for generation </p>
                      <p>- Redux-auth-wrapper is used for authorization of pages </p>
                      <p>- Encryption is not implemented yet </p>
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
  query PassVault {
    intro: file(relativePath: { eq: "passvault/pwvault.png" }) {
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
