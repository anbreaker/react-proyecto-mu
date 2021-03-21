import React from 'react';
import clsx from 'clsx';

export const InfoCards = ({
  text,
  variantBorder,
  variantText,
  quantity,
  addClases,
}) => {
  return (
    <>
      <div className={clsx(addClases ? addClases : 'col-md-4')}>
        <div className={`card mb-4 py-3 ${variantBorder} `}>
          <div className="card-body">
            <div className="row align-items-center">
              <h5 className={`m-0 font-weight-bold ${variantText}`}>{text}</h5>
              <div className="h5 mb-0 m-auto font-weight-bold text-gray-800">
                {quantity}
              </div>
              <div className="col-auto">
                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
