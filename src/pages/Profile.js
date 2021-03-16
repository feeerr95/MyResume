import React from 'react';

import './Profile.css';

function Profile() {
  return (
    <div className="page">
      <div className="card">
        <div className="section">
          <span className="section-text"> Perfil </span>
        </div>
        <div className="profile">
          <div className="profile-left">
            <img className="profile-img" src="https://i.ibb.co/3SQ2psy/Screenshot-150.png" />
            <div className="profile-about-me">
              <div className="about-me">
                <span className="about-title"> Sobre mi </span>
                <span className="abot-me-text"> texto </span>
              </div>
            </div>
          </div>
          <div className="profile-right">
            <div className="info-box">
              <span className="profile-info-title">
                Nombre
                <span className="profile-info-text"> Fernado Alvarez</span>
              </span>
              <span className="profile-info-title">
                Edad
                <span className="profile-info-text"> 25</span>
              </span>
              <span className="profile-info-title">
                Ubicación
                <span className="profile-info-text"> Quilmes, Buenos Aires</span>
              </span>
              <span className="profile-info-title">
                Email
                <span className="profile-info-text"> feeerr95@gmail.com</span>
              </span>
              <span className="profile-info-title">
                Telefono
                <span className="profile-info-text"> +54 11-36349599</span>
              </span>
            </div>
            <div className="profile-languages">
              <span className="about-title"> Idiomas </span>
              <span className="profile-languages-text"> texto </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
