import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('App', () => {
  it('should render without crashing', () => {
    render(<Home />);
    const text = screen.getByText('Welcome to my app!');
    expect(text).toBeInTheDocument();
  });
});
