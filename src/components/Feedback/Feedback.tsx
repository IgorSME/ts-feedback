import * as React from 'react';
import { IFeedbackProps } from '../../types/appTypes';
import { Button } from './Feedback.styled';

export const FeedbackOptions: React.FC<IFeedbackProps> = ({ options, onLeaveFeedback })=> {
  return (
    <>
    {options.map(option => (
    <Button key={option} type="button" onClick={onLeaveFeedback} name={option}>
      {option}
    </Button>
  ))}
    </>
  )
}
