import React from 'react';
import {Link} from 'react-router-dom';

import {CartButton} from '../Cart/CartButton';

// styles
import './index.scss';

export const EmptyPage = props => {
  const {text, button = true} = props;

  return (
    <div className="empty-page">
      <div className="empty-page__block">
        <img className="empty-page__logo" src="/static/img/Apple_Grey_Logo.png" alt="apple-logo"/>
        <h1 className="empty-page__text">{text}</h1>
      </div>
      {
        button
          ? <Link to="/all">
            <CartButton title="Continue Shopping"/>
          </Link>
          : null
      }
    </div>
  )
};