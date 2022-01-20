import React from 'react';
import { graphql } from 'gatsby';
import {
  Column,
  Text,
  ProjectDesc,
} from '../../../components/LayoutComponents';
import Image from '../../../components/Image';
import app1 from './app1.png';
// import powerpoint from './powerpoint.png';
import ProjectTemplate from '../../../components/ProjectTemplate'

export default function Baumeister(props) {
  return (
      <ProjectTemplate  {...props}>
                <Column>
                  <Image src={app1} fit />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>Baumeister is Germany/Berlin based AI company focusing on Powerpoint automation.</span>
                      <p>- I worked on Powerpoint Addon which based on Progressive Web App + Office.js </p>
                      <p>- Addon can be installed through Office Marketplace </p>
                      <p>- Addon has access to data of Office documents and can send to server. </p>
                      <p>- Then I worked on Baumeister mobile app. </p>
                      <p>- React Native based mobile app had authorization features.</p>
                      <p>- App has ability to take a picture and send it to server for processing. </p>
                    </ProjectDesc>
                  </Text>
                </Column>
                </ProjectTemplate>
    );
}

export const query = graphql`
  query Baumeister {
    intro: file(relativePath: { eq: "baumeister/powerpoint.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
