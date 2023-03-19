import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Card,
  CardImage,
  CardTitle,
} from './SingleComponentProjectCard.style'
import { BsBoxArrowUpRight } from 'react-icons/bs'

const SingleComponentProjectCard = ({ project }) => {
  const [designImage, setDesignImage] = useState(null)

  useEffect(() => {
    import(`../../${project.image}`)
      .then(image => {
        setDesignImage(image.default)
      })
  }, [project.image])

  return (
    <Link style={{ textDecoration: 'none' }} to={`/projects/${project.id}`}>
      <Card>
        <CardImage src={designImage} alt={project.name} />
        <CardTitle>
          <h3>
            {project.name}
          </h3>
          <BsBoxArrowUpRight />
        </CardTitle>
      </Card>
    </Link>
  )
}

export default SingleComponentProjectCard