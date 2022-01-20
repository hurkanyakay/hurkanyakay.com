import React from 'react';
import { graphql } from 'gatsby';
import {
  Column,
  Text,
  ProjectDesc,
} from '../../../components/LayoutComponents';
import Image from '../../../components/Image';
import anket from './anket.gif';
import anket2 from './anket2.gif';
import ProjectTemplate from '../../../components/ProjectTemplate'

function AnketServisi(props) {
    return (
            <ProjectTemplate  {...props}>
                <Column>
                  <Image fluid={props.data.table} caption="We designed bussiness specific QR codes for tables" />
                </Column>
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                        As Co-Founder of Anketservisi.com, my role was dealing with all the technical aspect of the
                        project like
                        <p>- Getting domain, </p>
                        <p>- Setting up Wordpress environment, </p>
                        <p>- Finding suitable theme, editing theme, </p>
                        <p>- Designing logo and related graphics, </p>
                        <p>- Finding and implementing and editing necessary plugins, </p>
                        <p>- Managing DB, backing-up DB and files, </p>
                        <p>- Language support of website(Turkish), </p>
                        entegration with other services like emailing were my responsibilities.{' '}
                    </ProjectDesc>
                  </Text>
                </Column>
                <Column>
                  <Image src={anket2} caption="Detailed statistics and feedbacks provided to businesses" />
                </Column>
                <Column>
                  <Image src={anket} fit />
                </Column>
                
                <Column>
                  <Text>
                    <ProjectDesc>
                      <span />
                      <span>Our survey system were supporting many different tools like:</span>
                      <p>- Form elements </p>
                      <p>- File upload </p>
                      <p>- Multiple selection </p>
                      <p>- Like - Dislike </p>
                      <p>- Rich text editor </p>
                      <p>- Code embedding </p>
                      <p>- Captcha </p>
                      <p>- Rating </p>
                      <p>- Sliders </p>
                      <p>- Smileys </p>
                      <span>We stopped service of Anketservisi.com and it is not online anymore.</span>
                    </ProjectDesc>
                  </Text>
                </Column>
            </ProjectTemplate>
    );
  }

export const query = graphql`
  query AnketServisi {
    intro: file(relativePath: { eq: "anketservisicom/home.png" }) {
      ...BackgroundImageFragment
    }
    table: file(relativePath: { eq: "anketservisicom/table.jpg" }) {
      ...BackgroundImageFragment
    }    
  }
`;

export default AnketServisi
