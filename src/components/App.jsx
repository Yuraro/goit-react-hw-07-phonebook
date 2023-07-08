import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { WrapperContent } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';

export const App = () => {

  const contacts = useSelector(selectContacts)
  const error = useSelector(selectError)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <WrapperContent>
      <ContactForm />
      {contacts.length > 0 ? (
        <div>
          <Contacts />
          <Filter />
        </div>
      ) : (
        <p>The contact list is empty</p>
      )}
      { !error}
    </WrapperContent>
  );
};
