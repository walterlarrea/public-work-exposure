import {
  StyledEnvironment,
  StyledContainer,
  CardBody,
  CardImage,
  CardContent,
  CardTitle,
  CardDescriptionText,
  SelectedPlanContainer,
  StyledBold,
  PlanCost,
  ProceedToPaymentButton,
  CancelPaymentButton,
  ChangePlantLink
} from "./OrderSummaryCard.style"

import IconMusic from './img/icon-music.svg'
import ImageHero from './img/illustration-hero.svg'

const OrderSummaryCard = () => {
  return (
    <StyledEnvironment>
      <StyledContainer>
        <CardBody>
          <CardImage src={ImageHero} alt='girl dancing to music' />
          <CardContent>
            <CardTitle>Order Summary</CardTitle>

            <CardDescriptionText>
              You can now listen to millions of songs, audiobooks, and podcasts on any
              device anywhere you like!
            </CardDescriptionText>

            <SelectedPlanContainer>
              <img src={IconMusic} alt='music note icon' />
              <div>
                <StyledBold>
                  Annual Plan
                </StyledBold>
                <PlanCost>
                  $59.99/year
                </PlanCost>
              </div>
              <ChangePlantLink>
                Change
              </ChangePlantLink>
            </SelectedPlanContainer>

            <ProceedToPaymentButton>Proceed to payment</ProceedToPaymentButton>

            <CancelPaymentButton>Cancel order</CancelPaymentButton>

          </CardContent>
        </CardBody>
      </StyledContainer>
    </StyledEnvironment>
  )
}

export default OrderSummaryCard