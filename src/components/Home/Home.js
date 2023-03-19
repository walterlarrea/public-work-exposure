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
        Passionated for coding & dev.
        <br />
        Now studying Fullstack Web development focused on React.
        {/* I have bases on strong typed languages like C, Java and vb.NET. */}
      </StyledP>
    </Container>
  </StyledMain>
)

export default Home