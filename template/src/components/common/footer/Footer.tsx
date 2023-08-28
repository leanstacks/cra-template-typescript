function Footer() {
  return (
    <footer className="flex h-8 items-center justify-center text-xs" data-testid="footer">
      <a
        href="https://leanstacks.net/privacy.html"
        title="Privacy Policy"
        target="_blank"
        rel="noreferrer"
        className="mr-4 text-blue-500 hover:opacity-80"
      >
        Privacy
      </a>
      <a
        href="https://leanstacks.net/terms.html"
        title="Terms and Conditions"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 hover:opacity-80"
      >
        Terms
      </a>
    </footer>
  );
}

export default Footer;
