import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

const bgs = [
  'linear-gradient(to right,rgb(213,133,255)0%,rgb(0,255,238)100%);',
  'linear-gradient(to right, #D4145A 0%,#FBB03B 100%)',
  'linear-gradient(to right,rgb(102,45,139)0%,rgb(237,30,121)100%)',
  'linear-gradient(to right,rgb(0,146,69)0%,rgb(252,238,33)100%)',
];

export default class ProjectCards extends Component {
  render() {
    return this.props.projects.map((a, i) => (
      <ProjectCard
        clean={this.props.clean}
        key={a.projectLink + a.desc}
        title={a.name}
        text={a.subtitle}
        link={a.projectLink}
        bg={bgs[i]}
        cover={a.imageurl}
      />
    ));
  }
}
