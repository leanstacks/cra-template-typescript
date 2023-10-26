import { render, screen } from 'test/test-utils';
import { server } from 'test/mocks/server';

import Theme from '../Theme';

describe('Theme', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should render successfully', async () => {
    const { getByTestId } = render(<Theme />);

    await screen.findByTestId('theme');

    expect(getByTestId('theme')).toBeDefined();
  });

  it('should have default theme', async () => {
    const { getByTestId } = render(<Theme />);

    await screen.findByTestId('theme');

    expect(getByTestId('theme').classList).toContain('dark');
  });
});
