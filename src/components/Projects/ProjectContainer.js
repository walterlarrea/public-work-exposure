import React, { lazy, Suspense } from 'react';

const ProjectContainer = ({ project }) => {
  const ProjectComponent = lazy(() => import(`../../project-components/${project.path}`))

  if (!project) {
    return null
  }

  return (
    <>
      <Suspense fallback={<p>loading</p>}>
        <ProjectComponent />
      </Suspense>
    </>
  )
}

export default ProjectContainer