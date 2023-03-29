import { Pen, Trash } from '@phosphor-icons/react'
import { IContact } from '../../pages/HomePage/HomePage'
import { ContactCardStyle } from './style'

interface IProps {
  contactsDetails: IContact
  setModalDelete: any
  setContactIdModal: any
}

export const ContactCard = ({ setModalDelete, contactsDetails, setContactIdModal }: IProps) => {
  return (
    <ContactCardStyle>
      <h3>
        <strong>{contactsDetails.name}</strong>
      </h3>
      <p>
        Email: <strong>{contactsDetails.email}</strong>
      </p>
      <p>
        Telefone: <strong>{contactsDetails.phone}</strong>
      </p>
      <p>
        Adicionado em: <strong>{contactsDetails.createdAt}</strong>
      </p>
      <div>
        <Trash
          onClick={() => {
            setModalDelete(true)
            setContactIdModal(contactsDetails.id)
          }}
        />
        <Pen />
      </div>
    </ContactCardStyle>
  )
}
