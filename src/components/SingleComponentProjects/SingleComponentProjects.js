import projectListData from '../../config/projectListJSON.json'
import SingleComponentProjectCard from "../SingleComponentProjectCard/SingleComponentProjectCard"

import { StyledSectionH3, StyledSecondaryHr } from '.././Main.style'
import { GridContainer } from './SingleComponentProjects.style'

const SingleComponentProjects = () => (
  <section>
    <StyledSectionH3>Single component projects</StyledSectionH3>
    <StyledSecondaryHr />

    <GridContainer>
      {projectListData.map((project) => project.type === 'small'
        ? <article key={project.id}><SingleComponentProjectCard project={project} /></article>
        : false
      )}
    </GridContainer>
  </section>
)

export default SingleComponentProjects