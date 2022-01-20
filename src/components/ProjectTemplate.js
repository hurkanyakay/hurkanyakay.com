import React, {useState} from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Waypoint } from 'react-waypoint';
import SEO from './SEO';
import Menu from './Menu';
import {
  Title,
  Inner,
  ColumnWrapper,
  Column,
  Text,
  Container,
  ProjectDesc,
  ContactMain,
} from './LayoutComponents';
import Image from './Image';
import Background from './Background';
import FrontmatterInfo from './FrontmatterInfo';
import {withResumeHOC} from '../hooks/resumeData'
// import useImage from '../hooks/imageHook'

function ProjectTemplate(props) {
  const [menuIcon, setmenuIcon] = useState(false)
  const bfile = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background.jpg" }) {
        ...BackgroundImageFragment
      }
    }
  `);
  // console.log('ProjectTemplate props', props);
  return (
    <Menu showMenu={menuIcon} relative>
        <SEO />
        <Background data={bfile.file} />
        <div className="absolute">
          <Waypoint
            onEnter={() => setmenuIcon(false)}
            onLeave={() => setmenuIcon(true)}
          />
          <Container>
            <Inner>
              <Title id="PageTitle">{props.resumeSingle?.name}</Title>
              <ColumnWrapper>
                <Column>
                  <Image fluid={props.resumeSingle?.image?.src} />
                </Column>
                <Column>
                  <Text>
                    <FrontmatterInfo data={props.resumeSingle} />
                  </Text>
                </Column>
                {props.children}
              </ColumnWrapper>

              <ContactMain style={{ marginTop: '15rem' }} />
            </Inner>
          </Container>
        </div>
      </Menu>
  )
}

export default withResumeHOC(ProjectTemplate)
