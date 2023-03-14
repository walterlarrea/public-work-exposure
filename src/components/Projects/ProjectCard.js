import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  StyledContainer,
  Card,
  CardImage,
  CardContent,
} from './ProjectCard.style'

const ProjectCard = ({ project }) => {
  const [designImage, setDesignImage] = useState(null)

  useEffect(() => {
    import(`../../${project.image}`)
      .then(image => {
        setDesignImage(image.default)
      })
  }, [project.image])

  return (
    <StyledContainer>
      <Link style={{ textDecoration: 'none' }} to={`/project/${project.id}`}>
        <Card>
          <CardContent>
            <h3>
              {project.name}
            </h3>
            <p>
              {project.description}
            </p>
          </CardContent>
          <CardImage src={designImage} alt={project.name} />
        </Card>
      </Link>
    </StyledContainer >
  )
}

export default ProjectCard