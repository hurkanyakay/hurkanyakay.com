import React from "react";
import Seo from "../../components/SEO";
import ProjectTemplate from "../../components/ProjectTemplate";
import { GET_EXPERIENCES } from "../../fragments/experiences";
import Loading, { LoadingSpinnerContainer } from "../../components/Loading";
import { useQuery, gql } from "@apollo/client";
import tw, { styled, css } from "twin.macro";
import { navigate } from "gatsby";

const RichContent = styled.div`
  color: #fff;
  margin-bottom: 1rem;
  & td {
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
  }
  & table {
    width: 100%;
  }
  & figure {
    width: 100%;
  }
`;

export default function ProjectTemplates(props) {
  if (typeof window == "undefined") {
    return <></>;
  } // SSR

  const { loading, error, data } = useQuery(GET_EXPERIENCES);
  if (loading)
    return (
      <LoadingSpinnerContainer>
        <Loading />
      </LoadingSpinnerContainer>
    );

   if(data){
      const filtered = data.experiences.data.filter(
        (s) => s.attributes.projectLink == props.uri
      );
      if (filtered.length < 1) {
        navigate("/404");
        return
      }
      const project = {
        id: filtered[0].id,
        imageurl:
          process.env.STRAPI_API_URL +
          filtered[0].attributes.image?.data?.attributes?.url,
        ...filtered[0].attributes,
      };
      return (
        <ProjectTemplate resumeSingle={project}>
          {project.richcontent && (
            <RichContent
              dangerouslySetInnerHTML={{ __html: project.richcontent }}
            />
          )}
        </ProjectTemplate>
      );
   }
}
export const Head = () => <Seo title="Projects" />;
