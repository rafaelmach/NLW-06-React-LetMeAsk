import { ButtonHTMLAttributes } from "react"

import "../styles/button.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}
// Abaixo na DESESTRUTURAÇÃO ... { isOutlined, ...props } ... Todo o resto
// que não for a propriedade isOutlined, ou seja, todas as outras propriedades, vou colocar
// dentro de uma variável chamada props ----- ...props é um Rest Operator no JavaScript, eu estou
// pegando o resto.

const Button = ({ isOutlined = false, ...props }: ButtonProps) => {
  return (
    <button className={`button ${isOutlined ? "outlined" : ""}`} {...props} />
  )
}

export default Button
