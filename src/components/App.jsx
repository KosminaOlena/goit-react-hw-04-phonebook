import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import FormContact from './FormContact/FormContact'
import { Container } from './App.styled'
import { ListContacts } from './ListContacts/ListContacts'
import {Filter} from './Filter/Filter'



const App = () => {

  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('listContacts')) || [])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('listContacts', JSON.stringify(contacts))
  },[contacts])

  const deleteContact = (idItem) => {
    setContacts(prevContacts => prevContacts.filter(({id}) => id !== idItem))
  }

  const createContact = (data) => {
    const checkName = contacts.find(({name}) => name.toLowerCase() === data.name.toLowerCase())
    if(checkName){
      alert(`${data.name} is already in contacts`)
      return
    }
    setContacts(prevContacts => [...prevContacts, { ...data, id: nanoid() }])
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const onFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ); 
  }
  
    return(
      <Container>
        <h1>Phonebook</h1>
        <FormContact createContact = {createContact}/>
        <h2>Contacts</h2>
        <Filter filter = {filter} handleFilter = {handleFilter}/>
        <ListContacts contacts = { onFilter() } handleDelete = {deleteContact}/>
      </Container>
    )
  }


export default App