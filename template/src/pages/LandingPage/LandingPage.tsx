import { useConfig } from 'providers/ConfigProvider';
import { useGetUsers } from 'api/useGetUsers';
import { Text, TextVariant } from '@leanstacks/react-common';

const LandingPage = () => {
  const config = useConfig();

  const { data: users, isSuccess: usersSuccess } = useGetUsers();

  return (
    <div data-testid="page-landing">
      <h1 className="mb-4 text-4xl font-bold">Welcome to React!</h1>

      <div className="mb-4">
        This project was created with{' '}
        <a
          href="https://create-react-app.dev/"
          target="blank"
          rel="noreferrer"
          className="text-blue-500 hover:opacity-80"
        >
          Create React App
        </a>
        .
      </div>

      <div className="mb-4">
        Learn more on the official{' '}
        <a
          href="https://react.dev/"
          target="blank"
          rel="noreferrer"
          className="text-blue-500 hover:opacity-80"
        >
          React
        </a>{' '}
        site.
      </div>

      <div className="mb-4">
        <Text variant={TextVariant.Heading2}>Users</Text>
        {usersSuccess && users.map((user) => <div key={user.id}>{user.name}</div>)}
      </div>

      <div className="text-sm uppercase">
        <div>App Version: {config.REACT_APP_VERSION_ID}</div>
      </div>
    </div>
  );
};

export default LandingPage;
