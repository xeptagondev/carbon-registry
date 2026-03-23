<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useEffect, useState } from 'react';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Skeleton,
  Steps,
  Upload,
  message,
<<<<<<< HEAD
} from "antd";
=======
} from 'antd';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
import {
  InfoCircleOutlined,
  MinusOutlined,
  PlusOutlined,
  UploadOutlined,
<<<<<<< HEAD
} from "@ant-design/icons";
import "./ProgrammeCreationComponent.scss";
import moment from "moment";
import TextArea from "antd/lib/input/TextArea";
import { isValidateFileType } from "../../Utils/DocumentValidator";
import { DocType } from "../../Definitions/Enums/document.type";
import { useConnection } from "../../Context/ConnectionContext/connectionContext";
import { getBase64 } from "../../Definitions/Definitions/programme.definitions";
import { RcFile } from "antd/lib/upload";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import GetMultipleLocationsMapComponent from "../Maps/GetMultipleLocationsMapComponent";
import { Loading } from "../Loading/loading";
=======
  FileDoneOutlined,
  FilePdfOutlined,
} from '@ant-design/icons';
import './ProgrammeCreationComponent.scss';
import moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';
import { isValidateFileType } from '../../Utils/DocumentValidator';
import { DocType } from '../../Definitions/Enums/document.type';
import { useConnection } from '../../Context/ConnectionContext/connectionContext';
import { getBase64 } from '../../Definitions/Definitions/programme.definitions';
import { RcFile } from 'antd/lib/upload';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import GetMultipleLocationsMapComponent from '../Maps/GetMultipleLocationsMapComponent';
import { Loading } from '../Loading/loading';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isPossiblePhoneNumber,
<<<<<<< HEAD
} from "react-phone-number-input";
import InfDocumentInformation from "./infDocumentInfo";
import { CompanyRole } from "../../Definitions/Enums/company.role.enum";
import { API_PATHS } from "../../Config/apiConfig";
import { ROUTES } from "../../Config/uiRoutingConfig";
import { SectoralScope } from "../../Definitions/Enums/sectoralScope.enum";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import ConfirmSubmitSVG from "../../Assets/DialogIcons/ConfirmSubmit.svg";
import { DocumentEnum } from "../../Definitions/Enums/document.enum";
import { FormMode } from "../../Definitions/Enums/formMode.enum";
import { mapBase64ToFields } from "../../Utils/mapBase64ToFields";
import validator from "validator";
import { toMoment } from "../../Utils/convertTime";
import { defaultTimeout } from "../../Definitions/Constants/defaultTimeout";


const maximumImageSize = import.meta.env.VITE_APP_MAXIMUM_FILE_SIZE
  ? parseInt(import.meta.env.VITE_APP_MAXIMUM_FILE_SIZE)
  : 5000000;

export const PROJECT_GEOGRAPHY: { [key: string]: string } = {
  SINGLE: "Single Location",
  MULTIPLE: "Scattered in multiple locations",
};

const PROJECT_STATUS: { [key: string]: string } = {
  PROPOSAL_STAGE: "Proposal Stage",
  PROCUREMENT_STAGE: "Procurement",
  CONSTRUCTION_STAGE: "Construction",
  INSTALLATION_STAGE: "Installation",
};

export const PURPOSE_CREDIT_DEVELOPMENT: { [key: string]: string } = {
  TRACK_1: "Track 1",
  TRACK_2: "Track 2",
};

export const INF_SECTOR: { [key: string]: string } = {
  ENERGY: "Energy",
  AGRICULTURE: "Agriculture",
  HEALTH: "Health",
  EDUCATION: "Education",
  TRANSPORT: "Transport",
  MANUFACTURING: "Manufacturing",
  HOSPITALITY: "Hospitality",
  FORESTRY: "Forestry",
  WASTE: "Waste",
  OTHER: "Other",
};

export const INF_SECTORAL_SCOPE: { [key: string]: string } = {
  ENERGY_INDUSTRIES: "Energy Industries (Renewable – / Non-Renewable Sources) ",
  ENERGY_DISTRIBUTION: "Energy Distribution",
  ENERGY_DEMAND: "Energy Demand",
  AGRICULTURE: "Agriculture",
  AFFORESTATION_AND_REFORESTATION: "Afforestation and Reforestation",
  MANUFACTURING_INDUSTRIES: "Manufacturing Industries",
  CHEMICAL_INDUSTRIES: "Chemical Industries",
  METAL_PRODUCTION: "Metal Production",
  TRANSPORT: "Transport",
  WASTE_FROM_FUELS: "Fugitive Emissions from Fuels (Solid, Oil and Gas) ",
  WASTE_HANDLING_AND_DISPOSAL: "Waste Handling and Disposal",
  CONSTRUCTION: "Construction",
  MINING_MINERAL_PRODUCTION: "Mining/Mineral Production",
  FUGITIVE_EMISSIONS_PRODUCTION:
    "Fugitive Emissions from Production and Consumption of Halocarbons and Sulphur Hexafluoride",
  SOLVENT_USE: "Solvent Use",
};

export const SECTOR_TO_SCOPES_MAP: { [key: string]: string[] } = {
  ENERGY: ["ENERGY_INDUSTRIES", "ENERGY_DISTRIBUTION", "ENERGY_DEMAND"],
  AGRICULTURE: ["AGRICULTURE"],
  FORESTRY: ["AFFORESTATION_AND_REFORESTATION"],
  MANUFACTURING: [
    "MANUFACTURING_INDUSTRIES",
    "CHEMICAL_INDUSTRIES",
    "METAL_PRODUCTION",
  ],
  TRANSPORT: ["TRANSPORT"],
  WASTE: ["WASTE_HANDLING_AND_DISPOSAL", "WASTE_FROM_FUELS"],
  OTHER: [
    "CONSTRUCTION",
    "MINING_MINERAL_PRODUCTION",
    "FUGITIVE_EMISSIONS_PRODUCTION",
    "SOLVENT_USE",
=======
} from 'react-phone-number-input';
import InfDocumentInformation from './infDocumentInfo';
import { CompanyRole } from '../../Definitions/Enums/company.role.enum';
import { API_PATHS } from '../../Config/apiConfig';
import { ROUTES } from '../../Config/uiRoutingConfig';
import { SectoralScope } from '../../Definitions/Enums/sectoralScope.enum';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';
import { ReactComponent as ConfirmSubmitSVG } from '../../Assets/DialogIcons/ConfirmSubmit.svg';

import { DocumentEnum } from '../../Definitions/Enums/document.enum';
import { FormMode } from '../../Definitions/Enums/formMode.enum';
import { mapBase64ToFields } from '../../Utils/mapBase64ToFields';
import validator from 'validator';
import { toMoment } from '../../Utils/convertTime';
import * as Icon from 'react-bootstrap-icons';
import { COLOR_CONFIGS } from '../../Config/colorConfigs';

type SizeType = Parameters<typeof Form>[0]['size'];

const maximumImageSize = process.env.REACT_APP_MAXIMUM_FILE_SIZE
  ? parseInt(process.env.REACT_APP_MAXIMUM_FILE_SIZE)
  : 5000000;

export const PROJECT_GEOGRAPHY: { [key: string]: string } = {
  SINGLE: 'Single Location',
  MULTIPLE: 'Scattered in multiple locations',
};

const PROJECT_CATEGORIES: { [key: string]: string } = {
  RENEWABLE_ENERGY: 'Renewable Energy',
  AFFORESTATION: 'Afforestation',
  REFORESTATION: 'Reforestation',
  OTHER: 'Other',
};

const PROJECT_STATUS: { [key: string]: string } = {
  PROPOSAL_STAGE: 'Proposal Stage',
  PROCUREMENT_STAGE: 'Procurement',
  CONSTRUCTION_STAGE: 'Construction',
  INSTALLATION_STAGE: 'Installation',
};

export const PURPOSE_CREDIT_DEVELOPMENT: { [key: string]: string } = {
  TRACK_1: 'Track 1',
  TRACK_2: 'Track 2',
};

export const INF_SECTOR: { [key: string]: string } = {
  ENERGY: 'Energy',
  AGRICULTURE: 'Agriculture',
  HEALTH: 'Health',
  EDUCATION: 'Education',
  TRANSPORT: 'Transport',
  MANUFACTURING: 'Manufacturing',
  HOSPITALITY: 'Hospitality',
  FORESTRY: 'Forestry',
  WASTE: 'Waste',
  OTHER: 'Other',
};

export const INF_SECTORAL_SCOPE: { [key: string]: string } = {
  ENERGY_INDUSTRIES: 'Energy Industries (Renewable – / Non-Renewable Sources) ',
  ENERGY_DISTRIBUTION: 'Energy Distribution',
  ENERGY_DEMAND: 'Energy Demand',
  AGRICULTURE: 'Agriculture',
  AFFORESTATION_AND_REFORESTATION: 'Afforestation and Reforestation',
  MANUFACTURING_INDUSTRIES: 'Manufacturing Industries',
  CHEMICAL_INDUSTRIES: 'Chemical Industries',
  METAL_PRODUCTION: 'Metal Production',
  TRANSPORT: 'Transport',
  WASTE_FROM_FUELS: 'Fugitive Emissions from Fuels (Solid, Oil and Gas) ',
  WASTE_HANDLING_AND_DISPOSAL: 'Waste Handling and Disposal',
  CONSTRUCTION: 'Construction',
  MINING_MINERAL_PRODUCTION: 'Mining/Mineral Production',
  FUGITIVE_EMISSIONS_PRODUCTION:
    'Fugitive Emissions from Production and Consumption of Halocarbons and Sulphur Hexafluoride',
  SOLVENT_USE: 'Solvent Use',
};

export const SECTOR_TO_SCOPES_MAP: { [key: string]: string[] } = {
  ENERGY: ['ENERGY_INDUSTRIES', 'ENERGY_DISTRIBUTION', 'ENERGY_DEMAND'],
  AGRICULTURE: ['AGRICULTURE'],
  FORESTRY: ['AFFORESTATION_AND_REFORESTATION'],
  MANUFACTURING: ['MANUFACTURING_INDUSTRIES', 'CHEMICAL_INDUSTRIES', 'METAL_PRODUCTION'],
  TRANSPORT: ['TRANSPORT'],
  WASTE: ['WASTE_HANDLING_AND_DISPOSAL', 'WASTE_FROM_FUELS'],
  OTHER: [
    'CONSTRUCTION',
    'MINING_MINERAL_PRODUCTION',
    'FUGITIVE_EMISSIONS_PRODUCTION',
    'SOLVENT_USE',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  ],
};

export const ProgrammeCreationComponent = (props: any) => {
  const { translator } = props;
  const [current, setCurrent] = useState<number>(0);
  const navigate = useNavigate();

  const { id } = useParams();
  const { state } = useLocation();

  const { post, get } = useConnection();
  const [form] = Form.useForm();
<<<<<<< HEAD
=======
  // const [values, setValues] = useState<any>(undefined);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

  const [disableFields, setDisableFields] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

<<<<<<< HEAD
  const [isMultipleLocations, setIsMultipleLocations] =
    useState<boolean>(false);
=======
  const [isMultipleLocations, setIsMultipleLocations] = useState<boolean>(false);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

  const [provinces, setProvinces] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [independentCertifiers, setIndependentCertifiers] = useState<any[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [postalCodes, setPostalCodes] = useState<string[]>([]);
  const [countries, setCountries] = useState<[]>([]);
  const [isCountryListLoading, setIsCountryListLoading] = useState(false);
  const [organizationsLoading, setOrganizationsLoading] = useState(false);
  const [selectedSector, setSelectedSector] = useState<string>();
  const [formValues, setFormValues] = useState<any>(undefined);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const closeDialog = () => {
    setShowDialog(false);
  };

  const getProvinces = async () => {
    try {
      const { data } = await post(API_PATHS.PROVINCES);
<<<<<<< HEAD
      const tempProvinces = data.map(
        (provinceData: any) => provinceData.provinceName
      );
=======
      const tempProvinces = data.map((provinceData: any) => provinceData.provinceName);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      setProvinces(tempProvinces);
    } catch (error) {
      console.log(error);
    }
  };

  const getDistricts = async (provinceName: string) => {
    try {
      const { data } = await post(API_PATHS.DISTRICTS, {
        filterAnd: [
          {
<<<<<<< HEAD
            key: "provinceName",
            operation: "=",
=======
            key: 'provinceName',
            operation: '=',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            value: provinceName,
          },
        ],
      });
<<<<<<< HEAD
      const tempDistricts = data.map(
        (districtData: any) => districtData.districtName
      );
=======
      const tempDistricts = data.map((districtData: any) => districtData.districtName);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      setDistricts(tempDistricts);
    } catch (error) {
      console.log(error);
    }
  };

  const getCities = async (division?: string) => {
    try {
      const { data } = await post(API_PATHS.CITIES, {
        filterAnd: [
          {
<<<<<<< HEAD
            key: "districtName",
            operation: "=",
=======
            key: 'districtName',
            operation: '=',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            value: division,
          },
        ],
      });

      const tempCities = data.map((cityData: any) => cityData.cityName);
      setCities(tempCities);
    } catch (error) {
      console.log(error);
    }
  };

  const getPostalCodes = async (city?: string) => {
    try {
      const { data } = await post(API_PATHS.POSTALCODE, {
        filterAnd: [
          {
<<<<<<< HEAD
            key: "cityName",
            operation: "=",
=======
            key: 'cityName',
            operation: '=',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            value: city,
          },
        ],
      });

      const tempPcs = data.map((pcData: any) => pcData.postalCode);
      setPostalCodes(tempPcs);
    } catch (error) {
      console.log(error);
    }
  };

  const getCountryList = async () => {
    setIsCountryListLoading(true);
    try {
      const response = await get(API_PATHS.COUNTRIES);
      if (response.data) {
        const alpha2Names = response.data.map((item: any) => {
          return item.alpha2;
        });
        setCountries(alpha2Names);
      }
    } catch (error: any) {
<<<<<<< HEAD
      console.log("Error in getCountryList", error);
      message.open({
        type: "error",
        content: `${error.message}`,
        duration: 3,
        style: { textAlign: "right", marginRight: 15, marginTop: 10 },
=======
      console.log('Error in getCountryList', error);
      message.open({
        type: 'error',
        content: `${error.message}`,
        duration: 3,
        style: { textAlign: 'right', marginRight: 15, marginTop: 10 },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      });
    } finally {
      setIsCountryListLoading(false);
    }
  };

  const getIndependentCertifiers = async () => {
    setOrganizationsLoading(true);
    try {
      const response = await post(API_PATHS.ORGANIZATION_BY_TYPE, {
        companyRole: CompanyRole.INDEPENDENT_CERTIFIER,
      });
      if (response.data) {
<<<<<<< HEAD
        const activeCertifiers = response.data.filter(
          (item: any) => item.state === "1"
        );
        setIndependentCertifiers(activeCertifiers);
      }
    } catch (error: any) {
      console.log("Error in getCountryList", error);
      message.open({
        type: "error",
        content: `${error.message}`,
        duration: 3,
        style: { textAlign: "right", marginRight: 15, marginTop: 10 },
=======
        setIndependentCertifiers(response.data);
      }
    } catch (error: any) {
      console.log('Error in getCountryList', error);
      message.open({
        type: 'error',
        content: `${error.message}`,
        duration: 3,
        style: { textAlign: 'right', marginRight: 15, marginTop: 10 },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      });
    } finally {
      setOrganizationsLoading(false);
    }
  };

  const getOrganizationDetails = async () => {
    try {
      setLoading(true);
      const { data } = await get(API_PATHS.USER_PROFILE_DETAILS);
      if (data && data?.Organisation) {
        form.setFieldsValue({
          projectParticipant: data?.Organisation?.name,
          contactAddress: data?.Organisation?.address,
          contactEmail: data?.Organisation?.email,
          contactWebsite: data?.Organisation?.website,
          contactPhoneNo: data?.Organisation?.phoneNo,
          contactFax: data?.Organisation?.faxNo,
          contactName: data?.user?.name,
        });
      }
    } catch (error) {
<<<<<<< HEAD
      console.log("Error in getOrganizationDetails", error);
=======
      console.log('Error in getOrganizationDetails', error);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    } finally {
      setLoading(false);
    }
  };

  const navigateToProjectDetailsPageOnView = () => {
    if (id) {
      navigate(ROUTES.PROGRAMME_DETAILS_BY_ID(String(id)));
    }
  };

  useEffect(() => {
    if (state?.mode === null || state?.mode === undefined) {
      getProvinces();
      getCountryList();
      getIndependentCertifiers();
      getOrganizationDetails();
    }
  }, []);

  const onProvinceSelect = async (value: any) => {
    getDistricts(value);
    try {
    } catch (error) {}
  };

  const onDistrictSelect = (value: string) => {
    getCities(value);
  };
  const onCitySelect = (value: string) => {
    getPostalCodes(value);
  };

  const onGeographyOfProjectSelect = (value: string) => {
<<<<<<< HEAD
    if (value === "MULTIPLE") {
=======
    if (value === 'MULTIPLE') {
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      setIsMultipleLocations(true);
    } else {
      setIsMultipleLocations(false);
    }
  };

<<<<<<< HEAD
=======
  // const onProjectCategorySelect = (value: string) => {
  //   setProjectCategory(value);
  // };

>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const hasValidScopes =
    selectedSector &&
    Array.isArray(SECTOR_TO_SCOPES_MAP[selectedSector]) &&
    SECTOR_TO_SCOPES_MAP[selectedSector].length > 0;

  const t = translator.t;

  useEffect(() => {
    const getViewData = async () => {
      setLoading(true);
<<<<<<< HEAD
      let documentData: any;
      let projectData: any;

      try {
        const res = await post(API_PATHS.QUERY_DOCUMENT, {
          refId: state?.documentId,
          documentType: DocumentEnum.INF,
        });

        if (res?.statusText === "SUCCESS") {
          documentData = res?.data?.data;
        }
      } catch (error) {
        console.log("----------error-----------", error);
      } finally {
        setLoading(false);
      }

      try {
        const res = await post(API_PATHS.PROGRAMME_BY_ID, {
          programmeId: id,
        });

        if (res?.statusText === "SUCCESS") {
          projectData = res?.data;
          console.log(
            "----------projectData----------",
            projectData.independentCertifiers,
            projectData.independentCertifiers.join(",")
          );
        }
      } catch (error) {
        console.log("----------error project data-----------", error);
      }

      // ✅ Format sectoral scope string from "ENERGY_DEMAND" to "Energy Demand"
      const formatScope = (value: string | undefined): string => {
        if (!value) return "";
        if (value.toUpperCase() === "N/A") return "NA";
        return INF_SECTORAL_SCOPE[value.toUpperCase()] || value; // Fallback to original value if key not found
      };

      if (documentData && projectData) {
        const viewData = {
          ...documentData,
          briefProjectDescription: documentData.projectDescription,
          optionalDocuments: mapBase64ToFields(
            documentData?.additionalDocuments
          ),
          projectLocation: documentData.geographicalLocationCoordinates,
          startTime: toMoment(documentData?.startDate),
          independentCertifiers: projectData?.independentCertifiers?.join(","),
          sectoralScope: formatScope(documentData?.sectoralScope),
        };

        form.setFieldsValue(viewData);
      }
    };

    if (state?.mode === FormMode.VIEW && state?.documentId) {
      setDisableFields(true);
      getViewData();
    }
=======
      try {
        if (state?.mode === FormMode.VIEW && state?.documentId) {
          setDisableFields(true);
          const res = await post(API_PATHS.QUERY_DOCUMENT, {
            refId: state?.documentId,
            documentType: DocumentEnum.INF,
          });

          if (res?.statusText === 'SUCCESS') {
            const data = res?.data?.data;
            const formatScope = (value: string | undefined): string => {
              if (!value) return '';
              if (value.toUpperCase() === 'N/A') return 'NA';
              return INF_SECTORAL_SCOPE[value.toUpperCase()] || value;
            };
            console.log('-----------view data-----------', data);
            const viewData = {
              ...data,
              briefProjectDescription: data.projectDescription,
              optionalDocuments: mapBase64ToFields(data?.additionalDocuments),
              projectLocation: data.geographicalLocationCoordinates,
              startTime: toMoment(data?.startDate),
              sectoralScope: formatScope(data?.sectoralScope),
            };
            form.setFieldsValue(viewData);
          }
        }
      } catch (error) {
        console.log('----------error-----------');
      } finally {
        setLoading(false);
      }
    };
    getViewData();
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  }, []);

  const submitForm = async (values: any) => {
    const base64Docs: string[] = [];
<<<<<<< HEAD
=======
    console.log('---------optional docs----------', values?.optionalDocuments);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

    if (values?.optionalDocuments && values?.optionalDocuments.length > 0) {
      const docs = values.optionalDocuments;
      for (let i = 0; i < docs.length; i++) {
        const temp = await getBase64(docs[i]?.originFileObj as RcFile);
        base64Docs.push(temp); // No need for Promise.resolve
      }
    }

    const body: any = {
      title: values?.title,
      sector: values?.sector,
<<<<<<< HEAD
      sectoralScope:
        values?.sectoralScope === "NA" ? "N/A" : values?.sectoralScope,
      province: values?.province || "test",
      district: values?.district || "test",
      city: values?.city || "test",
=======
      sectoralScope: values?.sectoralScope,
      province: values?.province || 'test',
      district: values?.district || 'test',
      city: values?.city || 'test',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      postalCode: values?.postalCode,
      street: values?.street,
      geographicalLocationCoordinates: values?.projectLocation,
      projectGeography: values?.projectGeography,
      estimatedProjectCost: values?.estimatedProjectCost,
      proposedProjectCapacity: values?.projectCapacity,
      projectStatusDescription: values?.projectStatusDescription,
      speciesPlanted: values?.speciesPlanted,
      projectDescription: values?.briefProjectDescription,
      projectStatus: values?.projectStatus,
<<<<<<< HEAD
      startDate: moment(values?.startTime).startOf("day").unix(),
=======
      startDate: moment(values?.startTime).startOf('day').unix(),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      additionalDocuments: base64Docs,
      contactName: values?.contactName,
      projectParticipant: values?.projectParticipant,
      contactFax: formatPhoneNumberIntl(values?.contactFax),
      contactAddress: values?.contactAddress,
      contactWebsite: values?.contactWebsite,
      contactEmail: values?.contactEmail,
      contactPhoneNo: formatPhoneNumberIntl(values?.contactPhoneNo),
      independentCertifiers: values?.independentCertifiers,
    };

    setLoading(true);
    try {
      const tempValues = {
        ...{
<<<<<<< HEAD
          name: "INF",
=======
          name: 'INF',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          documentType: DocumentEnum.INF,
        },
        data: {
          ...body,
        },
      };
<<<<<<< HEAD
      const res = await post(API_PATHS.ADD_DOCUMENT, tempValues);
      if (res?.statusText === "SUCCESS") {
        console.log("-------timeout-----------");
        message.open({
          type: "success",
          content: t("addProgramme:programmeCreationSuccess"),
          duration: 4,
          style: { textAlign: "right", marginRight: 15, marginTop: 10 },
        });
        setTimeout(() => {
          navigate(ROUTES.VIEW_PROGRAMMES);
          setLoading(false);
        }, defaultTimeout);
=======
      console.log('-------------temp vals INF-----------', tempValues);
      const res = await post(API_PATHS.ADD_DOCUMENT, tempValues);
      if (res?.statusText === 'SUCCESS') {
        message.open({
          type: 'success',
          content: t('addProgramme:programmeCreationSuccess'),
          duration: 4,
          style: { textAlign: 'right', marginRight: 15, marginTop: 10 },
        });
        navigate(ROUTES.VIEW_PROGRAMMES);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      }
    } catch (error: any) {
      if (error && error.errors && error.errors.length > 0) {
        error.errors.forEach((err: any) => {
          Object.keys(err).forEach((field) => {
<<<<<<< HEAD
            console.log(`Error in ${field}: ${err[field].join(", ")}`);
            message.open({
              type: "error",
              content: err[field].join(", "),
              duration: 4,
              style: { textAlign: "right", marginRight: 15, marginTop: 10 },
=======
            console.log(`Error in ${field}: ${err[field].join(', ')}`);
            message.open({
              type: 'error',
              content: err[field].join(', '),
              duration: 4,
              style: { textAlign: 'right', marginRight: 15, marginTop: 10 },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            });
          });
        });
      } else {
        message.open({
<<<<<<< HEAD
          type: "error",
          content: error?.message,
          duration: 4,
          style: { textAlign: "right", marginRight: 15, marginTop: 10 },
        });
        setLoading(false);
      }
=======
          type: 'error',
          content: error?.message,
          duration: 4,
          style: { textAlign: 'right', marginRight: 15, marginTop: 10 },
        });
      }
    } finally {
      setLoading(false);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="add-programme-main-container">
      <div className="title-container">
<<<<<<< HEAD
        <div className="main">
          {t("addProgramme:initalNotificationFormTitle")}
        </div>
=======
        <div className="main">{t('addProgramme:initalNotificationFormTitle')}</div>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      </div>
      <div className="adding-section">
        <div className="form-section">
          <Steps
            progressDot
            direction="vertical"
            current={current}
            items={[
              {
                title: (
                  <div className="step-title-container">
<<<<<<< HEAD
                    <div className="title">
                      {t("addProgramme:projectDetails")}
                    </div>
=======
                    <div className="title">{t('addProgramme:projectDetails')}</div>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                  </div>
                ),
                description: current === 0 && (
                  <div className="programme-details-form-container">
                    <div className="programme-details-form">
                      <ConfirmDialog
                        showDialog={showDialog}
<<<<<<< HEAD
                        Icon={ConfirmSubmitSVG}
                        message={t("addProgramme:confirmModalMessage")}
                        subMessage={t("addProgramme:confirmModalSubMessage")}
                        okText={t("common:yes")}
                        cancelText={t("common:no")}
=======
                        Icon={<FileDoneOutlined />}
                        message={t('addProgramme:confirmModalMessage')}
                        subMessage={t('addProgramme:confirmModalSubMessage')}
                        okText={t('common:yes')}
                        cancelText={t('common:no')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        okAction={() => {
                          closeDialog();
                          submitForm(formValues);
                        }}
                        closeDialog={closeDialog}
                        isReject={false}
                      />
                      <Form
                        labelCol={{ span: 20 }}
                        wrapperCol={{ span: 24 }}
                        name="programme-details"
                        className="programme-details-form"
                        layout="vertical"
                        requiredMark={true}
                        form={form}
                        onFinish={(values) => {
                          setShowDialog(true);
                          setFormValues(values);
                        }}
                      >
                        <Row className="row" gutter={[40, 16]}>
                          <Col xl={12} md={24}>
                            <div className="details-part-one">
                              <Form.Item
<<<<<<< HEAD
                                label={t("addProgramme:title")}
=======
                                label={t('addProgramme:title')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="title"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: "",
=======
                                    message: '',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                  {
                                    validator: async (rule, value) => {
                                      if (
<<<<<<< HEAD
                                        String(value).trim() === "" ||
=======
                                        String(value).trim() === '' ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        String(value).trim() === undefined ||
                                        value === null ||
                                        value === undefined
                                      ) {
                                        throw new Error(
<<<<<<< HEAD
                                          `${t("addProgramme:title")} ${t(
                                            "isRequired"
                                          )}`
=======
                                          `${t('addProgramme:title')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        );
                                      }
                                    },
                                  },
                                ]}
                              >
                                <Input size="large" disabled={disableFields} />
                              </Form.Item>

                              <Form.Item
<<<<<<< HEAD
                                label={t("addProgramme:sector")}
=======
                                label={t('addProgramme:sector')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="sector"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: "",
=======
                                    message: '',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                  {
                                    validator: async (rule, value) => {
                                      if (
<<<<<<< HEAD
                                        String(value).trim() === "" ||
=======
                                        String(value).trim() === '' ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        String(value).trim() === undefined ||
                                        value === null ||
                                        value === undefined
                                      ) {
                                        throw new Error(
<<<<<<< HEAD
                                          `${t("addProgramme:sector")} ${t(
                                            "isRequired"
                                          )}`
=======
                                          `${t('addProgramme:sector')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        );
                                      }
                                    },
                                  },
                                ]}
                              >
                                <Select
                                  size="large"
<<<<<<< HEAD
                                  placeholder={t(
                                    "addProgramme:sectorPlaceholder"
                                  )}
                                  disabled={disableFields}
                                  onChange={(value) => {
                                    setSelectedSector(value);
                                    const hasScopes =
                                      SECTOR_TO_SCOPES_MAP[value]?.length > 0;
                                    form.setFieldsValue({
                                      sectoralScope: hasScopes
                                        ? undefined
                                        : "NA",
=======
                                  placeholder={t('addProgramme:sectorPlaceholder')}
                                  disabled={disableFields}
                                  onChange={(value) => {
                                    setSelectedSector(value);
                                    const hasScopes = SECTOR_TO_SCOPES_MAP[value]?.length > 0;
                                    form.setFieldsValue({
                                      sectoralScope: hasScopes ? undefined : 'NA',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    });
                                  }}
                                >
                                  {Object.keys(INF_SECTOR).map((key) => (
                                    <Select.Option key={key} value={key}>
                                      {INF_SECTOR[key]}
                                    </Select.Option>
                                  ))}
                                </Select>
                              </Form.Item>

                              <Form.Item
<<<<<<< HEAD
                                label={t("addProgramme:sectoralScope")}
=======
                                label={t('addProgramme:sectoralScope')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="sectoralScope"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: "",
=======
                                    message: '',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                  {
                                    validator: async (rule, value) => {
                                      if (
<<<<<<< HEAD
                                        String(value).trim() === "" ||
=======
                                        String(value).trim() === '' ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        String(value).trim() === undefined ||
                                        value === null ||
                                        value === undefined
                                      ) {
                                        throw new Error(
<<<<<<< HEAD
                                          `${t(
                                            "addProgramme:sectoralScope"
                                          )} ${t("isRequired")}`
=======
                                          `${t('addProgramme:sectoralScope')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        );
                                      }
                                    },
                                  },
                                ]}
                              >
                                <Select
                                  size="large"
<<<<<<< HEAD
                                  placeholder={t(
                                    "addProgramme:sectoralScopePlaceholder"
                                  )}
                                  disabled={disableFields || !hasValidScopes}
                                >
                                  {(hasValidScopes
                                    ? SECTOR_TO_SCOPES_MAP[selectedSector]
                                    : []
                                  ).map((key) => (
                                    <Select.Option key={key} value={key}>
                                      {INF_SECTORAL_SCOPE[key]}
                                    </Select.Option>
                                  ))}
                                </Select>
                              </Form.Item>

                              <Form.Item
                                label={t("addProgramme:province")}
=======
                                  placeholder={t('addProgramme:sectoralScopePlaceholder')}
                                  disabled={disableFields || !hasValidScopes}
                                >
                                  {(hasValidScopes ? SECTOR_TO_SCOPES_MAP[selectedSector] : []).map(
                                    (key) => (
                                      <Select.Option key={key} value={key}>
                                        {INF_SECTORAL_SCOPE[key]}
                                      </Select.Option>
                                    )
                                  )}
                                </Select>
                              </Form.Item>

                              {/* <Row justify="space-between">
                                <Col span={24}>
                                  <Form.Item
                                    label={t('addProgramme:projectCategory')}
                                    name="projectCategory"
                                    rules={[
                                      {
                                        required: true,
                                        message: `${t('addProgramme:projectCategory')}`,
                                      },
                                    ]}
                                  >
                                    <Select size="large" onChange={onProjectCategorySelect}>
                                      {Object.keys(PROJECT_CATEGORIES).map((category: string) => (
                                        <Select.Option value={category}>
                                          {PROJECT_CATEGORIES[category]}
                                        </Select.Option>
                                      ))}
                                    </Select>
                                  </Form.Item>
                                </Col>
                                {projectCategory === 'OTHER' && (
                                  <Col span={14}>
                                    <Form.Item
                                      label={t('addProgramme:otherCategory')}
                                      name="otherCategory"
                                      rules={[
                                        {
                                          required: true,
                                          message: `${t('addProgramme:otherCategory')} ${t(
                                            'isRequired'
                                          )}`,
                                        },
                                      ]}
                                    >
                                      <Input size="large" />
                                    </Form.Item>
                                  </Col>
                                )}
                              </Row> */}

                              {/* {(projectCategory === 'AFFORESTATION' ||
                                projectCategory === 'REFORESTATION') && (
                                <>
                                  <Form.Item
                                    label={t('addProgramme:landExtent')}
                                    name="landExtent"
                                    className="landList-input"
                                    tooltip={{
                                      title: `${t('addProgramme:landExtentAndSpeciesPlantedInfo')}`,
                                      icon: (
                                        <InfoCircleOutlined
                                          style={{ color: 'rgba(58, 53, 65, 0.5)' }}
                                        />
                                      ),
                                      placement: 'topLeft',
                                    }}
                                    rules={[
                                      {
                                        required: true,
                                        message: `${t('addProgramme:landExtent')} ${t(
                                          'isRequired'
                                        )}`,
                                      },
                                      {
                                        validator(rule, value) {
                                          if (!value) {
                                            return Promise.resolve();
                                          }

                                          // eslint-disable-next-line no-restricted-globals
                                          if (isNaN(value)) {
                                            return Promise.reject(
                                              new Error('Land Extent should be an number')
                                            );
                                          }

                                          return Promise.resolve();
                                        },
                                      },
                                    ]}
                                  >
                                    <Input size="large" addonAfter="ha" />
                                  </Form.Item>
                                  <p>{isMultipleLocations}</p>
                                  {isMultipleLocations && (
                                    <>
                                      <Form.List name="landList">
                                        {(fields, { add, remove }) => (
                                          <>
                                            {fields.map(({ key, name, ...restField }) => (
                                              <div className="landList">
                                                <Form.Item
                                                  {...restField}
                                                  name={[name, 'land']}
                                                  label={t('addProgramme:landExtent')}
                                                  // wrapperCol={{ span: 22 }}
                                                  className="landList-input"
                                                  tooltip={{
                                                    title: `${t(
                                                      'addProgramme:landExtentAndSpeciesPlantedInfo'
                                                    )}`,
                                                    icon: (
                                                      <InfoCircleOutlined
                                                        style={{ color: 'rgba(58, 53, 65, 0.5)' }}
                                                      />
                                                    ),
                                                  }}
                                                  rules={[
                                                    {
                                                      required: true,
                                                      message: `${t('addProgramme:landExtent')} ${t(
                                                        'isRequired'
                                                      )}`,
                                                    },
                                                    {
                                                      validator(rule, value) {
                                                        if (!value) {
                                                          return Promise.resolve();
                                                        }

                                                        // eslint-disable-next-line no-restricted-globals
                                                        if (isNaN(value)) {
                                                          return Promise.reject(
                                                            new Error(
                                                              'Land Extent should be an number'
                                                            )
                                                          );
                                                        }

                                                        return Promise.resolve();
                                                      },
                                                    },
                                                  ]}
                                                >
                                                  <Input size="large" addonAfter="ha" />
                                                </Form.Item>
                                                <Form.Item>
                                                  <Button
                                                    type="dashed"
                                                    onClick={() => remove(name)}
                                                    className="addMinusBtn"
                                                    icon={<MinusOutlined />}
                                                  ></Button>
                                                </Form.Item>
                                              </div>
                                            ))}
                                            <Form.Item>
                                              <Button
                                                type="dashed"
                                                onClick={() => {
                                                  add();
                                                }}
                                                size="large"
                                                className="addMinusBtn"
                                                // block
                                                icon={<PlusOutlined />}
                                              ></Button>
                                            </Form.Item>
                                          </>
                                        )}
                                      </Form.List>
                                    </>
                                  )}
                                </>
                              )} */}

                              {/* {(projectCategory === 'AFFORESTATION' ||
                                projectCategory === 'REFORESTATION') && (
                                <>
                                  <Form.Item
                                    label={t('addProgramme:speciesPlanted')}
                                    name="speciesPlanted"
                                    tooltip={{
                                      title: `${t('addProgramme:landExtentAndSpeciesPlantedInfo')}`,
                                      icon: (
                                        <InfoCircleOutlined
                                          style={{ color: 'rgba(58, 53, 65, 0.5)' }}
                                        />
                                      ),
                                    }}
                                    rules={[
                                      {
                                        required: true,
                                        message: `${t('addProgramme:speciesPlanted')} ${t(
                                          'isRequired'
                                        )}`,
                                      },
                                    ]}
                                  >
                                    <Input size="large" />
                                  </Form.Item>
                                </>
                              )} */}

                              <Form.Item
                                label={t('addProgramme:province')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="province"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: `${t("addProgramme:province")} ${t(
                                      "isRequired"
                                    )}`,
=======
                                    message: `${t('addProgramme:province')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                ]}
                              >
                                <Select
                                  size="large"
                                  onChange={onProvinceSelect}
<<<<<<< HEAD
                                  placeholder={t(
                                    "addProgramme:provincePlaceholder"
                                  )}
                                  disabled={disableFields}
                                >
                                  {provinces.map(
                                    (province: string, index: number) => (
                                      <Select.Option value={province}>
                                        {province}
                                      </Select.Option>
                                    )
                                  )}
=======
                                  placeholder={t('addProgramme:provincePlaceholder')}
                                  disabled={disableFields}
                                >
                                  {provinces.map((province: string, index: number) => (
                                    <Select.Option value={province}>{province}</Select.Option>
                                  ))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                </Select>
                              </Form.Item>

                              <Form.Item
<<<<<<< HEAD
                                label={t("addProgramme:district")}
=======
                                label={t('addProgramme:district')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="district"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: `${t("addProgramme:district")} ${t(
                                      "isRequired"
                                    )}`,
=======
                                    message: `${t('addProgramme:district')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                ]}
                              >
                                <Select
                                  size="large"
<<<<<<< HEAD
                                  placeholder={t(
                                    "addProgramme:districtPlaceholder"
                                  )}
                                  onSelect={onDistrictSelect}
                                  disabled={disableFields}
                                >
                                  {districts?.map(
                                    (district: string, index: number) => (
                                      <Select.Option key={district}>
                                        {district}
                                      </Select.Option>
                                    )
                                  )}
                                </Select>
                              </Form.Item>
                            
                              <Form.Item
                                label={t("addProgramme:city")}
=======
                                  placeholder={t('addProgramme:districtPlaceholder')}
                                  onSelect={onDistrictSelect}
                                  disabled={disableFields}
                                >
                                  {districts?.map((district: string, index: number) => (
                                    <Select.Option key={district}>{district}</Select.Option>
                                  ))}
                                </Select>
                              </Form.Item>
                              {/* <Form.Item
                                label={t('addProgramme:dsDivision')}
                                name="dsDivision"
                                rules={[
                                  {
                                    required: true,
                                    message: `${t('addProgramme:dsDivision')} ${t('isRequired')}`,
                                  },
                                ]}
                              >
                                <Select
                                  size="large"
                                  placeholder={t('addProgramme:dsDivisionPlaceholder')}
                                  onSelect={onDivisionSelect}
                                >
                                  {dsDivisions.map((division: string) => (
                                    <Select.Option value={division}>{division}</Select.Option>
                                  ))}
                                </Select>
                              </Form.Item> */}
                              <Form.Item
                                label={t('addProgramme:city')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="city"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: `${t("addProgramme:city")} ${t(
                                      "isRequired"
                                    )}`,
=======
                                    message: `${t('addProgramme:city')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                ]}
                              >
                                <Select
                                  size="large"
<<<<<<< HEAD
                                  placeholder={t(
                                    "addProgramme:cityPlaceholder"
                                  )}
=======
                                  placeholder={t('addProgramme:cityPlaceholder')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  onSelect={onCitySelect}
                                  disabled={disableFields}
                                >
                                  {cities.map((city: string) => (
<<<<<<< HEAD
                                    <Select.Option value={city}>
                                      {city}
                                    </Select.Option>
=======
                                    <Select.Option value={city}>{city}</Select.Option>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  ))}
                                </Select>
                              </Form.Item>
                              <Form.Item
<<<<<<< HEAD
                                label={t("addProgramme:postalCode")}
=======
                                label={t('addProgramme:postalCode')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="postalCode"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: `${t(
                                      "addProgramme:postalCode"
                                    )} ${t("isRequired")}`,
=======
                                    message: `${t('addProgramme:postalCode')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                ]}
                              >
                                <Select
                                  size="large"
<<<<<<< HEAD
                                  placeholder={t(
                                    "addProgramme:postalCodePlaceholder"
                                  )}
                                  disabled={disableFields}
                                >
                                  {postalCodes.map((postalCode: string) => (
                                    <Select.Option value={postalCode}>
                                      {postalCode}
                                    </Select.Option>
=======
                                  placeholder={t('addProgramme:postalCodePlaceholder')}
                                  disabled={disableFields}
                                >
                                  {postalCodes.map((postalCode: string) => (
                                    <Select.Option value={postalCode}>{postalCode}</Select.Option>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  ))}
                                </Select>
                              </Form.Item>
                              <Form.Item
<<<<<<< HEAD
                                label={t("addProgramme:street")}
=======
                                label={t('addProgramme:street')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="street"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: `${t("addProgramme:street")} ${t(
                                      "isRequired"
                                    )}`,
                                  },
                                  {
                                    whitespace: true,
                                    message: `${t("addProgramme:street")} ${t(
                                      "isRequired"
                                    )}`,
=======
                                    message: `${t('addProgramme:street')} ${t('isRequired')}`,
                                  },
                                  {
                                    whitespace: true,
                                    message: `${t('addProgramme:street')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                ]}
                              >
                                <Input size="large" disabled={disableFields} />
                              </Form.Item>
                              <Form.Item
<<<<<<< HEAD
                                label={t("addProgramme:projectGeography")}
=======
                                label={t('addProgramme:projectGeography')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="projectGeography"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: `${t(
                                      "addProgramme:projectGeography"
                                    )} ${t("isRequired")}`,
=======
                                    message: `${t('addProgramme:projectGeography')} ${t(
                                      'isRequired'
                                    )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                ]}
                              >
                                <Select
                                  size="large"
<<<<<<< HEAD
                                  placeholder={t(
                                    "addProgramme:projectGeographyPlaceholder"
                                  )}
                                  onChange={onGeographyOfProjectSelect}
                                  disabled={disableFields}
                                >
                                  {Object.keys(PROJECT_GEOGRAPHY).map(
                                    (geography: string) => (
                                      <Select.Option value={geography}>
                                        {PROJECT_GEOGRAPHY[geography]}
                                      </Select.Option>
                                    )
                                  )}
=======
                                  placeholder={t('addProgramme:projectGeographyPlaceholder')}
                                  onChange={onGeographyOfProjectSelect}
                                  disabled={disableFields}
                                >
                                  {Object.keys(PROJECT_GEOGRAPHY).map((geography: string) => (
                                    <Select.Option value={geography}>
                                      {PROJECT_GEOGRAPHY[geography]}
                                    </Select.Option>
                                  ))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                </Select>
                              </Form.Item>

                              <Form.Item
<<<<<<< HEAD
                                label={t("addProgramme:projectStatus")}
=======
                                label={t('addProgramme:projectStatus')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="projectStatus"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: `${t(
                                      "addProgramme:projectStatus"
                                    )} ${t("isRequired")}`,
=======
                                    message: `${t('addProgramme:projectStatus')} ${t(
                                      'isRequired'
                                    )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                ]}
                              >
                                <Select
                                  size="large"
<<<<<<< HEAD
                                  placeholder={t(
                                    "addProgramme:projectStatusPlaceholder"
                                  )}
                                  disabled={disableFields}
                                >
                                  {Object.keys(PROJECT_STATUS).map(
                                    (status: string) => (
                                      <Select.Option value={status}>
                                        {PROJECT_STATUS[status]}
                                      </Select.Option>
                                    )
                                  )}
=======
                                  placeholder={t('addProgramme:projectStatusPlaceholder')}
                                  disabled={disableFields}
                                >
                                  {Object.keys(PROJECT_STATUS).map((status: string) => (
                                    <Select.Option value={status}>
                                      {PROJECT_STATUS[status]}
                                    </Select.Option>
                                  ))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                </Select>
                              </Form.Item>

                              <Form.Item
<<<<<<< HEAD
                                label={t(
                                  "addProgramme:projectStatusDescription"
                                )}
                                name={"projectStatusDescription"}
=======
                                label={t('addProgramme:projectStatusDescription')}
                                name={'projectStatusDescription'}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              >
                                <TextArea rows={4} disabled={disableFields} />
                              </Form.Item>
                            </div>
                          </Col>

                          <Col xl={12} md={24}>
                            <div className="details-part-two">
                              <Form.Item
<<<<<<< HEAD
                                label={t("addProgramme:projectLocation")}
=======
                                label={t('addProgramme:projectLocation')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="projectLocation"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: `${t(
                                      "addProgramme:projectLocation"
                                    )} ${t("isRequired")}`,
=======
                                    message: `${t('addProgramme:projectLocation')} ${t(
                                      'isRequired'
                                    )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                ]}
                              >
                                <GetMultipleLocationsMapComponent
                                  form={form}
<<<<<<< HEAD
                                  formItemName={"projectLocation"}
                                  disableMultipleLocations={
                                    !isMultipleLocations
                                  }
                                  disabled={disableFields}
                                  existingCoordinate={
                                    form.getFieldValue("projectLocation") ||
                                    undefined
=======
                                  formItemName={'projectLocation'}
                                  disableMultipleLocations={!isMultipleLocations}
                                  disabled={disableFields}
                                  existingCoordinate={
                                    form.getFieldValue('projectLocation') || undefined
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  }
                                />
                              </Form.Item>

                              <Form.Item
<<<<<<< HEAD
                                label={t("addProgramme:startTime")}
=======
                                label={t('addProgramme:startTime')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="startTime"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: "",
=======
                                    message: '',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                  {
                                    validator: async (rule, value) => {
                                      if (
<<<<<<< HEAD
                                        String(value).trim() === "" ||
=======
                                        String(value).trim() === '' ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        String(value).trim() === undefined ||
                                        value === null ||
                                        value === undefined
                                      ) {
                                        throw new Error(
<<<<<<< HEAD
                                          `${t("addProgramme:startTime")} ${t(
                                            "isRequired"
                                          )}`
=======
                                          `${t('addProgramme:startTime')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        );
                                      }
                                    },
                                  },
                                ]}
                              >
                                <DatePicker
                                  size="large"
                                  disabled={disableFields}
                                  disabledDate={(currentDate: any) =>
<<<<<<< HEAD
                                    currentDate < moment().startOf("day")
=======
                                    currentDate < moment().startOf('day')
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  }
                                />
                              </Form.Item>

                              <Form.Item
<<<<<<< HEAD
                                label={t("addProgramme:independentCertifiers")}
=======
                                label={t('addProgramme:independentCertifiers')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="independentCertifiers"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: `${t(
                                      "addProgramme:independentCertifiers"
                                    )} ${t("isRequired")}`,
=======
                                    message: `${t('addProgramme:independentCertifiers')} ${t(
                                      'isRequired'
                                    )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                ]}
                              >
                                <Select
                                  mode="multiple"
                                  disabled={disableFields}
                                  size="large"
                                  maxTagCount={2}
                                  loading={organizationsLoading}
                                  allowClear
                                >
                                  {independentCertifiers.map((ic: any) => (
<<<<<<< HEAD
                                    <Select.Option value={ic.refId}>
                                      {ic.name}
                                    </Select.Option>
=======
                                    <Select.Option value={ic.refId}>{ic.name}</Select.Option>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  ))}
                                </Select>
                              </Form.Item>

                              <Form.Item
<<<<<<< HEAD
                                label={t("addProgramme:estimatedProjectCost")}
=======
                                label={t('addProgramme:estimatedProjectCost')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="estimatedProjectCost"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: `${t(
                                      "addProgramme:independentCertifiers"
                                    )} ${t("isRequired")}`,
                                  },
                                  {
                                    whitespace: true,
                                    message: `${t(
                                      "addProgramme:independentCertifiers"
                                    )} ${t("isRequired")}`,
=======
                                    message: `${t('addProgramme:independentCertifiers')} ${t(
                                      'isRequired'
                                    )}`,
                                  },
                                  {
                                    whitespace: true,
                                    message: `${t('addProgramme:independentCertifiers')} ${t(
                                      'isRequired'
                                    )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                  {
                                    validator(rule, value) {
                                      if (!value) {
                                        return Promise.resolve();
                                      }

                                      // eslint-disable-next-line no-restricted-globals
                                      if (isNaN(value)) {
                                        return Promise.reject(
<<<<<<< HEAD
                                          new Error(
                                            t("addProgramme:shouldBeAnNumber")
                                          )
=======
                                          new Error(t('addProgramme:shouldBeAnNumber'))
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        );
                                      }

                                      return Promise.resolve();
                                    },
                                  },
                                ]}
                              >
<<<<<<< HEAD
                                <Input
                                  size={"large"}
                                  disabled={disableFields}
                                />
=======
                                <Input size={'large'} disabled={disableFields} />
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              </Form.Item>
                              {/* {projectCategory === 'RENEWABLE_ENERGY' && (
                                <Form.Item
                                  label={t('addProgramme:projectCapacity')}
                                  name="projectCapacity"
                                  rules={[
                                    {
                                      required: true,
                                      message: `${t('addProgramme:projectCapacity')} ${t(
                                        'isRequired'
                                      )}`,
                                    },
                                    {
                                      validator(rule, value) {
                                        if (!value) {
                                          return Promise.resolve();
                                        }
                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input size="large" />
                                </Form.Item>
                              )} */}

                              <Form.Item
<<<<<<< HEAD
                                label={t(
                                  "addProgramme:briefProjectDescription"
                                )}
=======
                                label={t('addProgramme:briefProjectDescription')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="briefProjectDescription"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: `${t(
                                      "addProgramme:briefProjectDescription"
                                    )} ${t("isRequired")}`,
                                  },
                                  {
                                    whitespace: true,
                                    message: `${t(
                                      "addProgramme:briefProjectDescription"
                                    )} ${t("isRequired")}`,
=======
                                    message: `${t('addProgramme:briefProjectDescription')} ${t(
                                      'isRequired'
                                    )}`,
                                  },
                                  {
                                    whitespace: true,
                                    message: `${t('addProgramme:briefProjectDescription')} ${t(
                                      'isRequired'
                                    )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  },
                                ]}
                              >
                                <TextArea
                                  rows={4}
                                  placeholder={`${t(
<<<<<<< HEAD
                                    "addProgramme:briefProjectDescriptionPlaceholder"
=======
                                    'addProgramme:briefProjectDescriptionPlaceholder'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  )}`}
                                  disabled={disableFields}
                                />
                              </Form.Item>

<<<<<<< HEAD
                              <div className="custom-label">
                                {t("addProgramme:documentUpload")}
                              </div>
=======
                              <div className="custom-label">{t('addProgramme:documentUpload')}</div>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              <Form.Item
                                // label={t('addProgramme:documentUpload')}
                                name="optionalDocuments"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                                required={false}
                                rules={[
                                  {
                                    validator: async (rule, file) => {
                                      for (let i = 0; i < file?.length; i++) {
                                        if (
                                          !isValidateFileType(
                                            file[i]?.type,
<<<<<<< HEAD
                                            // DocType.ENVIRONMENTAL_IMPACT_ASSESSMENT
                                          )
                                        ) {
                                          throw new Error(
                                            `${t(
                                              "addProgramme:invalidFileFormat"
                                            )}`
                                          );
                                        } else if (
                                          file[i]?.size > maximumImageSize
                                        ) {
                                          // default size format of files would be in bytes -> 1MB = 1000000bytes
                                          throw new Error(
                                            `${t("common:maxSizeVal")}`
                                          );
=======
                                            DocType.ENVIRONMENTAL_IMPACT_ASSESSMENT
                                          )
                                        ) {
                                          throw new Error(`${t('addProgramme:invalidFileFormat')}`);
                                        } else if (file[i]?.size > maximumImageSize) {
                                          // default size format of files would be in bytes -> 1MB = 1000000bytes
                                          throw new Error(`${t('common:maxSizeVal')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }
                                      }
                                    },
                                  },
                                ]}
                              >
                                <Upload
                                  accept=".doc, .docx, .pdf, .png, .jpg"
                                  beforeUpload={(file: any) => {
                                    return false;
                                  }}
                                  className="design-upload-section-inf"
                                  name="design"
                                  action="/upload.do"
                                  listType="picture"
                                  multiple={false}
                                  disabled={disableFields}
                                  // maxCount={1}
                                >
                                  <Button
                                    className="upload-doc"
                                    size="large"
                                    icon={<UploadOutlined />}
                                    disabled={disableFields}
                                  >
<<<<<<< HEAD
                                    {t("addProgramme:upload")}
=======
                                    {t('addProgramme:upload')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  </Button>
                                </Upload>
                              </Form.Item>
                            </div>
                          </Col>
                        </Row>
                        <div className="title contact-person-title mg-bottom-2 mg-top-2">
<<<<<<< HEAD
                          {t("addProgramme:contactPersonTitle")}
=======
                          {t('addProgramme:contactPersonTitle')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        </div>
                        <Row className="row" gutter={[40, 16]}>
                          <Col xl={12} md={24}>
                            <Form.Item
<<<<<<< HEAD
                              label={t("addProgramme:projectParticipant")}
                              name={"projectParticipant"}
                              rules={[
                                {
                                  required: true,
                                  message: `${t(
                                    "addProgramme:projectParticipant"
                                  )} ${t("isRequired")}`,
                                },
                                {
                                  whitespace: true,
                                  message: `${t(
                                    "addProgramme:projectParticipant"
                                  )} ${t("isRequired")}`,
=======
                              label={t('addProgramme:projectParticipant')}
                              name={'projectParticipant'}
                              rules={[
                                {
                                  required: true,
                                  message: `${t('addProgramme:projectParticipant')} ${t(
                                    'isRequired'
                                  )}`,
                                },
                                {
                                  whitespace: true,
                                  message: `${t('addProgramme:projectParticipant')} ${t(
                                    'isRequired'
                                  )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input size="large" disabled={disableFields} />
                            </Form.Item>
                            <Form.Item
<<<<<<< HEAD
                              label={t("addProgramme:email")}
=======
                              label={t('addProgramme:email')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              name="contactEmail"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: `${t("addProgramme:email")} ${t(
                                    "isRequired"
                                  )}`,
                                },
                                {
                                  whitespace: true,
                                  message: `${t("addProgramme:email")} ${t(
                                    "isRequired"
                                  )}`,
=======
                                  message: `${t('addProgramme:email')} ${t('isRequired')}`,
                                },
                                {
                                  whitespace: true,
                                  message: `${t('addProgramme:email')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                                {
                                  validator: async (rule, value) => {
                                    const val = value.trim();
                                    const reg =
                                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
<<<<<<< HEAD
                                    const matches = val.match(reg)
                                      ? val.match(reg)
                                      : [];
                                    if (
                                      val.length > 0 &&
                                      matches.length === 0
                                    ) {
                                      throw new Error(
                                        `${t("addProgramme:email")} ${t(
                                          "isInvalid"
                                        )}`
=======
                                    const matches = val.match(reg) ? val.match(reg) : [];
                                    if (val.length > 0 && matches.length === 0) {
                                      throw new Error(
                                        `${t('addProgramme:email')} ${t('isInvalid')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                      );
                                    }
                                  },
                                },
                              ]}
                            >
                              <Input size="large" disabled={disableFields} />
                            </Form.Item>
                          </Col>
                          <Col xl={12} md={24}>
                            <Form.Item
<<<<<<< HEAD
                              label={t("addProgramme:address")}
                              name={"contactAddress"}
                              rules={[
                                {
                                  required: true,
                                  message: `${t("addProgramme:address")} ${t(
                                    "isRequired"
                                  )}`,
                                },
                                {
                                  whitespace: true,
                                  message: `${t("addProgramme:address")} ${t(
                                    "isRequired"
                                  )}`,
=======
                              label={t('addProgramme:address')}
                              name={'contactAddress'}
                              rules={[
                                {
                                  required: true,
                                  message: `${t('addProgramme:address')} ${t('isRequired')}`,
                                },
                                {
                                  whitespace: true,
                                  message: `${t('addProgramme:address')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <TextArea rows={6} disabled={disableFields} />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row className="row" gutter={[40, 16]}>
                          <Col xl={12} md={24}>
                            <Skeleton loading={isCountryListLoading} active>
                              {countries.length > 0 && (
                                <Form.Item
                                  name="contactPhoneNo"
<<<<<<< HEAD
                                  label={t("addProgramme:phoneNo")}
                                  rules={[
                                    {
                                      required: true,
                                      message: `${t(
                                        "addProgramme:phoneNo"
                                      )} ${t("isRequired")}`,
                                    },
                                    {
                                      validator: async (
                                        rule: any,
                                        value: any
                                      ) => {
                                        const phoneNo = formatPhoneNumber(
                                          String(value)
                                        );
                                        if (String(value).trim() !== "") {
                                          if (
                                            (String(value).trim() !== "" &&
                                              String(value).trim() !==
                                                undefined &&
                                              value !== null &&
                                              value !== undefined &&
                                              phoneNo !== null &&
                                              phoneNo !== "" &&
                                              phoneNo !== undefined &&
                                              !isPossiblePhoneNumber(
                                                String(value)
                                              )) ||
                                            value?.length > 17
                                          ) {
                                            throw new Error(
                                              `${t("addProgramme:phoneNo")} ${t(
                                                "isInvalid"
                                              )}`
=======
                                  label={t('addProgramme:phoneNo')}
                                  rules={[
                                    {
                                      required: true,
                                      message: `${t('addProgramme:phoneNo')} ${t('isRequired')}`,
                                    },
                                    {
                                      validator: async (rule: any, value: any) => {
                                        const phoneNo = formatPhoneNumber(String(value));
                                        if (String(value).trim() !== '') {
                                          if (
                                            (String(value).trim() !== '' &&
                                              String(value).trim() !== undefined &&
                                              value !== null &&
                                              value !== undefined &&
                                              phoneNo !== null &&
                                              phoneNo !== '' &&
                                              phoneNo !== undefined &&
                                              !isPossiblePhoneNumber(String(value))) ||
                                            value?.length > 17
                                          ) {
                                            throw new Error(
                                              `${t('addProgramme:phoneNo')} ${t('isInvalid')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                            );
                                          }
                                        }
                                      },
                                    },
                                  ]}
                                >
                                  <PhoneInput
<<<<<<< HEAD
                                    placeholder={t("addProgramme:phoneNo")}
=======
                                    placeholder={t('addProgramme:phoneNo')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    international
                                    defaultCountry="LK"
                                    countryCallingCodeEditable={false}
                                    onChange={(v) => {}}
                                    countries={countries}
                                    disabled={disableFields}
                                  />
                                </Form.Item>
                              )}
                            </Skeleton>
                          </Col>
                          <Col xl={12} md={24}>
                            <Skeleton loading={isCountryListLoading} active>
                              {countries.length > 0 && (
                                <Form.Item
                                  name="contactFax"
<<<<<<< HEAD
                                  label={t("addProgramme:fax")}
                                  rules={[
                                    {
                                      required: true,
                                      message: `${t("addProgramme:fax")} ${t(
                                        "isRequired"
                                      )}`,
                                    },
                                    {
                                      validator: async (
                                        rule: any,
                                        value: any
                                      ) => {
                                        const phoneNo = formatPhoneNumber(
                                          String(value)
                                        );
                                        if (String(value).trim() !== "") {
                                          if (
                                            (String(value).trim() !== "" &&
                                              String(value).trim() !==
                                                undefined &&
                                              value !== null &&
                                              value !== undefined &&
                                              phoneNo !== null &&
                                              phoneNo !== "" &&
                                              phoneNo !== undefined &&
                                              !isPossiblePhoneNumber(
                                                String(value)
                                              )) ||
                                            value?.length > 17
                                          ) {
                                            throw new Error(
                                              `${t("addProgramme:fax")} ${t(
                                                "isInvalid"
                                              )}`
=======
                                  label={t('addProgramme:fax')}
                                  rules={[
                                    {
                                      required: true,
                                      message: `${t('addProgramme:fax')} ${t('isRequired')}`,
                                    },
                                    {
                                      validator: async (rule: any, value: any) => {
                                        const phoneNo = formatPhoneNumber(String(value));
                                        if (String(value).trim() !== '') {
                                          if (
                                            (String(value).trim() !== '' &&
                                              String(value).trim() !== undefined &&
                                              value !== null &&
                                              value !== undefined &&
                                              phoneNo !== null &&
                                              phoneNo !== '' &&
                                              phoneNo !== undefined &&
                                              !isPossiblePhoneNumber(String(value))) ||
                                            value?.length > 17
                                          ) {
                                            throw new Error(
                                              `${t('addProgramme:fax')} ${t('isInvalid')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                            );
                                          }
                                        }
                                      },
                                    },
                                  ]}
                                >
                                  <PhoneInput
<<<<<<< HEAD
                                    placeholder={t("addProgramme:phoneNo")}
=======
                                    placeholder={t('addProgramme:phoneNo')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    international
                                    defaultCountry="LK"
                                    countryCallingCodeEditable={false}
                                    onChange={(v) => {}}
                                    countries={countries}
                                    disabled={disableFields}
                                  />
                                </Form.Item>
                              )}
                            </Skeleton>
                          </Col>
                        </Row>

                        <Row className="row" gutter={[40, 16]}>
                          <Col xl={12} md={24}>
                            <Form.Item
<<<<<<< HEAD
                              label={t("addProgramme:website")}
                              name={"contactWebsite"}
                              rules={[
                                {
                                  required: true,
                                  message: `${t("addProgramme:website")} ${t(
                                    "isRequired"
                                  )}`,
                                },
                                {
                                  whitespace: true,
                                  message: `${t("addProgramme:website")} ${t(
                                    "isRequired"
                                  )}`,
                                },
                                {
                                  validator: async (rule, value) => {
                                    if (
                                      value &&
                                      value.trim().length > 0 &&
                                      !validator.isURL(value)
                                    )
                                      throw new Error(
                                        `${t("addProgramme:website")} ${t(
                                          "isInvalid"
                                        )}`
=======
                              label={t('addProgramme:website')}
                              name={'contactWebsite'}
                              rules={[
                                {
                                  required: true,
                                  message: `${t('addProgramme:website')} ${t('isRequired')}`,
                                },
                                {
                                  whitespace: true,
                                  message: `${t('addProgramme:website')} ${t('isRequired')}`,
                                },
                                {
                                  validator: async (rule, value) => {
                                    if (value && value.trim().length > 0 && !validator.isURL(value))
                                      throw new Error(
                                        `${t('addProgramme:website')} ${t('isInvalid')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                      );
                                  },
                                },
                              ]}
                            >
                              <Input size="large" disabled={disableFields} />
                            </Form.Item>
                          </Col>
                          <Col xl={12} md={24}>
                            <Form.Item
<<<<<<< HEAD
                              label={t("addProgramme:contactPersonName")}
                              name={"contactName"}
                              rules={[
                                {
                                  required: true,
                                  message: `${t(
                                    "addProgramme:contactPersonName"
                                  )} ${t("isRequired")}`,
                                },
                                {
                                  whitespace: true,
                                  message: `${t(
                                    "addProgramme:contactPersonName"
                                  )} ${t("isRequired")}`,
=======
                              label={t('addProgramme:contactPersonName')}
                              name={'contactName'}
                              rules={[
                                {
                                  required: true,
                                  message: `${t('addProgramme:contactPersonName')} ${t(
                                    'isRequired'
                                  )}`,
                                },
                                {
                                  whitespace: true,
                                  message: `${t('addProgramme:contactPersonName')} ${t(
                                    'isRequired'
                                  )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input size="large" disabled={disableFields} />
                            </Form.Item>
                          </Col>
                        </Row>
                        {/* <InfDocumentInformation t={t}></InfDocumentInformation> */}

                        {state?.mode === FormMode.VIEW ? (
                          <div className="steps-actions">
<<<<<<< HEAD
                            <Button
                              danger
                              onClick={navigateToProjectDetailsPageOnView}
                            >
                              {t("addProgramme:back")}
=======
                            <Button danger onClick={navigateToProjectDetailsPageOnView}>
                              {t('addProgramme:back')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                            </Button>
                          </div>
                        ) : (
                          <div className="steps-actions">
                            <Button type="primary" htmlType="submit">
<<<<<<< HEAD
                              {t("addProgramme:submit")}
=======
                              {t('addProgramme:submit')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                            </Button>
                          </div>
                        )}
                      </Form>
                    </div>
                  </div>
                ),
              },
            ]}
          ></Steps>
        </div>
      </div>
    </div>
  );
};
