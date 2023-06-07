// import { useState, useEffect } from 'react';

import { GlobalStyleComponent } from '../../styles/GlobalStyles';

// import { nanoid } from 'nanoid';

import { ContactForm } from '../ContactForm/ContactForm';

import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { MainTitle, Title, Container } from './App.styled';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const onFormSubmit = (name, number) => {
  //   const contact = {
  //     name,
  //     number,
  //     id: nanoid(),
  //   };
  //   const isAtList = contacts.find(contact => contact.name === name);
  //   if (isAtList) {
  //     alert('Already in list');
  //     return;
  //   }

  //   setContacts([...contacts, contact]);
  // };

  // const deleteContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  // const onInputChange = e => {
  //   const { value } = e.target;
  //   setFilter(value);
  // };

  // const filteredContacts = () =>
  //   contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  // const filteredContact = filteredContacts();
  return (
    <Container>
      <MainTitle>Phonebook 📱</MainTitle>
      <ContactForm />
      <Title>Contacts 📑</Title>
      <Filter />
      <ContactList />
      <GlobalStyleComponent />
    </Container>
  );
};
