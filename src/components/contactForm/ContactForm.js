import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={({ target }) => {
          setName(target.value);
        }}
        required
      />

      <input
        type="tel"
        value={phone}
        onChange={({ target }) => {
          setPhone(target.value);
        }}
        // pattern="^[+][0-9]\d{2}-\d{3}-\d{4}$"
        required
      />

      <input
        type="email"
        value={email}
        onChange={({ target }) => {
          setEmail(target.value);
        }}
        required
      />

      <input type="submit" />
    </form>
  );
};
