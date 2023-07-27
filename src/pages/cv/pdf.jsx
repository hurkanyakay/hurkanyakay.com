import React, {useState, useEffect} from 'react';
import Seo from "../../components/SEO";
import { useQuery, gql } from "@apollo/client";
import { GET_EXPERIENCES, GET_ABOUT } from "../../fragments/experiences";
import {educations} from './index';

let ViewerComp = null;

function Pdf(props) {
  if (typeof window == "undefined") {
    return <></>;
  } // SSR

  const [pdfloaded, setPdfloaded] = useState(false);
  const { loading, error, data: expdata } = useQuery(GET_EXPERIENCES);
  const { data: adata } = useQuery(GET_ABOUT);
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

  useEffect(() => {
    const fetchComp = async () => {
      const { Viewer } = await import(
        /* webpackChunkName: "cvpdf" */ "../../components/cvpdf/index"
      );
      ViewerComp = Viewer;
      setPdfloaded(true);
    };
    fetchComp();
  }, []);

  if (pdfloaded && experiencesWork.length > 0 && adata) {
    return (
      <ViewerComp
        educations={educations}
        experiencesWork={experiencesWork}
        experiencesProject={experiencesProject}
        adata={adata}
      />
    );
  }
  return <div>Loading...</div>;
}

export const Head = () => <Seo title="Pdf" />;
export default Pdf;
