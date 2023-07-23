import React from "react";
import tw, { styled, css } from 'twin.macro'

export const Spinner = styled.div`
  width: ${(props) => props.size * 10}px;
  height: ${(props) => props.size * 10}px;
  border: 10px solid #5fa624; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  opacity: 0.8;
`;
export const SpinnerContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LoadingSpinner({size=8}) {
  return <Spinner size={size} className="animate-spin" />;
}
export function LoadingSpinnerContainer({children}) {
  return <SpinnerContainer>{children}</SpinnerContainer>;
}
