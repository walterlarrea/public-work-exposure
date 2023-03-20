import {
  StyledMain,
  Container,
  StyledSpan,
  StyledH1,
  StyledH2,
  StyledP
} from './Home.style'

const Home = ({ id }) => (
  <StyledMain id={id}>
    <Container>
      <StyledSpan>Hi there! 👋 My name is</StyledSpan>
      <StyledH1>Walter Larrea</StyledH1>
      <StyledH2>Web development student</StyledH2>
      <StyledP>
        {/*Seeking a job where I can deliver quality work and contribute to the success of the company. */}
        I'm ready to adapt and deliver quality work.
        <br />
        to evolve and build according to the requirements.
        <br />
        <br />
        Passionated for coding & dev.
        <br />
        Now studying Fullstack Web development focused on React.
      </StyledP>
    </Container>
  </StyledMain>
)

export default Home