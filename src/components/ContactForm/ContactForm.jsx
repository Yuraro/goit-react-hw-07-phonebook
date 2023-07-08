import { Input, AddButton, Form, Title } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operation';
import { selectContacts } from 'redux/selectors';

const ContactForm = ({ createContact }) => {

    const contacts = useSelector(selectContacts);

    const dispatch = useDispatch();

    const handleSubmit = e => {
    e.preventDefault();

    const contact = {
        name: e.target.name.value,
        phone: e.target.number.value,
    };

    if (contacts.find(contact => contact.name === e.target.name.value)) {
        alert('This contact already in your list');
        return;
    }

    dispatch(addContact(contact));

    e.currentTarget.reset();
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