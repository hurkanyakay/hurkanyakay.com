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
// import Image from './Image';
import Background from './Background';
import FrontmatterInfo from './FrontmatterInfo';

function ProjectTemplate(props) {
  const [menuIcon, setmenuIcon] = useState(false)
  const bfile = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background.jpg" }) {
        ...BackgroundImageFragment
      }
    }
  `);
  return (
    <Menu showMenu={menuIcon} relative>
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
                <img loading="lazy" src={props.resumeSingle?.imageurl} />
              </Column>
              <Column>
                <Text>
                  <FrontmatterInfo data={props.resumeSingle} />
                </Text>
              </Column>
            </ColumnWrapper>
            {props.children}
            <ContactMain style={{ marginTop: "15rem" }} />
          </Inner>
        </Container>
      </div>
    </Menu>
  );
}

export default ProjectTemplate
