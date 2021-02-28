/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
// import { css } from '@emotion/react'
// import styled from '@emotion/styled'
import tw, { styled, css } from 'twin.macro'

const Wrapper = styled(Link)`
  width: 100%;
  overflow: hidden;
  ${tw`shadow-lg relative no-underline text-white`};
  background-color: #fff;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
  &:hover .middle{
     opacity: 0;
  }

  ${props =>
    props.clean
      ? css`
          background-color: transparent;
          display: flex;
          justify-content: end;
          align-items: end;
          flex-direction: column;
          border-radius: 0px;
          & :hover .middle {
            opacity: 1;
          }
        `
      : ''}
`;

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  margin: 0 10px 10px 10px;
`;

const Title = styled.span`
${tw`text-white uppercase text-2xl tracking-wide font-sans`};
  z-index: 2;
  margin: 0;
  color: #fff;
  text-shadow: 0 0 40px rgba(20, 21, 28, 10);
  margin: 10px;
`;

const Cover = styled.div`
  opacity: 1;
  padding: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  /* top: 0;
  bottom: 0;
  right: 0;
  left: 0; */
  inset: 0px;
  z-index: 1;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: 0.5s ease;

  &:before {
    content: ' ';
    position: absolute;
    inset: 0px;
    opacity: 0.7;
    z-index: -1;
    background: ${props => props.bg};
  }
  ${props =>
    props.clean
      ? css`
          top: inherit;
          bottom: inherit;
          right: inherit;
          left: inherit;
          width: inherit;
          padding: inherit;
          flex: 1;
          position: relative;
          &:before {
            opacity: 0.3;
            background: #fff;
          }
        `
      : ''};
`;
const SImg = styled(Img)`
  opacity: 1;
  display: block;
  width: 100%;
  height: 300px;
  transition: 0.5s ease;
  backface-visibility: hidden;
`;

const ProjectCard = ({ title, text, link, children, cover, bg, clean }) => (
  <Wrapper to={link} rel="nofollow noopener noreferrer" clean={clean ? 1 : 0}>
    <Cover className="middle" bg={bg} clean={clean ? 1 : 0}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Cover>
    {cover && <SImg className="image" fluid={cover.childImageSharp.fluid} />}
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  // title: PropTypes.string.isRequired,
  // link: PropTypes.string.isRequired,
  // children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  // bg: PropTypes.string.isRequired,
};
