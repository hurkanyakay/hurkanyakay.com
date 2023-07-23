import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
  name: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
    marginBottom: 5,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10,
  },
  skill: {
    fontFamily: 'Lato',
    marginBottom: 10,
  },
  bar1: {
    width: 140,
    height: 6,
    backgroundColor: '#ccc',
  },
  bar2: {
    width: '50%',
    height: 6,
    backgroundColor: '#277fa4',
  },
});

const skills = [
  {
    name: 'JavaScript',
    value: '95%',
  },
  {
    name: 'HTML5',
    value: '95%',
  },
  {
    name: 'CSS3',
    value: '95%',
  },
  {
    name: 'React.JS',
    value: '90%',
  },
  {
    name: 'React Native',
    value: '90%',
  },
  {
    name: 'Redux',
    value: '90%',
  },
  {
    name: 'Webpack',
    value: '90%',
  },
  {
    name: 'Node.JS',
    value: '80%',
  },
  {
    name: 'GraphQL',
    value: '80%',
  },
  {
    name: 'SQL',
    value: '60%',
  },
];

export const SkillEntry = ({ skills }) => (
  <View>
    {skills.map((skill, i) => (
      <View key={`${i  }skill`} style={styles.skill}>
        <Text style={styles.name}>{skill.name}</Text>
        <View style={styles.bar1}>
          <View style={[styles.bar2, { width: skill.value }]} />
        </View>
      </View>
    ))}
  </View>
);

const Skills = () => (
  <View>
    <Title>Skills</Title>
    <SkillEntry skills={skills} />
  </View>
);

SkillEntry.propTypes = {
  skills: PropTypes.array,
};

export default Skills;
