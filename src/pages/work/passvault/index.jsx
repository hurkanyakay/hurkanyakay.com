import React from 'react';
import { graphql } from 'gatsby';
import {
  Column,
  Text,
  ProjectDesc,
} from '../../../components/LayoutComponents';
import Image from '../../../components/Image';
import pwvaultgif from './pwault.gif';
import ProjectTemplate from '../../../components/ProjectTemplate'

export default function pwvault(props) {
  return (
      <ProjectTemplate  {...props}>

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

                </ProjectTemplate>
    );
}

// export const query = graphql`
//   query PassVault {
//     intro: file(relativePath: { eq: "passvault/pwvault.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1400, quality: 90) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }

//   }
// `;
