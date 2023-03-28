import { Container } from '../../components/container'
import { HomePageStyle } from './style'
import { Trash, Pen } from '@phosphor-icons/react'
import { ContactCard } from '../../components/ContactCard/ContactCard'
import { ModalBackground } from '../../components/ModalBackground/ModalBackground'
import { useState } from 'react'
import { AddContactModal } from '../../components/Modals/AddContact'
import { DeleteContactModal } from '../../components/Modals/DeleteContact'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const [ModalAdd, setModalAdd] = useState(false)
  const [ModalDelete, setModalDelete] = useState(false)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <HomePageStyle>
      <div className="HeaderBg">
        <Container>
          <div className="Header">
            <h3>Nome de Usuario</h3>
            <h3 id="ExitBtn" onClick={logout}>
              Sair
            </h3>
          </div>
        </Container>
      </div>
      <Container>
        <div className="HeaderContent">
          <h2>Meus Contatos</h2>
          <button onClick={() => setModalAdd(true)}>Add Contato+</button>
        </div>
        <div>
          <ul className="ContactList">
            <ContactCard setModalDelete={setModalDelete} />
          </ul>
        </div>
      </Container>
      {ModalAdd && <AddContactModal setModalAdd={setModalAdd} />}
      {ModalDelete && <DeleteContactModal setModalDelete={setModalDelete} />}
    </HomePageStyle>
  )
}
