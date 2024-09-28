import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/common/ErrorBoundary/ErrorBoundary';
import { lazy, Suspense } from 'react';

const Header = lazy(() => import('./components/elements/header/Header'));
const Footer = lazy(() => import('./components/elements/footer/Footer'));

// pages
const Home = lazy(() => import('./pages/home/Home'));
const Error = lazy(() => import('./pages/error/Error'));

function App() {
  return (
    
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
          <Suspense fallback="Loading ...">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </Router>
    
  );
}

export default App;
