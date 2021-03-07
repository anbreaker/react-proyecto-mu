// eslint-disable
import React from 'react';

import { MainLayout } from '../layout/MainLayout';

export const DisabledUserPage = () => {
  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800">
          Su cuenta se encuentra creada, pero no ha sido asociada a ninguna
          organización. Debe solicitar a un administrador que lo habilite.
        </h1>
      </div>
    </MainLayout>
  );
};
