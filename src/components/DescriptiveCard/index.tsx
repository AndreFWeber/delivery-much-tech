/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';
import { Card } from './styles';

type CardProps = {
  name: string;
  description: string;
};

export const DescriptiveCard: React.FC<CardProps> = ({
  name,
  description,
  children,
}) => {
  return (
    <Card>
      <h2>{name}</h2>
      <p>{description}</p>
      {children}
    </Card>
  );
};
