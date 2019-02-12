import React from 'react';
import { Subtitle, ProjectDesc, ProjectDescIcon } from './LayoutComponents';
import Link from './Link';

export default function FrontmatterInfo({ frontmatter }) {
  const { subtitle, description, technologies, role, date, enddate, website, github, npm } = frontmatter;
  return (
    <React.Fragment>
      {subtitle ? <Subtitle style={{ marginTop: 0 }}>{subtitle}</Subtitle> : null}

      {description ? (
        <ProjectDesc>
          <span>Description:</span>
          <span>{description}</span>
        </ProjectDesc>
      ) : null}

      {technologies ? (
        <ProjectDesc wrap="true">
          <span>Technology:</span>
          {technologies.map(a => (
            <span style={{ marginRight: '0.5rem' }} key={a}>
              {a},
            </span>
          ))}
        </ProjectDesc>
      ) : null}

      {role ? (
        <ProjectDesc>
          <span>Role:</span>
          <span>{frontmatter.role}</span>
        </ProjectDesc>
      ) : null}

      {date ? (
        <ProjectDesc>
          <span>Date:</span>
          <span>{date}</span>
          {enddate ?  (<span>/{enddate}</span>) : null }
        </ProjectDesc>
      ) : null}

      {website ? (
        <ProjectDesc>
          <span>Website:</span>
          <span>
            <Link to={website} external>
              {website}
            </Link>{' '}
          </span>
        </ProjectDesc>
      ) : null}

      {github ? <ProjectDescIcon icon="github" link={github} /> : null}
      {npm ? <ProjectDescIcon icon="npm" link={npm} /> : null}
    </React.Fragment>
  );
}
