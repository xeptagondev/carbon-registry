<<<<<<< HEAD:web/src/Pages/Dashboard/slcf/Dashboard.tsx
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import ButtonGroup from 'antd/lib/button/button-group';
import { DashboardComponent } from '../../../Components/Dashboard/DashboardViewComponent';

const SLCFDashboard = () => {
  const { t } = useTranslation(['dashboard']);
  return (
    <DashboardComponent
      Chart={Chart}
      t={t}
      ButtonGroup={ButtonGroup}
      Link={Link}
      isMultipleDashboardsVisible={false}
    ></DashboardComponent>
  );
};

export default SLCFDashboard;
=======
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import ButtonGroup from 'antd/lib/button/button-group';
import { SLCFDashboardComponent } from '../../../Components/SLCFDashboard/slcfDashboardViewComponent';

const SLCFDashboard = () => {
  const { t } = useTranslation(['dashboard']);
  return (
    <SLCFDashboardComponent
      Chart={Chart}
      t={t}
      ButtonGroup={ButtonGroup}
      Link={Link}
      isMultipleDashboardsVisible={false}
    ></SLCFDashboardComponent>
  );
};

export default SLCFDashboard;
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f:web/src/Pages/Dashboard/slcf/slcfdashboard.tsx
