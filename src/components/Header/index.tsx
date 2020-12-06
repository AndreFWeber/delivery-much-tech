import React from 'react';
import { HeaderTitle, HeaderSubtitle } from './styles';

type CardProps = {
  title: string;
  subtitle: string;
};

export const Header: React.FC<CardProps> = ({ title, subtitle }: CardProps) => {
  return (
    <>
      <HeaderTitle>{title}</HeaderTitle>
      {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
    </>
  );
};
