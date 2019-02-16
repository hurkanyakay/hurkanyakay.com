import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Image, Link } from '@react-pdf/renderer';
import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    fontFamily: 'Lato',
  },
  entryContainer: {
    marginBottom: 20,
  },
  entryContent: {
    flexDirection: 'column',
  },
  date: {
    fontSize: 10,
    fontFamily: 'Lato Italic',
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  title: {
    fontSize: 13,
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
    color: '#277fa4',
  },
  role: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Italic',
    marginBottom:3,
  },
  location: {
    fontSize: 10,
    textTransform: 'capitalize',
  },
  skills: {
    flexDirection:'row',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Italic',
    marginBottom:3,
    flexWrap: 'wrap',
  },
  skill: {
    marginLeft: 4
  },
  icon: {
    fontSize: 12,
    fontFamily: 'Icofont',
  }
});

const ExperienceEntry = ({ item }) => {
  // const title = `${company} | ${position}`;
  const { image, link, name, role, startdate, enddate, location, subrole, content, skills, projectLink } = item;
  let url = ''
  if(link[0] === '/'){
    url = `${window.location.origin}${link}`
  }else{
    url = link
  }
  return (
    <View style={styles.entryContainer} wrap={false}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}><Link src={url}><Text style={styles.icon}></Text> {name} </Link></Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{startdate} - {enddate ? enddate : 'Present'}</Text>
        </View>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.role}>{role}</Text>
        </View>
        <View style={styles.rightColumn}>
        <Text style={styles.location}><Text style={styles.icon}></Text> {location}</Text>
        </View>
      </View>
      <List>
        {content.map((detail, i) => (
          <Item key={`${i}detail`} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List>
      <View style={styles.skills}>
      <Text><Text style={styles.icon}></Text> Skills:</Text>
        {skills.map((detail, i) => (
          <Text key={`${i}skills`} style={styles.skill}>
            {detail}{i + 1 < skills.length ? ',' : null} {' '}
          </Text>
        ))}
      </View>
    </View>
  );
};

const Experience = ({ data }) => (
  <View style={styles.container}>
    <Title>Experience</Title>
    {data.map((item, i) => (
      <ExperienceEntry item={item} key={`${i  }exp`} />
    ))}
  </View>
);

// ExperienceEntry.propTypes = {
//   company: PropTypes.string,
//   date: PropTypes.string,
//   details: PropTypes.array,
//   position: PropTypes.string,
// };

export default Experience;
