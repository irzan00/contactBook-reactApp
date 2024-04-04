import React from "react";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tag: "",
    };
    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    this.onTagChangeHandler = this.onTagChangeHandler.bind(this);
    this.onSubmitChanceHandler = this.onSubmitChanceHandler.bind(this);
  }

  onNameChangeHandler = (event) => {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  };

  onTagChangeHandler = (event) => {
    this.setState(() => {
      return {
        tag: event.target.value,
      };
    });
  };

  onSubmitChanceHandler = (event) => {
    event.preventDefault();
    this.props.addContact(this.state);

    const message = `
        "Berhasilkan Menambahkan Kontak!",
        ${this.state.name},
        ${this.state.tag},
    `;
    alert(message);
  };

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitChanceHandler}>
        <input
          type="text"
          placeholder="Tuliskan Nama"
          value={this.state.name}
          onChange={this.onNameChangeHandler}
        />
        <input
          type="text"
          placeholder="Tuliskan @username"
          value={this.state.tag}
          onChange={this.onTagChangeHandler}
        />
        <button type="submit">Tambah Kontak</button>
      </form>
    );
  }
}

export default ContactInput;
