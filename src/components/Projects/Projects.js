import projectListData from '../../config/projectListJSON.json'

import ProjectCard from "./ProjectCard"
import { StyledH2, StyledHr } from '.././Main.style'

const Projects = ({ id }) => (
  <section id={id}>
    <StyledH2 id={id}>Projects</StyledH2>
    <StyledHr />

    {projectListData.map((project) =>
      <ProjectCard key={project.id} project={project} />
    )}
  </section>
)

export default Projects