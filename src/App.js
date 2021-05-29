// import motshe from './public/assets/motshe.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import NavigationBar from './components/NavigationBar';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';
import LandingPage from './domain/LandingPage';

function App() {
  return (
    <Router>
      <NavigationBar />
      <ErrorBoundary>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ErrorBoundary>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
