import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders hero content', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /Gilles S\. Biagomba/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Security Engineer/i).length).toBeGreaterThan(0);
  });
});
