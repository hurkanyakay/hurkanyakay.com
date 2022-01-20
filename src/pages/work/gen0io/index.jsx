import React from 'react';
import { graphql } from 'gatsby';
import {
  Column,
  Text,
  ProjectDesc,
} from '../../../components/LayoutComponents';
import Image from '../../../components/Image';
import Link from '../../../components/Link';
import ProjectTemplate from '../../../components/ProjectTemplate'

export default function Gen0Io(props) {
  const { metamask, defeat, fight } = props.data;
  return (
      <ProjectTemplate  {...props}>
                <Column>
                  <Image fluid={metamask} />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>
                        I involved in the beginning of this short term project and set necessary Front End
                        setup/boilerplate and architecture according to design needs
                      </span>
                      <p>
                        - Project made with React, Redux, Redux-saga, Drizzle (redux and saga supported) and Metamask
                        extension for ethereum{' '}
                      </p>
                      <p>
                        - This initial designs of first iteration required connection to ethereum network and purely
                        working top of ethereum chains independent from any backend support.{' '}
                      </p>
                    </ProjectDesc>
                  </Text>
                </Column>
                <Column>
                  <Image fluid={fight} />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <p>
                        - I found Drizzle, part of{' '}
                        <Link external to="https://truffleframework.com/">
                          truffle framework
                        </Link>{' '}
                        quite useful for ethereum contract actions
                      </p>
                      <p>- I set up Ganache local ethereum chain to work with smart contracts</p>
                      <p>
                        - Smart contract team already working with Truffle, so it was easy to integrate contract data to
                        frontend
                      </p>
                      <p>
                        - Drizzle, redux-saga integrated smart contract library enables us to call, cache, update and
                        data related actions
                      </p>
                    </ProjectDesc>
                  </Text>
                </Column>
                <Column>
                  <Image fluid={defeat} />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <p>
                        - One of the challenging parts was to create consistency between all the async events happening
                        all over the app which independently uses contract functions
                      </p>
                      <p>
                        - Other challenging part was, this technology stack is quite new and all the necessary tools are
                        not exist. Therefore I created custom end to end testing library based on Cypress and puppeteer
                        which uses Metamask extension for transaction testing.
                      </p>
                    </ProjectDesc>
                  </Text>
                </Column>

                </ProjectTemplate>
    );
}

export const query = graphql`
  query Gen0Io {
    metamask: file(relativePath: { eq: "gen0io/metamask-ss.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fight: file(relativePath: { eq: "gen0io/fight-ss.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    defeat: file(relativePath: { eq: "gen0io/defeat-ss.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
