import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/auth";
import { addMessage, getMessages } from "../../actions/chat";

const AdminMessages = ({ chat, users, getMessages, addMessage }) => {
  const [userid, setUserid] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getUsers();
    getMessages();
  }, [getMessages, getUsers]);

  useEffect(() => {
    const interval = setInterval(() => {
      getMessages();
    }, 10000);
    return () => clearInterval(interval);
  }, [getMessages]);

  const onChange = (e) => setMessage(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userid);
    addMessage({ message: message, owner: userid, sender: true });
    setMessage("");
  };

  return (
    <Fragment>
      <h2>Messages</h2>
      <select
        name="owner"
        onChange={(e) => setUserid(e.target.value)}
        defaultValue={""}
      >
        <option value="" disabled hidden>
          Choose a user
        </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.username}
          </option>
        ))}
      </select>
      {chat
        .filter((msg) => msg.owner === parseInt(userid))
        .map((msg) => (
          <p
            className={
              msg.sender ? "flex-row-reverse" : "ms-5 text-danger-emphasis"
            }
            key={msg.id}
          >
            {msg.message}
          </p>
        ))}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            type="text"
            name="message"
            onChange={onChange}
            value={message}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

AdminMessages.propTypes = {
  chat: PropTypes.array.isRequired,
  getMessages: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  addMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  chat: state.chat.chat,
  users: state.users.users,
});

export default connect(mapStateToProps, { getMessages, getUsers, addMessage })(
  AdminMessages
);
