import React from 'react';
import { render } from '@testing-library/react';
import { CarForm } from './CarForm';

test('renders CarForm correctly', () => {
  const { getByLabelText } = render(<CarForm onSubmit={() => {}} />);

  // Verifica se os campos do formulário estão presentes
  expect(getByLabelText('Modelo:')).toBeTruthy();
  expect(getByLabelText('Marca:')).toBeTruthy();
  expect(getByLabelText('Cor:')).toBeTruthy();
  expect(getByLabelText('Ano:')).toBeTruthy();
});
