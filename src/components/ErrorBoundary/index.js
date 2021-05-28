/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: { message: '', stack: '' },
    info: { componentStack: '' },
  };

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError, error, info } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorComponent error={error} info={info} /> : children;
  }
}

const ErrorComponent = ({ error, info }) => {
  const handleClick = () => {
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <div className="errorBoundary">
      <h2>
        Something went wrong. Click below to be redirected to the main page.
      </h2>
      <Link to="/" onClick={handleClick}>
        Main Page
      </Link>
    </div>
  );
};

export default ErrorBoundary;
