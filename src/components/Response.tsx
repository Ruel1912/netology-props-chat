import React from 'react'
import { IMessageHistory } from './MessageHistory'

interface ResponseProps {
  from: {
    name: string
  }
  message: IMessageHistory
}

export const Response: React.FC<ResponseProps> = ({ from, message }) => {
  return (
    <li key={message.id} className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">
          {from.name} <i className="fa fa-circle me"></i>
        </span>
      </div>
      <div className="message other-message float-right">{message.text}</div>
    </li>
  )
}
