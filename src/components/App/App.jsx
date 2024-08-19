import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Searchbox from '../SearchBox/SearchBox';

export default function App() {
  return (
  <div>
    <h1>Phonebook</h1>
    <ContactForm />
    <Searchbox />
    <ContactList />
  </div>
  );
};
