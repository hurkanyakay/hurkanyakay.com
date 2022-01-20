import React from 'react';
import { graphql } from 'gatsby';
import {
  Column,
  Text,
  ProjectDesc,
} from '../../../components/LayoutComponents';
import Image from '../../../components/Image';
import app1 from './app1.png';
import app2 from './app2.png';
import ProjectTemplate from '../../../components/ProjectTemplate'

export default function Wso(props) {
  return (
      <ProjectTemplate  {...props}>

                <Column>
                  <Image src={app2} fit />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>I worked on WSO mobile app based on their web forum</span>
                      <p>- I used existed forum api and constructed the App accordingly </p>
                      <p>- Challenging parts: </p>
                      <p>- There were too many categories to show and some of them were not suitable for the app </p>
                      <p>- Comment section required nested structure recursively </p>
                      <p>- New and edited comments needed to be highlighted</p>
                    </ProjectDesc>
                  </Text>
                </Column>

                </ProjectTemplate>
    );
}
