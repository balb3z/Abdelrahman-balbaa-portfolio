import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-background px-4">
    <div className="text-center">
      <p className="eyebrow mb-3">404</p>
      <h1 className="mb-4 text-3xl font-semibold text-foreground">Page not found</h1>
      <Link to="/" className="text-primary underline-offset-4 hover:underline">
        Back to the portfolio
      </Link>
    </div>
  </div>
);

export default NotFound;
