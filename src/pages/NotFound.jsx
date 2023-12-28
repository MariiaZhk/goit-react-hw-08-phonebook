import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundText, NotFoundWrap } from './Pages.styled';

const NotFound = () => {
  return (
    <NotFoundWrap>
      <NotFoundText>
        Page not found... Please, go<Link to="/"> HOME</Link> !
      </NotFoundText>
    </NotFoundWrap>
  );
};

export default NotFound;
