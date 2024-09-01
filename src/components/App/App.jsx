import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Searchbox from '../SearchBox/SearchBox';

const App = () => (
  <div>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Searchbox />
    <ContactList />
  </div>
);

export default App;