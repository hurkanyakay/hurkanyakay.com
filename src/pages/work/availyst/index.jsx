import React from 'react';
import { graphql } from 'gatsby';
import {
  Column,
  Text,
  ProjectDesc,
} from '../../../components/LayoutComponents';
import Image from '../../../components/Image';
import app2 from './app2.png';
// import agif from './availyst.gif';
import ProjectTemplate from '../../../components/ProjectTemplate'

export default function Availyst(props) {
  return (
      <ProjectTemplate  {...props}>
                <Column>
                  <Image src={app2} fit />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>Availyst is the first delivery management platform. 
                      Availyst show you more local delivery options and give you the tools to organize it all
                      : Groceries, Takeout, Convenience, Spirits </span>
                      <p>When I join the team there was already a codebase.
                        I worked on performance and adding new features/pages.
                      </p>
                      <p>Challenging parts: </p>
                      <p>- Working with map and geo data for location specific information </p>
                      <p>- Improving performance of listed items (RecycleListView) and infinite data based loading. </p>
                      <p>- Consistent data flow with state management(Recoil.js) </p>
                    </ProjectDesc>
                  </Text>
                </Column>

                </ProjectTemplate>
    );
}

export const query = graphql`
  query {
    intro: file(relativePath: { eq: "availyst/app1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
