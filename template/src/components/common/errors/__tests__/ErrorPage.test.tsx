import { render, screen } from 'test/test-utils';

import ErrorPage from '../ErrorPage';
import { server } from 'test/mocks/server';

describe('ErrorPage', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it.skip('should render successfully', async () => {
    // render the React element into the DOM
    const { getByTestId } = render(<ErrorPage />);

    // wait before throwing an error if it cannot find an element
    await screen.findByTestId('page-error');

    // assert the element has rendered
    expect(getByTestId('page-error')).toBeDefined();
  });
});
