import { rest } from 'msw';

import { infoFixture } from '__fixtures__/info';

export const handlers = [
  rest.get('/api/info', (req, res, ctx) => {
    return res(ctx.json(infoFixture));
  })
];
