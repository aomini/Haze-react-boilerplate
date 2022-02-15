import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hello from '@/components/Hello';
import routes from './routes';
import './resources/styles/global.scss';

const App = () => {
  return (
    <Router>
      <Hello />
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/developers'>Developers</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <React.Suspense fallback={null}>{route.Element}</React.Suspense>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
