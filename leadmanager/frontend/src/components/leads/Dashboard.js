import React, { Fragment } from 'react';
import Messages from '../messages/Messages';
import NewMessage from '../messages/NewMessage';

export default function dashboard() {
  return (
    <Fragment>
      <Messages />
      <NewMessage />
    </Fragment>
  )
}
