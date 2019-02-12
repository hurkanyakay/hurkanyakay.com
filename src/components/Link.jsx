import React from 'react';
import { Link } from 'gatsby';

export default function CustomLink({ external, to, children }) {
  if (external) {
    return (
      <a href={to} target="_blank" rel="nofollow noopener noreferrer external">
        {children ? children : to}
      </a>
    );
  }
  return <Link to={to}>{children}</Link>;
}
