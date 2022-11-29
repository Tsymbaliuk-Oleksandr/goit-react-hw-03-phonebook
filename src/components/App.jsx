import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Box } from "./Box";
import { ContactList } from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleContactSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      return { contacts: [...contacts, newContact] };
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  checkDuplicates = (name) => {
    const { contacts } = this.state;
    const allContactNames = contacts.map((contact) => contact.name);

    if (allContactNames.includes(name)) {
      alert(`${name} is already in contacts.`);
      return true;
    }
  };

  deleteContact = (id) => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter((contact) => contact.id !== id) };
    });
  };

  render() {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" p={5}>
        <h1>Phonebook</h1>
        <Box
          width="300px"
          textAlign="center"
          border="normal"
          borderColor="accent"
          borderRadius="normal"
          p={4}
        >
          <ContactForm
            onSubmit={this.handleContactSubmit}
            checkDuplicates={this.checkDuplicates}
          />
        </Box>
        <Box width="300px">
          <h2>Contacts</h2>
          <Filter onChange={this.handleFilter} />
          <ContactList
            values={this.filterContacts()}
            handleDelete={this.deleteContact}
          />
        </Box>
      </Box>
    );
  }
}

export default App;
