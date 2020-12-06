import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styles';

type CardProps = {
  item: string;
  data: [
    {
      name: string;
      url: string;
    },
  ];
};
export const Pokeball: React.FC<CardProps> = ({ data, item }: CardProps) => {
  return (
    <Item>
      {data &&
        data.map(value => {
          const id = value.url.split(`${item}/`)[1];
          return (
            <Link to={`/${item}/${id}`}>
              <strong>{value.name}</strong>
            </Link>
          );
        })}
    </Item>
  );
};
