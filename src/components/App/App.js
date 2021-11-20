// import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
// import dataContacts from '../../fileJson/contacts.json';

export default function App() {
  // const [contacts, setContacts] = useState(dataContacts);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const formSubmitHandler = data => {
  //   const allReadyPresentContact = contacts.some(
  //     elem => elem.name.toLowerCase() === data.name.toLowerCase(),
  //   );

  //   if (allReadyPresentContact) {
  //     return alert(`${data.name} is already in contacts.`);
  //   }

  //   setContacts([...contacts, data]);
  // };

  // const handleFilterChange = e => {
  //   setFilter(e.target.value); // сетим локально
  // };

  // const handleFilterContact = () => {
  //   const filterContact = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filterContact),
  //   );
  // };

  // const delContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  // return (
  //   <div className="Container">
  //     <h1>Phonebook</h1>
  //     <ContactForm onSubmit={formSubmitHandler} />
  //     <h2>Contacts</h2>
  //     <Filter filter={filter} onChange={handleFilterChange} />
  //     <ContactList
  //       contacts={handleFilterContact()}
  //       deleteContact={delContact}
  //     />
  //   </div>
  // );

  return (
    <div className="Container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
