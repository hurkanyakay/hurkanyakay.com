import React from 'react';
import { graphql } from 'gatsby';
import { Waypoint } from 'react-waypoint';
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
import {daysPassed} from '../../utils/datefns'


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
          
          {item.subrole.length > 0 && <div className="subrole">
            ➣{' '}
            {item.subrole.map((role, i) => (
              <span key={`${i  }role`}>
                {role} {i + 1 < item.subrole.length ? ',' : null}{' '}
              </span>
            ))}
          </div>}

          {item.content.length > 0 ? <div className="content">
            {item.content.map((c, i) => (
              <p key={`${i  }content`}>{c}</p>
            ))}
          </div> :
          <div className="content">
              <p key={`${i  }content`}>{item.desc}</p>
          </div>
          }
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
    const { avatar, allResumeJson } = data;
    return (
      <Modal>
        <div className="modalBackground" onClick={this.closeDownloadModal} />
        <div className="modalContent center bold">{componentLoaded ? <DownloadLinkComp avatar={avatar} projects={null} resumeData={allResumeJson.edges[0].node}/> : 'Loading...'}</div>
      </Modal>
    );
  }

  render() {
    const { data } = this.props;
    const { background, allResumeJson, avatar } = data;
    const {experience, education }= allResumeJson.edges[0].node

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
              <Title><span style={{marginRight:20}} id='PageTitle'>Résumé</span> <Button style={{fontSize: 13}} onClick={this.openDownload}>Download Pdf</Button></Title>{' '}
              
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
                {this.renderExperiences(experience)}
              </ResumeSection>
              {/* <ResumeSection>
                <h3>SHOWCASE</h3>
                {this.renderProjects(projects.edges)}
              </ResumeSection> */}
              <ResumeSection>
                <h3>EDUCATION</h3>
                {this.renderEducation(education)}
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
      ...BackgroundImageFragment
    }
    avatar: file(relativePath: { eq: "avatar2.jpg" }) {
      ...AvatarFragment
    }
    allResumeJson{
        edges {
          ...AllResumeFragment
        }
    }
  }
`;

export default Resume;
