<<<<<<< HEAD
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectDetailsViewComponent from "../../Components/ProjectDetailsView/ProjectDetailsViewComponent";
import { ROUTES } from "../../Config/uiRoutingConfig";

const ProjectDetailsView = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation(["common", "projectDetailsView"]);

  const onNavigateToProgrammeManagementView = () => {
    navigate(ROUTES.VIEW_PROGRAMMES);
  };

  return (
    <ProjectDetailsViewComponent
      translator={i18n}
      onNavigateToProgrammeView={onNavigateToProgrammeManagementView}
    ></ProjectDetailsViewComponent>
  );
};

export default ProjectDetailsView;
=======
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SLCFProjectDetailsViewComponent from '../../Components/ProjectDetailsView/SLCFProjectDetailsViewComponent';
import { ROUTES } from '../../Config/uiRoutingConfig';

const ProjectDetailsView = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation(['common', 'projectDetailsView']);

  const onNavigateToProgrammeManagementView = () => {
    navigate(ROUTES.VIEW_PROGRAMMES);
  };

  return (
    <SLCFProjectDetailsViewComponent
      translator={i18n}
      onNavigateToProgrammeView={onNavigateToProgrammeManagementView}
    ></SLCFProjectDetailsViewComponent>
  );
};

export default ProjectDetailsView;
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
