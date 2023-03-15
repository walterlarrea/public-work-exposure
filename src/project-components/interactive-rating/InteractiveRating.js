import { createRef, useState } from 'react'
import {
  StyledEnvironment,
  StyledContainer,
  StyledPrompt,
  StyledPromptFlex,
  HighlightP,
  CircleContainer,
  SelectiveCicleContainer,
  StyledH2,
  StyledP,
  RatingSelectorsContainer,
  SubmitButton
} from './InteractiveRating.style'

import starIcon from './img/icon-star.svg'
import thankYouImage from './img/illustration-thank-you.svg'

const InteractiveRating = () => {
  const [currentRating, setcurrentRating] = useState(undefined)
  const [submitted, setSubmitted] = useState(false)

  const ratingOptionCount = 5
  let elRefs = Array(ratingOptionCount)
    .fill()
    .map((_) => createRef())

  const handleRateChange = (event, rating) => {
    setcurrentRating(rating)
    elRefs.map((el, i) => elRefs[i].current.classList.remove('selected'))
    event.target.classList.add('selected')
  }

  const handleSubmit = () => {
    if (currentRating) {
      setSubmitted(true)
    }
  }

  return (
    <StyledEnvironment>
      <StyledContainer>
        {submitted
          ?
          <StyledPromptFlex>
            <img src={thankYouImage} alt='busy phone, thanks you illustration' />

            <HighlightP>You selected {currentRating} out of 5</HighlightP>

            <StyledH2>Thank you!</StyledH2>
            <StyledP>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</StyledP>
          </StyledPromptFlex>
          :
          <StyledPrompt>
            <CircleContainer>
              <img src={starIcon} alt='Star rating icon' />
            </CircleContainer>

            <StyledH2>How did we do?</StyledH2>
            <br />
            <StyledP>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</StyledP>

            <RatingSelectorsContainer>
              {elRefs.map((el, i) => (
                <SelectiveCicleContainer key={i} ref={elRefs[i]} onClick={(e) => handleRateChange(e, i + 1)} >{i + 1}</SelectiveCicleContainer>
              ))}
            </RatingSelectorsContainer>

            <SubmitButton onClick={handleSubmit}>SUBMIT</SubmitButton>
          </StyledPrompt>
        }
      </StyledContainer>
    </StyledEnvironment>
  )
}

export default InteractiveRating