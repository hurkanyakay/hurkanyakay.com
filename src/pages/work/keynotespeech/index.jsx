import React from 'react';
import { graphql } from 'gatsby';
import Waypoint from 'react-waypoint';
import SEO from '../../../components/SEO';
import Menu from '../../../components/Menu';
import {
  Title,
  Inner,
  ColumnWrapper,
  Column,
  Text,
  Container,
  ContactMain,
} from '../../../components/LayoutComponents';
import Image from '../../../components/Image';
import Background from '../../../components/Background';
import FrontmatterInfo from '../../../components/FrontmatterInfo';

export const frontmatter = {
  id: 'keynotespeech',
  isWork: true,
  isFeatured: true,
  title: 'Keynote Speech about JS and React',
  subtitle: 'Big Scale Apps and Future of Front End',
  date: '2017-01-19',
  enddate: '',
  cover: './reactsunum.jpeg',
  path: '/work/keynotespeech',
  devOnly: false,
  description: 'I talked about Big Scale Web Apps, SPAs, React an future of JS',
  technologies: ['React', 'Angular', 'Redux', 'GraphQL', 'Relay'],
  role: 'Speaker',
  website: 'https://www.meetup.com/tr-TR/Javascript-Ankara/events/236720854/',
  github: false,
  npm: false,
};

export default class Keynotespeech extends React.Component {
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
                  <Image fluid={this.props.data.sunum} />
                </Column>
                <Column>
                  <Text>
                    I was the only speaker in this event, subjects were many and related to each other such as Scaleble
                    Web Apps, React vs Angular2, Relay, Redux, GraphQL, RestAPI and CRUD Opearations. I started speaking
                    from single page applications(SPA) and non-SPA applications.Then we investigated advatages and
                    disadvantages of SPA approach and major SPA libraries/frameworks. Then React.Js has chosen
                    hypothetically due to reasons that same as big companies have.
                  </Text>
                </Column>
                <Column span={2}>
                  <Text>
                    After that, we went deep into React.Js. In the end of speech, I help many companies and developers
                    that joined the event about selecting right library and tools according to project and their team
                    capabilities. It was nice to see major web companies' CEO and CTO in that presenation.
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
  query Keynotespeech {
    intro: file(relativePath: { eq: "keynotespeech/reactsunum.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sunum: file(relativePath: { eq: "keynotespeech/reactsunum2.jpeg" }) {
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
