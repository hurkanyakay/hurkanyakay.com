import React from 'react';
import { graphql } from 'gatsby';
import {
  Column,
  Text,
  ProjectDesc,
} from '../../../components/LayoutComponents';
import Image from '../../../components/Image';
import gustav1 from './gustav1.gif';
import gustav2 from './gustav2.gif';
import ProjectTemplate from '../../../components/ProjectTemplate'

export default function gustav(props) {
  return (
      <ProjectTemplate  {...props}>

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

                </ProjectTemplate>
    );
}

// export const query = graphql`
//   query Gustav {
//     intro: file(relativePath: { eq: "hellogustavcom/ats.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1400, quality: 90) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `;
