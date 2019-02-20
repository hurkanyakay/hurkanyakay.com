import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Image, Link } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
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
  subtitle: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato',
    marginBottom: 3,
  },
  desc: {
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato',
    marginBottom: 5,
  },
  location: {
    fontSize: 10,
    textTransform: 'capitalize',
  },
  skills: {
    flexDirection: 'row',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Italic',
    marginBottom: 3,
    flexWrap: 'wrap',
  },
  skill: {
    marginLeft: 4,
  },
  icon: {
    fontSize: 12,
    fontFamily: 'Icofont',
  },
  projectLink : {
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Italic',
  }
});

const ExperienceEntry = ({ item }) => {
  const { cover, date, enddate, description, id, path, subtitle, technologies, title } = item.node.frontmatter;
  return (
    <View style={styles.entryContainer} wrap={false}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>
            <Link src={`${window.location.origin}${path}`}><Text style={styles.icon}></Text> {title} </Link>
          </Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>
            {date}
            {enddate ? ' - ' + enddate : ''}
          </Text>
        </View>
      </View>
      <View style={styles.subtitle}>
        <Text>{subtitle}</Text>
      </View>
      <View style={styles.desc}>
        <Text>{description}</Text>
      </View>
      <View style={styles.skills}>
        <Text><Text style={styles.icon}></Text> Technologies:</Text>
        {technologies.map((detail, i) => (
          <Text key={`${i}technologies`} style={styles.skill}>
            {detail}{i + 1 < technologies.length ? ',' : null} {' '}
          </Text>
        ))}
      </View>
    </View>
  );
};

const Showcase = ({ data }) => (
  <View style={styles.container}>
    <Title wrap={false}>Showcase</Title>
    {data.map((item, i) => (
      <ExperienceEntry item={item} key={`${i}showcase`} />
    ))}
  </View>
);

// ExperienceEntry.propTypes = {
//   company: PropTypes.string,
//   date: PropTypes.string,
//   details: PropTypes.array,
//   position: PropTypes.string,
// };

export default Showcase;
