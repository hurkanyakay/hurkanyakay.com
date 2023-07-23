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
  /* height: 300px; */
  ${tw`relative text-white no-underline shadow-lg`};
  background-color: #fff;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
  &:hover .middle{
     ${props =>
    props.clean
      ? css`
          opacity: 1!important;
        `
      : css`
        opacity: 0;
        `}
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
        `
      : ''}
`;

const Text = styled.div`
  ${tw`font-sans text-sm opacity-75 md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  margin: 0 10px 10px 10px;
`;

const Title = styled.span`
${tw`font-sans tracking-wide text-white uppercase`};
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
const SImg = styled.img`
  opacity: 1;
  display: block;
  width: 100%;
  transition: 0.5s ease;
  backface-visibility: hidden;
  height: 300px;
  object-fit: cover;
`;

const ProjectCard = ({ title, text, link, children, cover, bg, clean }) => (
  <Wrapper to={link} rel="nofollow noopener noreferrer" clean={clean ? 1 : 0}>
    <Cover className="middle" bg={bg} clean={clean ? 1 : 0}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Cover>
    {cover && <SImg className="image" src={cover} />}
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  // title: PropTypes.string.isRequired,
  // link: PropTypes.string.isRequired,
  // children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  // bg: PropTypes.string.isRequired,
};
