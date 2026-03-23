<<<<<<< HEAD
// import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
// import Chart from 'react-apexcharts';
// import ButtonGroup from 'antd/lib/button/button-group';
// import { RegistryDashboardComponent } from '../../../Components/RegistryDashboard/registryDashboardViewComponent';

// const RegistryDashboard = () => {
//   const { t } = useTranslation(['dashboard']);
//   return (
//     <RegistryDashboardComponent
//       Chart={Chart}
//       t={t}
//       ButtonGroup={ButtonGroup}
//       Link={Link}
//       isMultipleDashboardsVisible={false}
//     ></RegistryDashboardComponent>
//   );
// };

// export default RegistryDashboard;
=======
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import ButtonGroup from 'antd/lib/button/button-group';
import { RegistryDashboardComponent } from '../../../Components/RegistryDashboard/registryDashboardViewComponent';

const RegistryDashboard = () => {
  const { t } = useTranslation(['dashboard']);
  return (
    <RegistryDashboardComponent
      Chart={Chart}
      t={t}
      ButtonGroup={ButtonGroup}
      Link={Link}
      isMultipleDashboardsVisible={false}
    ></RegistryDashboardComponent>
  );
};

export default RegistryDashboard;
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
