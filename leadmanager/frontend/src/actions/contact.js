import axios from "axios";

export const addContact = (msg) => {
  axios.post("/api/contact/", msg.formData);
};
