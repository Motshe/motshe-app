// import motshe from './public/assets/motshe.png';
import './App.scss';
import NavigationBar from './components/NavigationBar';
import ErrorBoundary from './components/ErrorBoundary';
import LandingPage from './domain/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    // <Router>
    <div>
      <NavigationBar />
      <ErrorBoundary>
        {/* <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route component={NotFound} />
          </Switch>
        </div> */}
        <LandingPage />
      </ErrorBoundary>
      <Footer />
      {/* </ Router> */}
    </div>
  );
}

export default App;
