<<<<<<< HEAD
import React, { useState } from "react";
import "./Dashboard.scss";
import { ChevronDown } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { Trans, useTranslation } from "react-i18next";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useTranslation(["homepage"]);

  const toggleItem = (index) => {
=======
import React, { useState } from 'react';
import './Dashboard.scss';
import { ChevronDown, Envelope } from 'react-bootstrap-icons';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
<<<<<<< HEAD
    <div className="faq-container">
      <h2 className="header-title">FAQ - Common questions:</h2>
      <div className="faq-list">
        <div className="faq-item">
          <button
            className={`faq-question ${openIndex === 0 ? "active" : ""}`}
            onClick={() => toggleItem(0)}
          >
            <span className={`chevron ${openIndex === 0 ? "rotated" : ""}`}>
              <ChevronDown />
            </span>
            <span className="question-text">{t("homepage:faqQ1")}</span>
          </button>
          {openIndex === 0 && (
            <div className="faq-answer">
              <Trans
                i18nKey={"homepage:faqA1"}
                components={{
                  b: <strong />,
                  ul: <ul className="faq-list" />,
                  li: <li />,
                }}
              />
=======
    <div className="faq-container pb-[20px]">
      <h2 className="header-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq-item">
          <button
            className={`faq-question ${openIndex === 0 ? 'active' : ''}`}
            onClick={() => toggleItem(0)}
          >
            <span className={`chevron ${openIndex === 0 ? 'rotated' : ''}`}>
              <ChevronDown />
            </span>
            <span className="question-text">What is the Gold Standard Impact Registry?</span>
          </button>
          {openIndex === 0 && (
            <div className="faq-answer">
              <p>
                The Gold Standard Impact Registry is the authoritative, public ledger where Gold
                Standard-certified carbon credits such as Verified Emission Reductions are issued,
                held, transferred, and retired with full transparency. Each credit is assigned a
                unique serial number, enabling stakeholders to trace it throughout its entire
                lifecycle. The registry also showcases certified SDG impacts of projects.
              </p>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            </div>
          )}
        </div>

        <div className="faq-item">
          <button
<<<<<<< HEAD
            className={`faq-question ${openIndex === 1 ? "active" : ""}`}
            onClick={() => toggleItem(1)}
          >
            <span className={`chevron ${openIndex === 1 ? "rotated" : ""}`}>
              <ChevronDown />
            </span>
            <span className="question-text">{t("homepage:faqQ2")}</span>
          </button>
          {openIndex === 1 && (
            <div className="faq-answer">
              <Trans
                i18nKey={"homepage:faqA2"}
                components={{
                  b: <strong />,
                  ul: <ul className="faq-list" />,
                  li: <li />,
                }}
              />
=======
            className={`faq-question ${openIndex === 1 ? 'active' : ''}`}
            onClick={() => toggleItem(1)}
          >
            <span className={`chevron ${openIndex === 1 ? 'rotated' : ''}`}>
              <ChevronDown />
            </span>
            <span className="question-text">Who can use the Registry?</span>
          </button>
          {openIndex === 1 && (
            <div className="faq-answer">
              <p>
                This global platform serves various user groups, including project developers,
                credit buyers, marketplaces, and the general public. It provides an open, reliable
                view of project statuses, issued credits, and retirement records.
              </p>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            </div>
          )}
        </div>

        <div className="faq-item">
          <button
<<<<<<< HEAD
            className={`faq-question ${openIndex === 2 ? "active" : ""}`}
            onClick={() => toggleItem(2)}
          >
            <span className={`chevron ${openIndex === 2 ? "rotated" : ""}`}>
              <ChevronDown />
            </span>
            <span className="question-text">{t("homepage:faqQ3")}</span>
          </button>
          {openIndex === 2 && (
            <div className="faq-answer">
              <Trans
                i18nKey={"homepage:faqA3"}
                components={{
                  b: <strong />,
                  ul: <ul className="faq-list" />,
                  li: <li />,
                }}
              />
=======
            className={`faq-question ${openIndex === 2 ? 'active' : ''}`}
            onClick={() => toggleItem(2)}
          >
            <span className={`chevron ${openIndex === 2 ? 'rotated' : ''}`}>
              <ChevronDown />
            </span>
            <span className="question-text">
              Can the Registry distinguish Article 6-authorized credits?
            </span>
          </button>
          {openIndex === 2 && (
            <div className="faq-answer">
              <p>
                Yes. The registry supports Article 6 labelling, enabling users to identify and track
                credits explicitly authorized under Article 6 of the Paris Agreement. This enhances
                transparency and compliance with global frameworks and standards.
              </p>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            </div>
          )}
        </div>
        <div className="faq-item">
          <button
<<<<<<< HEAD
            className={`faq-question ${openIndex === 3 ? "active" : ""}`}
            onClick={() => toggleItem(3)}
          >
            <span className={`chevron ${openIndex === 3 ? "rotated" : ""}`}>
              <ChevronDown />
            </span>
            <span className="question-text">{t("homepage:faqQ4")}</span>
          </button>
          {openIndex === 3 && (
            <div className="faq-answer">
              <Trans
                i18nKey={"homepage:faqA4"}
                components={{
                  b: <strong />,
                  ul: <ul className="faq-list" />,
                  li: <li />,
                }}
              />
            </div>
          )}
        </div>
        <div className="faq-item">
          <button
            className={`faq-question ${openIndex === 4 ? "active" : ""}`}
            onClick={() => toggleItem(4)}
          >
            <span className={`chevron ${openIndex === 4 ? "rotated" : ""}`}>
              <ChevronDown />
            </span>
            <span className="question-text">{t("homepage:faqQ5")}</span>
          </button>
          {openIndex === 4 && (
            <div className="faq-answer">
              <Trans
                i18nKey={"homepage:faqA5"}
                components={{
                  b: <strong />,
                  ul: <ul className="faq-list" />,
                  li: <li />,
                }}
              />
            </div>
          )}
        </div>
        <div className="faq-item">
          <button
            className={`faq-question ${openIndex === 5 ? "active" : ""}`}
            onClick={() => toggleItem(5)}
          >
            <span className={`chevron ${openIndex === 5 ? "rotated" : ""}`}>
              <ChevronDown />
            </span>
            <span className="question-text">{t("homepage:faqQ6")}</span>
          </button>
          {openIndex === 5 && (
            <div className="faq-answer">
              <Trans
                i18nKey={"homepage:faqA6"}
                components={{
                  b: <strong />,
                  ul: <ul className="faq-list" />,
                  li: <li />,
                }}
              />
=======
            className={`faq-question ${openIndex === 5 ? 'active' : ''}`}
            onClick={() => toggleItem(5)}
          >
            <span className={`chevron ${openIndex === 5 ? 'rotated' : ''}`}>
              <ChevronDown />
            </span>
            <span className="question-text">
              How does the certification and assurance process work?
            </span>
          </button>
          {openIndex === 5 && (
            <div className="faq-answer">
              <p>
                Gold Standard's certification involves multiple stages: project planning,
                stakeholder consultation, preliminary review, validation by an independent VVB,
                verification, and issuance of credits. A digital assurance platform streamlines
                document submission, reviews, and monitoring, while expert reviewers conduct quality
                checks to uphold integrity.
              </p>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            </div>
          )}
        </div>
        <div className="faq-item">
          <button
<<<<<<< HEAD
            className={`faq-question ${openIndex === 6 ? "active" : ""}`}
            onClick={() => toggleItem(6)}
          >
            <span className={`chevron ${openIndex === 6 ? "rotated" : ""}`}>
              <ChevronDown />
            </span>
            <span className="question-text">{t("homepage:faqQ7")}</span>
          </button>
          {openIndex === 6 && (
            <div className="faq-answer">
              <Trans
                i18nKey={"homepage:faqA7"}
                components={{
                  b: <strong />,
                  ul: <ul className="faq-list" />,
                  li: <li />,
                }}
              />
            </div>
          )}
        </div>
        <div className="faq-item">
          <button
            className={`faq-question ${openIndex === 7 ? "active" : ""}`}
            onClick={() => toggleItem(7)}
          >
            <span className={`chevron ${openIndex === 7 ? "rotated" : ""}`}>
              <ChevronDown />
            </span>
            <span className="question-text">{t("homepage:faqQ8")}</span>
          </button>
          {openIndex === 7 && (
            <div className="faq-answer">
              <Trans
                i18nKey={"homepage:faqA8"}
                components={{
                  b: <strong />,
                  ul: <ul className="faq-list" />,
                  li: <li />,
                  a1: <a href="mailto:digital4planet@undp.org" />,
                }}
              />
            </div>
          )}
        </div>
        <div className="faq-item">
          <button
            className={`faq-question ${openIndex === 8 ? "active" : ""}`}
            onClick={() => toggleItem(8)}
          >
            <span className={`chevron ${openIndex === 8 ? "rotated" : ""}`}>
              <ChevronDown />
            </span>
            <span className="question-text">{t("homepage:faqQ9")}</span>
          </button>
          {openIndex === 8 && (
            <div className="faq-answer">
              <Trans
                i18nKey={"homepage:faqA9"}
                components={{
                  b: <strong />,
                  ul: <ul className="faq-list" />,
                  li: <li />,
                }}
              />
=======
            className={`faq-question ${openIndex === 6 ? 'active' : ''}`}
            onClick={() => toggleItem(6)}
          >
            <span className={`chevron ${openIndex === 6 ? 'rotated' : ''}`}>
              <ChevronDown />
            </span>
            <span className="question-text">Who are VVBs and what is their role?</span>
          </button>
          {openIndex === 6 && (
            <div className="faq-answer">
              <p>
                Validation and Verification Bodies (VVBs) are independent, accredited entities
                responsible for assessing projects against Gold Standard requirements, conducting
                validation or verification, and making certification decisions. They follow strict
                competence, impartiality, and transparency criteria, supported by peer review and
                oversight from Gold Standard.
              </p>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
