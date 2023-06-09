import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice';
import { Wrapper, Input, Label, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  // let name = '';
  // let number = '';
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = event => {
    if (event.target.name === 'name') {
      // name = event.target.value;
      setName(event.target.value);
    }
    if (event.target.name === 'number') {
      // number = event.target.value;
      setNumber(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '') {
      alert('Please enter a name');
      return;
    }
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    const isAtList = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isAtList) {
      alert('Already in list');
      return;
    }
    dispatch(addContact(contact));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={inputChange}
        />
      </Wrapper>
      <Wrapper>
        <Label htmlFor="number">Phone number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={inputChange}
        />
      </Wrapper>
      <Button type="submit"> Create </Button>
    </form>
  );
};
