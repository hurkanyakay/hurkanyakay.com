import React from 'react';
import { graphql } from 'gatsby';
import {
  Column,
  Text,
  ProjectDesc,
} from '../../../components/LayoutComponents';
import Image from '../../../components/Image';
import app1 from './IMG_4815.png';
import app2 from './IMG_4816.png';
import app3 from './IMG_4817.png';
import ProjectTemplate from '../../../components/ProjectTemplate'

export default function Yoreevo(props) {
  return (
      <ProjectTemplate  {...props}>

                <Column>
                  <Image src={app2} fit />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>Yoreevo is Real Estate platform for New York, Manhattan, Broklyn areas.</span>
                      <p>I led the mobile app team to design mobile version of https://yoreevo.com/</p>
                      <p>
                        I structured the main frame of the app based on React Native, React.
                      </p>
                      <p>
                      State management was RecoilJs and created atomic file structure for presentational and container components, used hooks for side effects and services,.
                      </p>
                    </ProjectDesc>
                  </Text>
                </Column>

                </ProjectTemplate>
    );
}
