import React, { lazy, Suspense } from 'react';
import HomeLink from '../HomeLink/HomeLink';

const ProjectContainer = ({ project }) => {
  const ProjectComponent = lazy(() => import(`../../project-components/${project.path}`))

  if (!project) {
    return null
  }

  return (
    <>
      <HomeLink />
      <Suspense fallback={<p>loading</p>}>
        <ProjectComponent />
      </Suspense>
    </>
  )
}

export default ProjectContainer