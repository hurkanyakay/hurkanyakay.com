import React from 'react';
import { Link } from 'gatsby';
// import styled from '@emotion/styled'
import tw, { styled, css } from 'twin.macro'

export const StyledLink = styled(Link)`
  ${tw`font-sans`};
  font-size: ${props => props.fontSize || '1.5rem'};
  color: #fff;
  background: transparent;
  border-radius: 0.2rem;
  border: 0.1rem solid;
  cursor: pointer;
  padding: 0.2rem 2rem;
  text-decoration: none;
  border: 2px solid #e07628;
  position: relative;

  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  ${'' /* font-weight: bold; */}
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }

  &:link:after,
  &:visited:after {
    content: '';
    position: absolute;
    height: 0%;
    left: 50%;
    top: 50%;
    width: 150%;
    z-index: -1;
    -webkit-transition: all 0.75s ease 0s;
    -moz-transition: all 0.75s ease 0s;
    -o-transition: all 0.75s ease 0s;
    transition: all 0.75s ease 0s;
  }
  &:link:hover,
  &:visited:hover {
    color: #fff;
    text-shadow: none;
  }
  &:link:hover:after,
  &:visited:hover:after {
    height: 450%;
  }
  &:link,
  &:visited {
    position: relative;
    color: #fff;
    overflow: hidden;
    transition: all 1s ease;
  }
  &:after {
    background: #e07628;
    opacity: 0.5;
    -moz-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    -ms-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    -webkit-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    transform: translateY(-50%) translateX(-50%) rotate(90deg);
  }
  &:hover:after {
    opacity: 1;
    height: 1600% !important;
  }
`;

export default function CustomLink({ external, to, customLink, children, ...props }) {
  if (external) {
    return (
      <a href={to} target="_blank" rel="nofollow noopener noreferrer external">
        {children ? children : to}
      </a>
    );
  }
  if(customLink){
    return <StyledLink to={to} {...props}>{children}</StyledLink>;
  }
  return <Link to={to} {...props}>{children}</Link>;
}
