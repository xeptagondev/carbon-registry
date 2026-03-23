<<<<<<< HEAD
import React from "react";
import "./Dashboard.scss";
import i18next from "i18next";
import { Trans, useTranslation } from "react-i18next";

const DemoSite = () => {
  const { i18n, t } = useTranslation(["common", "homepage"]);
  return (
    <div className="demo-site-container">
      <h1 className="header-title">{t("homepage:demoSiteTitle")}</h1>
      <div className="demo-site-content">
        <div className="demo-site-text">
          <p className="main-description">
            This demo site showcases core features developed. The demo site is
            available by invitation to national governments working with UNDP.
            For national governments and UNDP country offices wishing to request
            a demo, please contact <b>UNDP Digital For Planet </b>via your
            national country office contact at{" "}
=======
import React from 'react';
import './Dashboard.scss';
import i18next from 'i18next';
import { Trans, useTranslation } from 'react-i18next';

const DemoSite = () => {
  const { i18n, t } = useTranslation(['common', 'homepage']);
  return (
    <div className="demo-site-container">
      <h1 className="header-title">{t('homepage:demoSiteTitle')}</h1>
      <div className="demo-site-card"></div>

      <div className="demo-site-content">
        <div className="demo-site-text">
          <p className="main-description">
            This demo site showcases core features developed. The demo site is available by
            invitation to governments and potential partners working with UNDP. For inquiries and to
            request a demo, please contact{' '}
            <b>
              <a href="#" className="link">
                UNDP Digital For Planet
              </a>{' '}
            </b>
            via your country office or{' '}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            <u>
              <a href="mailto:digital4planet@undp.org" className="link">
                digital4planet@undp.org
              </a>
            </u>
<<<<<<< HEAD
            .
          </p>

          <p className="footer-text">
            More technical information can be found on our{" "}
            <u>
              <a
                href="https://github.com/undp/carbon-registry"
                target="_blank"
                className="link"
              >
                Github
              </a>
            </u>{" "}
=======
          </p>

          <p className="secondary-description">Through UNDP country offices, governments can:</p>

          <ul className="feature-list">
            <li>Request access to the demo site.</li>
            <li>Schedule a live demonstration.</li>
            <li>Explore potential collaboration and support.</li>
          </ul>

          <p className="footer-text">
            More technical information can be found on our{' '}
            <u>
              <a href="#" className="link">
                Github
              </a>
            </u>{' '}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            page.
          </p>
        </div>
      </div>
<<<<<<< HEAD
      <div className="demo-video">
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAGp5iEx29Q/yCCaXj1wkWWl-QHPT3yejQ/watch?embed"
          allowFullScreen={true}
          allow="fullscreen"
          title="Carbon Registry Demonstration Video"
        >
          {/* Fallback content - shows only if iframe fails to load */}
          <div>
            <div>
              <a
                href="https://www.canva.com/design/DAGp5iEx29Q/yCCaXj1wkWWl-QHPT3yejQ/watch?utm_content=DAGp5iEx29Q&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                target="_blank"
                rel="noopener"
              >
                View Carbon Registry Demonstration Video
              </a>
            </div>
          </div>
        </iframe>
      </div>
=======
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    </div>
  );
};

export default DemoSite;
