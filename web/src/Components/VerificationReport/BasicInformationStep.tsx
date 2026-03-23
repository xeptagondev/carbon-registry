<<<<<<< HEAD
import { useEffect, useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
=======
import { useEffect, useState } from 'react';
import { Button, Col, DatePicker, Form, Input, Row, Select, Upload } from 'antd';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isPossiblePhoneNumber,
<<<<<<< HEAD
} from "react-phone-number-input";

import moment from "moment";
import { useConnection } from "../../Context/ConnectionContext/connectionContext";
import { useLocation } from "react-router-dom";
import TextArea from "antd/lib/input/TextArea";
import { FormMode } from "../../Definitions/Enums/formMode.enum";
import { API_PATHS } from "../../Config/apiConfig";
import i18n from "../Internationalization/i18n";
import { VerificationStepProps } from "./StepProps";
import { UploadOutlined } from "@ant-design/icons";
import { fileUploadValueExtract } from "../../Utils/utilityHelper";
=======
} from 'react-phone-number-input';

import moment from 'moment';
import { useConnection } from '../../Context/ConnectionContext/connectionContext';
import { useLocation } from 'react-router-dom';
import TextArea from 'antd/lib/input/TextArea';
import { FormMode } from '../../Definitions/Enums/formMode.enum';
import { API_PATHS } from '../../Config/apiConfig';
import i18n from '../Internationalization/i18n';
import { VerificationStepProps } from './StepProps';
import { UploadOutlined } from '@ant-design/icons';
import { fileUploadValueExtract } from '../../Utils/utilityHelper';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

export const BasicInformationStep = (props: VerificationStepProps) => {
  const {
    current,
    form,
    formMode,
    next,
    prev,
    countries,
    disableFields,
    handleValuesUpdate,
    // verifiedScer,
    // onValueChange,
  } = props;
  const t = i18n.t;
  const { get, post } = useConnection();
  const [contactNoInput] = useState<any>();
  const [countryList, setCountryList] = useState<[]>([]);
<<<<<<< HEAD
  const accessToken = import.meta.env.VITE_APP_MAPBOXGL_ACCESS_TOKEN
    ? import.meta.env.VITE_APP_MAPBOXGL_ACCESS_TOKEN
    : "";

  const maximumImageSize = import.meta.env.VITE_APP_MAXIMUM_FILE_SIZE
    ? parseInt(import.meta.env.VITE_APP_MAXIMUM_FILE_SIZE)
=======
  const accessToken = process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN
    ? process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN
    : 'MAPBOX_TOKEN_PLACEHOLDER';

  const maximumImageSize = process.env.REACT_APP_MAXIMUM_FILE_SIZE
    ? parseInt(process.env.REACT_APP_MAXIMUM_FILE_SIZE)
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    : 5000000;

  //get validation report details
  // const fetchValidationData = async () => {
  //   const response = await get (API_PATHS.VERIFICATION_DOC_LAST_VERSION);
  //   if (response.data){

  //   }
  // };

  // useEffect (()=>{
  //   fetchValidationData();
  // },[])
<<<<<<< HEAD
  const validatePositiveInteger = async (rule, value) => {
  const valStr = String(value).trim();


  if (valStr === "" || value === null || value === undefined) {
    throw new Error(`${t("validationReport:required")}`);
  }

  // Check if it's a valid number
  if (isNaN(value)) {
    throw new Error("Should be a number");
  }

  const numValue = Number(value);

  // Check if it's an integer
  if (!Number.isInteger(numValue)) {
    throw new Error("Value must be an integer");
  }

  // Check if it's a positive integer (0 or more)
  if (numValue <= 0) {
    throw new Error("Value must be a positive integer");
  }

  return Promise.resolve();
};
=======
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = async (values: any) => {
<<<<<<< HEAD
    const signature = (await fileUploadValueExtract(values, "b_signature"))[0];
    const body = {
      ...values,
      b_completionDate: moment(values?.b_completionDate).startOf("day").unix(),
      b_signature: signature,
=======
    //const signature = (await fileUploadValueExtract(values, 'b_signature'))[0];
    const body = {
      ...values,
      b_completionDate: moment(values?.b_completionDate).startOf('day').unix(),
      //b_signature: signature,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    };

    handleValuesUpdate({
      basicInformation: body,
    });
  };

  return (
    <>
      {current === 0 && (
        <div>
          <div className="step-form-container">
            <Form
              labelCol={{ span: 20 }}
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
            >
              <Row className="row" gutter={[40, 16]}>
                <Col xl={12} md={24}>
                  <div className="step-form-left-col">
<<<<<<< HEAD
                    <Form.Item
                      label={t("verificationReport:b_projectTitle")}
                      name="b_projectTitle"
                    >
=======
                    <Form.Item label={t('verificationReport:b_projectTitle')} name="b_projectTitle">
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      <Input size="large" disabled />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={t("verificationReport:b_scaleOfProject")}
=======
                      label={t('verificationReport:b_scaleOfProject')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="b_scaleOfProject"
                    >
                      <Select
                        showSearch
                        size="large"
                        disabled
                        placeholder="Select"
                        filterOption={(input, option) =>
<<<<<<< HEAD
                          (option?.label ?? "")
                            .toLocaleString()
                            .includes(input.toLowerCase())
                        }
                        options={[
                          { value: "1", label: "Large Scale" },
                          { value: "2", label: "Small Scale" },
=======
                          (option?.label ?? '').toLocaleString().includes(input.toLowerCase())
                        }
                        options={[
                          { value: '1', label: 'Large Scale' },
                          { value: '2', label: 'Small Scale' },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        ]}
                      />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={t("verificationReport:b_monitoringPeriodDuration")}
=======
                      label={t('verificationReport:b_monitoringPeriodDuration')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="b_monitoringPeriodDuration"
                    >
                      <Input size="large" disabled />
                    </Form.Item>

                    {/* <Form.Item
                      name="telephone"
                      label={t('verificationReport:telephone')}
                      initialValue={useLocation?.record?.phoneNo}
                      rules={[
                        {
                          required: true,
                          message: '',
                        },
                        {
                          validator: async (rule: any, value: any) => {
                            if (
                              String(value).trim() === '' ||
                              String(value).trim() === undefined ||
                              value === null ||
                              value === undefined
                            ) {
                              throw new Error(
                                `${t('verificationReport:telephone')} ${t('isRequired')}`
                              );
                            } else {
                              const phoneNo = formatPhoneNumber(String(value));
                              if (String(value).trim() !== '') {
                                if (phoneNo === null || phoneNo === '' || phoneNo === undefined) {
                                  throw new Error(
                                    `${t('verificationReport:telephone')} ${t('isRequired')}`
                                  );
                                } else {
                                  if (!isPossiblePhoneNumber(String(value))) {
                                    throw new Error(
                                      `${t('verificationReport:telephone')} ${t('isInvalid')}`
                                    );
                                  }
                                }
                              }
                            }
                          },
                        },
                      ]}
                    >
                      <PhoneInput
                        placeholder={t('verificationReport:telephone')}
                        international
                        value={formatPhoneNumberIntl(contactNoInput)}
                        defaultCountry="LK"
                        disabled
                        countryCallingCodeEditable={false}
                        onChange={(v) => {}}
                        countries={countries}
                      />
                    </Form.Item> */}
                    <Form.Item
<<<<<<< HEAD
                      label={t("verificationReport:b_completionDate")}
=======
                      label={t('verificationReport:b_completionDate')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="b_completionDate"
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
                                  "verificationReport:b_completionDate"
                                )} ${t("isRequired")}`
=======
                                `${t('verificationReport:b_completionDate')} ${t('isRequired')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              );
                            }
                          },
                        },
                      ]}
                    >
                      <DatePicker
                        size="large"
<<<<<<< HEAD
                        disabledDate={(currentDate: any) =>
                          currentDate < moment().startOf("day")
                        }
=======
                        disabledDate={(currentDate: any) => currentDate < moment().startOf('day')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        disabled={disableFields}
                      />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={t(
                        "verificationReport:b_versionNoOfMonitoringReport"
                      )}
                      name={"b_versionNoOfMonitoringReport"}
                      rules={[
                        {
                          required: true,
                          message: "",
=======
                      label={t('verificationReport:b_versionNoOfMonitoringReport')}
                      name={'b_versionNoOfMonitoringReport'}
                      rules={[
                        {
                          required: true,
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
                                  "verificationReport:b_versionNoOfMonitoringReport"
                                )} ${t("isRequired")}`
=======
                                `${t('verificationReport:b_versionNoOfMonitoringReport')} ${t(
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
                      label={t("verificationReport:b_projectDeveloper")}
                      name={"b_projectDeveloper"}
=======
                      label={t('verificationReport:b_projectDeveloper')}
                      name={'b_projectDeveloper'}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                    >
                      <Input
                        size="large"
                        //placeholder="Add Project Participants"
                        disabled
                      />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={t("verificationReport:b_appliedMethodologies")}
                      name={"b_appliedMethodologies"}
=======
                      label={t('verificationReport:b_appliedMethodologies')}
                      name={'b_appliedMethodologies'}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                    >
                      <Input
                        size="large"
                        // placeholder="Add Project Participants"
                        disabled
                      />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={t(
                        "verificationReport:b_conditionalSectoralScopes"
                      )}
                      name={"b_conditionalSectoralScopes"}
=======
                      label={t('verificationReport:b_conditionalSectoralScopes')}
                      name={'b_conditionalSectoralScopes'}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      // rules={[
                      //   {
                      //     required: true,
                      //     message: '',
                      //   },
                      //   {
                      //     validator: async (rule, value) => {
                      //       if (
                      //         String(value).trim() === '' ||
                      //         String(value).trim() === undefined ||
                      //         value === null ||
                      //         value === undefined
                      //       ) {
                      //         throw new Error(
                      //           `${t('verificationReport:b_conditionalSectoralScopes')} ${t(
                      //             'isRequired'
                      //           )}`
                      //         );
                      //       }
                      //     },
                      //   },
                      // ]}
                    >
                      <Input
                        size="large"
                        // placeholder="Add Project Participants"
                        disabled
                      />
                    </Form.Item>
                  </div>
                </Col>

                <Col xl={12} md={24}>
                  <div className="step-form-right-col">
                    <Form.Item
<<<<<<< HEAD
                      label={t("verificationReport:b_unfccRefNo")}
=======
                      label={t('verificationReport:b_unfccRefNo')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="b_unfccRefNo"
                      // rules={[
                      //   {
                      //     required: false,
                      //     message: '',
                      //   },
                      //   {
                      //     validator: async (rule, value) => {
                      //       if (
                      //         String(value).trim() === '' ||
                      //         String(value).trim() === undefined ||
                      //         value === null ||
                      //         value === undefined
                      //       ) {
                      //         throw new Error(
                      //           `${t('verificationReport:b_unfccRefNo')} ${t('isRequired')}`
                      //         );
                      //       }
                      //     },
                      //   },
                      // ]}
                    >
                      <Input size="large" disabled />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={t(
                        "verificationReport:b_versionNoOfVerificationReport"
                      )}
=======
                      label={t('verificationReport:b_versionNoOfVerificationReport')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="b_versionNoOfVerificationReport"
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
                                  "verificationReport:b_versionNoOfVerificationReport"
                                )} ${t("isRequired")}`
=======
                                `${t('verificationReport:b_versionNoOfVerificationReport')} ${t(
                                  'isRequired'
                                )}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              );
                            }
                          },
                        },
                      ]}
                    >
                      <Input size="large" disabled={true} />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={t("verificationReport:b_monitoringPeriodNo")}
=======
                      label={t('verificationReport:b_monitoringPeriodNo')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="b_monitoringPeriodNo"
                    >
                      <Input size="large" disabled />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={t("verificationReport:b_creditingPeriod")}
=======
                      label={t('verificationReport:b_creditingPeriod')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="b_creditingPeriod"
                    >
                      <Input size="large" disabled />
                    </Form.Item>

<<<<<<< HEAD
                    <Form.Item
                      label={t("verificationReport:b_hostParty")}
                      name="b_hostParty"
                    >
=======
                    <Form.Item label={t('verificationReport:b_hostParty')} name="b_hostParty">
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      <Input size="large" disabled />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={t("verificationReport:b_mandatorySectoralScopes")}
=======
                      label={t('verificationReport:b_mandatorySectoralScopes')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="b_mandatorySectoralScopes"
                    >
                      <Input size="large" disabled />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={t(
                        "verificationReport:b_estimatedGHGEmissionReduction"
                      )}
=======
                      label={t('verificationReport:b_estimatedGHGEmissionReduction')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="b_estimatedGHGEmissionReduction"
                    >
                      <Input size="large" disabled />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={t("verificationReport:b_certfiedGHGReductions")}
=======
                      label={t('verificationReport:b_certfiedGHGReductions')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="b_certfiedGHGReductions"
                      rules={[
                        {
                          required: true,
<<<<<<< HEAD
                          message: `${t(
                            "verificationReport:b_certfiedGHGReductions"
                          )} ${t("isRequired")}`,
                        },
                        {validator:validatePositiveInteger}
=======
                          message: `${t('verificationReport:b_certfiedGHGReductions')} ${t(
                            'isRequired'
                          )}`,
                        },
                        {
                          pattern: /^[1-9]\d*$/,
                          message:
                            t('Only positive integers are allowed') ||
                            'Only positive integers are allowed',
                        },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      ]}
                    >
                      <Input size="large" disabled={disableFields} />
                    </Form.Item>
                  </div>
                </Col>
              </Row>

<<<<<<< HEAD
              <Row justify={"end"} className="step-actions-end">
                <Button danger size={"large"} onClick={prev} disabled={false}>
                  {t("verificationReport:cancel")}
                </Button>
                {disableFields ? (
                  <Button type="primary" onClick={next}>
                    {t("verificationReport:next")}
=======
              <Row justify={'end'} className="step-actions-end">
                <Button danger size={'large'} onClick={prev} disabled={false}>
                  {t('verificationReport:cancel')}
                </Button>
                {disableFields ? (
                  <Button type="primary" onClick={next}>
                    {t('verificationReport:next')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                  </Button>
                ) : (
                  <Button
                    type="primary"
<<<<<<< HEAD
                    size={"large"}
                    htmlType={"submit"}
                    // onClick={next}
                  >
                    {t("verificationReport:next")}
=======
                    size={'large'}
                    htmlType={'submit'}
                    // onClick={next}
                  >
                    {t('verificationReport:next')}
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
