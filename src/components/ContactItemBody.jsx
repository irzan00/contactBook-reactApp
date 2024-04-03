import React from "react";

function ContactItemBody({ name, tag }) {
  return (
    <div className="contact-item__body">
      <h3 className="contact-item__name">{name}</h3>
      <p className="contanct-item__username">@{tag}</p>
    </div>
  );
}

export default ContactItemBody;
