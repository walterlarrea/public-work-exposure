import { GridContainer, FlexContainer } from './Skills.style'
import { StyledSectionH2, StyledSectionHr } from '../Main.style'

import HtmlLogo from '../../svgs/HtmlLogo'
import CssLogo from '../../svgs/CssLogo'
import BootstrapLogo from '../../svgs/BootstrapLogo'
import JavascriptLogo from '../../svgs/JavascriptLogo'
import ReactLogo from '../../svgs/ReactLogo'
import ReduxLogo from '../../svgs/ReduxLogo'
import NodeLogo from '../../svgs/NodeLogo'
import ExpressLogo from '../../svgs/ExpressLogo'
import MongoDbLogo from '../../svgs/MongoDbLogo'
import MysqlLogo from '../../svgs/MysqlLogo'

const Skills = ({ id }) => (
  <section id={id}>
    <StyledSectionH2>Skills</StyledSectionH2>
    <StyledSectionHr />
    <GridContainer>
      <FlexContainer>
        <div>
          <HtmlLogo />
        </div>
        <p>HTML</p>
      </FlexContainer>
      <FlexContainer>
        <div>
          <CssLogo />
        </div>
        <p>CSS</p>
      </FlexContainer>
      <FlexContainer>
        <div>
          <BootstrapLogo />
        </div>
        <p>Bootstrap</p>
      </FlexContainer>
      <FlexContainer>
        <div>
          <JavascriptLogo />
        </div>
        <p>Javascript</p>
      </FlexContainer>
      <FlexContainer>
        <div>
          <ReactLogo />
        </div>
        <p>React</p>
      </FlexContainer>
      <FlexContainer>
        <div>
          <ReduxLogo />
        </div>
        <p>Redux</p>
      </FlexContainer>
      <FlexContainer>
        <div>
          <NodeLogo />
        </div>
        <p>Node</p>
      </FlexContainer>
      <FlexContainer>
        <div>
          <ExpressLogo />
        </div>
        <p>Express</p>
      </FlexContainer>
      <FlexContainer>
        <div>
          <MongoDbLogo />
        </div>
        <p>MongoDb</p>
      </FlexContainer>
      <FlexContainer>
        <div>
          <MysqlLogo />
        </div>
        <p>MySQL</p>
      </FlexContainer>
    </GridContainer>
  </section>
)


export default Skills