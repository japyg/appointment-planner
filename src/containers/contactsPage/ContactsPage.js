import React, { useState, useEffect } from "react";

export const ContactsPage = (props) => {
  const contacts = props.contacts;
  const addContact = props.addContact;

  //local states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  //duplicate state
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    } else {
      return;
    }
  };

  useEffect(() => {});

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
