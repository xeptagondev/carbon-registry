<<<<<<< HEAD
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import "./Dashboard.scss";

const CarbonDashboard = () => {
  const { i18n, t } = useTranslation(["common", "homepage"]);
=======
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';
import './Dashboard.scss';
import allAbout from '../../Assets/Images/allAbout.webp';

const CarbonDashboard = () => {
  const { i18n, t } = useTranslation(['common', 'homep age']);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  const [projectCount, setProjectCount] = useState(0);
  const [creditCount, setCreditCount] = useState(300000);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
<<<<<<< HEAD
=======
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 200,
    co2: 200,
    value: 0,
  });

  const targetValues = {
    projects: 4044,
    co2: 407,
    value: 60.1,
  };
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

  const animateCounters = useCallback(() => {
    const targetProjectCount = 228;
    const targetCreditCount = 345890;
    const startingCreditCount = 300000;
    const duration = 1500;
    const startTime = Date.now();

    const updateCounters = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      // Update project count
      const currentProjectCount = Math.floor(easeOutQuart * targetProjectCount);
      setProjectCount(currentProjectCount);

      // Update credit count
      const creditDifference = targetCreditCount - startingCreditCount;
<<<<<<< HEAD
      const currentCreditCount = Math.floor(
        startingCreditCount + easeOutQuart * creditDifference
      );
=======
      const currentCreditCount = Math.floor(startingCreditCount + easeOutQuart * creditDifference);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      setCreditCount(currentCreditCount);

      setIsAnimating(progress < 1);

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      } else {
        setProjectCount(targetProjectCount);
        setCreditCount(targetCreditCount);
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(updateCounters);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      {
        threshold: 0.5,
<<<<<<< HEAD
        rootMargin: "0px 0px -50px 0px",
=======
        rootMargin: '0px 0px -50px 0px',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [animateCounters, hasAnimated]);

  const projectData = [
<<<<<<< HEAD
    { value: 150, title: t("homepage:authorised") },
    { value: 50, title: t("homepage:pending") },
    { value: 28, title: t("homepage:rejected") },
  ];

  const creditData = [
    { value: 345890, title: t("homepage:authorised") },
    { value: 200890, title: t("homepage:issued") },
    { value: 100890, title: t("homepage:transferred") },
    { value: 120890, title: t("homepage:retired") },
  ];
=======
    { value: 43250, title: t('homepage:issued') },
    { value: 18302, title: t('homepage:transferred') },
    { value: 19508, title: t('homepage:retired') },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500; // 2 seconds
    const steps = 40;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        projects: Math.floor(targetValues.projects * progress),
        co2: Math.floor(targetValues.co2 * progress),
        value: Number((targetValues.value * progress).toFixed(1)),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetValues); // Ensure final values are exact
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

  return (
    <div className="carbon-dashboard">
      <div className="dashboard-container">
<<<<<<< HEAD
        {/* Header */}
        <div className="dashboard-header">
          <h2 className="header-title">{t("homepage:dashboardtitle")}</h2>
        </div>

        {/* Main Card with Title and Statistics */}
        <div className="main-card">
          <div className="main-card-content">
            <div className="main-title-container">
              <h1 className="main-title">{t("homepage:allinoneplatform")}</h1>
            </div>
            <div className="stats-container" ref={statsRef}>
              <div className="stats-wrapper">
                <div className="main-statistic procount">
                  <div
                    className={`statistic-value ${
                      isAnimating ? "counting" : ""
                    }`}
                  >
                    {projectCount.toLocaleString()}
                  </div>
                  <div className="statistic-title">
                    {t("homepage:totprojects")}
                  </div>
                </div>
                <div className="main-statistic">
                  <div
                    className={`statistic-value ${
                      isAnimating ? "counting" : ""
                    }`}
                  >
                    {creditCount.toLocaleString()}
                  </div>
                  <div className="statistic-title">
                    {t("homepage:totcredits")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-card-example-section">
            <div className="example">{t("homepage:example")}</div>
          </div>
        </div>

        {/* Project Distribution Section */}
        <div className="section">
          <h3 className="section-title">{t("homepage:projectdistribution")}</h3>
=======
        <h2 className="header-title">All in one Global Carbon Management Platform and Dashboard</h2>
        <div className="digital-public-good">
          <div className="image-containers">
            <motion.div
              ref={statsRef}
              className="stats-card-overlay"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="stats-overlay">
                <div className="stat-item">
                  <div className="stat-number">{counts.projects}</div>
                  <div className="stat-label">Projects</div>
                  <div className="stat-subtitle">in 117 Countries</div>
                </div>

                <div className="stat-item">
                  <div className="stat-number">{counts.co2}</div>
                  <div className="stat-label">Million</div>
                  <div className="stat-subtitle">
                    tCO<sub>2</sub>eq Reduced/Removed
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-number">$ {counts.value}</div>
                  <div className="stat-label">Billion</div>
                  <div className="stat-subtitle">Shared Value Created</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Header */}

        {/* Main Card with Title and Statistics */}

        {/* Project Distribution Section */}
        <div className="section">
          <h3 className="section-title">{t('homepage:projectdistribution')}</h3>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          <motion.div
            className="cards-grid cards-grid-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
<<<<<<< HEAD
            transition={{ duration: 1.5, ease: "easeOut" }}
=======
            transition={{ duration: 1.5, ease: 'easeOut' }}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            viewport={{ once: true }}
          >
            {projectData.map((item, index) => (
              <div key={index} className="project-card">
                <div className="project-statistic">
<<<<<<< HEAD
                  <div className="project-value">{item.value}</div>
                  <div className="project-title">{item.title}</div>
                </div>
                <div className="project-card-example example">
                  {t("homepage:example")}
                </div>
=======
                  <div className="project-value">{item.value.toLocaleString('en-US')}</div>
                  <div className="project-title">{item.title}</div>
                </div>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
              </div>
            ))}
          </motion.div>
        </div>
<<<<<<< HEAD

        {/* Carbon Credit Distribution Section */}
        <div className="section">
          <h3 className="section-title">
            {t("homepage:distributionbystatus")}
          </h3>
          <motion.div
            className="cards-grid cards-grid-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {creditData.map((item, index) => (
              <div key={index} className="credit-card">
                <div className="credit-statistic">
                  <div className="credit-value">
                    {item.value.toLocaleString()}
                  </div>
                  <div className="credit-title">{item.title}</div>
                </div>
                <div className="credit-card-example example">
                  {t("homepage:example")}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer Text */}
        <div className="footer-section">
          <p className="footer-text">
            {/* {t("homepage:policyContextBody")} */}
            <Trans
              i18nKey={"homepage:policyContextBody"}
              components={{
                br: <br />,
                ul: <ul />,
                li: <li />,
                b: <strong />,
              }}
            />
          </p>
        </div>
=======
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      </div>
    </div>
  );
};

export default CarbonDashboard;
