import { render, screen } from 'test/test-utils';
import { server } from 'test/mocks/server';

import StandardLayout from '../StandardLayout';

describe('StandardLayout', () => {
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
    const { getByTestId } = render(<StandardLayout />);

    await screen.findByTestId('layout-standard');

    expect(getByTestId('layout-standard')).toBeDefined();
  });
});
