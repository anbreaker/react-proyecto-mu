import React from 'react';
import { Link } from 'react-router-dom';

export const FooterForms = props => {
  const { text, path } = props;

  return (
    <div>
      <div className="text-center">
        <Link to={path} className="small">
          {text}
        </Link>
      </div>
    </div>
  );
};
