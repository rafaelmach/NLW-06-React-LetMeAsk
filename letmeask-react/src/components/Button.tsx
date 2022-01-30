import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: ButtonProps) => {
  return (
  <button className="button" {...props} />
  )
}

export default Button
