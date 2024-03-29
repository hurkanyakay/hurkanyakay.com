/* global tw */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button } from './Button';
import { Contact } from './LayoutComponents';
import Background from './Background';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { PParticles } from "./Background";

const MenuButton = styled.button`
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1000;
  transition: all 0.5s ease 0s;
  transform: ${props => (props.show ? 'initial' : 'translate3d(200%, 0px, 0px)')};
  display: flex;
  flex-direction: column;
  border: none;
  background-color: transparent;
  margin: 1rem;
  & > span {
    width: 3rem;
    height: 0.5rem;
    margin-bottom: 0.7rem;
    background: #fff;
    border: 0.5px solid #ccc;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  margin: 5px;
  padding: 15px;
  height: 4rem;
  width: 4rem;
  z-index: 1300;
  & span:first-of-type {
    transform: translate(-1.5rem, -0.5rem) rotate(-45deg);
  }
  & * {
    position: absolute;
    width: 3rem;
    height: 1rem;
    transform: translate(-1.5rem, -0.5rem) rotate(45deg);
    background: #888;
  }
`;
const MenuList = styled.div`
  position: fixed;
  right: 0px;
  z-index: 1100;
  width: 300px;
  height: 100%;
  transition: all 0.5s ease 0s;
  background: #545454;
  transform: ${props => (props.open ? 'initial' : 'translate3d(150%, 0px, 0px)')};
  
  @media (max-width: 768px) {
    width: 200px;
  }
`;
const GreyZone = styled.div`
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
`;
const GreyZoneMenuContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > a + a {
    margin-top: 2rem;
  }
`;
const openStyles = `
  overflow: hidden;
  & > div {
    overflow:hidden;
    height:100%;
    transform: perspective(600px) rotateY(30deg);
  }
`;
const relativeStyles = `
  position: relative;
  & > div {
    transition: all 0.5s ease 0s;
    transform-style: preserve-3d;
  }
`;
const absoluteStyles = `
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  & > div {
    transition: all 0.5s ease 0s;
    transform-style: preserve-3d;
    overflow: hidden;
    height: 100%;
  }
`;
const MenuContent = styled.div`
  height: 100%;
  background: #161719;
  & > div {
    height: 100%;
    background: #161719;
  }
  & .absolute{
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    ${'' /* overflow:auto; */}
    overflow-y: scroll; /* has to be scroll, not auto */
  }

  ${props =>
    props.open
      ? css`
          ${openStyles};
        `
      : ''}
  ${'' /* ${props => props.relative ? css`${relativeStyles}` : ''} */}
  ${'' /* ${props => !props.relative ? css`${absoluteStyles}` : ''} */}
  ${props =>
    !props.asd
      ? css`
          ${absoluteStyles};
        `
      : ''}
`;

export const Headerbuttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  & > a + a {
    margin-left: 2rem;
  }
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 100%;
  transition: all 0.5s ease 0s;
  transform: ${props => (props.open ? 'initial' : 'translate3d(0px, -200%, 0px)')};
  @media (max-width: 600px) {
    display:none;
  }
`;


export function BackGround() {
  const bfile = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background2.jpg" }) {
        ...BackgroundImageFragment
      }
    }
  `);
  return (
      <Background data={bfile.file} />
  )
}


export default class MenuWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    };
  }

  show = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Headerbuttons id="Headerbuttons" open={!this.props.showMenu}>
          <Button to="/">Home</Button>
          <Button to="/projects">Projects</Button>
          <Button to="/cv">Résumé</Button>
        </Headerbuttons>
        <MenuButton
          id="HamburgerMenu"
          show={this.props.showMenu || this.state.width <= 600}
          onClick={this.show}
        >
          <span />
          <span />
          <span />
        </MenuButton>
        {this.state.show ? <GreyZone onClick={this.close} /> : null}
        <MenuList id="MenuList" open={this.state.show}>
          <CloseButton onClick={this.close}>
            <span />
            <span />
          </CloseButton>
          <GreyZoneMenuContent>
            <Button to="/">Home</Button>
            <Button to="/projects">Projects</Button>
            <Button to="/cv">Résumé</Button>

            <Contact side />
          </GreyZoneMenuContent>

          <BackGround />
        </MenuList>
        <MenuContent open={this.state.show} relative={this.props.relative}>
          <div>{this.props.children}</div>
        </MenuContent>
        {/* <PParticles /> */}
      </div>
    );
  }
}
