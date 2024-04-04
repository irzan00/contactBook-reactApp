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
  }
  onDeleteEventHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  render() {
    return (
      <div className="contact-app">
        <ContactInput />
        <h1>Daftar Kontak</h1>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteEventHandler}/>
      </div>
    );
  }
}

export default ContactApp;
