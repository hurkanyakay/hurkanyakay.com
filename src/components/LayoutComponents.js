import React from 'react';
import styled, { css } from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { ParallaxLayer } from 'react-spring/dist/addons';
import SVG from './SVG';
import Link from './Link';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import config from '../../config/website';
import '../styles/global';
// import icon from 'simple-icons/icons/instagram'
// console.log(icon);

export const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

export const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

export const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;
export const Container = styled.div`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 4rem;
  }
`;

export const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

export const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

export const BigTitle = styled.h1`
  ${tw('font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const Type = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    & > .typing {
      height: 5rem;
    }
  }
`;

export const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

export const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  margin-bottom:5px;
`;

export const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;
export const ColumnWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;
export const Column = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  background-color: rgba(0, 0, 0, 0.5);
  ${props =>
    props.span
      ? css`
          grid-column: span ${props.span};
          @media (max-width: 900px) {
            grid-column: span 1;
          }
        `
      : ''};
`;

export const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

export const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

export const ResumeSection = styled.div`
  ${tw('font-sans text-white')};
  margin-top:20px;
  margin-bottom:20px;
  & h3 {
    ${tw('uppercase')};
    color: #fff;
    margin:10px 0;
  }
  & > div {
    ${tw('p-2 md:p-3 lg:p-4 ')};
    border: 1px solid rgba(255,255,255, 0.7);
  }
  & > div + div {
    border-top: 1px solid rgba(255,255,255, 0.7);
  }
  & .experiences {
    display:flex;
    flex-direction: row;
    padding-bottom: 10px;
  }
 
  & .companyLogo {
    width: 100px;
    height: 100px;
    margin-right:10px;
    background: rgba(255,255,255, 0.4);
    padding:10px;
    & div {
      width: 80px;
      height: 80px;
    }
  }
  & .textSection{
    width:100%;
  }
  & .companyLink {
    font-size:18px;
    font-weight:bold;
  }
  & .role{
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content: flex-start;
    @media (max-width: 900px) {
      justify-content: center;
    }
  }
  & .position{
    font-size:22px;
    font-weight:bold;
    margin-right:10px;
  }
  & .location{
    ${'' /* margin-left:10px; */}
    text-transform: capitalize;
  }
  & .subrole{
    font-size:12px;
    font-weight:bold;
    & span {
      margin-right:5px;
      margin-left:5px;
    }
  }
  & .content {
    margin:10px 0;
    & p {
      margin: 0 0 5px;
      padding: 0 0 0 20px;
      position: relative;
    }
    & p:before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border: 2px solid #00a1e1;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      position: absolute;
      top: 8px;
      right: auto;
      bottom: auto;
      left: 0;
      z-index: initial;
    }
  }
  & .skills{
    display: flex;
    flex-direction: row;
    font-size:15px;
    flex-wrap: wrap;
    justify-content: flex-start;
    @media (max-width: 900px) {
      justify-content: center;
    }
    & div {
      color: #ccc;
    }
    & span {
      color: #00a1e1;
      margin-right:5px;
      margin-left:5px;
    }
  }
`;

export const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

export const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl font-sans lg:text-3xl xl:text-4xl')};
`;

export const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

export const ContactText = styled.div`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    display: inline-block;
  }
  .icon {
    margin: 1rem;
  }
  ${props =>
    props.side
      ? css`
          margin-top: 1rem;
          text-align: center;
          .icons {
            margin-top: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: wrap;
          }
          .icon {
            margin: 0.5rem;
          }
        `
      : ''};
`;

export const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
`;

export const Text = styled.div`
  ${tw('font-sans')};
  color: #fff;
  padding: 1rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  & ul,ol {
    margin: 10px; /* To remove default bottom margin */ 
    padding: 10px; /* To remove default left padding */
  }
  & li {
    margin-bottom:10px;
  }
  & a {
    word-break: break-all;
    width: 100%;
  }
  @media (max-width: 900px) {
    & a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

`;

export const ParticleWrapper = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  & > div {
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;
export const ProjectDesc = styled.div`
  margin-bottom: 1rem;
  & p {
    margin: 1rem 0;
  }
  & > span:first-child {
    margin-right: 0.5rem;
    font-weight: bold;
  }
  & a {
    word-break: break-all;
    width: 100%;
  }
  & a .icon {
    margin-right: 1rem;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & a .link {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  ${props =>
    props.wrap
      ? css`
          display: flex;
          flex-direction: row;
          flex-flow: wrap;
          @media (max-width: 900px) {
            display: grid;
          }
        `
      : ''} ${props =>
    props.flex
      ? css`
          display: flex;
          align-items: center;
          & a {
            display: flex;
            align-items: center;
          }
        `
      : ''};
`;
export const Svgimg = styled.span`
  display: inline-block;
  & path {
    fill: ${props => props.fill || '#fff'};
  }
`;
export const IconGen = props => {
  if (props.github) {
    return (
      <Svgimg className="icon">
        <svg eight="36px" width="36px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>GitHub icon</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </Svgimg>
    );
  }
  if (props.npm) {
    return (
      <Svgimg className="icon">
        <svg height="36px" width="36px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>NPM icon</title>
          <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z" />
          <path d="M10.665 10H12v2.667h-1.335V10z" />
        </svg>
      </Svgimg>
    );
  }
  if (props.facebook) {
    return (
      <Svgimg className="icon">
        <svg height="36px" width="36px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Facebook icon</title>
          <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
        </svg>
      </Svgimg>
    );
  }
  if (props.twitter) {
    return (
      <Svgimg className="icon">
        <svg height="36px" width="36px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Twitter icon</title>
          <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
        </svg>
      </Svgimg>
    );
  }
  if (props.linkedin) {
    return (
      <Svgimg className="icon">
        <svg height="36px" width="36px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>LinkedIn icon</title>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </Svgimg>
    );
  }
  if (props.instagram) {
    return (
      <Svgimg className="icon">
        <svg height="36px" width="36px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Instagram icon</title>
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
        </svg>
      </Svgimg>
    );
  }
  return <span />;
};

export const ProjectDescIcon = props => (
  <ProjectDesc flex>
    <span style={{ marginBottom: '10px' }}>
      <Link to={props.link} external>
        {props.icon === 'github' ? <IconGen github /> : null}
        {props.icon === 'npm' ? <IconGen npm /> : null}
        <span className="link">{props.link}</span>
      </Link>
    </span>
  </ProjectDesc>
);

export const Contact = props => (
  <ContactText side={props.side}>
    {props.side ? (
      <div>
        Mail <a href={`mailto:${config.email}`}>me</a> or:
      </div>
    ) : (
      <div>
        Mail <a href={`mailto:${config.email}`}>me</a> or find me on other platforms:
      </div>
    )}
    <div className="icons">
      {Object.keys(config.accounts).map((acc, i) => {
        const prop = {};
        prop[acc] = true;
        return (
          <Link key={i} external to={config.accounts[acc]}>
            <IconGen {...prop} />
          </Link>
        );
      })}
    </div>
  </ContactText>
);
export const ContactMain = props => (
  <Inner {...props}>
    <Title>Get in touch</Title>
    <Contact />
  </Inner>
);

export const Divider1 = props => (
  <Divider speed={props.speed || 0.2} offset={props.offset || 0}>
    <UpDown>
      <SVG icon="triangle" className={hidden} width={48} stroke={colors.orange} left="10%" top="20%" />
      <SVG icon="hexa" width={48} stroke={colors.red} left="60%" top="70%" />
      <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
    </UpDown>
    <UpDownWide>
      <SVG icon="arrowUp" className={hidden} width={16} fill={colors['blue-dark']} left="80%" top="10%" />
      <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="50%" />
      <SVG icon="circle" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
      <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
      <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
      <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
    </UpDownWide>
    <SVG icon="circle" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
    <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
    <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
    <SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
    <SVG icon="upDown" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />
    <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
    <SVG icon="circle" width={64} fill={colors.green} left="95%" top="5%" />
    <SVG icon="box" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" />
    <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
    <SVG icon="box" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
    <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
    <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
  </Divider>
);
export const DividerMiddle1 = props => (
  <DividerMiddle
    bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
    speed={props.speed || -0.2}
    offset={props.offset || 1.1}
    factor={props.factor || 2}
  />
);
export const Divider2 = props => (
  <Divider speed={props.speed || 0.1} offset={props.offset || 1} factor={props.factor || 2}>
    <UpDown>
      <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
      <SVG icon="upDown" width={8} fill={colors.teal} left="70%" top="20%" />
      <SVG icon="triangle" width={8} stroke={colors.orange} left="25%" top="5%" />
      <SVG icon="circle" className={hidden} width={24} fill={colors.white} left="17%" top="60%" />
    </UpDown>
    <UpDownWide>
      <SVG icon="arrowUp" className={hidden} width={16} fill={colors.green} left="20%" top="90%" />
      <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="30%" />
      <SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="90%" />
      <SVG icon="triangle" className={hidden} width={16} stroke={colors.teal} left="18%" top="75%" />
      <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
      <SVG icon="upDown" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />
    </UpDownWide>
    <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
    <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
    <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
    <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
    <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
    <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%" />
  </Divider>
);
export const Divider3 = props => (
  <Divider
    bg="#23262b"
    clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
    speed={props.speed || 0.2}
    offset={props.offset || 3}
  />
);
export const Divider4 = props => (
  <Divider speed={props.speed || 0.1} offset={props.offset || 3}>
    <UpDown>
      <SVG icon="box" className={hidden} width={6} fill={colors.blue} left="50%" top="75%" />
      <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
      <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
      <SVG icon="upDown" className={hidden} width={24} fill={colors.orange} left="80%" top="80%" />
    </UpDown>
    <UpDownWide>
      <SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
      <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
      <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
      <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
    </UpDownWide>
    <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
    <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
    <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
    <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
    <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
  </Divider>
);
export const Divider5 = props => (
  <Divider fill="#23262b" speed={props.speed || 0.2} offset={props.offset || 4}>
    <WaveWrapper>
      <InnerWave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
          <path className={waveAnimation}>
            <animate
              attributeName="d"
              values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
              repeatCount="indefinite"
              dur="30s"
            />
          </path>
        </svg>
      </InnerWave>
    </WaveWrapper>
  </Divider>
);
export const Divider6 = props => (
  <Divider speed={props.speed || 0.1} offset={props.offset || 4}>
    <UpDown>
      <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
      <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
    </UpDown>
    <UpDownWide>
      <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
      <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
      <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
    </UpDownWide>
    <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
    <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
    <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
    <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
  </Divider>
);
