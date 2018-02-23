import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="content-container">
    <div className="not-found__404">
      <img className="not-found__image" src="/images/404.png" />
    </div>
    <div className="not-found__link">
      <Link to="/">GO BACK TO DASHBOARD</Link>
    </div>
  </div>
);

export default NotFoundPage;
