import { StyledFormField } from "./FormField.style"

const FormField = ({ type, name, placeHolder }) => {
  return (
    <StyledFormField>
      <input id={name} type={type} name={name} />
      <label htmlFor={name} >{placeHolder}</label>
    </StyledFormField>
  )
}

export default FormField