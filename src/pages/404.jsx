import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import '../styles/global';
import Menu from '../components/Menu';
import Waypoint from 'react-waypoint';
import { Title, Inner, Container, Subtitle, ContactMain } from '../components/LayoutComponents';
import Background from '../components/Background';
import { Button } from '../components/Button';

class p404 extends React.Component {
  state = {
    menuIcon: false,
  };

  render() {
    const { data } = this.props;
    const { background } = data;
    return (
      <Menu showMenu={this.state.menuIcon} relative>
        <SEO />
        <Background data={background} />
        <div className="absolute">
          <Waypoint
            onEnter={() => this.setState({ menuIcon: false })}
            onLeave={() => this.setState({ menuIcon: true })}
          />
          <Container>
            <Inner>
              <Title>404 Page Not Found, Ups..</Title>
              <Subtitle>
                Maybe you can find it in <Button to="/">Home Page</Button>{' '}
              </Subtitle>
              <ContactMain style={{ marginTop: '15rem' }} />
            </Inner>
          </Container>
        </div>
      </Menu>
    );
  }
}

export const query = graphql`
  query P404Query {
    background: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default p404;
