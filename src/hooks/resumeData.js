import { useStaticQuery, graphql } from 'gatsby';

export function useResume(path) {
  const data = useStaticQuery(graphql`
    query {
      allResumeJson{
        edges {
          ...AllResumeFragment
        }
      }
    }
  `);

  const pdata = data.allResumeJson.edges[0].node.experience.filter(s=> s.projectLink == path)
  if(pdata.length > 0){
    return {
      pdata:pdata[0]
    }
  }else{
    return {
      pdata: null
    }
  }
}

export const withResumeHOC = (AnyOtherComponent) => (props) => {
  const { path } = props
  const { pdata } = useResume(path);

  return <AnyOtherComponent {...props} resumeSingle={pdata} />;
};

export default withResumeHOC 