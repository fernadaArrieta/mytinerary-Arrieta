import { render, screen } from '@testing-library/react';

test('Vitest is configured and can render JSX', () => {
  render(<div>Vitest is configured</div>);

  const element = screen.getByText(/Vitest is configured/i);
  expect(element).toBeInTheDocument();
});
