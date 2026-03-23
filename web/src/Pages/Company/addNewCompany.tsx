<<<<<<< HEAD
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AddNewCompanyComponent } from "../../Components/Company/AddNewCompany/addNewCompanyComponent";
import { ROUTES } from "../../Config/uiRoutingConfig";
=======
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AddNewCompanyComponent } from '../../Components/Company/AddNewCompany/addNewCompanyComponent';
import { ROUTES } from '../../Config/uiRoutingConfig';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

const AddNewCompany = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(["addCompany"]);

<<<<<<< HEAD
  const maximumImageSize = import.meta.env.VITE_APP_MAXIMUM_FILE_SIZE
    ? parseInt(import.meta.env.VITE_APP_MAXIMUM_FILE_SIZE)
=======
  const maximumImageSize = process.env.REACT_APP_MAXIMUM_FILE_SIZE
    ? parseInt(process.env.REACT_APP_MAXIMUM_FILE_SIZE)
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    : 1048576;

  const onNavigateToCompanyManagement = () => {
    navigate(ROUTES.VIEW_ORGANIZATIONS, { replace: true });
  };

  return (
    <AddNewCompanyComponent
      t={t}
      onNavigateToCompanyManagement={onNavigateToCompanyManagement}
      maximumImageSize={maximumImageSize}
      useLocation={useLocation}
      regionField
    ></AddNewCompanyComponent>
  );
};

export default AddNewCompany;
