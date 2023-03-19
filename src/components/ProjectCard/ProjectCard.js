import { useEffect, useState } from 'react'

import {
  Card,
  CardImage,
  CardContent,
  StyledContentHr,
  PrimaryLink,
  SecondaryLink
} from './ProjectCard.style'
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'

const ProjectCard = ({ project }) => {
  const [designImage, setDesignImage] = useState(null)

  useEffect(() => {
    import(`../../${project.image}`)
      .then(image => {
        setDesignImage(image.default)
      })
  }, [project.image])



  return (
    // <StyledContainer>
    <Card>
      <CardContent>
        <div>
          <h3>
            {project.name}
          </h3>
          <StyledContentHr />
        </div>

        <p>
          {project.description}
          <br />
          {project.referrals.map(ref =>
            <a target='_blank' rel='noreferrer' href={ref.url}>
              {ref.name} <BsBoxArrowUpRight />
            </a>
          )}
        </p>

        <div>
          <PrimaryLink target='_blank' rel='noreferrer' href={project.url}>
            <BsBoxArrowUpRight /> <span>Live</span>
          </PrimaryLink>

          {project.sourceUrl
            ? <SecondaryLink target='_blank' rel='noreferrer' href={project.sourceUrl}>
              <BsGithub /> Source
            </SecondaryLink>
            : ''
          }
        </div>
      </CardContent>
      <CardImage src={designImage} alt={project.name} />
    </Card>
    // </StyledContainer >
  )
}

export default ProjectCard