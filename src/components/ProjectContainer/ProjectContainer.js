import React, { lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'

import HeaderLink from '../HeaderLink/HeaderLink'
import { HeaderLinkContainer } from './ProjectContainer.style'
import { BsBoxArrowInLeft } from 'react-icons/bs'

const ProjectContainer = ({ project }) => {
  const navigate = useNavigate()
  const ProjectComponent = lazy(() => import(`../../portfolio-project-components/${project.path}`))

  const handleNavigateBack = () => {
    navigate(-1)
  }

  return (
    <>
      <HeaderLinkContainer onClick={handleNavigateBack}>
        <HeaderLink>
          <BsBoxArrowInLeft />
        </HeaderLink>
      </HeaderLinkContainer>
      {project
        ? <Suspense fallback={<p>loading</p>}>
          <ProjectComponent />
        </Suspense>
        : <h2>Error</h2>
      }
    </>
  )
}

export default ProjectContainer