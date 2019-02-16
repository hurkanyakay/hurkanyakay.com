import React from 'react';
import { graphql } from 'gatsby';
import Waypoint from 'react-waypoint';
import SEO from '../../components/SEO';
import Menu from '../../components/Menu';
import {
  Title,
  Inner,
  Container,
  ContactMain,
  AboutHero,
  AboutSub,
  ResumeSection,
  Modal,
} from '../../components/LayoutComponents';
import Background from '../../components/Background';
import { Button } from '../../components/Button';
import Image from '../../components/Image';
import Link from '../../components/Link';
import webconfig from '../../../config/website';
import { daysPassed } from '../index';

let DownloadLinkComp = null;

class Resume extends React.Component {
  state = {
    menuIcon: false,
    downloadModal: false,
    componentLoaded: false,
  };

  renderExperiences(experiences) {
    return experiences.map((item, i) => (
      <div className="experiences" key={`${i}exps`}>
        <div className="companyLogo">
          <Image fluid={item.image.src} />
        </div>
        <div>
          <div className="companyLink">
            <Link to={item.link} external>
              {item.name}
            </Link>
          </div>
          <div className="role">
            <div className="position">{item.role}</div>
            <div className="date">
              {item.startdate} - {item.enddate ? item.enddate : 'Present'}
            </div>
          </div>
          <div className="location">✭ {item.location}</div>
          <div className="subrole">
            ➣{' '}
            {item.subrole.map((role, i) => (
              <span key={`${i  }role`}>
                {role} {i + 1 < item.subrole.length ? ',' : null}{' '}
              </span>
            ))}
          </div>
          <div className="content">
            {item.content.map((c, i) => (
              <p key={`${i  }content`}>{c}</p>
            ))}
          </div>
          <div className="skills">
            <div>Skills:</div>{' '}
            {item.skills.map((skill, i) => (
              <span key={`${i  }skill`}>
                {skill} {i + 1 < item.subrole.length ? ',' : null}
              </span>
            ))}
          </div>
          {item.projectLink ? (
            <div className="projectLink">
              <Link to={item.projectLink}>Related Project Link: {item.projectLink}</Link>
            </div>
          ) : null}
        </div>
      </div>
    ));
  }

  renderEducation(educations) {
    return educations.map((item, i) => (
      <div className="experiences" key={`${i}exps`}>
        <div className="companyLogo">
          <Image fluid={item.image.src} />
        </div>
        <div>
          <div className="companyLink">
            <Link to={item.link} external>
              {item.name}
            </Link>
          </div>
          <div className="role">
            <div className="position">{item.role}</div>
            <div className="date">
              {item.startdate} - {item.enddate ? item.enddate : 'Present'}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  renderProjects(projects) {
    return projects.map((project, i) => {
      const item = project.node.frontmatter;
      return (
        <div className="experiences" key={item.id}>
          <div className="companyLogo">
            <Image fluid={item.cover} />
          </div>
          <div className="textSection">
            <div className="companyLink">
              <Link to={item.path} external>
                {item.title}
              </Link>
            </div>
            <div className="role">
              <div className="position">{item.subtitle}</div>
            </div>
            <div className="projectDescription">{item.description}</div>
            <div className="skills">
              <div>Skills:</div>{' '}
              {item.technologies.map((skill, i) => (
                <span key={`${i  }skill`}>
                  {skill} {i + 1 < item.technologies.length ? ',' : null}
                </span>
              ))}
            </div>
            <div className="projectLink">
              <Link to={item.path}>Project Link: {item.path}</Link>
            </div>
          </div>
        </div>
      );
    });
  }

  openDownload = async () => {
    this.setState({ downloadModal: true }, async () => {
      if (!this.state.componentLoaded) {
        const { DownloadLink } = await import(/* webpackChunkName: "cvpdf" */ '../../components/cvpdf/index');
        DownloadLinkComp = DownloadLink;
        this.setState({ componentLoaded: true });
      }
    });
  };

  closeDownloadModal = () => {
    this.setState({ downloadModal: false });
  };

  renderDownloadModal() {
    const { componentLoaded } = this.state;
    const { data } = this.props;
    const { resumedata, avatar, projects } = data;
    const { childResumeJson } = resumedata;
    return (
      <Modal>
        <div className="modalBackground" onClick={this.closeDownloadModal} />
        <div className="modalContent center bold">{componentLoaded ? <DownloadLinkComp avatar={avatar} projects={projects} resumeData={childResumeJson}/> : 'Loading...'}</div>
      </Modal>
    );
  }

  render() {
    const { data } = this.props;
    const { background, resumedata, avatar, projects } = data;
    const { childResumeJson } = resumedata;
    const { downloadModal } = this.state;
    return (
      <Menu showMenu={this.state.menuIcon} relative>
        <SEO />
        <Background data={background} />
        <div className="absolute">
          <Waypoint
            onEnter={() => this.setState({ menuIcon: false })}
            onLeave={() => this.setState({ menuIcon: true })}
          />
          <Container>
            <Inner>
              <Title><span style={{marginRight:20}}>Résumé</span> <Button style={{fontSize: 13}} onClick={this.openDownload}>Download Pdf</Button></Title>{' '}
              
              <AboutHero style={{ marginTop: 0 }}>
                <Image avatar fluid={avatar} alt="Hürkan Yakay" style={{ width: 100 }} />
                <AboutSub>
                  <div>Hürkan Yakay</div>
                  <div>Senior Software Engineer</div>
                </AboutSub>
              </AboutHero>
              <ResumeSection>
                <h3>About</h3>
                <div>{webconfig.about.desc.replace('#', daysPassed())}</div>
              </ResumeSection>
              <ResumeSection>
                <h3>EXPERIENCE</h3>
                {this.renderExperiences(childResumeJson.experience)}
              </ResumeSection>
              <ResumeSection>
                <h3>SHOWCASE</h3>
                {this.renderProjects(projects.edges)}
              </ResumeSection>
              <ResumeSection>
                <h3>EDUCATION</h3>
                {this.renderEducation(childResumeJson.education)}
              </ResumeSection>
              <ContactMain style={{ marginTop: '15rem' }} />
            </Inner>
          </Container>
          {downloadModal ? this.renderDownloadModal() : null}
        </div>
      </Menu>
    );
  }
}

export const query = graphql`
  query Resume {
    background: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    avatar: file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resumedata: file(relativePath: { eq: "resume.json" }) {
      childResumeJson {
        id
        experience {
          link
          name
          role
          subrole
          startdate
          enddate
          location
          content
          skills
          projectLink
          image {
            src {
              childImageSharp {
                fluid(maxWidth: 1400, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        education {
          link
          name
          role
          startdate
          enddate
          image {
            src {
              childImageSharp {
                fluid(maxWidth: 1400, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    projects: allJavascriptFrontmatter(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            id
            path
            devOnly
            title
            subtitle
            date
            enddate
            description
            technologies
            cover {
              childImageSharp {
                fluid(maxWidth: 1100, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Resume;
