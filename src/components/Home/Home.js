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
      <StyledH2>Junior web development</StyledH2>
      <StyledP>
        I'm ready to adapt and evolve,
        <br />
        commited to build and deliver.
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