import { render } from '@testing-library/react';

import Footer from '../Footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('footer')).toBeDefined();
  });
});
