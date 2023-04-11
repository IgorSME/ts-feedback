import * as React from 'react';
import { ISectionProps } from '../../types/appTypes';
import { Container } from './Section.styled';

export const Section:React.FC<ISectionProps> = ({ title, children }) =>{
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}

