import React from 'react';

import { MainLayout } from '../layout/MainLayout';
import { ContactWith } from '../parts/ContactWith';

export const DashboardContact = ({ handlerOnFocus }) => {
  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800">Formulario de Contacto</h1>

        <ContactWith handlerOnFocus={handlerOnFocus} />
      </div>
    </MainLayout>
  );
};
