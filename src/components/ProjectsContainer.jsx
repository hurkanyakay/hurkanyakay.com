
import React from "react";
import {
  ProjectsWrapper,
} from "./LayoutComponents";
import ProjectCards from "./ProjectCards";
import Loading, { LoadingSpinnerContainer } from "./Loading";
import { useQuery, gql } from "@apollo/client";
import { GET_EXPERIENCES } from "../fragments/experiences";

export default function ProjectsW(props) {
  const { loading, error, data } = useQuery(GET_EXPERIENCES);
  let list = null;
  if (data) {
    const flat = data.experiences.data.map((s) => {
      return {
        id: s.id,
        imageurl:
          process.env.STRAPI_API_URL +
          s.attributes.image?.data?.attributes?.url,
        ...s.attributes,
      };
    });
    const sorted = flat
      // .filter((s) => s.isWork)
      .map((s) => {
        return { ...s, startdate: new Date(s.startdate) };
      })
      .sort((a, b) => {
        return new Date(b.startdate) - new Date(a.startdate);
      });
    list = sorted;
    if (!props.clean) {
      list = sorted.slice(0, 4);
    }
  }
  if (loading)
    return (
      <LoadingSpinnerContainer>
        <Loading />
      </LoadingSpinnerContainer>
    );
  return (
    <ProjectsWrapper id="ProjectsWrapper">
      <ProjectCards clean={props.clean} projects={list} />
    </ProjectsWrapper>
  );
}
