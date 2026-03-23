<<<<<<< HEAD
import { Button, Col, Form, Row, Input, DatePicker } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TextArea from "antd/lib/input/TextArea";
import { FormMode } from "../../Definitions/Enums/formMode.enum";
import { useUserContext } from "../../Context/UserInformationContext/userInformationContext";
import { CompanyRole } from "../../Definitions/Enums/company.role.enum";
import { DocumentStatus } from "../../Definitions/Enums/document.status";
import i18n from "../Internationalization/i18n";
import { VerificationStepProps } from "./StepProps";
import moment from "moment";

const clCols = [
  "finding-cl-1",
  "finding-cl-2",
  "finding-cl-3",
  "finding-cl-4",
  "finding-cl-5",
  "finding-cl-6",
  "finding-cl-7",
  "finding-cl-8",
  "finding-cl-9",
  "finding-cl-10",
  "finding-cl-11",
  "finding-cl-12",
  "finding-cl-13",
  "finding-cl-14",
  "finding-cl-15",
  "finding-cl-16",
  "finding-cl-17",
  "finding-cl-18",
  "finding-cl-19",
  "finding-cl-20",
];

const carCols = [
  "finding-car-1",
  "finding-car-2",
  "finding-car-3",
  "finding-car-4",
  "finding-car-5",
  "finding-car-6",
  "finding-car-7",
  "finding-car-8",
  "finding-car-9",
  "finding-car-10",
  "finding-car-11",
  "finding-car-12",
  "finding-car-13",
  "finding-car-14",
  "finding-car-15",
  "finding-car-16",
  "finding-car-17",
  "finding-car-18",
  "finding-car-19",
  "finding-car-20",
];

const farCols = [
  "finding-far-1",
  "finding-far-2",
  "finding-far-3",
  "finding-far-4",
  "finding-far-5",
  "finding-far-6",
  "finding-far-7",
  "finding-far-8",
  "finding-far-9",
  "finding-far-10",
  "finding-far-11",
  "finding-far-12",
  "finding-far-13",
  "finding-far-14",
  "finding-far-15",
  "finding-far-16",
  "finding-far-17",
  "finding-far-18",
  "finding-far-19",
  "finding-far-20",
];

export const MeansOfVerificationStep = (props: VerificationStepProps) => {
  const {
    current,
    form,
    formMode,
    prev,
    handleValuesUpdate,
    next,
    disableFields,
  } = props;
  const { userInfoState } = useUserContext();
  const t = i18n.t;
  const maximumImageSize = import.meta.env.VITE_APP_MAXIMUM_FILE_SIZE
    ? parseInt(import.meta.env.VITE_APP_MAXIMUM_FILE_SIZE)
=======
import { Button, Col, Form, Row, Input, DatePicker } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TextArea from 'antd/lib/input/TextArea';
import { FormMode } from '../../Definitions/Enums/formMode.enum';
import { useUserContext } from '../../Context/UserInformationContext/userInformationContext';
import { CompanyRole } from '../../Definitions/Enums/company.role.enum';
import { DocumentStatus } from '../../Definitions/Enums/document.status';
import i18n from '../Internationalization/i18n';
import { VerificationStepProps } from './StepProps';
import moment from 'moment';

const clCols = [
  'finding-cl-1',
  'finding-cl-2',
  'finding-cl-3',
  'finding-cl-4',
  'finding-cl-5',
  'finding-cl-6',
  'finding-cl-7',
  'finding-cl-8',
  'finding-cl-9',
  'finding-cl-10',
  'finding-cl-11',
  'finding-cl-12',
  'finding-cl-13',
  'finding-cl-14',
  'finding-cl-15',
  'finding-cl-16',
  'finding-cl-17',
  'finding-cl-18',
  'finding-cl-19',
  'finding-cl-20',
];

const carCols = [
  'finding-car-1',
  'finding-car-2',
  'finding-car-3',
  'finding-car-4',
  'finding-car-5',
  'finding-car-6',
  'finding-car-7',
  'finding-car-8',
  'finding-car-9',
  'finding-car-10',
  'finding-car-11',
  'finding-car-12',
  'finding-car-13',
  'finding-car-14',
  'finding-car-15',
  'finding-car-16',
  'finding-car-17',
  'finding-car-18',
  'finding-car-19',
  'finding-car-20',
];

const farCols = [
  'finding-far-1',
  'finding-far-2',
  'finding-far-3',
  'finding-far-4',
  'finding-far-5',
  'finding-far-6',
  'finding-far-7',
  'finding-far-8',
  'finding-far-9',
  'finding-far-10',
  'finding-far-11',
  'finding-far-12',
  'finding-far-13',
  'finding-far-14',
  'finding-far-15',
  'finding-far-16',
  'finding-far-17',
  'finding-far-18',
  'finding-far-19',
  'finding-far-20',
];

export const MeansOfVerificationStep = (props: VerificationStepProps) => {
  const { current, form, formMode, prev, handleValuesUpdate, next, disableFields } = props;
  const { userInfoState } = useUserContext();
  const t = i18n.t;
  const maximumImageSize = process.env.REACT_APP_MAXIMUM_FILE_SIZE
    ? parseInt(process.env.REACT_APP_MAXIMUM_FILE_SIZE)
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    : 5000000;

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  // useEffect(() => {
  //   if (formMode === FormMode.CREATE) {
  //     form.setFieldValue('onSiteInspection', [{ activity: '' }]);
  //     form.setFieldValue('interviewees', [{ lastName: '' }]);
  //   }
  // }, []);
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
  if (numValue < 0) {
    throw new Error("Value must be a positive integer");
  }

  return Promise.resolve();
};

=======
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

  const calculateTotalCL = (value: number) => {
    let total = 0;
    clCols.forEach((colKey: string) => {
      total += Number(form.getFieldValue(colKey)) || 0;
    });

<<<<<<< HEAD
    form.setFieldValue("cl-total", total);
=======
    form.setFieldValue('cl-total', total);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  };

  const calculateTotalCar = (value: number) => {
    let total = 0;
    carCols.forEach((colKey: string) => {
      total += Number(form.getFieldValue(colKey)) || 0;
    });

<<<<<<< HEAD
    form.setFieldValue("car-total", total);
=======
    form.setFieldValue('car-total', total);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  };

  const calculateTotalFar = (value: number) => {
    let total = 0;
    farCols.forEach((colKey: string) => {
      total += Number(form.getFieldValue(colKey)) || 0;
    });

<<<<<<< HEAD
    form.setFieldValue("far-total", total);
  };

  const onFinish = (values: any) => {
    console.log("--------values-----------", values);
    const body = {
      ...values,
      siteInspectionDurationStart: moment(values?.siteInspectionDurationStart)
        .startOf("day")
        .unix(),
      siteInspectionDurationEnd: moment(values?.siteInspectionDurationEnd)
        .startOf("day")
        .unix(),
=======
    form.setFieldValue('far-total', total);
  };

  const onFinish = (values: any) => {
    console.log('--------values-----------', values);
    const body = {
      ...values,
      siteInspectionDurationStart: moment(values?.siteInspectionDurationStart)
        .startOf('day')
        .unix(),
      siteInspectionDurationEnd: moment(values?.siteInspectionDurationEnd).startOf('day').unix(),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      onSiteInspection: values?.onSiteInspection.map((item: any) => {
        return {
          activity: item?.activity,
          siteLocation: item?.siteLocation,
          teamMember: item?.teamMember,
<<<<<<< HEAD
          activityPerformedDate: moment(item?.activityPerformedDate)
            .startOf("day")
            .unix(),
=======
          activityPerformedDate: moment(item?.activityPerformedDate).startOf('day').unix(),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        };
      }),
      interviewees: values?.interviewees.map((item: any) => {
        return {
          lastName: item?.lastName,
          firstName: item?.firstName,
          affliationName: item?.affliationName,
          subject: item?.subject,
          teamMember: item?.teamMember,
<<<<<<< HEAD
          date: moment(item?.date).startOf("day").unix(),
=======
          date: moment(item?.date).startOf('day').unix(),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        };
      }),
    };
    handleValuesUpdate({
      meansOfVerification: body,
    });
  };

  return (
    <>
      {current === 5 && (
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
                <Col xl={24} md={24}>
                  <div className="step-form-left-col">
                    <Form.Item
<<<<<<< HEAD
                      label={t("verificationReport:DeskDocument")}
                      name="m_meansOfVerification"
                      rules={[
                        {
                          required: true,
                          message: `${t(
                            "verificationReport:DeskDocument"
                          )} ${t("isRequired")}`,
=======
                      label={t('verificationReport:m_deskReview')}
                      name="m_deskReview"
                      rules={[
                        {
                          required: true,
                          message: `${t('verificationReport:m_deskReview')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        },
                      ]}
                    >
                      <TextArea rows={6} disabled={disableFields} />
                    </Form.Item>

                    {/* On-site inspection table start */}
                    <>
                      <h4 className="form-section-heading">
<<<<<<< HEAD
                        {t("verificationReport:onSiteInspection")}
=======
                        {t('verificationReport:onSiteInspection')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      </h4>
                      <div className="onSiteInspection-table mg-bottom-2">
                        <Row>
                          <Col xl={21} className="duration-header">
                            <p>Duration of on-site inspection:</p>
                            <Form.Item
                              name="siteInspectionDurationStart"
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
<<<<<<< HEAD
                                      throw new Error(
                                        `${t("verificationReport:required")}`
                                      );
=======
                                      throw new Error(`${t('verificationReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    }
                                  },
                                },
                              ]}
                            >
                              <DatePicker
                                size="small"
                                disabledDate={(currentDate: any) =>
<<<<<<< HEAD
                                  currentDate < moment().startOf("day")
=======
                                  currentDate < moment().startOf('day')
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                }
                                disabled={disableFields}
                              />
                            </Form.Item>
                            <p>to</p>
                            <Form.Item
                              name="siteInspectionDurationEnd"
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
<<<<<<< HEAD
                                      throw new Error(
                                        `${t("verificationReport:required")}`
                                      );
=======
                                      throw new Error(`${t('verificationReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    }
                                  },
                                },
                              ]}
                            >
                              <DatePicker
                                size="small"
                                disabledDate={(currentDate: any) => {
<<<<<<< HEAD
                                  const siteInspectionDurationStart =
                                    form.getFieldValue(
                                      "siteInspectionDurationStart"
                                    );
                                  return (
                                    currentDate &&
                                    currentDate <
                                      moment(siteInspectionDurationStart).endOf(
                                        "day"
                                      )
=======
                                  const siteInspectionDurationStart = form.getFieldValue(
                                    'siteInspectionDurationStart'
                                  );
                                  return (
                                    currentDate &&
                                    currentDate < moment(siteInspectionDurationStart).endOf('day')
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  );
                                }}
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3}></Col>
                        </Row>
                        <Row className="header">
                          <Col xl={1} className="col col-1">
                            No
                          </Col>
                          <Col xl={6} className="col other-cols">
                            Activity performed on-site
                          </Col>
                          <Col xl={5} className="col other-cols">
                            Site location
                          </Col>
                          <Col xl={5} className="col other-cols">
                            Date
                          </Col>
                          <Col xl={4} className="col other-cols">
                            Team member
                          </Col>
                          <Col xl={3}></Col>
                        </Row>
                        <Row className="body">
                          <Form.List name="onSiteInspection">
                            {(fields, { add, remove }) => (
                              <>
                                {fields.map(({ key, name, ...restFields }) => (
                                  <>
                                    <Col xl={1} className="col-1 col" key={key}>
<<<<<<< HEAD
                                      {name + 1 < 10 && "0"}
=======
                                      {name + 1 < 10 && '0'}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                      {name + 1}
                                    </Col>
                                    <Col xl={6} className="other-cols col">
                                      <Form.Item
<<<<<<< HEAD
                                        name={[name, "activity"]}
=======
                                        name={[name, 'activity']}
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
                                                String(value).trim() ===
                                                  undefined ||
=======
                                                String(value).trim() === '' ||
                                                String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                value === null ||
                                                value === undefined
                                              ) {
                                                throw new Error(
<<<<<<< HEAD
                                                  `${t(
                                                    "verificationReport:required"
                                                  )}`
=======
                                                  `${t('verificationReport:required')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                );
                                              }
                                            },
                                          },
                                        ]}
                                      >
                                        <Input disabled={disableFields} />
                                      </Form.Item>
                                    </Col>
                                    <Col xl={5} className="other-cols col">
                                      <Form.Item
<<<<<<< HEAD
                                        name={[name, "siteLocation"]}
=======
                                        name={[name, 'siteLocation']}
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
                                                String(value).trim() ===
                                                  undefined ||
=======
                                                String(value).trim() === '' ||
                                                String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                value === null ||
                                                value === undefined
                                              ) {
                                                throw new Error(
<<<<<<< HEAD
                                                  `${t(
                                                    "verificationReport:required"
                                                  )}`
=======
                                                  `${t('verificationReport:required')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                );
                                              }
                                            },
                                          },
                                        ]}
                                      >
                                        <Input disabled={disableFields} />
                                      </Form.Item>
                                    </Col>
                                    <Col xl={5} className="other-cols col">
                                      <Form.Item
<<<<<<< HEAD
                                        name={[name, "activityPerformedDate"]}
=======
                                        name={[name, 'activityPerformedDate']}
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
                                                String(value).trim() ===
                                                  undefined ||
=======
                                                String(value).trim() === '' ||
                                                String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                value === null ||
                                                value === undefined
                                              ) {
                                                throw new Error(
<<<<<<< HEAD
                                                  `${t(
                                                    "verificationReport:required"
                                                  )}`
=======
                                                  `${t('verificationReport:required')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                );
                                              }
                                            },
                                          },
                                        ]}
                                      >
                                        <DatePicker
                                          size="small"
                                          disabledDate={(currentDate: any) =>
<<<<<<< HEAD
                                            currentDate <
                                            moment().startOf("day")
=======
                                            currentDate < moment().startOf('day')
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                          }
                                          disabled={disableFields}
                                        />
                                      </Form.Item>
                                    </Col>
                                    <Col xl={4} className="other-cols col">
                                      <Form.Item
<<<<<<< HEAD
                                        name={[name, "teamMember"]}
=======
                                        name={[name, 'teamMember']}
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
                                                String(value).trim() ===
                                                  undefined ||
=======
                                                String(value).trim() === '' ||
                                                String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                value === null ||
                                                value === undefined
                                              ) {
                                                throw new Error(
<<<<<<< HEAD
                                                  `${t(
                                                    "verificationReport:provider"
                                                  )} ${t("isRequired")}`
=======
                                                  `${t('verificationReport:provider')} ${t(
                                                    'isRequired'
                                                  )}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                );
                                              }
                                            },
                                          },
                                        ]}
                                      >
                                        <Input disabled={disableFields} />
                                      </Form.Item>
                                    </Col>
                                    <Col xl={3} className="action-col">
                                      <Form.Item>
                                        <Button
                                          onClick={add}
                                          size="small"
                                          className="addMinusBtn"
                                          disabled={disableFields}
                                          icon={<PlusOutlined />}
                                        ></Button>
                                      </Form.Item>
                                      {name > 0 && (
                                        <Form.Item>
                                          <Button
                                            // type="dashed"
                                            onClick={() => {
                                              // removeParticipants(name2);
                                              remove(name);
                                            }}
                                            size="small"
                                            className="addMinusBtn"
                                            // block
                                            icon={<MinusOutlined />}
                                            disabled={disableFields}
                                          >
                                            {/* Minus Participant */}
                                          </Button>
                                        </Form.Item>
                                      )}
                                    </Col>
                                  </>
                                ))}
                              </>
                            )}
                          </Form.List>
                        </Row>
                      </div>
                    </>
                    {/* On-site inspection table end */}

                    {/* Interviews table start */}
                    <>
<<<<<<< HEAD
                      <h4 className="form-section-heading">
                        {t("verificationReport:interviews")}
                      </h4>
=======
                      <h4 className="form-section-heading">{t('verificationReport:interviews')}</h4>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      <div className="interviews-table">
                        <Row className="header">
                          <Col xl={1} className="col-1 col">
                            No
                          </Col>
                          <Col xl={9} className="interviewee-col">
                            <Row>
                              <Col xl={24} className="other-cols col">
                                Interviewee
                              </Col>
                            </Row>
                            <Row>
<<<<<<< HEAD
                              <Col
                                xl={8}
                                className="interviewee-col-subCols-first"
                              >
=======
                              <Col xl={8} className="interviewee-col-subCols-first">
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                Last name
                              </Col>
                              <Col xl={8} className="interviewee-col-subCols">
                                First name
                              </Col>
<<<<<<< HEAD
                              <Col
                                xl={8}
                                className="interviewee-col-subCols-last"
                              >
=======
                              <Col xl={8} className="interviewee-col-subCols-last">
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                Affiliation
                              </Col>
                            </Row>
                          </Col>
                          <Col xl={3} className="other-cols col">
                            Date
                          </Col>
                          <Col xl={3} className="other-cols col">
                            Subject
                          </Col>
                          <Col xl={4} className="other-cols col">
                            Team Member
                          </Col>
                          <Col xl={3}></Col>
                        </Row>
                        <Row className="body mg-bottom-2">
                          <Form.List name="interviewees">
                            {(fields, { add, remove }) => (
                              <>
                                {fields.map(({ key, name, ...restFields }) => (
                                  <>
                                    <Col xl={1} className="col-1 col">
<<<<<<< HEAD
                                      {name + 1 < 10 && "0"}
=======
                                      {name + 1 < 10 && '0'}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                      {name + 1}
                                    </Col>
                                    <Col xl={3} className="other-cols col">
                                      <Form.Item
<<<<<<< HEAD
                                        name={[name, "lastName"]}
=======
                                        name={[name, 'lastName']}
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
                                                String(value).trim() ===
                                                  undefined ||
=======
                                                String(value).trim() === '' ||
                                                String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                value === null ||
                                                value === undefined
                                              ) {
                                                throw new Error(
<<<<<<< HEAD
                                                  `${t(
                                                    "validationReport:required"
                                                  )}`
=======
                                                  `${t('validationReport:required')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                );
                                              }
                                            },
                                          },
                                        ]}
                                      >
                                        <Input disabled={disableFields} />
                                      </Form.Item>
                                    </Col>
                                    <Col xl={3} className="other-cols col">
                                      <Form.Item
<<<<<<< HEAD
                                        name={[name, "firstName"]}
=======
                                        name={[name, 'firstName']}
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
                                                String(value).trim() ===
                                                  undefined ||
=======
                                                String(value).trim() === '' ||
                                                String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                value === null ||
                                                value === undefined
                                              ) {
                                                throw new Error(
<<<<<<< HEAD
                                                  `${t(
                                                    "validationReport:required"
                                                  )}`
=======
                                                  `${t('validationReport:required')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                );
                                              }
                                            },
                                          },
                                        ]}
                                      >
                                        <Input disabled={disableFields} />
                                      </Form.Item>
                                    </Col>
                                    <Col xl={3} className="other-cols col">
                                      <Form.Item
<<<<<<< HEAD
                                        name={[name, "affliationName"]}
=======
                                        name={[name, 'affliationName']}
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
                                                String(value).trim() ===
                                                  undefined ||
=======
                                                String(value).trim() === '' ||
                                                String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                value === null ||
                                                value === undefined
                                              ) {
                                                throw new Error(
<<<<<<< HEAD
                                                  `${t(
                                                    "validationReport:required"
                                                  )}`
=======
                                                  `${t('validationReport:required')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                );
                                              }
                                            },
                                          },
                                        ]}
                                      >
                                        <Input disabled={disableFields} />
                                      </Form.Item>
                                    </Col>
                                    <Col xl={3} className="other-cols col">
                                      <Form.Item
<<<<<<< HEAD
                                        name={[name, "date"]}
=======
                                        name={[name, 'date']}
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
                                                String(value).trim() ===
                                                  undefined ||
=======
                                                String(value).trim() === '' ||
                                                String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                value === null ||
                                                value === undefined
                                              ) {
                                                throw new Error(
<<<<<<< HEAD
                                                  `${t(
                                                    "validationReport:required"
                                                  )}`
=======
                                                  `${t('validationReport:required')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                );
                                              }
                                            },
                                          },
                                        ]}
                                      >
                                        <DatePicker
                                          size="small"
                                          disabledDate={(currentDate: any) =>
<<<<<<< HEAD
                                            currentDate <
                                            moment().startOf("day")
=======
                                            currentDate < moment().startOf('day')
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                          }
                                          disabled={disableFields}
                                        />
                                      </Form.Item>
                                    </Col>
                                    <Col xl={3} className="other-cols col">
                                      <Form.Item
<<<<<<< HEAD
                                        name={[name, "subject"]}
=======
                                        name={[name, 'subject']}
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
                                                String(value).trim() ===
                                                  undefined ||
=======
                                                String(value).trim() === '' ||
                                                String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                value === null ||
                                                value === undefined
                                              ) {
                                                throw new Error(
<<<<<<< HEAD
                                                  `${t(
                                                    "validationReport:required"
                                                  )}`
=======
                                                  `${t('validationReport:required')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                );
                                              }
                                            },
                                          },
                                        ]}
                                      >
                                        <Input disabled={disableFields} />
                                      </Form.Item>
                                    </Col>
                                    <Col xl={4} className="other-cols col">
                                      <Form.Item
<<<<<<< HEAD
                                        name={[name, "teamMember"]}
=======
                                        name={[name, 'teamMember']}
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
                                                String(value).trim() ===
                                                  undefined ||
=======
                                                String(value).trim() === '' ||
                                                String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                value === null ||
                                                value === undefined
                                              ) {
                                                throw new Error(
<<<<<<< HEAD
                                                  `${t(
                                                    "validationReport:required"
                                                  )}`
=======
                                                  `${t('validationReport:required')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                );
                                              }
                                            },
                                          },
                                        ]}
                                      >
                                        <Input disabled={disableFields} />
                                      </Form.Item>
                                    </Col>
                                    <Col xl={4} className="action-col">
                                      <Form.Item>
                                        <Button
                                          onClick={add}
                                          size="small"
                                          className="addMinusBtn"
                                          icon={<PlusOutlined />}
                                          disabled={disableFields}
                                        ></Button>
                                      </Form.Item>
                                      {name > 0 && (
                                        <Form.Item>
                                          <Button
                                            // type="dashed"
                                            onClick={() => {
                                              // removeParticipants(name2);
                                              remove(name);
                                            }}
                                            size="small"
                                            className="addMinusBtn"
                                            // block
                                            icon={<MinusOutlined />}
                                            disabled={disableFields}
                                          >
                                            {/* Minus Participant */}
                                          </Button>
                                        </Form.Item>
                                      )}
                                    </Col>
                                  </>
                                ))}
                              </>
                            )}
                          </Form.List>
                        </Row>
                      </div>
                    </>
                    {/* Interviews table end */}

                    <Form.Item
<<<<<<< HEAD
                      label={t("verificationReport:samplingApproach")}
=======
                      label={t('verificationReport:samplingApproach')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="samplingApproach"
                      rules={[
                        {
                          required: true,
<<<<<<< HEAD
                          message: `${t(
                            "verificationReport:samplingApproach"
                          )} ${t("isRequired")}`,
=======
                          message: `${t('verificationReport:samplingApproach')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        },
                      ]}
                    >
                      <TextArea rows={6} disabled={disableFields} />
                    </Form.Item>

                    {/* Clarification Table start */}
                    <h4 className="form-section-heading">
<<<<<<< HEAD
                      {t("verificationReport:clarificationRequestsTableTitle")}
=======
                      {t('verificationReport:clarificationRequestsTableTitle')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                    </h4>
                    <div className="clarification-requests-table mg-bottom-2">
                      <Row className="header">
                        <Col xl={15} className="col col-1">
                          Areas of validation findings
                        </Col>
                        <Col xl={3} className="col other-cols">
                          No. of CL
                        </Col>
                        <Col xl={3} className="col other-cols">
                          No. of CAR
                        </Col>
                        <Col xl={3} className="col other-cols">
                          No. of FAR
                        </Col>
                      </Row>
                      <div className="body">
                        <Row>
                          <Col xl={15} className="col col-1">
<<<<<<< HEAD
                            {t("verificationReport:demonstrationPriorCDM")}
=======
                            {t('verificationReport:demonstrationPriorCMD')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-1"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-1"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-1"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1">
<<<<<<< HEAD
                            {t(
                              "verificationReport:identificationOfProjectType"
                            )}
=======
                            {t('verificationReport:identificationOfProjectType')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-2"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-2"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-2"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1">
<<<<<<< HEAD
                            {t(
                              "verificationReport:descriptionOfProjectActivity"
                            )}
=======
                            {t('verificationReport:descriptionOfProjectActivity')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-3"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-3"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-3"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1">
<<<<<<< HEAD
                            {t(
                              "verificationReport:applicationMethodologiesSectionHeading"
                            )}
=======
                            {t('verificationReport:applicationMethodologiesSectionHeading')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols"></Col>
                          <Col xl={3} className="col other-cols"></Col>
                          <Col xl={3} className="col other-cols"></Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1 pd-left">
<<<<<<< HEAD
                            {t(
                              "verificationReport:applicationMethodologiesBaselines"
                            )}
=======
                            {t('verificationReport:applicationMethodologiesBaselines')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-4"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-4"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-4"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1 pd-left">
<<<<<<< HEAD
                            {t("verificationReport:deviationMethodology")}
=======
                            {t('verificationReport:deviationMethodology')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-5"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-5"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-5"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1 pd-left">
<<<<<<< HEAD
                            {t("verificationReport:clarificationOnMethodology")}
=======
                            {t('verificationReport:clarificationOnMethodology')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-6"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator: validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-6"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-6"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1 pd-left">
<<<<<<< HEAD
                            {t("verificationReport:projectBoundarySources")}
=======
                            {t('verificationReport:projectBoundarySources')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-7"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator: validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-7"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator: validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-7"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1 pd-left">
<<<<<<< HEAD
                            {t("verificationReport:baselineScenario")}
=======
                            {t('verificationReport:baselineScenario')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-8"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-8"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-8"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1 pd-left">
<<<<<<< HEAD
                            {t(
                              "verificationReport:demonstrationOfAdditionality"
                            )}
=======
                            {t('verificationReport:demonstrationOfAdditionality')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-9"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-9"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-9"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1 pd-left">
<<<<<<< HEAD
                            {t(
                              "verificationReport:estimationOfEmissionReduction"
                            )}
=======
                            {t('verificationReport:estimationOfEmissionReduction')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-10"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator: validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-10"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-10"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator: validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1 pd-left">
<<<<<<< HEAD
                            {t("verificationReport:monitoringPlan")}
=======
                            {t('verificationReport:monitoringPlan')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-11"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator: validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-11"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-11"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator: validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1">
<<<<<<< HEAD
                            {t("verificationReport:startDateCreditingPeriod")}
=======
                            {t('verificationReport:startDateCreditingPeriod')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-12"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-12"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator: validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-12"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator: validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1">
<<<<<<< HEAD
                            {t("verificationReport:environmentImpacts")}
=======
                            {t('verificationReport:environmentImpacts')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-13"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-13"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-13"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1">
<<<<<<< HEAD
                            {t(
                              "verificationReport:localStakeholderConsultation"
                            )}
=======
                            {t('verificationReport:localStakeholderConsultation')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-14"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-14"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-14"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col xl={15} className="col col-1">
<<<<<<< HEAD
                            {t("verificationReport:sustainableDevelopment")}
=======
                            {t('verificationReport:sustainableDevelopment')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-15"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-15"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-15"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1">
<<<<<<< HEAD
                            {t("verificationReport:approval")}
=======
                            {t('verificationReport:approval')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-16"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-16"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-16"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1">
<<<<<<< HEAD
                            {t("verificationReport:authorization")}
=======
                            {t('verificationReport:authorization')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-17"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-17"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-17"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1">
<<<<<<< HEAD
                            {t("verificationReport:modalitiesOfCommunication")}
=======
                            {t('verificationReport:modalitiesOfCommunication')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-18"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-18"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator: validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-18"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1">
<<<<<<< HEAD
                            {t(
                              "verificationReport:globalStakeholderConsultation"
                            )}
=======
                            {t('verificationReport:globalStakeholderConsultation')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-19"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-19"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-19"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input
<<<<<<< HEAD
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1">
                            <Form.Item
                              name="clarificationOthers"
                              //   rules={[
                              //     {
                              //       required: true,
                              //       message: '',
                              //     },
                              //     {
                              //       validator: async (rule, value) => {
                              //         if (
                              //           String(value).trim() === '' ||
                              //           String(value).trim() === undefined ||
                              //           value === null ||
                              //           value === undefined
                              //         ) {
                              //           throw new Error(`${t('verificationReport:required')}`);
                              //         }
                              //       },
                              //     },
                              //   ]}
                            >
                              <Input
<<<<<<< HEAD
                                placeholder={`${t(
                                  "verificationReport:others"
                                )}`}
=======
                                placeholder={`${t('verificationReport:others')}`}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-cl-20"
<<<<<<< HEAD
                                 rules={[
                                   {
                                     required: true,
                                    message: '',
                                   },
                                   {
                                    validator:validatePositiveInteger,
                                  },
                                 ]}
                            >
                              <Input
                                onChange={(e) =>
                                  calculateTotalCL(Number(e.target.value))
                                }
=======
                              rules={[
                                {
                                  required: true,
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
                                },
                              ]}
                            >
                              <Input
                                onChange={(e) => calculateTotalCL(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-car-20"
<<<<<<< HEAD
                                 rules={[
                                   {
                                     required: true,
                                     message: '',
                                   },
                                   {
                                     validator: validatePositiveInteger,
                                   },
                                 ]}
                            >
                              <Input
                                onChange={(e) =>
                                  calculateTotalCar(Number(e.target.value))
                                }
=======
                              rules={[
                                {
                                  required: true,
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
                                },
                              ]}
                            >
                              <Input
                                onChange={(e) => calculateTotalCar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="finding-far-20"
<<<<<<< HEAD
                                 rules={[
                                   {
                                    required: true,
                                     message: '',
                                   },
                                   {
                                    validator:validatePositiveInteger,
                                   },
                                ]}
                            >
                              <Input
                                onChange={(e) =>
                                  calculateTotalFar(Number(e.target.value))
                                }
=======
                              rules={[
                                {
                                  required: true,
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
                                },
                              ]}
                            >
                              <Input
                                onChange={(e) => calculateTotalFar(Number(e.target.value))}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                disabled={disableFields}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={15} className="col col-1 text-bold">
                            Total
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="cl-total"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator:validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    if (
                                      String(value).trim() === '' ||
                                      String(value).trim() === undefined ||
                                      value === null ||
                                      value === undefined
                                    ) {
                                      throw new Error(`${t('verificationReport:required')}`);
                                    }

                                    if (isNaN(value)) {
                                      return Promise.reject(new Error('Should be a number'));
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input disabled />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="car-total"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator: validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input disabled />
                            </Form.Item>
                          </Col>
                          <Col xl={3} className="col other-cols">
                            <Form.Item
                              name="far-total"
                              rules={[
                                {
                                  required: true,
<<<<<<< HEAD
                                  message: "",
                                },
                                {
                                  validator: validatePositiveInteger,
=======
                                  message: '',
                                },
                                {
                                  validator: async (rule, value) => {
                                    const valStr = String(value).trim();
                                    if (valStr === '' || value === null || value === undefined) {
                                      throw new Error(`${t('validationReport:required')}`);
                                    }
                                    if (isNaN(value)) {
                                      throw new Error('Should be a number');
                                    }

                                    const numValue = Number(value);
                                    if (!Number.isInteger(numValue)) {
                                      throw new Error('Value must be an integer');
                                    }
                                    if (numValue < 0) {
                                      throw new Error('Value must be a positive integer');
                                    }

                                    return Promise.resolve();
                                  },
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                },
                              ]}
                            >
                              <Input disabled />
                            </Form.Item>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    {/* Clarification Table end */}
                  </div>
                </Col>
              </Row>
<<<<<<< HEAD
              <Row justify={"end"} className="step-actions-end">
                <Button danger size={"large"} onClick={prev} disabled={false}>
                  {t("verificationReport:back")}
                </Button>
                {disableFields ? (
                  <Button type="primary" onClick={next}>
                    {t("verificationReport:next")}
=======
              <Row justify={'end'} className="step-actions-end">
                <Button type="primary" ghost size={'large'} onClick={prev} disabled={false}>
                  {t('verificationReport:back')}
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
