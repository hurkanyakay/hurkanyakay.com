import React from 'react';
import { graphql } from 'gatsby';
import {
  Column,
  Text,
  ProjectDesc,
} from '../../../components/LayoutComponents';
import gif1 from './followent1.gif';
import gif2 from './followent2.gif';
import Image from '../../../components/Image';
import ProjectTemplate from '../../../components/ProjectTemplate'

export default function Followentcom(props) {
  return (
      <ProjectTemplate  {...props}>
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
                  <Image fluid={props.data.glow} />
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
              
                </ProjectTemplate>
    );
}

export const query = graphql`
  query Followentcom {
    glow: file(relativePath: { eq: "followentcom/glowparty.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
