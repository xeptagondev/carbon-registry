<<<<<<< HEAD
import {
  InfoCircleOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row, Select, Radio } from "antd";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FormMode } from "../../Definitions/Enums/formMode.enum";
import { VerificationStepProps } from "./StepProps";
import { safeClone } from "../../Utils/deepCopy";
import "./VerificationReport.scss";

export const VerificationTeamStep = (props: VerificationStepProps) => {
  const {
    t,
    current,
    form,
    formMode,
    next,
    prev,
    handleValuesUpdate,
    disableFields,
  } = props;

  console.log("---------formMode--------------", formMode);
  useEffect(() => {
    if (formMode === FormMode.CREATE) {
      form.setFieldValue("verificationTeamMembers", [{ role: "" }]);
      form.setFieldValue("technicalReviews", [{ role: "" }]);
=======
import { InfoCircleOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, Select, Radio } from 'antd';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FormMode } from '../../Definitions/Enums/formMode.enum';
import { VerificationStepProps } from './StepProps';
import './VerificationReport.scss';

export const VerificationTeamStep = (props: VerificationStepProps) => {
  const { t, current, form, formMode, next, prev, handleValuesUpdate, disableFields } = props;

  console.log('---------formMode--------------', formMode);
  useEffect(() => {
    if (formMode === FormMode.CREATE) {
      form.setFieldValue('verificationTeamMembers', [{ role: '' }]);
      form.setFieldValue('technicalReviews', [{ role: '' }]);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    }
  }, []);

  const onFinish = (values: any) => {
<<<<<<< HEAD
    console.log("--------values-----------", values);

    const body = {
      ...values,
      verificationTeamMembers: values?.verificationTeamMembers?.map(
        (item: any) => {
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
        }
      ),
=======
    console.log('--------values-----------', values);
    const body = {
      ...values,
      verificationTeamMembers: values?.verificationTeamMembers?.map((item: any) => {
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
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
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
    handleValuesUpdate({
      verificationTeam: body,
    });
  };

  return (
    <>
      {current === 3 && (
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
                  {/* <div className="step-form-left-col"> */}
                  {/* Validation team member table start */}
                  <h3 className="form-section-heading">
<<<<<<< HEAD
                    {t("verificationReport:v_TeamMemberTableTitle")}
=======
                    {t('verificationReport:v_TeamMemberTableTitle')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                  </h3>
                  <div className="verification-team-member-table">
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
                        Affiliation
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

                    <Form.List name="verificationTeamMembers">
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
                                            `${t(
                                              "verificationReport:required"
                                            )}`
                                          );
=======
                                          throw new Error(`${t('verificationReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }
                                      },
                                    },
                                  ]}
                                >
                                  <Select disabled={disableFields}>
<<<<<<< HEAD
                                    <Select.Option value={"TL"}>
                                      {t("verificationReport:teamLeader")}
                                    </Select.Option>
                                    <Select.Option value={"TE"}>
                                      {t("verificationReport:technicalExpert")}
                                    </Select.Option>
                                    <Select.Option value={"TM"}>
                                      {t("verificationReport:teamMember")}
                                    </Select.Option>
                                    <Select.Option value={"ITR"}>
                                      {t(
                                        "verificationReport:internalTechnicalReviewer"
                                      )}
                                    </Select.Option>
                                    <Select.Option value={"DR"}>
                                      {t(
                                        "verificationReport:documentReviewOption"
                                      )}
                                    </Select.Option>
                                    <Select.Option value={"SV"}>
                                      {t("verificationReport:siteVisit")}
                                    </Select.Option>
                                    <Select.Option value={"RI"}>
                                      {t("verificationReport:reportIssuance")}
                                    </Select.Option>
                                    <Select.Option value={"TR"}>
                                      {t("verificationReport:technicalReview")}
=======
                                    <Select.Option value={'TL'}>
                                      {t('verificationReport:teamLeader')}
                                    </Select.Option>
                                    <Select.Option value={'TE'}>
                                      {t('verificationReport:technicalExpert')}
                                    </Select.Option>
                                    <Select.Option value={'TM'}>
                                      {t('verificationReport:teamMember')}
                                    </Select.Option>
                                    <Select.Option value={'ITR'}>
                                      {t('verificationReport:internalTechnicalReviewer')}
                                    </Select.Option>
                                    <Select.Option value={'DR'}>
                                      {t('verificationReport:documentReviewOption')}
                                    </Select.Option>
                                    <Select.Option value={'SV'}>
                                      {t('verificationReport:siteVisit')}
                                    </Select.Option>
                                    <Select.Option value={'RI'}>
                                      {t('verificationReport:reportIssuance')}
                                    </Select.Option>
                                    <Select.Option value={'TR'}>
                                      {t('verificationReport:technicalReview')}
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
                                            `${t(
                                              "verificationReport:required"
                                            )}`
                                          );
=======
                                          throw new Error(`${t('verificationReport:required')}`);
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
                                      {t("verificationReport:IR")}
                                    </Radio>
                                    <Radio value="ER">
                                      {t("verificationReport:ER")}
                                    </Radio>
=======
                                  <Radio.Group className="radio-btn-grp" disabled={disableFields}>
                                    <Radio value="IR" style={{ paddingLeft: '20px' }}>
                                      {t('verificationReport:IR')}
                                    </Radio>
                                    <Radio value="ER">{t('verificationReport:ER')}</Radio>
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
                                            ` ${t(
                                              "verificationReport:required"
                                            )}`
                                          );
=======
                                          throw new Error(`${t('verificationReport:required')}`);
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
                                            t("verificationReport:required")
                                          );
=======
                                          throw new Error(`${t('verificationReport:required')}`);
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
                                            t("verificationReport:required")
                                          );
=======
                                          throw new Error(`${t('verificationReport:required')}`);
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
<<<<<<< HEAD
                                  <Col
                                    xl={6}
                                    className="other-cols checkbox-cols"
                                  >
                                    <Form.Item
                                      name={[name, "documentReview"]}
                                      valuePropName="checked"
                                      validateTrigger={["onChange", "onBlur"]}
                                      className="custom-checkbox"
                                      rules={[
                                        {
                                          validator: async (rule, value) => {
                                            const formValues =
                                              form.getFieldsValue();
                                            const verificationTeamMembers =
                                              formValues.verificationTeamMembers ||
                                              [];
                                            const currentMember =
                                              verificationTeamMembers[name];
=======
                                  <Col xl={6} className="other-cols checkbox-cols">
                                    <Form.Item
                                      name={[name, 'documentReview']}
                                      valuePropName="checked"
                                      rules={[
                                        {
                                          validator: async (rule, value) => {
                                            const formValues = form.getFieldsValue();
                                            const verificationTeamMembers =
                                              formValues.verificationTeamMembers || [];
                                            const currentMember = verificationTeamMembers[name];
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

                                            if (currentMember) {
                                              const hasAtLeastOne =
                                                currentMember.documentReview ||
                                                currentMember.onsiteInspections ||
                                                currentMember.interviews ||
                                                currentMember.verificationFindings;

                                              if (!hasAtLeastOne) {
<<<<<<< HEAD
                                                return Promise.reject(
                                                  new Error()
                                                );
=======
                                                return Promise.reject(new Error());
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                              }
                                            }
                                          },
                                        },
                                      ]}
                                    >
                                      <Checkbox
                                        disabled={disableFields}
                                        className="custom-checkbox"
                                      />
                                    </Form.Item>
                                  </Col>
<<<<<<< HEAD
                                  <Col
                                    xl={6}
                                    className="other-cols checkbox-cols"
                                  >
                                    <Form.Item
                                      name={[name, "onsiteInspections"]}
                                      valuePropName="checked"
                                      validateTrigger={["onChange", "onBlur"]}
                                      rules={[
                                        {
                                          validator: async (rule, value) => {
                                            const formValues =
                                              form.getFieldsValue();
                                            const verificationTeamMembers =
                                              formValues.verificationTeamMembers ||
                                              [];
                                            const currentMember =
                                              verificationTeamMembers[name];
=======
                                  <Col xl={6} className="other-cols checkbox-cols">
                                    <Form.Item
                                      name={[name, 'onsiteInspections']}
                                      valuePropName="checked"
                                      className="custom-checkbox"
                                      rules={[
                                        {
                                          validator: async (rule, value) => {
                                            const formValues = form.getFieldsValue();
                                            const verificationTeamMembers =
                                              formValues.verificationTeamMembers || [];
                                            const currentMember = verificationTeamMembers[name];
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

                                            if (currentMember) {
                                              const hasAtLeastOne =
                                                currentMember.documentReview ||
                                                currentMember.onsiteInspections ||
                                                currentMember.interviews ||
                                                currentMember.verificationFindings;

                                              if (!hasAtLeastOne) {
<<<<<<< HEAD
                                                return Promise.reject(
                                                  new Error()
                                                );
=======
                                                return Promise.reject(new Error());
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                              }
                                            }
                                          },
                                        },
                                      ]}
                                    >
                                      <Checkbox
                                        disabled={disableFields}
                                        className="custom-checkbox"
                                      />
                                    </Form.Item>
                                  </Col>
<<<<<<< HEAD
                                  <Col
                                    xl={6}
                                    className="other-cols checkbox-cols"
                                  >
                                    <Form.Item
                                      name={[name, "interviews"]}
                                      valuePropName="checked"
                                      validateTrigger={["onChange", "onBlur"]}
                                      className="custom-checkbox"
                                      rules={[
                                        {
                                          validator: async (rule, value) => {
                                            const formValues =
                                              form.getFieldsValue();
                                            const verificationTeamMembers =
                                              formValues.verificationTeamMembers ||
                                              [];
                                            const currentMember =
                                              verificationTeamMembers[name];
=======
                                  <Col xl={6} className="other-cols checkbox-cols">
                                    <Form.Item
                                      name={[name, 'interviews']}
                                      valuePropName="checked"
                                      rules={[
                                        {
                                          validator: async (rule, value) => {
                                            const formValues = form.getFieldsValue();
                                            const verificationTeamMembers =
                                              formValues.verificationTeamMembers || [];
                                            const currentMember = verificationTeamMembers[name];
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

                                            if (currentMember) {
                                              const hasAtLeastOne =
                                                currentMember.documentReview ||
                                                currentMember.onsiteInspections ||
                                                currentMember.interviews ||
                                                currentMember.verificationFindings;

                                              if (!hasAtLeastOne) {
<<<<<<< HEAD
                                                return Promise.reject(
                                                  new Error()
                                                );
=======
                                                return Promise.reject(new Error());
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                              }
                                            }
                                          },
                                        },
                                      ]}
                                    >
                                      <Checkbox
                                        disabled={disableFields}
                                        className="custom-checkbox"
                                      />
                                    </Form.Item>
                                  </Col>
<<<<<<< HEAD
                                  <Col
                                    xl={6}
                                    className="other-cols checkbox-cols"
                                  >
                                    <Form.Item
                                      name={[name, "verificationFindings"]}
                                      valuePropName="checked"
                                      validateTrigger={["onChange", "onBlur"]}
                                      className="custom-checkbox"
                                      rules={[
                                        {
                                          validator: async (rule, value) => {
                                            const formValues =
                                              form.getFieldsValue();
                                            const verificationTeamMembers =
                                              formValues.verificationTeamMembers ||
                                              [];
                                            const currentMember =
                                              verificationTeamMembers[name];
=======
                                  <Col xl={6} className="other-cols checkbox-cols">
                                    <Form.Item
                                      name={[name, 'verificationFindings']}
                                      valuePropName="checked"
                                      rules={[
                                        {
                                          validator: async (rule, value) => {
                                            const formValues = form.getFieldsValue();
                                            const verificationTeamMembers =
                                              formValues.verificationTeamMembers || [];
                                            const currentMember = verificationTeamMembers[name];
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

                                            if (currentMember) {
                                              const hasAtLeastOne =
                                                currentMember.documentReview ||
                                                currentMember.onsiteInspections ||
                                                currentMember.interviews ||
                                                currentMember.verificationFindings;

                                              if (!hasAtLeastOne) {
<<<<<<< HEAD
                                                return Promise.reject(
                                                  new Error()
                                                );
=======
                                                return Promise.reject(new Error());
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                              }
                                            }
                                          },
                                        },
                                      ]}
                                    >
                                      <Checkbox
                                        disabled={disableFields}
                                        className="custom-checkbox"
                                      />
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
                                      // disabled={disableFields}
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
                    {t("verificationReport:technicalReviewerTableTitle")}
=======
                    {t('verificationReport:technicalReviewerTableTitle')}
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
                          Affiliation
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
                                            String(value).trim() ===
                                              undefined ||
                                            value === null ||
                                            value === undefined
                                          ) {
                                            throw new Error(
                                              `${t(
                                                "verificationReport:required"
                                              )}`
                                            );
=======
                                            String(value).trim() === '' ||
                                            String(value).trim() === undefined ||
                                            value === null ||
                                            value === undefined
                                          ) {
                                            throw new Error(`${t('verificationReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                          }
                                        },
                                      },
                                    ]}
                                  >
                                    <Select disabled={disableFields}>
<<<<<<< HEAD
                                      <Select.Option value="verifier">
                                        {t("verificationReport:verifier")}
                                      </Select.Option>
                                      <Select.Option value="technicalExpert">
                                        {t(
                                          "verificationReport:technicalExpert"
                                        )}
                                      </Select.Option>
                                      <Select.Option value="financialOtherExpert">
                                        {t(
                                          "verificationReport:financialOtherExpert"
                                        )}
                                      </Select.Option>
                                      <Select.Option value="trainee">
                                        {t("verificationReport:trainee")}
=======
                                      <Select.Option value="verfier">
                                        {t('verificationReport:verifier')}
                                      </Select.Option>
                                      <Select.Option value="technicalExpert">
                                        {t('verificationReport:technicalExpert')}
                                      </Select.Option>
                                      <Select.Option value="financialOtherExpert">
                                        {t('verificationReport:financialOtherExpert')}
                                      </Select.Option>
                                      <Select.Option value="trainee">
                                        {t('verificationReport:trainee')}
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
                                            String(value).trim() ===
                                              undefined ||
                                            value === null ||
                                            value === undefined
                                          ) {
                                            throw new Error(
                                              `${t(
                                                "verificationReport:required"
                                              )}`
                                            );
=======
                                            String(value).trim() === '' ||
                                            String(value).trim() === undefined ||
                                            value === null ||
                                            value === undefined
                                          ) {
                                            throw new Error(`${t('verificationReport:required')}`);
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
                                        {t("verificationReport:IR")}
                                      </Radio>
                                      <Radio value="ER">
                                        {t("verificationReport:ER")}
                                      </Radio>
=======
                                    <Radio.Group className="radio-btn-grp" disabled={disableFields}>
                                      <Radio value="IR">{t('verificationReport:IR')}</Radio>
                                      <Radio value="ER">{t('verificationReport:ER')}</Radio>
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
                                            String(value).trim() ===
                                              undefined ||
                                            value === null ||
                                            value === undefined
                                          ) {
                                            throw new Error(
                                              `${t(
                                                "verificationReport:required"
                                              )}`
                                            );
=======
                                            String(value).trim() === '' ||
                                            String(value).trim() === undefined ||
                                            value === null ||
                                            value === undefined
                                          ) {
                                            throw new Error(`${t('verificationReport:required')}`);
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
                                            String(value).trim() ===
                                              undefined ||
                                            value === null ||
                                            value === undefined
                                          ) {
                                            throw new Error(
                                              `${t(
                                                "verificationReport:required"
                                              )}`
                                            );
=======
                                            String(value).trim() === '' ||
                                            String(value).trim() === undefined ||
                                            value === null ||
                                            value === undefined
                                          ) {
                                            throw new Error(`${t('verificationReport:required')}`);
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
                                            String(value).trim() ===
                                              undefined ||
                                            value === null ||
                                            value === undefined
                                          ) {
                                            throw new Error(
                                              `${t(
                                                "verificationReport:required"
                                              )}`
                                            );
=======
                                            String(value).trim() === '' ||
                                            String(value).trim() === undefined ||
                                            value === null ||
                                            value === undefined
                                          ) {
                                            throw new Error(`${t('verificationReport:required')}`);
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
                  {/* </div> */}
                </Col>
              </Row>

              <Row className="row" gutter={[40, 16]}>
                <Col xl={24} md={24}>
                  <div className="step-form-left-col"></div>
                </Col>
              </Row>

<<<<<<< HEAD
              <Row justify={"end"} className="step-actions-end">
                <Button danger onClick={prev} disabled={false}>
                  {t("verificationReport:back")}
                </Button>
                {disableFields ? (
                  <Button type="primary" onClick={next}>
                    {t("monitoringReport:next")}
=======
              <Row justify={'end'} className="step-actions-end">
                <Button type="primary" ghost onClick={prev} disabled={false}>
                  {t('verificationReport:back')}
                </Button>
                {disableFields ? (
                  <Button type="primary" onClick={next}>
                    {t('monitoringReport:next')}
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
                    {t("monitoringReport:next")}
=======
                    size={'large'}
                    htmlType={'submit'}
                    // onClick={next}
                  >
                    {t('monitoringReport:next')}
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
