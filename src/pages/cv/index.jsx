import React, {useState} from 'react';
import { graphql } from 'gatsby';
import { Waypoint } from 'react-waypoint';
import Seo from '../../components/SEO';
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
import Loading, { LoadingSpinnerContainer } from "../../components/Loading";
import webconfig from '../../../config/website';
import {daysPassed} from '../../utils/datefns'
import { useQuery, gql } from "@apollo/client";
import { GET_EXPERIENCES, GET_ABOUT } from "../../fragments/experiences";

export const educations = [
  {
    image: {
      src: "../images/resume/metu.png",
    },
    link: "http://www.metu.edu.tr/tr",
    name: "Middle East Technical University",
    startdate: "2008",
    enddate: "2012",
    role: "Bachelor's Degree",
  },
];

let DownloadLinkComp = null;

function Experiences({ data }) {
  return data.map((item, i) => (
    <div className="experiences" key={`${i}exps`}>
      <div className="companyLogo">
        <Image
          src={
            process.env.STRAPI_API_URL +
            item.attributes.image?.data?.attributes?.url
          }
        />
      </div>
      <div>
        <div className="companyLink">
          <Link to={item.attributes.projectLink} external>
            {item.attributes.name}
          </Link>
        </div>
        <div className="role">
          <div className="position">{item.attributes.role}</div>
          <div className="date">
            {item.attributes.startdate} -{" "}
            {item.attributes.enddate ? item.attributes.enddate : "Present"}
          </div>
        </div>
        <div className="location">✭ {item.attributes.location}</div>

        {/* {item.attributes.subrole && (
          <div className="subrole">➣ {item.attributes.subrole}</div>
        )} */}

        {item.attributes.content ? (
          <div className="content">
            {item.attributes.content.split("&").map((c, i) => (
              <p key={`${i}content`}>{c}</p>
            ))}
          </div>
        ) : (
          <div className="content">
            <p key={`${i}content`}>{item.attributes.desc}</p>
          </div>
        )}
        <div className="skills">
          <div>Skills:</div> <span>{item.attributes.skills}</span>
        </div>
        {item.attributes.projectLink ? (
          <div className="projectLink">
            <Link to={item.attributes.projectLink}>
              Related Project Link: {item.attributes.projectLink}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  ));
}
function Projects({ data }) {
  return data.map((item, i) => (
    <div className="experiences" key={`${i}exps`}>
      <div className="companyLogo">
        <Image
          src={
            process.env.STRAPI_API_URL +
            item.attributes.image?.data?.attributes?.url
          }
        />
      </div>
      <div>
        <div className="companyLink">
          <Link to={item.attributes.projectLink} external>
            {item.attributes.name}
          </Link>
        </div>
        <div className="role">
          <div className="position">{item.attributes.role}</div>
          <div className="date">
            {item.attributes.startdate} -{" "}
            {item.attributes.enddate ? item.attributes.enddate : "Present"}
          </div>
        </div>
        <div className="location">✭ {item.attributes.location}</div>

        {/* {item.attributes.subrole && (
          <div className="subrole">➣ {item.attributes.subrole}</div>
        )} */}

        {item.attributes.content ? (
          <div className="content">
            {item.attributes.content.split("&").map((c, i) => (
              <p key={`${i}content`}>{c}</p>
            ))}
          </div>
        ) : (
          <div className="content">
            <p key={`${i}content`}>{item.attributes.desc}</p>
          </div>
        )}
        <div className="skills">
          <div>Skills:</div> <span>{item.attributes.skills}</span>
        </div>
        {item.attributes.projectLink ? (
          <div className="projectLink">
            <Link to={item.attributes.projectLink}>
              Related Project Link: {item.attributes.projectLink}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  ));
}

function Resume(props) {
  if (typeof window == "undefined") {
    return <></>;
  } // SSR
  const { loading, error, data: expdata } = useQuery(GET_EXPERIENCES);
  const { data: adata } = useQuery(GET_ABOUT);

  const [menuIcon, setMenuIcon] = useState(false);
  const [downloadModal, setDownloadModal] = useState(false);
  const [componentLoaded, setComponentLoaded] = useState(false);

  let experiences = [];
  let experiencesWork = [];
  let experiencesProject = [];
  if (expdata) {
    experiences = expdata.experiences.data
      .map((s) => {
        return { ...s, startdate: new Date(s.attributes.startdate) };
      })
      .sort((a, b) => {
        return new Date(b.startdate) - new Date(a.startdate);
      });
    experiencesWork = experiences.filter((s) => s.attributes.isWork);
    experiencesProject = experiences.filter((s) => !s.attributes.isWork);
  }

  const { data } = props;
  const { background, avatar } = data;

  const openDownload = async () => {
    setDownloadModal(true);
    if (!componentLoaded) {
      const { DownloadLink } = await import(
        /* webpackChunkName: "cvpdf" */ "../../components/cvpdf/index"
      );
      DownloadLinkComp = DownloadLink;
      setComponentLoaded(true);
    }
  };

  const closeDownloadModal = () => {
    setDownloadModal(false);
  };

  function renderEducation(educations) {
    return educations.map((item, i) => (
      <div className="experiences" key={`${i}exps`}>
        <div className="companyLogo">
          <Image src={item.image.src} />
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
              {item.startdate} - {item.enddate ? item.enddate : "Present"}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  function renderDownloadModal() {
    return (
      <Modal>
        <div className="modalBackground" onClick={closeDownloadModal} />
        <div className="modalContent center bold">
          {componentLoaded && adata && experiencesWork.length > 0 ? (
            <DownloadLinkComp
              educations={educations}
              experiencesWork={experiencesWork}
              experiencesProject={experiencesProject}
              adata={adata}
            />
          ) : (
            "Loading..."
          )}
        </div>
      </Modal>
    );
  }

  if (loading)
    return (
      <Menu showMenu={menuIcon} relative>
        <Background data={background} />
        <div className="absolute">
          <Waypoint
            onEnter={() => setMenuIcon(false)}
            onLeave={() => setMenuIcon(true)}
          />
          <Container>
            <LoadingSpinnerContainer>
              <Loading />
            </LoadingSpinnerContainer>
          </Container>
        </div>
      </Menu>
    );

  return (
    <Menu showMenu={menuIcon} relative>
      <Background data={background} />
      <div className="absolute">
        <Waypoint
          onEnter={() => setMenuIcon(false)}
          onLeave={() => setMenuIcon(true)}
        />
        <Container>
          <Inner>
            <Title>
              <span style={{ marginRight: 20 }} id="PageTitle">
                Résumé
              </span>{" "}
              <Button style={{ fontSize: 13 }} onClick={openDownload}>
                Download Pdf
              </Button>
            </Title>{" "}
            <AboutHero style={{ marginTop: 0 }}>
              <Image
                avatar
                fluid={avatar}
                alt="Hürkan Yakay"
                style={{ width: 100 }}
              />
              <AboutSub>
                <div>Hürkan Yakay</div>
                <div>Senior Software Engineer</div>
              </AboutSub>
            </AboutHero>
            <ResumeSection>
              <h3>About</h3>
              <div>{webconfig.about.desc.replace("#", daysPassed())}</div>
            </ResumeSection>
            <ResumeSection>
              <h3>EXPERIENCES</h3>
              <Experiences data={experiencesWork} />
            </ResumeSection>
            <ResumeSection>
              <h3>PROJECTS</h3>
              <Projects data={experiencesProject} />
            </ResumeSection>
            <ResumeSection>
              <h3>EDUCATION</h3>
              {renderEducation(educations)}
            </ResumeSection>
            <ContactMain style={{ marginTop: "15rem" }} />
          </Inner>
        </Container>
        {downloadModal ? renderDownloadModal() : null}
      </div>
    </Menu>
  );
}


export const query = graphql`
  query Resume {
    background: file(relativePath: { eq: "background.jpg" }) {
      ...BackgroundImageFragment
    }
    avatar: file(relativePath: { eq: "avatar2.jpg" }) {
      ...AvatarFragment
    }
  }
`;
export const Head = () => <Seo title="Resume" />;
export default Resume;
