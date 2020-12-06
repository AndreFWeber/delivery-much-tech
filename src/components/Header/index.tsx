import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { HeaderTitle, HeaderSubtitle, Container } from './styles';

type CardProps = {
  title: string;
  subtitle: string;
  goBackLink: string;
};

export const Header: React.FC<CardProps> = ({
  title,
  subtitle,
  goBackLink,
}: CardProps) => {
  return (
    <Container>
      {goBackLink && (
        <Link to={goBackLink}>
          <FiChevronLeft />
          Back
        </Link>
      )}
      <HeaderTitle>{title}</HeaderTitle>
      {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
    </Container>
  );
};
