import React from "react";

export const ContactPicker = ({ value, contacts, onChange, name }) => {
  return (
    <select value={value} name={name} onChange={onChange}>
      <option value="" key={-1}>
        No Contact Selected
      </option>
      {contacts.map((contact, index) => {
        return (
          <option value={contact.name} key={index}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
