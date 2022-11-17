import ProjectDetails from 'components/projects/project/project-details';
import { ParsedUrlQuery } from 'querystring';
import type { GetServerSideProps, NextPageContext } from 'next';
import type { ProjectsKeys } from 'constants/project';

interface Params extends GetServerSideProps {
  query: ParsedUrlQuery;
}

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      query: context.query,
    },
  };
}

export default function ProjectDetailPage(params: Params) {
  return (
    <ProjectDetails project={params.query['project-details'] as ProjectsKeys} />
  );
}
