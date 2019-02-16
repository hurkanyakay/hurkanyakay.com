import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  degree: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  date: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
  },
});

const ExperienceEntry = ({ item }) => {
  const { link, name, role, startdate, enddate } = item;
  return (
    <View style={styles.container} wrap={false}>
      <Text style={styles.school}>{name}</Text>
      <Text style={styles.degree}>{role}</Text>
      <Text style={styles.date}>{startdate} - {enddate}</Text>
    </View>
  );
};

const Education = ({ data }) => (
  <View style={styles.container}>
    <Title>Education</Title>
    {data.map((item, i) => (
      <ExperienceEntry item={item} key={`${i}edu`} />
    ))}
  </View>
);

export default Education;