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
        placeholder="Name"
        onChange={({ target }) => {
          setName(target.value);
        }}
        required
      />

      <input
        type="tel"
        placeholder="Mobile Number (+63)"
        value={phone}
        onChange={({ target }) => {
          setPhone(target.value);
        }}
        pattern="[0-9]${10}"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={({ target }) => {
          setEmail(target.value);
        }}
        required
      />

      <input type="submit" className="submit-btn" />
    </form>
  );
};
