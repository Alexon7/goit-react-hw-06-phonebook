// import { useState } from 'react';
import { Wrapper, Input, Label, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';

export const ContactForm = ({ onFormSubmit }) => {
  // const [name, setName] = useState('');
  const { name } = useSelector(state => state);
  // const [number, setNumber] = useState('');
  const { number } = useSelector(state => state);
  const dispatch = useDispatch();

  const inputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      dispatch(value);
    } else {
      dispatch(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit(name, number);
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
