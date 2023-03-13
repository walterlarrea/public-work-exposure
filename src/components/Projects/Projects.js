import OrderSummaryCard from "../../project-components/OrderSummaryCard"
import ProjectCard from "./ProjectCard"
import { StyledH2 } from '.././Main.style'

const Projects = ({ id }) => (
  <section id={id}>
    <StyledH2 id={id}>PROJECTS</StyledH2>
    {/* <OrderSummaryCard /> */}
    <ProjectCard />
  </section>
)

export default Projects