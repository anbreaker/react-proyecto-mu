// eslint-disable
import React from 'react';

import { MainLayout } from '../layout/MainLayout';

export const DisabledUserPage = () => {
  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800">
          Su cuenta ha sido creada exitosamente, pero aún no ha sido asociada a
          ninguna organización. Un administrador completará este proceso.
        </h1>
      </div>
    </MainLayout>
  );
};
