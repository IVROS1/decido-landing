import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders headline text', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
      'Du fattar 35 viktiga beslut idag. Decido ger dig rätt fokus på varje ett.'
    );
  });

  it('renders CTA with correct href and text', () => {
    render(<Hero />);
    const cta = screen.getByRole('link', { name: /Prova gratis/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', 'https://decido.systems');
  });
});
