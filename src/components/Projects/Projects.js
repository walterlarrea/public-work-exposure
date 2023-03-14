import projectListData from '../../config/projectListJSON.json'

import ProjectCard from "./ProjectCard"
import { StyledH2 } from '.././Main.style'

const Projects = ({ id }) => (
  <section id={id}>
    <StyledH2 id={id}>PROJECTS</StyledH2>

    {projectListData.map((project) =>
      <ProjectCard key={project.id} project={project} />
    )}
  </section>
)

export default Projects