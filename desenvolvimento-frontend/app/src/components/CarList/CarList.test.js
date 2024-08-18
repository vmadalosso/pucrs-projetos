import React from 'react';
import { render } from '@testing-library/react';
import { CarList } from './CarList';

test('renders CarList correctly', () => {
  const { queryByText } = render(<CarList />);
  const titleElement = queryByText('Lista de Carros');
  expect(titleElement).toBeTruthy(); // Verifica se o elemento existe
});
