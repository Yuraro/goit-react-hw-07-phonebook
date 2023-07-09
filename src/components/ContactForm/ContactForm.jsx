import React from 'react';
import { Input, AddButton, Form, Title } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operation';
import { selectContacts } from 'redux/selectors';
import Notiflix from 'notiflix';

const ContactForm = () => {

    const dispatch = useDispatch();
    let contacts = useSelector(selectContacts);

    const handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = e.target;
    const contact = { name: name.value, phone: phone.value };

    if (contacts.find(existingContact => existingContact.name === name.value)) {
        Notiflix.Notify.failure(`${contact.name} is already in your contacts`);
    } else {
        dispatch(addContact(contact));
    }
    e.target.reset();
    };

    return (
    <>
        <Title>Phonebook</Title>
        <Form onSubmit={handleSubmit}>
        <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
        />
        <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Number"
        />
        <AddButton type="submit">Add contacts</AddButton>
        </Form>
    </>
    );
};

export default ContactForm;