import React from 'react'
import { IMessageHistory } from './MessageHistory'

interface TypingProps {
  from: {
    name: string
  }
  message: IMessageHistory
}

export const Typing: React.FC<TypingProps> = ({ from, message }) => {
  return (
    <li key={message.id}>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div>
        <i className="fa fa-circle online"></i>
        <i style={{ opacity: 0.75 }} className="fa fa-circle online"></i>
        <i style={{ opacity: 0.5 }} className="fa fa-circle online"></i>
      </div>
    </li>
  )
}
