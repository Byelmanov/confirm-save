import React from 'react';
import { BrowserRouter as Router, Route, Routes as BrowserRoutes } from 'react-router-dom';
import { Register } from 'pages/register';
import { appRoutes } from './appRoutes';
import { Login } from 'pages/login';

export const Routes: React.FC = () => {
  return (
    <Router>
      <BrowserRoutes>
        <Route path={appRoutes.register} element={<Register />} />
        <Route path={appRoutes.login} element={<Login />} />
      </BrowserRoutes>
    </Router>
  );
};
