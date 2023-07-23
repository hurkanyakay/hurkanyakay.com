import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Image, Link } from '@react-pdf/renderer';
import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Lato",
    marginBottom: 10
  },
  entryContainer: {
    marginBottom: 20,
  },
  entryContent: {
    flexDirection: "column",
  },
  date: {
    fontSize: 10,
    fontFamily: "Lato Italic",
    marginBottom: 10,
  },
  detailContainer: {
    flexDirection: "row",
  },
  detailLeftColumn: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: "Lato",
  },
  image: {
    width: 50,
    resizeMode: "cover",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  leftColumn: {
    flexDirection: "row",
    flexGrow: 9,
    alignItems: "center",
  },
  rightColumn: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "flex-end",
    justifySelf: "flex-end",
  },
  title: {
    fontSize: 11,
    textDecoration: "none",
    fontFamily: "Lato Bold",
    color: "#277fa4",
  },
  role: {
    fontSize: 11,
    color: "black",
    textDecoration: "none",
    fontFamily: "Lato Italic",
    marginBottom: 3,
    marginTop: 6,
  },
  location: {
    fontSize: 10,
    textTransform: "capitalize",
  },
  skills: {
    flexDirection: "row",
    fontSize: 10,
    color: "black",
    textDecoration: "none",
    fontFamily: "Lato Italic",
    marginBottom: 5,
    flexWrap: "wrap",
  },
  skill: {
    marginLeft: 4,
  },
  icon: {
    fontSize: 12,
    fontFamily: "Icofont",
  },
});

const ExperienceEntry = ({ item, webconfig }) => {
  // const title = `${company} | ${position}`;
  const {
    image,
    link,
    name,
    role,
    startdate,
    enddate,
    desc,
    location,
    subrole,
    content,
    skills,
    projectLink,
  } = item.attributes;
  let url = ''
  let address = projectLink || link
  if(address[0] === '/'){
    url = `${webconfig.siteUrl}${address}`
  }else{
    url = address
  }
  return (
    <View style={styles.entryContainer} wrap={false}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          {/* <View
            style={{
              height: 50,
              overflow: "hidden",
              marginRight: 10,
            }}
          >
            <Image
              src={process.env.STRAPI_API_URL + image.data.attributes?.url}
              style={styles.image}
            />
          </View> */}
          <View>
            <Link src={url}>
              {" "}
              <Text style={styles.title}>
                <Text style={styles.icon}></Text> {name}{" "}
              </Text>{" "}
            </Link>
            <Text style={styles.role}>{role}</Text>
          </View>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>
            {startdate} - {enddate ? enddate : "Present"}
          </Text>
          <Text style={styles.location}>
            <Text style={styles.icon}></Text> {location}
          </Text>
        </View>
      </View>

      {content?.length > 0 ? (
        <List>
          {content.split("&").map((detail, i) => (
            <Item key={`${i}detail`} style={styles.detailContainer}>
              {detail.replace(/^\s+|\s+$/g, "")}
            </Item>
          ))}
        </List>
      ) : (
        <List>
          <Item style={styles.detailContainer}>{desc}</Item>
        </List>
      )}

      <View style={styles.skills}>
        <Text>
          <Text style={styles.icon}></Text> Skills:
        </Text>
        {skills.split(",").map((detail, i) => (
          <Text key={`${i}skills`} style={styles.skill}>
            {detail}
            {i + 1 < skills.length ? "," : null}{" "}
          </Text>
        ))}
      </View>
    </View>
  );
};

const Experience = ({ webconfig, experiencesWork }) => (
  <View style={styles.container}>
    <Title>Experiences</Title>
    {experiencesWork.map((item, i) => (
      <ExperienceEntry item={item} webconfig={webconfig} key={`${i}exp`} />
    ))}
  </View>
);
export const Projects = ({ webconfig, experiencesProject }) => (
  <View style={styles.container}>
    <Title>Projects</Title>
    {experiencesProject.map((item, i) => (
      <ExperienceEntry item={item} webconfig={webconfig} key={`${i}exp2`} />
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
