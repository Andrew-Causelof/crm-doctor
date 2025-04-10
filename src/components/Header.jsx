import React from 'react';


function Header() {

    return (
      <header className="header gradient">
      <a className="logo header_logo">
          <div className="logo_img">
              <img src="src/assets/img/svg/logo.svg" alt="Logo" />
          </div>
          <div className="logo_text">
              <span className="logo_text_top">SL - Клиника</span>
              <span className="logo_text_bottom">
                  Клиника консервативного лечения заболеваний позвоночника и суставов
              </span>
          </div>
      </a>
      <div className="profile header_profile" tabIndex="0">
          <div className="profile_text">Добронравов Олег Робертович</div>
          <div className="profile_avatar">
              <span>О</span>
          </div>
      </div>
      <div className="burger">
          <span></span>
          <span></span>
          <span></span>
      </div>
  </header>
    );
}

export default Header;
