import { rest } from 'msw';

import { usersFixture } from '__fixtures__/users';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(ctx.json(usersFixture));
  }),
];
