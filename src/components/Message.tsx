import React from 'react'
import { IMessageHistory } from './MessageHistory'

interface MessageProps {
  from: {
    name: string
  }
  message: IMessageHistory
}

export const Message: React.FC<MessageProps> = ({ from, message }) => {
  return (
    <li key={message.id}>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  )
}
