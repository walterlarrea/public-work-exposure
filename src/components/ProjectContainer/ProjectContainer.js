import React, { lazy, Suspense } from 'react'
import HeaderLink from '../HeaderLink/HeaderLink'
import { HeaderLinkContainer } from './ProjectContainer.style'
import { BsBoxArrowInLeft } from 'react-icons/bs'

const ProjectContainer = ({ project }) => {
  const ProjectComponent = lazy(() => import(`../../project-components/${project.path}`))

  if (!project) {
    return null
  }

  return (
    <>
      <HeaderLinkContainer>
        <HeaderLink>
          <BsBoxArrowInLeft />
        </HeaderLink>
      </HeaderLinkContainer>
      <Suspense fallback={<p>loading</p>}>
        <ProjectComponent />
      </Suspense>
    </>
  )
}

export default ProjectContainer