import React from 'react';

const ForbiddenCard = ({ text }) => {
  return (
    <div className="col-lg-12 mb-4 ml-3">
      <div className="col-lg-9 mb-4 ml-3">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-danger">{text}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForbiddenCard;
