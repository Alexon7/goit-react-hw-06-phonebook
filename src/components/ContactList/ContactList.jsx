import { List, Item, Text, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}{' '}
          </Text>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
