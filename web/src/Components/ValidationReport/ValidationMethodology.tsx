import { ValidationStepsProps } from "./StepProps";
import {
  Row,
  Button,
  Form,
  Col,
  Input,
  Checkbox,
  Table,
  TableProps,
  InputNumber,
  Radio,
  Select,
<<<<<<< HEAD
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { ProcessSteps } from "./StepperComponent";
import { requiredValidationRule } from "../../Utils/validationHelper";
import { FormMode } from "../../Definitions/Enums/formMode.enum";
import { useEffect, useState } from "react";
import LabelWithTooltip from "../LabelWithTooltip/LabelWithTooltip";
import { useLocation } from "react-router-dom";
import "./ValidationReport.scss";

const ValidationMethodology = (props: ValidationStepsProps) => {
  const countryName = import.meta.env.VITE_APP_COUNTRY_NAME || "CountryX";

  const {
    prev,
    next,
    form,
    current,
    t,
    countries,
    handleValuesUpdate,
    disableFields,
    formMode,
  } = props;

  useEffect(() => {
    if (formMode === FormMode.CREATE) {
      form.setFieldValue("validationTeamMembers", [{ role: "" }]);
      form.setFieldValue("technicalReviews", [{ role: "" }]);
=======
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { ProcessSteps } from './ValidationStepperComponent';
import { requiredValidationRule } from '../../Utils/validationHelper';
import { FormMode } from '../../Definitions/Enums/formMode.enum';
import { useEffect, useState } from 'react';
import LabelWithTooltip from '../LabelWithTooltip/LabelWithTooltip';
import { useLocation } from 'react-router-dom';
import './ValidationReport.scss';

const ValidationMethodology = (props: ValidationStepsProps) => {
  const countryName = process.env.REACT_APP_COUNTRY_NAME || 'CountryX';

  const { prev, next, form, current, t, countries, handleValuesUpdate, disableFields, formMode } =
    props;

  useEffect(() => {
    if (formMode === FormMode.CREATE) {
      form.setFieldValue('validationTeamMembers', [{ role: '' }]);
      form.setFieldValue('technicalReviews', [{ role: '' }]);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    }
  }, [formMode]);

  const onFinish = async (values: any) => {
<<<<<<< HEAD
    console.log("--------values-----------", values);
=======
    console.log('--------values-----------', values);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    const body = {
      ...values,
      validationTeamMembers: values?.validationTeamMembers?.map((item: any) => {
        return {
          role: item?.role,
          typeOfResource: item?.typeOfResource,
          lastName: item?.lastName,
          firstName: item?.firstName,
          affliation: item?.affliation,
          documentReview: item?.documentReview,
          onsiteInspections: item?.onsiteInspections,
          interviews: item?.interviews,
          verificationFindings: item?.verificationFindings,
        };
      }),
      technicalReviews: values?.technicalReviews?.map((item: any) => {
        return {
          role: item?.role,
          typeOfResource: item?.typeOfResource,
          lastName: item?.lastName,
          firstName: item?.firstName,
          affliation: item?.affliation,
        };
      }),
    };
<<<<<<< HEAD
=======

>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    console.log(ProcessSteps.VR_VALIDATION_METHODOLOGY, body);
    handleValuesUpdate({
      validationMethdology: body,
    });
  };

  return (
    <>
      {current === 3 && (
        <div>
          <div className="val-report-step-form-container">
            <Form
              labelCol={{ span: 20 }}
              wrapperCol={{ span: 24 }}
              className="step-form"
              layout="vertical"
              requiredMark={true}
              form={form}
              validateTrigger={false}
              onFinish={(values: any) => {
                onFinish(values);
                if (next) {
                  next();
                }
              }}
              // disabled={FormMode.VIEW === formMode}
            >
              {/* Validation team member table start */}
              <h4 className="form-section-heading">
<<<<<<< HEAD
                {t("validationReport:validationTeamMemberTableTitle")}
=======
                {t('validationReport:validationTeamMemberTableTitle')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
              </h4>
              <div className="validation-team-member-table">
                <Row className="header">
                  <Col xl={1} className="col-1 col">
                    No
                  </Col>
                  <Col xl={4} className="other-cols col">
                    Role
                  </Col>
                  <Col xl={3} className="other-cols col">
                    Type Of Resource
                  </Col>
                  <Col xl={3} className="other-cols col">
                    Last name
                  </Col>
                  <Col xl={3} className="other-cols col">
                    First name
                  </Col>
                  <Col xl={3} className="other-cols col">
                    Affliation
                  </Col>
                  <Col xl={4}>
                    <Row>
                      <Col className="other-cols col" xl={24}>
                        Involvement in
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={6} className="vertical-col">
                        Desk/Document Review
                      </Col>
                      <Col xl={6} className="vertical-col">
                        On-site inspection
                      </Col>
                      <Col xl={6} className="vertical-col">
                        Interviews
                      </Col>
                      <Col xl={6} className="vertical-col">
                        Validation Findings
                      </Col>
                    </Row>
                  </Col>
                  <Col xl={3}></Col>
                </Row>

                <Form.List name="validationTeamMembers">
                  {(fields, { add, remove }) => (
                    <Row className="body">
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
                          <Col xl={4} className="col other-cols">
                            <Form.Item
<<<<<<< HEAD
                              name={[name, "role"]}
=======
                              name={[name, 'role']}
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
<<<<<<< HEAD
                                      throw new Error(
                                        `${t("validationReport:required")}`
                                      );
=======
                                      throw new Error(`${t('validationReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    }
                                  },
                                },
                              ]}
                            >
                              <Select disabled={disableFields}>
<<<<<<< HEAD
                                <Select.Option value={"TL"}>
                                  {t("validationReport:teamLeader")}
                                </Select.Option>
                                <Select.Option value={"TE"}>
                                  {t("validationReport:technicalExpert")}
                                </Select.Option>
                                <Select.Option value={"TM"}>
                                  {t("validationReport:teamMember")}
                                </Select.Option>
                                <Select.Option value={"ITR"}>
                                  {t(
                                    "validationReport:internalTechnicalReviewer"
                                  )}
                                </Select.Option>
                                <Select.Option value={"DR"}>
                                  {t("validationReport:documentReviewOption")}
                                </Select.Option>
                                <Select.Option value={"SV"}>
                                  {t("validationReport:siteVisit")}
                                </Select.Option>
                                <Select.Option value={"RI"}>
                                  {t("validationReport:reportIssuance")}
                                </Select.Option>
                                <Select.Option value={"TR"}>
                                  {t("validationReport:technicalReview")}
=======
                                <Select.Option value={'TL'}>
                                  {t('validationReport:teamLeader')}
                                </Select.Option>
                                <Select.Option value={'TE'}>
                                  {t('validationReport:technicalExpert')}
                                </Select.Option>
                                <Select.Option value={'TM'}>
                                  {t('validationReport:teamMember')}
                                </Select.Option>
                                <Select.Option value={'ITR'}>
                                  {t('validationReport:internalTechnicalReviewer')}
                                </Select.Option>
                                <Select.Option value={'DR'}>
                                  {t('validationReport:documentReviewOption')}
                                </Select.Option>
                                <Select.Option value={'SV'}>
                                  {t('validationReport:siteVisit')}
                                </Select.Option>
                                <Select.Option value={'RI'}>
                                  {t('validationReport:reportIssuance')}
                                </Select.Option>
                                <Select.Option value={'TR'}>
                                  {t('validationReport:technicalReview')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                </Select.Option>
                              </Select>
                            </Form.Item>
                          </Col>

                          <Col xl={3} className="other-cols col">
                            <Form.Item
<<<<<<< HEAD
                              name={[name, "typeOfResource"]}
=======
                              name={[name, 'typeOfResource']}
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
<<<<<<< HEAD
                                      throw new Error(
                                        `${t("validationReport:required")}`
                                      );
=======
                                      throw new Error(`${t('validationReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    }
                                  },
                                },
                              ]}
                            >
<<<<<<< HEAD
                              <Radio.Group
                                className="radio-btn-grp"
                                disabled={disableFields}
                              >
                                <Radio
                                  value="IR"
                                  style={{ paddingLeft: "18px" }}
                                >
                                  {t("validationReport:IR")}
                                </Radio>
                                <Radio value="ER">
                                  {t("validationReport:ER")}
                                </Radio>
=======
                              <Radio.Group className="radio-btn-grp" disabled={disableFields}>
                                <Radio value="IR">{t('validationReport:IR')}</Radio>
                                <Radio value="ER">{t('validationReport:ER')}</Radio>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              </Radio.Group>
                            </Form.Item>
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
=======
                                      String(value).trim() === '' ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                      String(value).trim() === undefined ||
                                      value === null ||
                                      value === undefined
                                    ) {
<<<<<<< HEAD
                                      throw new Error(
                                        `${t(
                                          "validationReport:referencesToDocument"
                                        )} ${t("isRequired")}`
                                      );
=======
                                      throw new Error(`${t('validationReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
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
=======
                                      String(value).trim() === '' ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                      String(value).trim() === undefined ||
                                      value === null ||
                                      value === undefined
                                    ) {
<<<<<<< HEAD
                                      throw new Error(
                                        `${t("validationReport:provider")} ${t(
                                          "isRequired"
                                        )}`
                                      );
=======
                                      throw new Error(`${t('validationReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
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
                              name={[name, "affliation"]}
=======
                              name={[name, 'affliation']}
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
<<<<<<< HEAD
                                      throw new Error(
                                        `${t("validationReport:provider")} ${t(
                                          "isRequired"
                                        )}`
                                      );
=======
                                      throw new Error(`${t('validationReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    }
                                  },
                                },
                              ]}
                            >
                              <Input disabled={disableFields} />
                            </Form.Item>
                          </Col>
                          <Col xl={4}>
                            <Row>
                              <Col xl={6} className="other-cols checkbox-cols">
                                <Form.Item
<<<<<<< HEAD
                                  name={[name, "documentReview"]}
                                  valuePropName="checked"
                                  className="custom-checkbox"
                                  rules={[
                                    {
                                      validator: async (rule, value) => {
                                        const formValues =
                                          form.getFieldsValue();
                                        const validationTeamMembers =
                                          formValues.validationTeamMembers ||
                                          [];
                                        const currentMember =
                                          validationTeamMembers[name];
=======
                                  name={[name, 'documentReview']}
                                  valuePropName="checked"
                                  rules={[
                                    {
                                      validator: async (rule, value) => {
                                        const formValues = form.getFieldsValue();
                                        const validationTeamMembers =
                                          formValues.validationTeamMembers || [];
                                        const currentMember = validationTeamMembers[name];
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

                                        if (currentMember) {
                                          const hasAtLeastOne =
                                            currentMember.documentReview ||
                                            currentMember.onsiteInspections ||
                                            currentMember.interviews ||
                                            currentMember.verificationFindings;

                                          if (!hasAtLeastOne) {
                                            return Promise.reject(new Error());
                                          }
                                        }
                                      },
                                    },
                                  ]}
                                >
<<<<<<< HEAD
                                  <Checkbox
                                    disabled={disableFields}
                                    className="custom-checkbox"
                                  />
                                </Form.Item>
                              </Col>

                              <Col xl={6} className="other-cols checkbox-cols">
                                <Form.Item
                                  name={[name, "onsiteInspections"]}
                                  valuePropName="checked"
                                  className="custom-checkbox"
                                  rules={[
                                    {
                                      validator: async (rule, value) => {
                                        const formValues =
                                          form.getFieldsValue();
                                        const validationTeamMembers =
                                          formValues.validationTeamMembers ||
                                          [];
                                        const currentMember =
                                          validationTeamMembers[name];
=======
                                  <Checkbox disabled={disableFields} className="custom-checkbox" />
                                </Form.Item>
                              </Col>
                              <Col xl={6} className="other-cols checkbox-cols">
                                <Form.Item
                                  name={[name, 'onsiteInspections']}
                                  valuePropName="checked"
                                  rules={[
                                    {
                                      validator: async (rule, value) => {
                                        const formValues = form.getFieldsValue();
                                        const validationTeamMembers =
                                          formValues.validationTeamMembers || [];
                                        const currentMember = validationTeamMembers[name];
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

                                        if (currentMember) {
                                          const hasAtLeastOne =
                                            currentMember.documentReview ||
                                            currentMember.onsiteInspections ||
                                            currentMember.interviews ||
                                            currentMember.verificationFindings;

                                          if (!hasAtLeastOne) {
                                            return Promise.reject(new Error());
                                          }
                                        }
                                      },
                                    },
                                  ]}
                                >
<<<<<<< HEAD
                                  <Checkbox
                                    disabled={disableFields}
                                    className="custom-checkbox"
                                  />
                                </Form.Item>
                              </Col>

                              <Col xl={6} className="other-cols checkbox-cols">
                                <Form.Item
                                  name={[name, "interviews"]}
                                  valuePropName="checked"
                                  className="custom-checkbox"
                                  rules={[
                                    {
                                      validator: async (rule, value) => {
                                        const formValues =
                                          form.getFieldsValue();
                                        const validationTeamMembers =
                                          formValues.validationTeamMembers ||
                                          [];
                                        const currentMember =
                                          validationTeamMembers[name];
=======
                                  <Checkbox disabled={disableFields} className="custom-checkbox" />
                                </Form.Item>
                              </Col>
                              <Col xl={6} className="other-cols checkbox-cols">
                                <Form.Item
                                  name={[name, 'interviews']}
                                  valuePropName="checked"
                                  rules={[
                                    {
                                      validator: async (rule, value) => {
                                        const formValues = form.getFieldsValue();
                                        const validationTeamMembers =
                                          formValues.validationTeamMembers || [];
                                        const currentMember = validationTeamMembers[name];
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

                                        if (currentMember) {
                                          const hasAtLeastOne =
                                            currentMember.documentReview ||
                                            currentMember.onsiteInspections ||
                                            currentMember.interviews ||
                                            currentMember.verificationFindings;

                                          if (!hasAtLeastOne) {
                                            return Promise.reject(new Error());
                                          }
                                        }
                                      },
                                    },
                                  ]}
                                >
<<<<<<< HEAD
                                  <Checkbox
                                    disabled={disableFields}
                                    className="custom-checkbox"
                                  />
                                </Form.Item>
                              </Col>

                              <Col xl={6} className="other-cols checkbox-cols">
                                <Form.Item
                                  name={[name, "verificationFindings"]}
                                  valuePropName="checked"
                                  className="custom-checkbox"
                                  rules={[
                                    {
                                      validator: async (rule, value) => {
                                        const formValues =
                                          form.getFieldsValue();
                                        const validationTeamMembers =
                                          formValues.validationTeamMembers ||
                                          [];
                                        const currentMember =
                                          validationTeamMembers[name];
=======
                                  <Checkbox disabled={disableFields} className="custom-checkbox" />
                                </Form.Item>
                              </Col>
                              <Col xl={6} className="other-cols checkbox-cols">
                                <Form.Item
                                  name={[name, 'validationFindings']}
                                  valuePropName="checked"
                                  rules={[
                                    {
                                      validator: async (rule, value) => {
                                        const formValues = form.getFieldsValue();
                                        const validationTeamMembers =
                                          formValues.validationTeamMembers || [];
                                        const currentMember = validationTeamMembers[name];
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

                                        if (currentMember) {
                                          const hasAtLeastOne =
                                            currentMember.documentReview ||
                                            currentMember.onsiteInspections ||
                                            currentMember.interviews ||
                                            currentMember.verificationFindings;

                                          if (!hasAtLeastOne) {
                                            return Promise.reject(new Error());
                                          }
                                        }
                                      },
                                    },
                                  ]}
                                >
<<<<<<< HEAD
                                  <Checkbox
                                    disabled={disableFields}
                                    className="custom-checkbox"
                                  />
=======
                                  <Checkbox disabled={disableFields} className="custom-checkbox" />
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                </Form.Item>
                              </Col>
                            </Row>
                          </Col>
                          <Col xl={3} className="col action-col">
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
                    </Row>
                  )}
                </Form.List>
              </div>
              {/* Validation team member table end */}

              {/* Technical reviewer table start */}
              <h4 className="form-section-heading">
<<<<<<< HEAD
                {t("validationReport:technicalReviewerTableTitle")}
=======
                {t('validationReport:technicalReviewerTableTitle')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
              </h4>

              <div className="technical-reviewer-table">
                <div className="header">
                  <Row>
                    <Col xl={1} className="col-1 col">
                      No
                    </Col>
                    <Col xl={4} className="other-cols col">
                      Role
                    </Col>
                    <Col xl={4} className="other-cols col">
                      Type of resource
                    </Col>
                    <Col xl={4} className="other-cols col">
                      Last name
                    </Col>
                    <Col xl={4} className="other-cols col">
                      First name
                    </Col>
                    <Col xl={4} className="other-cols col">
                      Affliation
                    </Col>
                    <Col xl={2}></Col>
                  </Row>
                </div>

                <div className="body">
                  <Form.List name="technicalReviews">
                    {(fields, { add, remove }) => (
                      <Row>
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
                            <Col xl={4} className="other-cols col">
                              <Form.Item
<<<<<<< HEAD
                                name={[name, "role"]}
=======
                                name={[name, 'role']}
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
<<<<<<< HEAD
                                        throw new Error(
                                          `${t("validationReport:required")}`
                                        );
=======
                                        throw new Error(`${t('validationReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                      }
                                    },
                                  },
                                ]}
                              >
                                <Select disabled={disableFields}>
                                  <Select.Option value="technicalReviewer">
<<<<<<< HEAD
                                    {t("validationReport:technicalReviewer")}
                                  </Select.Option>
                                  <Select.Option value="approver">
                                    {t("validationReport:approver")}
=======
                                    {t('validationReport:technicalReviewer')}
                                  </Select.Option>
                                  <Select.Option value="approver">
                                    {t('validationReport:approver')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                  </Select.Option>
                                </Select>
                              </Form.Item>
                            </Col>
                            <Col xl={4} className="other-cols col">
                              <Form.Item
<<<<<<< HEAD
                                name={[name, "typeOfResource"]}
=======
                                name={[name, 'typeOfResource']}
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
<<<<<<< HEAD
                                        throw new Error(
                                          `${t("validationReport:required")}`
                                        );
=======
                                        throw new Error(`${t('validationReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                      }
                                    },
                                  },
                                ]}
                              >
<<<<<<< HEAD
                                <Radio.Group
                                  className="radio-btn-grp"
                                  disabled={disableFields}
                                >
                                  <Radio value="IR">
                                    {t("validationReport:IR")}
                                  </Radio>
                                  <Radio value="ER">
                                    {t("validationReport:ER")}
                                  </Radio>
=======
                                <Radio.Group className="radio-btn-grp" disabled={disableFields}>
                                  <Radio value="IR">{t('validationReport:IR')}</Radio>
                                  <Radio value="ER">{t('validationReport:ER')}</Radio>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                </Radio.Group>
                              </Form.Item>
                            </Col>
                            <Col xl={4} className="other-cols col">
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
=======
                                        String(value).trim() === '' ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        String(value).trim() === undefined ||
                                        value === null ||
                                        value === undefined
                                      ) {
<<<<<<< HEAD
                                        throw new Error(
                                          `${t("validationReport:required")}`
                                        );
=======
                                        throw new Error(`${t('validationReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
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
=======
                                        String(value).trim() === '' ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        String(value).trim() === undefined ||
                                        value === null ||
                                        value === undefined
                                      ) {
<<<<<<< HEAD
                                        throw new Error(
                                          `${t("validationReport:required")}`
                                        );
=======
                                        throw new Error(`${t('validationReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
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
                                name={[name, "affliation"]}
=======
                                name={[name, 'affliation']}
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
<<<<<<< HEAD
                                        throw new Error(
                                          `${t("validationReport:required")}`
                                        );
=======
                                        throw new Error(`${t('validationReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                      }
                                    },
                                  },
                                ]}
                              >
                                <Input disabled={disableFields} />
                              </Form.Item>
                            </Col>
                            <Col xl={3} className="col action-col">
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
                      </Row>
                    )}
                  </Form.List>
                </div>
              </div>
              {/* Technical reviewer table end */}

<<<<<<< HEAD
              <Row
                justify={"end"}
                className="step-actions-end mg-top-2 mg-bottom-2"
              >
                <Button danger size={"large"} disabled={false} onClick={prev}>
                  {t("validationReport:prev")}
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
              <Row justify={'end'} className="step-actions-end mg-top-2 mg-bottom-2">
                <Button type="primary" ghost size={'large'} disabled={false} onClick={prev}>
                  {t('validationReport:prev')}
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

export default ValidationMethodology;
