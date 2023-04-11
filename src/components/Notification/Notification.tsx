import * as React from 'react';
import { INotification } from '../../types/appTypes';
import { Message } from './Notification.styled';

export const Notification:React.FC<INotification> = ({ message }) =>{
  return <Message>{message}</Message>;
}

