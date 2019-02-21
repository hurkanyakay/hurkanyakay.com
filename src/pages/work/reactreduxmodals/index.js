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
  id: 'ReactReduxModalsDialogs',
  isWork: true,
  isFeatured: true,
  title: 'React/Redux Modals and Dialogs',
  subtitle: 'Taking advantage of Redux store and creating globally controlled modals.',
  date: '2017-12-01',
  enddate: '',
  cover: './modals.png',
  path: '/work/reactreduxmodals',
  devOnly: false,
  description:
    'I developed this idea and published to medium.com when I working with Redux and I saw a patern about firing modals/dialogs in the UI. I connected Modal opening system to Redux store and gave me ability to fire modals easily anywere in app. ',
  technologies: ['React', 'Redux'],
  role: false,
  website: false,
  github: 'https://github.com/hurkanyakay/react-redux-modals',
  npm: false,
};

export default class ReduxModal extends React.Component {
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
                    <ProjectDesc>
                      <span>Medium Article Link:</span>
                      <span>
                        <a
                          target="_blank"
                          href="https://medium.com/front-end-hacking/react-redux-no-need-to-component-state-for-modals-73871157b52e"
                        >
                          React/Redux: Modals and Dialogs
                        </a>
                      </span>
                    </ProjectDesc>
                  </Text>
                </Column>
              </ColumnWrapper>
              <iframe
                style={{ width: '100%', marginTop: '2rem' }}
                height="400"
                scrolling="no"
                title="React Redux modals with portals(3/3)"
                src="//codepen.io/hurkan/embed/vWMGQJ/?height=265&theme-id=0&default-tab=result"
                frameBorder="no"
                allowtransparency="true"
                allowFullScreen
              >
                See the Pen <a href="https://codepen.io/hurkan/pen/vWMGQJ/">React Redux modals with portals(3/3)</a> by
                Hürkan Yakay (<a href="https://codepen.io/hurkan">@hurkan</a>) on{' '}
                <a href="https://codepen.io">CodePen</a>.
              </iframe>
              <ContactMain style={{ marginTop: '15rem' }} />
            </Inner>
          </Container>
        </div>
      </Menu>
    );
  }
}

export const query = graphql`
  query ReduxModal {
    intro: file(relativePath: { eq: "reactreduxmodals/modals.png" }) {
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
