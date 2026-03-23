<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { ValidationStepsProps } from "./StepProps";
import {
  Row,
  Button,
  Form,
  Col,
  DatePicker,
  Input,
  Radio,
  Upload,
  Select,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import moment from "moment";
=======
import React, { useEffect, useState } from 'react';
import { ValidationStepsProps } from './StepProps';
import { Row, Button, Form, Col, DatePicker, Input, Radio, Upload, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
import PhoneInput, {
  formatPhoneNumber,
  isPossiblePhoneNumber,
  formatPhoneNumberIntl,
  Country,
<<<<<<< HEAD
} from "react-phone-number-input";
import validator from "validator";
import { ProcessSteps } from "./StepperComponent";
import { FormMode } from "../../Definitions/Enums/formMode.enum";
import { MinusOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { fileUploadValueExtract } from "../../Utils/utilityHelper";
import LabelWithTooltip from "../LabelWithTooltip/LabelWithTooltip";
import GetLocationMapComponent from "../Maps/GetLocationMapComponent";
import { API_PATHS } from "../../Config/apiConfig";
import { useConnection } from "../../Context/ConnectionContext/connectionContext";
import { getBase64 } from "../../Definitions/Definitions/programme.definitions";
import { RcFile } from "antd/lib/upload";
import { useLocation } from "react-router-dom";
=======
} from 'react-phone-number-input';
import validator from 'validator';
import { ProcessSteps } from './ValidationStepperComponent';
import { FormMode } from '../../Definitions/Enums/formMode.enum';
import { MinusOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { fileUploadValueExtract } from '../../Utils/utilityHelper';
import LabelWithTooltip from '../LabelWithTooltip/LabelWithTooltip';
import GetLocationMapComponent from '../Maps/GetLocationMapComponent';
import { API_PATHS } from '../../Config/apiConfig';
import { useConnection } from '../../Context/ConnectionContext/connectionContext';
import { getBase64 } from '../../Definitions/Definitions/programme.definitions';
import { RcFile } from 'antd/lib/upload';
import { useLocation } from 'react-router-dom';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

// import { Form } from 'react-router-dom';

const BasicInformation = (props: ValidationStepsProps) => {
  const {
    next,
    form,
    current,
    t,
    countries,
    handleValuesUpdate,
    cmaDetails,
    existingFormValues,
    // formMode,
    disableFields,
    prev,
  } = props;

  const { post } = useConnection();

<<<<<<< HEAD
  const maximumImageSize = import.meta.env.VITE_APP_MAXIMUM_FILE_SIZE
    ? parseInt(import.meta.env.VITE_APP_MAXIMUM_FILE_SIZE)
=======
  const maximumImageSize = process.env.REACT_APP_MAXIMUM_FILE_SIZE
    ? parseInt(process.env.REACT_APP_MAXIMUM_FILE_SIZE)
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    : 5000000;

  const [contactNoInput] = useState<any>();

  const [provinces, setProvinces] = useState<string[]>([]);
  const [districts, setDistricts] = useState<{ [key: number]: string[] }>({});
  // const [dsDivisions, setDsDivisions] = useState<{ [key: number]: string[] }>({});
  const [cities, setCities] = useState<{ [key: number]: string[] }>({});

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

  const getDistricts = async (provinceName: string, index: number) => {
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
      setDistricts((prev1) => ({ ...prev1, [index]: tempDistricts }));
    } catch (error) {
      console.log(error);
    }
  };

  const getCities = async (division: string, index: number) => {
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
      setCities((prev3) => ({ ...prev3, [index]: tempCities }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProvinces();
  }, []);

  const onProvinceSelect = async (value: any, index: number) => {
    getDistricts(value, index);
  };

  const onDistrictSelect = (value: string, index: number) => {
    // getDivisions(value, index);
    getCities(value, index);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = async (values: any) => {
<<<<<<< HEAD
    const approverSignature = (
      await fileUploadValueExtract(values, "approverSignature")
    )[0];
    const projectDetailsFormValues = {
      ...values,
      completionDate: moment(values?.completionDate).startOf("day").unix(),
      pddUploadedGlobalStakeholderConsultation: moment(
        values?.pddUploadedGlobalStakeholderConsultation
      )
        .startOf("day")
=======
    const approverSignature = (await fileUploadValueExtract(values, 'approverSignature'))[0];
    const projectDetailsFormValues = {
      // ...values,
      titleOfTheProjectActivity: values?.titleOfTheProjectActivity,
      projectDeveloper: values?.projectDeveloper,
      projectScale: values?.projectScale,
      appliedMethodologies: values?.appliedMethodologies,
      conditionalSectoralScopes: values?.conditionalSectoralScopes,
      titleOfSpecificCase: values?.titleOfSpecificCase,
      hostParty: values?.hostParty,
      completionDate: moment(values?.completionDate).startOf('day').unix(),
      pddUploadedGlobalStakeholderConsultation: moment(
        values?.pddUploadedGlobalStakeholderConsultation
      )
        .startOf('day')
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        .unix(),
      approverSignature: approverSignature,
      locationsOfProjectActivity: await (async function () {
        const tempList: any[] = [];
        const firstObj = {
          locationOfProjectActivity: values?.locationOfProjectActivity,
          siteNo: values?.siteNo,
          province: values?.province,
          district: values?.district,
          // dsDivision: values?.dsDivision,
          city: values?.city,
          community: values?.community,
<<<<<<< HEAD
          geographicalLocationCoordinates:
            values?.geographicalLocationCoordinates,
          additionalDocuments: await (async function () {
            const base64Docs: string[] = [];
=======
          geographicalLocationCoordinates: values?.geographicalLocationCoordinates,
          additionalDocuments: await (async function () {
            const base64Docs: string[] = [];
            console.log('--------------optionalImages-----------', values?.optionalImages);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            if (values?.optionalImages && values?.optionalImages.length > 0) {
              const docs = values.optionalImages;
              for (let i = 0; i < docs.length; i++) {
                if (docs[i]?.originFileObj === undefined) {
                  base64Docs.push(docs[i]?.url);
                } else {
<<<<<<< HEAD
                  const temp = await getBase64(
                    docs[i]?.originFileObj as RcFile
                  );
=======
                  const temp = await getBase64(docs[i]?.originFileObj as RcFile);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                  base64Docs.push(temp); // No need for Promise.resolve
                }
              }
            }

            return base64Docs;
          })(),
        };
<<<<<<< HEAD
=======

>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        tempList.push(firstObj);
        if (values?.extraLocations) {
          values?.extraLocations.forEach(async (item: any) => {
            const tempObj = {
              locationOfProjectActivity: item?.locationOfProjectActivity,
              siteNo: item?.siteNo,
              province: item?.province,
              district: item?.district,
              // dsDivision: item?.dsDivision,
              city: item?.city,
              community: item?.community,
<<<<<<< HEAD
              geographicalLocationCoordinates:
                item?.geographicalLocationCoordinates,
=======
              geographicalLocationCoordinates: item?.geographicalLocationCoordinates,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
              additionalDocuments: await (async function () {
                const base64Docs: string[] = [];

                if (item?.optionalImages && item?.optionalImages.length > 0) {
                  const docs = item.optionalImages;
                  for (let i = 0; i < docs.length; i++) {
                    if (docs[i]?.originFileObj === undefined) {
                      base64Docs.push(docs[i]?.url);
                    } else {
<<<<<<< HEAD
                      const temp = await getBase64(
                        docs[i]?.originFileObj as RcFile
                      );
=======
                      const temp = await getBase64(docs[i]?.originFileObj as RcFile);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      base64Docs.push(temp); // No need for Promise.resolve
                    }
                  }
                }

                return base64Docs;
              })(),
            };

            tempList.push(tempObj);
          });
        }
        return tempList;
      })(),
      dateOfIssue: moment(values?.dateOfIssue).valueOf(),
      versionNumberPDD: values?.versionNumberPDD,
      versionNumberValidationReport: values?.versionNumberValidationReport,
      versionDate: moment(values?.versionDate).valueOf(),
      unfccRefNo: values?.unfccRefNo,
      telephone: values?.telephone,
      website: values?.website,
      mandatarySectoralScopes: values?.mandatarySectoralScopes,
      annualAverageGHGReduction: values?.annualAverageGHGReduction,
      approverName: values?.approverName,
<<<<<<< HEAD
      creditingPeriodStart: moment(values?.creditingPeriodStart)
        .startOf("day")
        .unix(),
      creditingPeriodEnd: moment(values?.creditingPeriodEnd)
        .startOf("day")
        .unix(),
    };

    console.log("basicInformation", projectDetailsFormValues);
=======
      creditingPeriod: values?.creditingPeriod,
      creditingPeriodStart: moment(values?.creditingPeriodStart).startOf('day').unix(),
      creditingPeriodEnd: moment(values?.creditingPeriodEnd).startOf('day').unix(),
    };

    console.log('----------basicInformation validation-------------', projectDetailsFormValues);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

    handleValuesUpdate({
      // [ProcessSteps.VR_PROJECT_DETAILS]: projectDetailsFormValues
      basicInformation: projectDetailsFormValues,
    });
  };

  return (
    <>
      {current === 0 && (
        <div>
          <div className="val-report-step-form-container">
            <Form
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className="step-form"
              layout="vertical"
              requiredMark={true}
              form={form}
              onFinish={(values: any) => {
                onFinish(values);
                if (next) {
                  next();
                }
              }}
              // disabled={FormMode.VIEW === formMode}
            >
              <>
                <div className="mg-top-1">
<<<<<<< HEAD
                  <Row justify={"space-between"} gutter={[40, 16]}>
                    <Col xl={12} md={24}>
                      <div className="step-form-right-col">
                        <Form.Item
                          label={t(
                            "validationReport:titleOfTheProjectActivity"
                          )}
=======
                  <Row justify={'space-between'} gutter={[40, 16]}>
                    <Col xl={12} md={24}>
                      <div className="step-form-right-col">
                        <Form.Item
                          label={t('validationReport:titleOfTheProjectActivity')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          name="titleOfTheProjectActivity"
                          rules={[
                            {
                              required: false,
<<<<<<< HEAD
                              message: `${t(
                                "validationReport:titleOfTheProjectActivity"
                              )} ${t("isRequired")}`,
=======
                              message: `${t('validationReport:titleOfTheProjectActivity')} ${t(
                                'isRequired'
                              )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                            },
                          ]}
                        >
                          <Input size="large" disabled />
                        </Form.Item>

                        <Form.Item
<<<<<<< HEAD
                          label={t(
                            "validationReport:versionNumberValidationReport"
                          )}
=======
                          label={t('validationReport:versionNumberValidationReport')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          name="versionNumberValidationReport"
                          rules={[
                            {
                              required: false,
<<<<<<< HEAD
                              message: `${t(
                                "validationReport:versionNumberValidationReport"
                              )} ${t("isRequired")}`,
=======
                              message: `${t('validationReport:versionNumberValidationReport')} ${t(
                                'isRequired'
                              )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                            },
                          ]}
                        >
                          <Input size="large" disabled />
                        </Form.Item>

                        <Form.Item
<<<<<<< HEAD
                          label={t("validationReport:versionNumberPDD")}
=======
                          label={t('validationReport:versionNumberPDD')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          name="versionNumberPDD"
                          rules={[
                            {
                              required: false,
<<<<<<< HEAD
                              message: `${t(
                                "validationReport:versionNumberPDD"
                              )} ${t("isRequired")}`,
=======
                              message: `${t('validationReport:versionNumberPDD')} ${t(
                                'isRequired'
                              )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                            },
                          ]}
                        >
                          <Input size="large" disabled />
                        </Form.Item>

                        <Form.Item
<<<<<<< HEAD
                          label={t("validationReport:projectParticipants")}
=======
                          label={t('validationReport:projectParticipants')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          name="projectDeveloper"
                          rules={[
                            {
                              required: false,
<<<<<<< HEAD
                              message: `${t(
                                "validationReport:projectParticipants"
                              )} ${t("isRequired")}`,
=======
                              message: `${t('validationReport:projectParticipants')} ${t(
                                'isRequired'
                              )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                            },
                          ]}
                        >
                          <Input size="large" disabled />
                        </Form.Item>

                        <Form.Item
<<<<<<< HEAD
                          label={t("validationReport:projectScale")}
=======
                          label={t('validationReport:projectScale')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          name="projectScale"
                          rules={[
                            {
                              required: true,
<<<<<<< HEAD
                              message: `${t(
                                "validationReport:projectScale"
                              )} ${t("isRequired")}`,
=======
                              message: `${t('validationReport:projectScale')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                            },
                          ]}
                        >
                          <Radio.Group
                            className="project-scale-radio-btns"
                            disabled={disableFields}
                          >
<<<<<<< HEAD
                            <Radio value="Small Scale">
                              {t("validationReport:smallScale")}
                            </Radio>
                            <Radio value="Large Scale">
                              {t("validationReport:largeScale")}
                            </Radio>
=======
                            <Radio value="Small Scale">{t('validationReport:smallScale')}</Radio>
                            <Radio value="Large Scale">{t('validationReport:largeScale')}</Radio>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Radio.Group>
                        </Form.Item>

                        <Form.Item
<<<<<<< HEAD
                          label={t("validationReport:appliedMethodologies")}
=======
                          label={t('validationReport:appliedMethodologies')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          name="appliedMethodologies"
                          rules={[
                            {
                              required: true,
<<<<<<< HEAD
                              message: `${t(
                                "validationReport:appliedMethodologies"
                              )} ${t("isRequired")}`,
=======
                              message: `${t('validationReport:appliedMethodologies')} ${t(
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
                          label={t(
                            "validationReport:conditionalSectoralScopes"
                          )}
=======
                          label={t('validationReport:conditionalSectoralScopes')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          name="conditionalSectoralScopes"
                        >
                          <Input size="large" disabled={disableFields} />
                        </Form.Item>
                      </div>
                    </Col>

                    <Col xl={12} md={24}>
                      <Form.Item
<<<<<<< HEAD
                        label={t("validationReport:titleOfSpecificCase")}
=======
                        label={t('validationReport:titleOfSpecificCase')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        name="titleOfSpecificCase"
                        rules={[
                          {
                            required: true,
<<<<<<< HEAD
                            message: `${t(
                              "validationReport:titleOfSpecificCase"
                            )} ${t("isRequired")}`,
=======
                            message: `${t('validationReport:titleOfSpecificCase')} ${t(
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
                        label={t("validationReport:completionDate")}
=======
                        label={t('validationReport:completionDate')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        name="completionDate"
                        rules={[
                          {
                            required: true,
<<<<<<< HEAD
                            message: `${t(
                              "validationReport:completionDate"
                            )} ${t("isRequired")}`,
=======
                            message: `${t('validationReport:completionDate')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          },
                        ]}
                      >
                        <DatePicker
                          disabled={disableFields}
                          size="large"
<<<<<<< HEAD
                          disabledDate={(currentDate: any) =>
                            currentDate < moment().startOf("day")
                          }
=======
                          disabledDate={(currentDate: any) => currentDate < moment().startOf('day')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        />
                      </Form.Item>

                      <Form.Item
<<<<<<< HEAD
                        label={t(
                          "validationReport:pddUploadedGlobalStakeholderConsultation"
                        )}
=======
                        label={t('validationReport:pddUploadedGlobalStakeholderConsultation')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        name="pddUploadedGlobalStakeholderConsultation"
                        rules={[
                          {
                            required: true,
                            message: `${t(
<<<<<<< HEAD
                              "validationReport:pddUploadedGlobalStakeholderConsultation"
                            )} ${t("isRequired")}`,
=======
                              'validationReport:pddUploadedGlobalStakeholderConsultation'
                            )} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          },
                        ]}
                      >
                        <DatePicker
                          size="large"
                          disabled={disableFields}
<<<<<<< HEAD
                          disabledDate={(currentDate: any) =>
                            currentDate < moment().startOf("day")
                          }
=======
                          disabledDate={(currentDate: any) => currentDate < moment().startOf('day')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        />
                      </Form.Item>

                      <Form.Item
<<<<<<< HEAD
                        label={t("validationReport:hostParty")}
=======
                        label={t('validationReport:hostParty')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        name="hostParty"
                        rules={[
                          {
                            required: false,
<<<<<<< HEAD
                            message: `${t("validationReport:hostParty")} ${t(
                              "isRequired"
                            )}`,
=======
                            message: `${t('validationReport:hostParty')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          },
                        ]}
                      >
                        <Input size="large" disabled />
                      </Form.Item>

                      <Form.Item
<<<<<<< HEAD
                        label={t("validationReport:mandatarySectoralScopes")}
=======
                        label={t('validationReport:mandatarySectoralScopes')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        name="mandatarySectoralScopes"
                        rules={[
                          {
                            required: false,
<<<<<<< HEAD
                            message: `${t(
                              "validationReport:mandatarySectoralScopes"
                            )} ${t("isRequired")}`,
=======
                            message: `${t('validationReport:mandatarySectoralScopes')} ${t(
                              'isRequired'
                            )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          },
                        ]}
                      >
                        <Input size="large" disabled />
                      </Form.Item>

                      <Form.Item
                        label={
                          <span>
<<<<<<< HEAD
                            {t("validationReport:annualAverageGHGReduction")}
                            <span
                              style={{
                                color: "#FF4D4F",
                                marginLeft: 2,
                                fontSize: "16px",
                                position: "relative",
                                top: "3px",
=======
                            {t('validationReport:annualAverageGHGReduction')}
                            <span
                              style={{
                                color: '#FF4D4F',
                                marginLeft: 2,
                                fontSize: '16px',
                                position: 'relative',
                                top: '3px',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              }}
                            >
                              *
                            </span>
                          </span>
                        }
                        name="annualAverageGHGReduction"
                        required={false}
                        rules={[
                          {
                            required: true,
<<<<<<< HEAD
                            message: `${t(
                              "validationReport:annualAverageGHGReduction"
                            )} ${t("isRequired")}`,
=======
                            message: `${t('validationReport:annualAverageGHGReduction')} ${t(
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
                        label={t("validationReport:unfccRefNo")}
=======
                        label={t('validationReport:unfccRefNo')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        name="unfccRefNo"
                        rules={[
                          {
                            required: true,
<<<<<<< HEAD
                            message: `${t("validationReport:unfccRefNo")} ${t(
                              "isRequired"
                            )}`,
=======
                            message: `${t('validationReport:unfccRefNo')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          },
                        ]}
                      >
                        <Input size="large" disabled={disableFields} />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </>

              {/* Crediting Period  start */}
              <>
<<<<<<< HEAD
                <Row gutter={[40, 16]} justify={"space-between"}>
                  <Col md={24} xl={12}>
                    <Form.Item
                      label={t("validationReport:creditingPeriod")}
=======
                <Row gutter={[40, 16]} justify={'space-between'}>
                  <Col md={24} xl={12}>
                    <Form.Item
                      label={t('validationReport:creditingPeriod')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="creditingPeriod"
                      rules={[
                        {
                          required: false,
<<<<<<< HEAD
                          message: `${t(
                            "validationReport:creditingPeriod"
                          )} ${t("isRequired")}`,
=======
                          message: `${t('validationReport:creditingPeriod')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        },
                      ]}
                    >
                      <Input size="large" disabled />
                    </Form.Item>
                  </Col>

                  <Col md={24} xl={12}>
                    <LabelWithTooltip
<<<<<<< HEAD
                      label={t("validationReport:startDateofCreditingPeriod")}
=======
                      label={t('validationReport:startDateofCreditingPeriod')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      required={false}
                    />
                    <div className="crediting-period-duration">
                      <Form.Item
                        // label={t('validationReport:creditingPeriod')}
                        name="creditingPeriodStart"
                        rules={[
                          {
                            required: false,
<<<<<<< HEAD
                            message: `${t(
                              "validationReport:creditingPeriod"
                            )} ${t("isRequired")}`,
=======
                            message: `${t('validationReport:creditingPeriod')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          },
                        ]}
                      >
                        <DatePicker size="large" disabled />
                      </Form.Item>
                      <p className="crediting-period-duration-to">to</p>
                      <Form.Item
                        // label={t('validationReport:creditingPeriod')}
                        name="creditingPeriodEnd"
                        rules={[
                          {
                            required: false,
<<<<<<< HEAD
                            message: `${t(
                              "validationReport:creditingPeriod"
                            )} ${t("isRequired")}`,
=======
                            message: `${t('validationReport:creditingPeriod')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          },
                        ]}
                      >
                        <DatePicker size="large" disabled />
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
              </>
              {/* Crediting Period  end */}

              <>
                <h4 className="form-section-heading">{`${t(
<<<<<<< HEAD
                  "validationReport:projectActivityLocations"
=======
                  'validationReport:projectActivityLocations'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                )}`}</h4>

                <h4 className="list-item-title">Location 1</h4>
                <div className="form-section">
                  <Row
                    // justify={'space-between'}
                    gutter={[40, 16]}
<<<<<<< HEAD
                    style={{ borderRadius: "8px" }}
                  >
                    <Col xl={12} md={24}>
                      <Form.Item
                        label={t("validationReport:locationOfProjectActivity")}
=======
                    style={{ borderRadius: '8px' }}
                  >
                    <Col xl={12} md={24}>
                      <Form.Item
                        label={t('validationReport:locationOfProjectActivity')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        name="locationOfProjectActivity"
                        rules={[
                          {
                            required: false,
                            message: ``,
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
                                    "validationReport:locationOfProjectActivity"
                                  )} ${t("isRequired")}`
=======
                                  `${t('validationReport:locationOfProjectActivity')} ${t(
                                    'isRequired'
                                  )}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                );
                              }
                            },
                          },
                        ]}
                      >
                        <Input size="large" disabled />
                      </Form.Item>

                      <Form.Item
<<<<<<< HEAD
                        label={t("validationReport:siteNo")}
=======
                        label={t('validationReport:siteNo')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        name="siteNo"
                        rules={[
                          {
                            required: false,
                            message: ``,
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
                                  `${t("validationReport:siteNo")} ${t(
                                    "isRequired"
                                  )}`
=======
                                  `${t('validationReport:siteNo')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                );
                              }
                            },
                          },
                        ]}
                      >
                        <Input size="large" disabled />
                      </Form.Item>

                      <Form.Item
<<<<<<< HEAD
                        label={t("validationReport:province")}
=======
                        label={t('validationReport:province')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        name="province"
                        rules={[
                          {
                            required: false,
                            message: ``,
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
                                  `${t("validationReport:province")} ${t(
                                    "isRequired"
                                  )}`
=======
                                  `${t('validationReport:province')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                );
                              }
                            },
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          disabled
                          onChange={(value) => onProvinceSelect(value, 0)}
                          // placeholder={t('validationReport:provincePlaceholder')}
                          // disabled={disableFields}
                        >
                          {provinces.map((province: string, index: number) => (
<<<<<<< HEAD
                            <Select.Option
                              value={province}
                              key={province + index}
                            >
=======
                            <Select.Option value={province} key={province + index}>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              {province}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>

                      <Form.Item
<<<<<<< HEAD
                        label={t("validationReport:district")}
=======
                        label={t('validationReport:district')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        name="district"
                        rules={[
                          {
                            required: false,
                            message: ``,
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
                                  `${t("validationReport:district")} ${t(
                                    "isRequired"
                                  )}`
=======
                                  `${t('validationReport:district')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                );
                              }
                            },
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          disabled
                          // placeholder={t('validationReport:districtPlaceholder')}
                          onSelect={(value) => onDistrictSelect(value, 0)}
                          // disabled={disableFields}
                        >
<<<<<<< HEAD
                          {districts[0]?.map(
                            (district: string, index: number) => (
                              <Select.Option
                                key={district + index}
                                value={district}
                              >
                                {district}
                              </Select.Option>
                            )
                          )}
=======
                          {districts[0]?.map((district: string, index: number) => (
                            <Select.Option key={district + index} value={district}>
                              {district}
                            </Select.Option>
                          ))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        </Select>
                      </Form.Item>
                      {/* <Form.Item
                        label={t('validationReport:dsDivision')}
                        name="dsDivision"
                        rules={[
                          {
                            required: true,
                            message: ``,
                          },
                          {
                            validator: async (rule, value) => {
                              if (
                                String(value).trim() === '' ||
                                String(value).trim() === undefined ||
                                value === null ||
                                value === undefined
                              ) {
                                throw new Error(`${t('validationReport:dsDivision')} ${t('isRequired')}`);
                              }
                            },
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          placeholder={t('validationReport:dsDivisionPlaceholder')}
                          disabled={disableFields}
                          onSelect={(value) => onDivisionSelect(value, 0)}
                        >
                          {dsDivisions[0]?.map((division: string, index: number) => (
                            <Select.Option value={division} key={division + index}>
                              {division}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item> */}
                      <Form.Item
<<<<<<< HEAD
                        label={t("validationReport:city")}
=======
                        label={t('validationReport:city')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        name="city"
                        rules={[
                          {
                            required: false,
                            message: ``,
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
<<<<<<< HEAD
                                throw new Error(
                                  `${t("validationReport:city")} ${t(
                                    "isRequired"
                                  )}`
                                );
=======
                                throw new Error(`${t('validationReport:city')} ${t('isRequired')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              }
                            },
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          // placeholder={t('validationReport:cityPlaceholder')}
                          disabled
                        >
                          {cities[0]?.map((city: string, index) => (
                            <Select.Option value={city} key={city + index}>
                              {city}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item
<<<<<<< HEAD
                        label={t("validationReport:community")}
=======
                        label={t('validationReport:community')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        name="community"
                        rules={[
                          {
                            required: false,
                            message: ``,
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
                                  `${t("validationReport:community")} ${t(
                                    "isRequired"
                                  )}`
=======
                                  `${t('validationReport:community')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                );
                              }
                            },
                          },
                        ]}
                      >
                        <Input size="large" disabled />
                      </Form.Item>
                    </Col>

                    <Col xl={12} md={24}>
                      <Form.Item
<<<<<<< HEAD
                        label={t("validationReport:setLocation")}
=======
                        label={t('validationReport:setLocation')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        name="geographicalLocationCoordinates"
                        rules={[
                          {
                            required: false,
                            message: ``,
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
                                  `${t("validationReport:location")} ${t(
                                    "isRequired"
                                  )}`
=======
                                  `${t('validationReport:location')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                );
                              }
                            },
                          },
                        ]}
                      >
                        <GetLocationMapComponent
                          form={form}
<<<<<<< HEAD
                          formItemName={"geographicalLocationCoordinates"}
                          existingCordinate={form.getFieldValue(
                            "geographicalLocationCoordinates"
                          )}
=======
                          formItemName={'geographicalLocationCoordinates'}
                          existingCordinate={form.getFieldValue('geographicalLocationCoordinates')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          disabled
                        />
                      </Form.Item>
                    </Col>

                    <Col xl={24} md={24}>
<<<<<<< HEAD
                      <div className="custom-label-pdd">
                        {t("validationReport:uploadImages")}
                      </div>
=======
                      <div className="custom-label-pdd">{t('validationReport:uploadImages')}</div>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      <Form.Item
                        //label={t('validationReport:uploadImages')}
                        name="optionalImages"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        required={false}
                        rules={[
                          {
                            validator: async (rule, file) => {
                              for (let i = 0; i < file?.length; i++) {
                                if (file[i]?.size > maximumImageSize) {
                                  // default size format of files would be in bytes -> 1MB = 1000000bytes
<<<<<<< HEAD
                                  throw new Error(`${t("common:maxSizeVal")}`);
=======
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
                          className="design-upload-section-validation"
                          name="design"
                          action="/upload.do"
                          listType="picture"
                          multiple={false}
                          disabled={true}
                          // maxCount={1}
                        >
                          <Button
                            className="upload-doc"
                            size="large"
                            icon={<UploadOutlined />}
                            disabled={true}
                          >
<<<<<<< HEAD
                            {t("validationReport:upload")}
=======
                            {t('validationReport:upload')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                  </Row>
                </div>

                <Form.List name="extraLocations">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <>
                          <div className="form-list-actions">
<<<<<<< HEAD
                            <h4 className="list-item-title">
                              Location {name + 2}
                            </h4>
=======
                            <h4 className="list-item-title">Location {name + 2}</h4>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                            <Form.Item>
                              <Button
                                // type="dashed"
                                onClick={() => {
                                  remove(name);
                                  if (districts[name + 1]) {
                                    delete districts[name + 1];
                                  }
                                  // if (dsDivisions[name + 1]) {
                                  //   delete dsDivisions[name + 1];
                                  // }
                                  if (cities[name + 1]) {
                                    delete cities[name + 1];
                                  }
                                }}
                                size="large"
                                className="addMinusBtn"
                                // block
                                disabled
                                icon={<MinusOutlined />}
                              >
                                {/* Remove Entity */}
                              </Button>
                            </Form.Item>
                          </div>
                          <div className="form-section">
<<<<<<< HEAD
                            <h4 className="form-section-title">
                              {`${t(
                                "validationReport:locationOfProjectActivity"
                              )}`}
                            </h4>
                            <Row
                              justify={"space-between"}
                              gutter={[40, 16]}
                              style={{ borderRadius: "8px" }}
                            >
                              <Col xl={12} md={24}>
                                <Form.Item
                                  label={t(
                                    "validationReport:locationOfProjectActivity"
                                  )}
                                  name={[name, "locationOfProjectActivity"]}
=======
                            {/* <h4 className="form-section-title">
                              {`${t('validationReport:locationOfProjectActivity')}`}
                            </h4> */}
                            <Row
                              justify={'space-between'}
                              gutter={[40, 16]}
                              style={{ borderRadius: '8px' }}
                            >
                              <Col xl={12} md={24}>
                                <Form.Item
                                  label={t('validationReport:locationOfProjectActivity')}
                                  name={[name, 'locationOfProjectActivity']}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  rules={[
                                    {
                                      required: true,
                                      message: ``,
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
                                              "validationReport:locationOfProjectActivity"
                                            )} ${t("isRequired")}`
=======
                                            `${t('validationReport:locationOfProjectActivity')} ${t(
                                              'isRequired'
                                            )}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                          );
                                        }
                                      },
                                    },
                                  ]}
                                >
                                  <Input size="large" disabled />
                                </Form.Item>

                                <Form.Item
<<<<<<< HEAD
                                  label={t("validationReport:siteNo")}
                                  name={[name, "siteNo"]}
=======
                                  label={t('validationReport:siteNo')}
                                  name={[name, 'siteNo']}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  rules={[
                                    {
                                      required: true,
                                      message: ``,
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
                                              "validationReport:siteNo"
                                            )} ${t("isRequired")}`
=======
                                            `${t('validationReport:siteNo')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                          );
                                        }
                                      },
                                    },
                                  ]}
                                >
                                  <Input size="large" disabled />
                                </Form.Item>

                                <Form.Item
<<<<<<< HEAD
                                  label={t("validationReport:province")}
                                  name={[name, "province"]}
=======
                                  label={t('validationReport:province')}
                                  name={[name, 'province']}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  rules={[
                                    {
                                      required: true,
                                      message: ``,
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
                                              "validationReport:province"
                                            )} ${t("isRequired")}`
=======
                                            `${t('validationReport:province')} ${t('isRequired')}`
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
                                    onChange={(value) =>
                                      onProvinceSelect(value, name + 1)
                                    }
                                    // placeholder={t('validationReport:provincePlaceholder')}
                                    disabled
                                  >
                                    {provinces.map(
                                      (province: string, index: number) => (
                                        <Select.Option
                                          value={province}
                                          key={name + province + index}
                                        >
                                          {province}
                                        </Select.Option>
                                      )
                                    )}
=======
                                    onChange={(value) => onProvinceSelect(value, name + 1)}
                                    // placeholder={t('validationReport:provincePlaceholder')}
                                    disabled
                                  >
                                    {provinces.map((province: string, index: number) => (
                                      <Select.Option value={province} key={name + province + index}>
                                        {province}
                                      </Select.Option>
                                    ))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  </Select>
                                </Form.Item>

                                <Form.Item
<<<<<<< HEAD
                                  label={t("validationReport:district")}
                                  name={[name, "district"]}
=======
                                  label={t('validationReport:district')}
                                  name={[name, 'district']}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  rules={[
                                    {
                                      required: true,
                                      message: ``,
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
                                              "validationReport:district"
                                            )} ${t("isRequired")}`
=======
                                            `${t('validationReport:district')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                          );
                                        }
                                      },
                                    },
                                  ]}
                                >
                                  <Select
                                    size="large"
                                    // placeholder={t('validationReport:districtPlaceholder')}
<<<<<<< HEAD
                                    onSelect={(value) =>
                                      onDistrictSelect(value, name + 1)
                                    }
                                    disabled
                                  >
                                    {districts[name + 1]?.map(
                                      (district: string, index: number) => (
                                        <Select.Option
                                          key={name + district + index}
                                          value={district}
                                        >
                                          {district}
                                        </Select.Option>
                                      )
                                    )}
=======
                                    onSelect={(value) => onDistrictSelect(value, name + 1)}
                                    disabled
                                  >
                                    {districts[name + 1]?.map((district: string, index: number) => (
                                      <Select.Option key={name + district + index} value={district}>
                                        {district}
                                      </Select.Option>
                                    ))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  </Select>
                                </Form.Item>
                                {/* <Form.Item
                                  label={t('validationReport:dsDivision')}
                                  name={[name, 'dsDivision']}
                                  rules={[
                                    {
                                      required: true,
                                      message: ``,
                                    },
                                    {
                                      validator: async (rule, value) => {
                                        if (
                                          String(value).trim() === '' ||
                                          String(value).trim() === undefined ||
                                          value === null ||
                                          value === undefined
                                        ) {
                                          throw new Error(
                                            `${t('validationReport:dsDivision')} ${t('isRequired')}`
                                          );
                                        }
                                      },
                                    },
                                  ]}
                                >
                                  <Select
                                    size="large"
                                    placeholder={t('validationReport:dsDivisionPlaceholder')}
                                    disabled={disableFields}
                                    onSelect={(value) => onDivisionSelect(value, name + 1)}
                                  >
                                    {dsDivisions[name + 1]?.map(
                                      (division: string, index: number) => (
                                        <Select.Option
                                          value={division}
                                          key={name + division + index}
                                        >
                                          {division}
                                        </Select.Option>
                                      )
                                    )}
                                  </Select>
                                </Form.Item> */}
                                <Form.Item
<<<<<<< HEAD
                                  label={t("validationReport:city")}
                                  name={[name, "city"]}
=======
                                  label={t('validationReport:city')}
                                  name={[name, 'city']}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  rules={[
                                    {
                                      required: true,
                                      message: ``,
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
                                            `${t("validationReport:city")} ${t(
                                              "isRequired"
                                            )}`
=======
                                            `${t('validationReport:city')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                          );
                                        }
                                      },
                                    },
                                  ]}
                                >
                                  <Select
                                    size="large"
                                    // placeholder={t('validationReport:cityPlaceholder')}
                                    disabled
                                  >
<<<<<<< HEAD
                                    {cities[name + 1]?.map(
                                      (city: string, index: number) => (
                                        <Select.Option
                                          value={city}
                                          key={name + city + index}
                                        >
                                          {city}
                                        </Select.Option>
                                      )
                                    )}
                                  </Select>
                                </Form.Item>
                                <Form.Item
                                  label={t("validationReport:community")}
                                  name={[name, "community"]}
=======
                                    {cities[name + 1]?.map((city: string, index: number) => (
                                      <Select.Option value={city} key={name + city + index}>
                                        {city}
                                      </Select.Option>
                                    ))}
                                  </Select>
                                </Form.Item>
                                <Form.Item
                                  label={t('validationReport:community')}
                                  name={[name, 'community']}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  rules={[
                                    {
                                      required: true,
                                      message: ``,
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
                                              "validationReport:community"
                                            )} ${t("isRequired")}`
=======
                                            `${t('validationReport:community')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                          );
                                        }
                                      },
                                    },
                                  ]}
                                >
                                  <Input size="large" disabled />
                                </Form.Item>
                              </Col>

                              <Col xl={12} md={24}>
                                <Form.Item
<<<<<<< HEAD
                                  label={t("validationReport:setLocation")}
                                  name={[
                                    name,
                                    "geographicalLocationCoordinates",
                                  ]}
=======
                                  label={t('validationReport:setLocation')}
                                  name={[name, 'geographicalLocationCoordinates']}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  rules={[
                                    {
                                      required: true,
                                      message: ``,
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
                                              "validationReport:location"
                                            )} ${t("isRequired")}`
=======
                                            `${t('validationReport:location')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                          );
                                        }
                                      },
                                    },
                                  ]}
                                >
                                  <GetLocationMapComponent
                                    form={form}
<<<<<<< HEAD
                                    formItemName={[
                                      name,
                                      "geographicalLocationCoordinates",
                                    ]}
                                    listName="extraLocations"
                                    disabled
                                    existingCordinate={
                                      form?.getFieldValue("extraLocations")[
                                        name
                                      ]?.geographicalLocationCoordinates
=======
                                    formItemName={[name, 'geographicalLocationCoordinates']}
                                    listName="extraLocations"
                                    disabled={true}
                                    existingCordinate={
                                      form?.getFieldValue('extraLocations')[name]
                                        ?.geographicalLocationCoordinates
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    }
                                  />
                                </Form.Item>
                              </Col>

                              <Col xl={24} md={24}>
                                <div className="custom-label-validation">
<<<<<<< HEAD
                                  {t("validationReport:uploadImages")}
                                </div>
                                <Form.Item
                                  //label={t('validationReport:uploadImages')}
                                  name={[name, "optionalImages"]}
=======
                                  {t('validationReport:uploadImages')}
                                </div>
                                <Form.Item
                                  //label={t('validationReport:uploadImages')}
                                  name={[name, 'optionalImages']}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  valuePropName="fileList"
                                  getValueFromEvent={normFile}
                                  required={false}
                                  rules={[
                                    {
                                      validator: async (rule, file) => {
                                        for (let i = 0; i < file?.length; i++) {
<<<<<<< HEAD
                                          if (
                                            file[i]?.size > maximumImageSize
                                          ) {
                                            // default size format of files would be in bytes -> 1MB = 1000000bytes
                                            throw new Error(
                                              `${t("common:maxSizeVal")}`
                                            );
=======
                                          if (file[i]?.size > maximumImageSize) {
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
                                    className="design-upload-section"
                                    name="design"
                                    action="/upload.do"
                                    listType="picture"
                                    multiple={false}
<<<<<<< HEAD
                                    disabled
=======
                                    disabled={true}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    // maxCount={1}
                                  >
                                    <Button
                                      className="upload-doc"
                                      size="large"
                                      icon={<UploadOutlined />}
<<<<<<< HEAD
=======
                                      disabled={true}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                      // disabled={disableFields}
                                    >
                                      Upload
                                    </Button>
                                  </Upload>
                                </Form.Item>
                              </Col>
                            </Row>
                          </div>
                        </>
                      ))}

                      {/* <div className="form-list-actions">
                        <Form.Item>
                          <Button
                            // type="dashed"
                            onClick={() => {
                              add();
                            }}
                            size="large"
                            className="addMinusBtn"
                            // block
                            icon={<PlusOutlined />}
                            disabled={disableFields}
                          >
                            Add Entity
                          </Button>
                        </Form.Item>
                      </div> */}
                    </>
                  )}
                </Form.List>
              </>

<<<<<<< HEAD
              <Row justify={"end"} className="step-actions-end">
                <Button danger size={"large"} disabled={false} onClick={prev}>
                  {t("validationReport:cancel")}
                </Button>
                {disableFields ? (
                  <Button
                    type="primary"
                    size={"large"}
                    disabled={false}
                    onClick={next}
                  >
                    {t("validationReport:next")}
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    size={"large"}
                    disabled={false}
                    htmlType="submit"
                  >
                    {t("validationReport:next")}
=======
              <Row justify={'end'} className="step-actions-end">
                <Button danger size={'large'} disabled={false} onClick={prev}>
                  {t('validationReport:cancel')}
                </Button>
                {disableFields ? (
                  <Button type="primary" size={'large'} disabled={false} onClick={next}>
                    {t('validationReport:next')}
                  </Button>
                ) : (
                  <Button type="primary" size={'large'} disabled={false} htmlType="submit">
                    {t('validationReport:next')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                  </Button>
                )}
              </Row>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default BasicInformation;
