import React from 'react';
import Img from 'gatsby-image';
import styled, { css } from 'react-emotion';

export const CImage = styled.div`
  ${tw('font-serif')};
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

export default ({ src, name, caption, captionLeft, fluid, color, fit, alt, avatar }) => (
  <CImage color={color} fit={fit} avatar={avatar}>
    {src ? <img src={src} alt={name || caption || alt} style={{ width: '100%' }} /> : null}
    {fluid ? <Img fluid={fluid.childImageSharp.fluid} /> : null}
    {caption && (
      <div style={{ marginTop: '0.4rem', marginBottom: '0.5rem', textAlign: captionLeft || 'center' }}>{caption}</div>
    )}
  </CImage>
);
