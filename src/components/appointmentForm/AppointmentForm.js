import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          min={getTodayString()}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <ContactPicker
          contacts={contacts}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
