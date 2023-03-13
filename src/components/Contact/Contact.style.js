import styled from 'styled-components'

export const ContactIconsContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  
  svg {
    margin: 0 30px;
    display: inline-block;
    height: auto;
    width: 60px;
    color: ${({ theme }) => theme[theme.selected].textOnBackground};
  }
`