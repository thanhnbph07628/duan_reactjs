import React from "react";
import Header from "../../components/Client/Header/Header";
import Footer from "../../components/Client/Footer/Footer";
import Menu from "../../components/Client/Menu/Menu";

import '../../styleClient/css/style.css';
import '../../styleClient/css/bootstrap.min.css';
import '../../styleClient/css/font-awesome.min.css';
import '../../styleClient/css/owl.carousel.css';
import '../../styleClient/css/responsive.css';
import '../../styleClient/css/animate.css';
import '../../styleClient/css/fontawesome-stars.css';
import '../../styleClient/css/helper.css';
import '../../styleClient/css/jquery-ui.min.css';
import '../../styleClient/css/magnific-popup.css';
import '../../styleClient/css/material-design-iconic-font.min.css';
import '../../styleClient/css/meanmenu.css';
import '../../styleClient/css/owl.carousel.min.css';
import '../../styleClient/css/slick.css';
import '../../styleClient/css/venobox.css';

function LayoutClinet({children}) {
  return (
    <div>
      <Header />
      <Menu/>
      {children}
      <Footer />
    </div>
  );
}

export default LayoutClinet;
