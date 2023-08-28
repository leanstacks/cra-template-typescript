import { Link, Navigate, isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const getMessage = (error: unknown): string => {
    let message = 'An unknown problem has occurred.';
    if (isRouteErrorResponse(error)) {
      message = `${error.statusText}. ${error.error?.message}.`;
    } else if (error instanceof Error) {
      message = error.message;
    }
    return message;
  };

  // Route not found
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <Navigate to="/" />;
  }

  return (
    <div
      data-testid="page-error"
      className="flex h-screen flex-col items-center justify-center"
    >
      <div className="max-w-2xl">
        <div className="mb-4 flex items-center">
          <div className="text-xl font-bold md:text-3xl">We seem to be experiencing a problem.</div>
        </div>
        <div className="mb-6">
          {getMessage(error)}
        </div>
        <div>
          <Link to="/" className="text-blue-500 hover:opacity-80">Go back</Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
