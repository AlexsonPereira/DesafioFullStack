import { ModalBackground } from "../ModalBackground/ModalBackground"

export const AddContactModal = ({setModalAdd}:any) => {
   return (
      <ModalBackground>
         <form className="ModalAddContact">
               <div>
                  <h2>Adicionar contato</h2>
                  <p onClick={()=>setModalAdd(false)}>X</p>
               </div>
               <label htmlFor="">Nome</label>
               <input type="text"/>
               <label htmlFor="">Email</label>
               <input type="text"/>
               <label htmlFor="">Telefone</label>
               <input type="text"/>
               <div>
                  <button type="submit">Cadastrar</button>
               </div>
            </form>
      </ModalBackground>
   )
}