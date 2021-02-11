import React from 'react';

export const NotFoundPage = () => {
  console.log('Cambiar enlaces <a.../> NotFoundPage');

  return (
    <>
      <div id="content-wrapper" className="mt-xl-5 d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <div className="container-fluid">
            {/* <!-- 404 Error Text --> */}
            <div className="text-center mt-xl-5">
              <div className="error mx-auto" data-text="404">
                404
              </div>
              <p className="lead text-gray-800 mb-5">Página no encontrada</p>
              <p className="text-gray-500 mb-0">
                Parece que has encontrado un fallo en matrix...
              </p>

              {/* cambiar enlace a */}
              <a href="index.html">
                &larr; Vuelve al inicio de la web, para el ¡rescate!
              </a>
            </div>
          </div>

          {/* <!-- Footer --> */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Made with ❤️‍🔥 by Talent-Mu.</span>
              </div>
            </div>
          </footer>
          {/* <!-- End of Footer --> */}
        </div>
      </div>
    </>
  );
};
