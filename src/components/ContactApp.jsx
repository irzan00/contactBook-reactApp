import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data.js";
import ContactInput from "./ContactInput.jsx";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    };
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onAddEventHandler = this.onAddEventHandler.bind(this);
  }
  onDeleteEventHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  onAddEventHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: "./images/default.jpg",
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="contact-app">
        <ContactInput addContact={this.onAddEventHandler}/>
        <h1>Daftar Kontak</h1>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteEventHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
