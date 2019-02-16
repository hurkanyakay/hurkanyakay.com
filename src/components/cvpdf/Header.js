import React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';
// const Heading = styled.Text`
//   margin: 10px;
//   font-size: 22px;
//   font-family: 'Helvetica';
// `;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontFamily: 'Lato Bold',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    textTransform: 'uppercase',
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
});

export default () => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>Hürkan Yakay</Text>
      <Text style={styles.subtitle}>Senior Software Engineer</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link style={styles.link}>me@hurkanyakay.com</Link>
    </View>
  </View>
);