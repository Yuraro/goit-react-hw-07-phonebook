import React from 'react';
import { ContactsList, ListItem, DeleteBtn, Title } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operation';
import { selectContacts, selectFilter } from 'redux/selectors';

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
    };

    return (
    <>
        <Title>Contacts</Title>
        <ContactsList>
        {visibleContacts.map((contact) => (
            <ListItem key={contact.id}>
            <p>
                {contact.name}: {contact.phone}
            </p>
            <DeleteBtn onClick={() => handleDelete(contact.id)} type="button">
                Delete
            </DeleteBtn>
            </ListItem>
        ))}
        </ContactsList>
    </>
    );
};

export default Contacts;
