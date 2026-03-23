<<<<<<< HEAD
import { Button, Col, Form, Row, Input } from "antd";
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
import { safeClone } from "../../Utils/deepCopy";

export const ApplicationOfMaterialityStep = (props: VerificationStepProps) => {
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
import { Button, Col, Form, Row, Input } from 'antd';
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

export const ApplicationOfMaterialityStep = (props: VerificationStepProps) => {
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

  useEffect(() => {
    if (formMode === FormMode.CREATE) {
<<<<<<< HEAD
      form.setFieldValue("materialityTable", [{ riskLevel: "" }]);
=======
      form.setFieldValue('materialityTable', [{ riskLevel: '' }]);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    }
  }, []);

  const onFinish = (values: any) => {
<<<<<<< HEAD
    console.log("--------values-----------", values);
    const body = {
      ...values,
      materialityTable: values?.materialityTable?.map((item: any) => {
        return (
          {
            riskThatCouldLead: item?.riskThatCouldLead,
            riskLevel: item?.riskLevel,
            justification: item?.justification,
            response: item?.response,
          }
        )
      }),
    };

=======
    console.log('--------values-----------', values);
    const body = {
      ...values,
      materialityTable: values?.materialityTable?.map((item: any) => {
        return {
          riskThatCouldLead: item?.riskThatCouldLead,
          riskLevel: item?.riskLevel,
          justification: item?.justification,
          response: item?.response,
        };
      }),
    };
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    handleValuesUpdate({
      applicationOfMateriality: body,
    });
  };

  return (
    <>
      {current === 4 && (
        <div>
          <div className="step-form-container">
            <Form
              labelCol={{ span: 20 }}
              wrapperCol={{ span: 24 }}
              className="step-form"
              layout="vertical"
              requiredMark={true}
              form={form}
              // disabled={FormMode.VIEW === formMode}
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
                    {/* materiality table starts */}
                    <>
                      <h3 className="form-section-heading">
<<<<<<< HEAD
                        {t("verificationReport:am_considerationOfMateriality")}
=======
                        {t('verificationReport:am_considerationOfMateriality')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      </h3>
                      <div className="materialityTable">
                        <Row className="header">
                          <Col xl={1} className="col col-1">
                            No
                          </Col>
                          <Col xl={4} className="col other-cols">
<<<<<<< HEAD
                            Risk that could lead to material errors, omissions
                            or misstatements
=======
                            Risk that could lead to material errors, omissions or misstatements
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={12} className="assesment-col">
                            <Row>
                              <Col xl={24} className="col other-cols">
                                Assessment of the risk
                              </Col>
                            </Row>
                            <Row>
                              <Col
                                xl={8}
                                className="assesment-col-subCols-first"
<<<<<<< HEAD
                              > <br/>
                                Risk Level
                                <br/>
                                
=======
                                style={{
                                  paddingTop: '12px',
                                  minHeight: '70px',
                                }}
                              >
                                Risk Level
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              </Col>
                              <Col
                                xl={16}
                                className="assesment-col-subCols-last"
<<<<<<< HEAD
                              >
                                 <br/>
                                Justification
                                 <br/>
                                  <br/>
=======
                                style={{ paddingTop: '12px', minHeight: '70px' }}
                              >
                                Justification
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              </Col>
                            </Row>
                          </Col>
                          <Col xl={4} className="col other-cols">
<<<<<<< HEAD
                            Response to the risk in the verification plan and/or
                            sampling plan
=======
                            Response to the risk in the verification plan and/or sampling plan
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          </Col>
                          <Col xl={2}></Col>
                        </Row>

                        <Row className="body mg-bottom-2">
                          <Form.List name="materialityTable">
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
                                    <Col xl={4} className="other-cols col">
                                      <Form.Item
<<<<<<< HEAD
                                        name={[name, "riskThatCouldLead"]}
=======
                                        name={[name, 'riskThatCouldLead']}
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

                                    <Col xl={4} className="other-cols col">
                                      <Form.Item
<<<<<<< HEAD
                                        name={[name, "riskLevel"]}
=======
                                        name={[name, 'riskLevel']}
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
                                    <Col xl={8} className="other-cols col">
                                      <Form.Item
<<<<<<< HEAD
                                        name={[name, "justification"]}
=======
                                        name={[name, 'justification']}
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

                                    <Col xl={4} className="other-cols col">
                                      <Form.Item
<<<<<<< HEAD
                                        name={[name, "response"]}
=======
                                        name={[name, 'response']}
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
                                    <Col xl={3} className="action-col">
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
                    {/* materiality table ends */}

                    <Form.Item
<<<<<<< HEAD
                      label={t(
                        "verificationReport:am_considerationOfMaterialityTextBox"
                      )}
=======
                      label={t('verificationReport:am_considerationOfMaterialityTextBox')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="am_considerationOfMaterialityTextBox"
                      rules={[
                        {
                          required: true,
                          message: `${t(
<<<<<<< HEAD
                            "verificationReport:am_considerationOfMaterialityTextBox"
                          )} ${t("isRequired")}`,
=======
                            'verificationReport:am_considerationOfMaterialityTextBox'
                          )} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        },
                      ]}
                    >
                      <TextArea rows={6} disabled={disableFields} />
                    </Form.Item>
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
                    {t("monitoringReport:next")}
=======
              <Row justify={'end'} className="step-actions-end">
                <Button type="primary" ghost size={'large'} onClick={prev} disabled={false}>
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
