import React from 'react';
import Img from 'gatsby-image';
// import { css } from '@emotion/react'
// import styled from '@emotion/styled'
import tw, { styled, css } from 'twin.macro'

export const CImage = styled.div`
  ${tw`font-sans`};
  color: ${props => props.color || '#fff'};
  background-color: rgba(255, 255, 255, 0.5);
  width: ${props => (props.fit ? 'auto' : '100%')};

  ${props =>
    props.avatar
      ? css`
          border-radius: 9999px;
          overflow: hidden;
          width: 25rem;
          @media (max-width: 900px) {
            width: 10rem;
          }
        `
      : ''};
`;

export default function Image({ src, name, caption, captionLeft, fluid, color, fit, alt, avatar, ...props }) {
  return (
    <CImage color={color} fit={fit} avatar={avatar} {...props}>
      {src ? <img src={src} alt={name || caption || alt} style={{ width: '100%' }} {...props} /> : null}
      {fluid ? <Img fluid={fluid.childImageSharp.fluid} {...props} /> : null}
      {caption && (
        <div style={{ marginTop: '0.4rem', marginBottom: '0.5rem', textAlign: captionLeft || 'center' }}>{caption}</div>
      )}
    </CImage>
  );
}
