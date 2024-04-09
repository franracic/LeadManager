import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../actions/chat';

const NewMessage = ({ addMessage }) => {
  const [message, setMessage] = useState('');

  const onChange = (e) => setMessage(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    addMessage({ message });
    setMessage('');
  };

  return (
    <div className="card card-body mt-4 mb-4">
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
    </div>
  );
};

NewMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default connect(null, { addMessage })(NewMessage);
