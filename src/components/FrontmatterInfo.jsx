import React from 'react';
import { Subtitle, ProjectDesc, ProjectDescIcon } from './LayoutComponents';
import Link from './Link';

export default function FrontmatterInfo({ data }) {
  if(!data) return null
  const { subtitle, content, skills, role, startdate, enddate, link, github, npm } = data;
  return (
    <React.Fragment>
      {subtitle ? <Subtitle style={{ marginTop: 0 }}>{subtitle}</Subtitle> : null}

      {content ? (
        <ProjectDesc>
          <span>Description:</span>
          <span>{content.join(' ')}</span>
        </ProjectDesc>
      ) : null}

      {skills ? (
        <ProjectDesc wrap="true">
          <span>Technology:</span>
          {skills.map(a => (
            <span style={{ marginRight: '0.5rem' }} key={a}>
              {a},
            </span>
          ))}
        </ProjectDesc>
      ) : null}

      {role ? (
        <ProjectDesc>
          <span>Role:</span>
          <span>{role}</span>
        </ProjectDesc>
      ) : null}

      {startdate ? (
        <ProjectDesc>
          <span>Date:</span>
          <span>{startdate}</span>
          {enddate ?  (<span>/{enddate}</span>) : null }
        </ProjectDesc>
      ) : null}

      {link ? (
        <ProjectDesc>
          <span>Website:</span>
          <span>
            <Link to={link} external>
              {link}
            </Link>{' '}
          </span>
        </ProjectDesc>
      ) : null}

      {github ? <ProjectDescIcon icon="github" link={github} /> : null}
      {npm ? <ProjectDescIcon icon="npm" link={npm} /> : null}
    </React.Fragment>
  );
}
