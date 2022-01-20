import React from 'react';
import {
  PDFDownloadLink,
  BlobProvider,
  PDFViewer,
  Page,
  Text,
  Link,
  View,
  Font,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import Header from './Header';
import Title from './Title';
import Education from './Education';
import Experience from './Experience';
import Showcase from './Showcase';
import Skills from './Skills';
import webconfig from '../../../config/website';
import {daysPassed} from '../../utils/datefns'

// import styled from '@react-pdf/styled-components';

Font.register({
  family: 'Lato',
  src: `${window.location.origin}/fonts/Lato/Lato-Regular.ttf`, 
});
Font.register({
  family: 'Lato Italic',
  src:`${window.location.origin}/fonts/Lato/Lato-Italic.ttf`,
});
Font.register({
  family: 'Lato Bold',
  src:`${window.location.origin}/fonts/Lato/Lato-Bold.ttf`, 
});
Font.register({
  family: 'Icofont',
  src:`${window.location.origin}/fonts/icofont.ttf`,
});

const styles = StyleSheet.create({
  page: {},
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  imageColumn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  leftColumn: {
    padding: 15,
    backgroundColor: '#262626',
    color: '#fff',
    flexDirection: 'column',
    width: 180,
  },
  rightColumn: {
    flex: 1,
    padding: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 9,
    fontFamily: 'Lato Bold',
    textAlign: 'center',
    padding: 5,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
  },
  icon: {
    fontSize: 10,
    fontFamily: 'Icofont',
  },
  name: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontFamily: 'Lato Bold',
    color: '#277fa4',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    textTransform: 'uppercase',
    fontFamily: 'Lato',
  },
  fixedHeader: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    textAlign: 'right',
    fontSize: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  fixedHeaderText: {
    width: 20,
  },
  profile: {
    fontSize: 10,
    fontFamily: 'Lato',
    marginBottom: 10,
  },
  info: {
    fontFamily: 'Lato',
    fontSize: 8,
    textDecoration: 'none',
    color: '#fff'
  },
  infoItem: {
    marginBottom: 10,
    color: '#fff'
  },
});
const socialIcons = {
  twitter: '',
  instagram: '',
  linkedin: '',
  facebook: '',
  github: '',
};

const Resume = props => {
  const { avatar, projects, resumeData } = props;
  return (
    <Page {...props} style={styles.page} wrap>
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <View style={styles.imageColumn}>
            <Image src={avatar.childImageSharp.fluid.src} style={styles.image} />
          </View>
          <Education data={resumeData.education} />
          <View style={{ marginBottom: 20 }}>
            <Title>Contact</Title>
            <View style={styles.info}>
              <Text style={styles.infoItem}>
                <Link src={`mailto:${webconfig.email}`}>
                  {' '}
                  <Text style={styles.infoItem}><Text style={styles.icon}></Text> {webconfig.email}{' '}</Text>
                </Link>
              </Text>
              {Object.keys(webconfig.accounts).map((acc, i) => (
                <Text style={styles.infoItem} key={`${i}social`}><Link src={webconfig.accounts[acc]}>
                    <Text style={styles.infoItem}> <Text style={styles.icon}>{socialIcons[acc]}</Text>  {webconfig.accounts[acc]} </Text>
                </Link></Text>
              ))}
            </View>
          </View>
          <Skills />
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.name}>{webconfig.siteTitleAlt}</Text>
          <Text style={styles.subtitle}>Senior Software Engineer</Text>
          <View fixed style={styles.fixedHeader}>
            <Text
              style={styles.fixedHeaderText}
              render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
              fixed
            />
          </View>
          <Title>Profile</Title>
          <Text style={styles.profile}>{webconfig.about.desc.replace('#', daysPassed())}</Text>
          <Experience data={resumeData.experience} webconfig={webconfig}/>
          {/* <Showcase data={projects.edges} /> */}
        </View>
      </View>
      <View style={styles.footer}>
        <Text>https://hurkanyakay.com</Text>
        {/* <Text>This pdf created dynamically by React-Pdf in client side.</Text> */}
      </View>
    </Page>
  );
};

// Create Document Component
const MyDocument = props => (
  <Document
    author="Hürkan Yakay"
    keywords="resume, developer, software"
    subject="The resume of Hürkan Yakay"
    title="Hürkan Yakay's Resume"
  >
    <Resume size="A4" {...props} />
  </Document>
);

export const DownloadLink = props => (
  <PDFDownloadLink document={<MyDocument {...props} />} fileName="resume.pdf">
    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Click to Download now!')}
  </PDFDownloadLink>
);
export const Viewer = props => (
  <PDFViewer style={{ width: '100%', height: '100%' }}>
    <MyDocument {...props} />
  </PDFViewer>
);
