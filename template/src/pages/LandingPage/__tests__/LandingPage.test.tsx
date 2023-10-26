import { render, screen } from 'test/test-utils';
import { server } from 'test/mocks/server';

import LandingPage from '../LandingPage';

describe('LandingPage', () => {
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
    const { getByTestId } = render(<LandingPage />);

    await screen.findByTestId('page-landing');

    expect(getByTestId('page-landing')).toBeDefined();
  });
});
