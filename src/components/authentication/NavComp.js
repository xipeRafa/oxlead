import React, { useContext } from 'react';
import logoImg from '../../assets/canal10.png';
import { AuthContext } from '../../context/AuthContext';
import { LoginComp } from './LoginComp';
import { RegisterComp } from './RegisterComp';

export const NavComp = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="container navbar navbar-light ">
      <div className="container d-flex flex-column">
        <div className="navbar-brand mb-0">
          <img src={logoImg} alt="logo" height="40" />
        </div>
        <div className="d-flex">
          <div className="col mb-0">
            {currentUser ? (
              <>
                <div className="btn btn-secondary mx-2 disabled px-4">
                  {currentUser.email.slice(0, -10)}
                </div>
                <div onClick={() => logout()} className="btn btn-outline-secondary mx-2">
                  SALIR
                </div>
              </>
            ) : (
              <>
                <LoginComp />
                <RegisterComp />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
