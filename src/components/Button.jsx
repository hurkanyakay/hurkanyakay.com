import styled from 'react-emotion';
import { Link } from 'gatsby';
import React from 'react';

export const Button = styled(Link)`
  ${tw('font-serif')};
  font-size: ${props => props.fontSize || '1.5rem'};
  color: #fff;
  background: transparent;
  border-radius: 0.5rem;
  border: 0.1rem solid;
  cursor: pointer;
  padding: 0.2rem 2rem;
  text-decoration: none;
`;

export const MiddleButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  & > a + a {
    margin-left: 2rem;
  }
`;

const ScrollBtn = styled.span`
  @media (max-width: 400px) {
    display:none;
  }
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
  margin-top: 2rem;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  & > p {
    display: block;
  }
  & > * {
    line-height: 18px;
    font-size: 13px;
    font-weight: normal;
    color: #7f8c8d;
    color: #ffffff;
    font-family: 'proxima-nova', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    letter-spacing: 2px;
  }
  & > a > span::before {
    position: absolute;
    top: 10px;
    left: 50%;
    content: '';
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: #fff;
    border-radius: 100%;
    box-sizing: border-box;
  }
  & > a > span::after {
    position: absolute;
    bottom: -18px;
    left: 50%;
    width: 18px;
    height: 18px;
    content: '';
    margin-left: -9px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    box-sizing: border-box;
  }
  & > *:hover,
  & > *:focus,
  & > *.active {
    color: #ffffff;
  }
  & > *:hover,
  & > *:focus,
  & > *:active,
  & > *.active {
    opacity: 0.8;
    filter: alpha(opacity=80);
  }
  & .mouse {
    position: relative;
    display: block;
    width: 35px;
    height: 55px;
    margin: 0 auto 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 3px solid white;
    border-radius: 23px;
  }
  & .mouse > * {
    position: absolute;
    display: block;
    top: 29%;
    left: 50%;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    background: white;
    border-radius: 50%;
    -webkit-animation: ani-mouse 2.5s linear infinite;
    -moz-animation: ani-mouse 2.5s linear infinite;
    animation: ani-mouse 2.5s linear infinite;
  }
`;
export class AnimButton extends React.Component {
  render() {
    return (
      <ScrollBtn onClick={this.props.onClick}>
        <a href="#">
          <span className="mouse">
            <span />
          </span>
        </a>
        <p>{this.props.text}</p>
      </ScrollBtn>
    );
  }
}
