import projectListData from '../../config/projectListJSON.json'
import ProjectCard from '../ProjectCard/ProjectCard'

import { StyledSectionH2, StyledSectionHr } from '.././Main.style'
import { FlexContainer } from './Projects.style'

const Projects = ({ id }) => (
  <section id={id}>
    <StyledSectionH2>Projects</StyledSectionH2>
    <StyledSectionHr />

    <FlexContainer>
      {projectListData.map((project) => project.type === 'full'
        ? <ProjectCard key={project.id} project={project} />
        : false
      )}
    </FlexContainer>
  </section>
)

export default Projects