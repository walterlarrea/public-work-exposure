import {
  StyledContainer,
  Card,
  CardImage,
  CardContent,
} from './ProjectCard.style'

import ShowcaseImage from '../../images/projects-designs/order-summary-card.jpg'

const ProjectCard = () => {
  return (
    <StyledContainer>
      <Card>
        <CardContent>
          <h3>
            Card title
          </h3>
          <p>
            Card description in short format to describe de contents
          </p>
        </CardContent>
        <CardImage src={ShowcaseImage} alt='algo' />
      </Card>
    </StyledContainer>
  )
}

export default ProjectCard