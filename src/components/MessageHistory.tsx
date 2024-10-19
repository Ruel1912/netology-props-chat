import React from 'react'
import { Message } from './Message'
import { Response } from './Response'
import { Typing } from './Typing'

export interface IMessageHistory {
  id: string
  from: {
    name: string
  }
  type: 'response' | 'message' | 'typing'
  time: string
  text?: string
}

interface MessageHistoryProps {
  list: IMessageHistory[]
}

export const MessageHistory: React.FC<MessageHistoryProps> = ({
  list = [],
}) => {
  const renderMessage = (message: IMessageHistory) => {
    const components = {
      message: Message,
      response: Response,
      typing: Typing,
    }

    const Component = components[message.type]
    return <Component key={message.id} from={message.from} message={message} />
  }

  return list && <ul>{list.map((message) => renderMessage(message))}</ul>
}
