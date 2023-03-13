import FormField from "./FormField"
import { StyledContactForm, FormButtons, StyledH3 } from "./ContactForm.style"

const ContactForm = () => {
  return (
    <>
      <StyledH3>Send me an e-mail:</StyledH3>
      <StyledContactForm action="mailto:walterlarrea@live.com" method="post" enctype="text/plain">

        <FormField type='text' name='name' placeHolder='Name or alias' />
        <FormField type='text' name='mail' placeHolder='E-mail' />
        <FormField type='text' name='comment' placeHolder='Comments' />

        <FormButtons>
          <button id='send' type="submit">Send</button>
          <button id='reset' type="reset">Reset</button>
        </FormButtons>

      </StyledContactForm>
    </>
  )
}

export default ContactForm