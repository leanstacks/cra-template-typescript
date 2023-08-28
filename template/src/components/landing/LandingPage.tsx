function LandingPage() {
  return (
    <div data-testid="page-landing">
      <h1 className="mb-4 text-4xl font-bold">Welcome to React!</h1>

      <div className="mb-3">
        This project was created with{' '}
        <a href="https://create-react-app.dev/" target="blank" rel="noreferrer" className="text-blue-500 hover:opacity-80">Create React App</a>.
      </div>

      <div className="mb-3">
        Learn more on the official{' '} 
        <a href="https://react.dev/" target="blank" rel="noreferrer" className="text-blue-500 hover:opacity-80">React</a> site.
      </div>    </div>
  );
}

export default LandingPage;
