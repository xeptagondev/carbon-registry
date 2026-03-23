<<<<<<< HEAD
import { Col, Divider, Row } from "antd";
import { useTranslation } from "react-i18next";
import sliderLogo from "../../Assets/Images/logo-slider.png";
import "./layout.footer.scss";
import { CcCircle } from "react-bootstrap-icons";

const LayoutFooter = () => {
  const { i18n, t } = useTranslation(["common", "homepage"]);
  const countryName = import.meta.env.VITE_APP_COUNTRY_NAME || "CountryX";
=======
import { Col, Divider, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import logo_Gold from '../../Assets/Images/logo_Gold.png';
import './layout.footer.scss';
import { CcCircle } from 'react-bootstrap-icons';
import footlogo from '../../Assets/Images/FooterLogo.png';

const LayoutFooter = () => {
  const { i18n, t } = useTranslation(['common', 'homepage']);
  // const countryName = import.meta.env.VITE_APP_COUNTRY_NAME || 'Gold Standard';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

  return (
    <div className="homepage-footer-container">
      <Row>
        <Col md={24} lg={24}>
          <div className="logocontainer">
            <div className="logo">
              <img src={footlogo} alt="slider-logo" />
            </div>
<<<<<<< HEAD
            <div>
              <div style={{ display: "flex" }}>
                <div className="title">{"CARBON MARKET DIGITAL PLATFORM"}</div>
                {/* <div className="title-sub">{'REGISTRY'}</div> */}
              </div>
              <div className="footer-country-name">{countryName}</div>
=======
            <div className="logo-text">
              <div style={{ display: 'flex' }}>
                <div className="title">
                  {'IMPACT'} <span>REGISTRY</span>
                </div>
                {/* <div className="title-sub">{'REGISTRY'}</div> */}
              </div>
              <div className="footer-country-name">Gold Standard</div>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            </div>
          </div>
        </Col>
      </Row>
      <Divider className="divider" style={{ backgroundColor: "#FFFF" }} />
      <Row>
        <Col md={24} lg={24}>
          <div className="footertext">{t("homepage:footertext1")}</div>
        </Col>
      </Row>
<<<<<<< HEAD
      <Row>
        <Col md={10} lg={10}>
          <div className="footertext-bottom">
            {import.meta.env.VITE_APP_COUNTRY_NAME || "CountryX"}
            <CcCircle className="cc" color="#FFFF" size="10px" />
          </div>
        </Col>
        <Col md={14} lg={14}>
          <div className="footertext-link-container">
            <div>
              <a
                href="https://nationalcarbonregistrydemo.tawk.help/"
                target="_blank"
                className="footertext-links"
              >
                {t("homepage:Help")}
              </a>
              <a
                href="https://status.carbreg.org/"
                target="_blank"
                className="footertext-links"
              >
                {t("homepage:Status")}
              </a>
              <a href="/cookie" target="_blank" className="footertext-links">
                {t("homepage:Cookie")}
              </a>
            </div>
            <div>
              <a href="codeconduct" target="_blank" className="footertext-links">
                {t("homepage:codeconduct")}
              </a>
              <a href="/terms#termuse" target="_blank" className="footertext-links">
                {t("homepage:terms")}
              </a>
              <a href="/privacy" target="_blank" className="footertext-links">
                {t("homepage:privacy")}
              </a>
            </div>
          </div>
        </Col>
      </Row>
=======
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    </div>
  );
};

export default LayoutFooter;
