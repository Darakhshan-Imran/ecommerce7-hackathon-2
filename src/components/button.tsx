
import { Button } from "./ui/button"
import { ReactNode } from "react"


interface ButtonComponentProps {
  children: ReactNode;
  className?: string;
}

const ButtonComponent = ({ children, className }: ButtonComponentProps) => {
  return (
    <Button className={className}>
     {children}
    </Button>
  )
}

export default ButtonComponent
