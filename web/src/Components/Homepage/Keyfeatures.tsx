<<<<<<< HEAD
import React from "react";
import "./Dashboard.scss";
import {
  LayoutDashboard,
  NotebookText,
  ArrowRightLeftIcon,
  ChartColumnBig,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const FeatureCards = () => {
  const { t } = useTranslation(["homepage"]);
=======
import React from 'react';
import './Dashboard.scss';
import { LayoutDashboard, NotebookText, ArrowRightLeftIcon, ChartColumnBig } from 'lucide-react';

const FeatureCards = () => {
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  return (
    <div className="feature-cards-container">
      <h2 className="header-title">Key Features Of The Carbon Registry</h2>

      <div className="feature-cards-grid">
        {/* First Row - 2 Large Cards */}
        <div className="feature-cards-item feature-cards-large">
          <div className="feature-cards-icon">123</div>
<<<<<<< HEAD
          <h3 className="feature-cards-heading">Serial Number (New!)</h3>
          <p className="feature-cards-text">
            Each carbon Credit Receives a Unique Serial Number (ID). The Demo
            Carbon Registry is Aligned to UNFCCC’s Article 6.2 Guidance
            (Decision 6/CMA.4) but Can be Adapted to Other Types of Carbon
            Credits.
=======
          <h3 className="feature-cards-heading">Unique Serial Numbering</h3>
          <p className="feature-cards-text">
            Every credit issued under the registry receives a <b>unique, immutable serial number</b>{' '}
            aligned with UNFCCC Article 6.2 guidance. This ensures traceability across issuances,
            transfers, retirements, and cancellations.
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          </p>
        </div>

        <div className="feature-cards-item feature-cards-large">
          <div className="feature-cards-icon">
            <ChartColumnBig />
          </div>
<<<<<<< HEAD
          <h3 className="feature-cards-heading">Reporting (New!)</h3>
          <p className="feature-cards-text">
            The Registry Automatically Generates Reports in the Agreed
            Electronic Format (AEF) for Article 6.2 of the Paris Agreement.
=======
          <h3 className="feature-cards-heading"> Automated Compliance Reporting</h3>
          <p className="feature-cards-text">
            The registry generates reports in formats aligned with{' '}
            <b>Gold Standard's requirements</b> and the{' '}
            <b>Article 6.2 Agreed Electronic Format (AEF)</b>, enabling seamless integration into
            international transparency frameworks.
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          </p>
        </div>

        {/* Second Row - 3 Small Cards */}
        <div className="feature-cards-item feature-cards-small">
          <div className="feature-cards-icon">
            <NotebookText />
          </div>
<<<<<<< HEAD
          <h3 className="feature-cards-heading">Ledger</h3>
          <p className="feature-cards-text">
            All transfers, Retirements, and Cancellations are Immutably Recorded
            Onto a Ledger.
=======
          <h3 className="feature-cards-heading">Immutable Ledger of Transactions</h3>
          <p className="feature-cards-text">
            All transactions (issuance, transfer, retirement, cancellation) are{' '}
            <b>immutably recorded</b> in the ledger, providing a tamper-proof and auditable history
            for every credit.
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          </p>
        </div>

        <div className="feature-cards-item feature-cards-small">
          <div className="feature-cards-icon">
            <LayoutDashboard />
          </div>
<<<<<<< HEAD
          <h3 className="feature-cards-heading">
            {t("homepage:dashboardAndInsightsTitle")}
          </h3>
          <p className="feature-cards-text">
            {t("homepage:dashboardAndInsightsBody")}
=======
          <h3 className="feature-cards-heading">Dashboard & Insights</h3>
          <p className="feature-cards-text">
            A <b>real-time interactive dashboard</b> allows users to view and analyse project
            performance, credit issuances, retirements, and associated SDG impacts. Insights are
            available by <b>country, methodology, geography, and organisation</b>.
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          </p>
        </div>

        <div className="feature-cards-item feature-cards-small">
          <div className="feature-cards-icon">
            <ArrowRightLeftIcon />
          </div>
<<<<<<< HEAD
          <h3 className="feature-cards-heading">
            {t("homepage:interoperableTitle")}
          </h3>
          <p className="feature-cards-text">
            {t("homepage:interoperableBody")}
=======
          <h3 className="feature-cards-heading">Interoperable & Exportable Data</h3>
          <p className="feature-cards-text">
            The system is aligned with the <b>CAD Trust Data Model</b> and{' '}
            <b>ITMO Voluntary Cooperation Platform</b>, with <b>open RESTful APIs</b> for
            integrations. Data can be exported for compliance, auditing, and cross-platform use.
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
