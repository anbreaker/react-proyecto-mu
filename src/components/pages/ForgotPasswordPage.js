import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

export const ForgotPasswordPage = () => {
  return (
    <div>
      <Helmet
        bodyAttributes={{
          class: 'bg-gradient-info',
        }}
      />
      <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-2">
                          ¿Olvidaste la contraseña?
                        </h1>
                        <p className="mb-4">
                          Lo entendemos, estas cosas pasan. Sólo tienes que
                          introducir tu correo electrónico y te enviaremos un
                          enlace para restablecer tu contraseña 😊.
                        </p>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Introduce la dirección de email..."
                          />
                        </div>
                        <a
                          href="login.html"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Reiniciar contraseña
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link to="/login" className="small">
                          ¿Ya tienes una cuenta? ¡Inicia sesión!.
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link to="/registro" className="small">
                          ¿No tienes cuenta? ¡Hazte una!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
