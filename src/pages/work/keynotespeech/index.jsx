import React from 'react';
import { graphql } from 'gatsby';
import {
  Column,
  Text,
} from '../../../components/LayoutComponents';
import Image from '../../../components/Image';
import ProjectTemplate from '../../../components/ProjectTemplate'

export default function Keynotespeech(props) {
  return (
      <ProjectTemplate  {...props}>

                <Column>
                  <Image fluid={props.data.sunum} />
                </Column>
                <Column>
                  <Text>
                    I was the only speaker in this event, subjects were many and related to each other such as Scaleble
                    Web Apps, React vs Angular2, Relay, Redux, GraphQL, RestAPI and CRUD Opearations. I started speaking
                    from single page applications(SPA) and non-SPA applications.Then we investigated advatages and
                    disadvantages of SPA approach and major SPA libraries/frameworks. Then React.Js has chosen
                    hypothetically due to reasons that same as big companies have.
                  </Text>
                </Column>
                <Column span={2}>
                  <Text>
                    After that, we went deep into React.Js. In the end of speech, I help many companies and developers
                    that joined the event about selecting right library and tools according to project and their team
                    capabilities. It was nice to see major web companies' CEO and CTO in that presenation.
                  </Text>
                </Column>

                </ProjectTemplate>
    );
}

export const query = graphql`
  query Keynotespeech {
    sunum: file(relativePath: { eq: "keynotespeech/reactsunum2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
