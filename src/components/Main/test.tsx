import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ReactAvancado from './index';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<ReactAvancado />);

    expect(screen.getByRole('heading', { name: /react avançado/i }))
      .toBeInTheDocument;

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<ReactAvancado />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
