import projectListData from '../../config/projectListJSON.json'

import ProjectCard from "../ProjectCard/ProjectCard"
import { StyledSectionH2, StyledSectionHr } from '.././Main.style'

const Projects = ({ id }) => (
  <section id={id}>
    <StyledSectionH2 id={id}>Projects</StyledSectionH2>
    <StyledSectionHr />

    {projectListData.map((project) =>
      <ProjectCard key={project.id} project={project} />
    )}
  </section>
)

export default Projects