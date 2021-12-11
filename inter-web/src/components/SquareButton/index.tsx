import { ButtonHTMLAttributes } from "react"

import { ButtonContainer } from "./styles"

const SquareButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ButtonContainer {...props}>
      {props.children}
    </ButtonContainer>
  )
}
export default SquareButton