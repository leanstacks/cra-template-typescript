import { useConfig } from 'providers/ConfigProvider';

function LandingPage() {
  const config = useConfig();

  return (
    <div data-testid="page-landing">
      <h1 className="mb-4 text-4xl font-bold text-slate-700">Welcome to React!</h1>

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

      <div className="font-mono text-xs uppercase text-slate-500">
        Version: {config.REACT_APP_VERSION_ID}
      </div>
    </div>
  );
}

export default LandingPage;
