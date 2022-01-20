import React from 'react';
import { graphql } from 'gatsby';

let ViewerComp = null;
class Pdf extends React.Component {
  state = {
    pdfloaded: false,
  };

  async componentDidMount() {
    const { Viewer } = await import(/* webpackChunkName: "cvpdf" */ '../../components/cvpdf/index');
    ViewerComp = Viewer;
    this.setState({
      pdfloaded: true,
    });
  }

  render() {
    const { data } = this.props;
    const { avatar, projects, allResumeJson } = data;

    if (this.state.pdfloaded) {
      return <ViewerComp avatar={avatar} projects={projects} resumeData={allResumeJson.edges[0].node}/>;
    }
    return <div>Loading...</div>;
  }
}

export const query = graphql`
  query Pdf {
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

export default Pdf;
