import { ModalBGStyle } from "./style"
import { ReactNode } from "react"

interface IProps {
   children : ReactNode
}

export const ModalBackground = ({children}:IProps) => {
   return (
      <ModalBGStyle>
         {children}
      </ModalBGStyle>
   )
}
