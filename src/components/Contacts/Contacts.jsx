import { ContactsList, ListItem, DeleteBtn, Title } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { selectContacts, selectFilter } from 'redux/selectors';

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    
    const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );

return (
    <>
    <Title>Contacts</Title>
    <ContactsList>
        {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
            <p>
            {contact.name}: {contact.phone}
            </p>
            <DeleteBtn onClick={() => dispatch(deleteContact(contact.id))} type="button">
            Delete
            </DeleteBtn>
        </ListItem>
        ))}
    </ContactsList>
    </>
);
};


export default Contacts;