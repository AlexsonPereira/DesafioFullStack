import { Pen, Trash } from "@phosphor-icons/react"
import { ContactCardStyle } from "./style"

export const ContactCard = ({setModalDelete}:any) => {
   return (
      <ContactCardStyle>
         <h3><strong>Nome</strong></h3>
         <p>Email: <strong>email</strong></p>
         <p>Telefone: <strong>Telefone</strong></p>
         <p>Adicionado em: <strong>email</strong></p>
         <div>
            <Trash onClick={()=> setModalDelete(true)}/>
            <Pen/>
         </div>
      </ContactCardStyle>
   )
}