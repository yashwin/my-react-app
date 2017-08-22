import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!!</h1>
      {unreadMessages.length > 0 &&
        <div>
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
          <ul>
            <li>
              {unreadMessages}
            </li>
          </ul>
        </div>
      }
    </div>
  );
}

const messages = ['React', 'Re:React', 'Re:Re:React'];

ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
