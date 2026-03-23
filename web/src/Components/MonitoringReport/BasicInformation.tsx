<<<<<<< HEAD
import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import moment from "moment";
import { FormMode } from "../../Definitions/Enums/formMode.enum";
import { CustomStepsProps } from "./StepProps";

export const BasicInformationStep = (props: CustomStepsProps) => {
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
=======
import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
import moment from 'moment';
import { FormMode } from '../../Definitions/Enums/formMode.enum';
import { CustomStepsProps } from './StepProps';

export const BasicInformationStep = (props: CustomStepsProps) => {
  const { t, current, form, formMode, next, prev, handleValuesUpdate, disableFields } = props;
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

  const onFinish = (values: any) => {
    // console.log('onFinish triggered');
    // console.log('-----------temp Values before-------');
    const tempValues: any = {
      projectDetails: {
        bi_projectTitle: values?.bi_projectTitle,
        bi_applicablePDDVersionNo: values?.bi_applicablePDDVersionNo,
<<<<<<< HEAD
        bi_completionDate: moment(values?.bi_completionDate)
          .startOf("day")
          .unix(),
=======
        bi_completionDate: moment(values?.bi_completionDate).startOf('day').unix(),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        bi_duration: values?.bi_duration,
        bi_projectDeveloper: values?.bi_projectDeveloper,
        bi_appliedMethodologies: values?.bi_appliedMethodologies,
        bi_achievedGHGReductions: values?.bi_achievedGHGReductions,
        bi_unfccRefNo: values?.bi_unfccRefNo,
        bi_versionNoOfMR: values?.bi_versionNoOfMR,
        bi_monitoringPeriodNo: values?.bi_monitoringPeriodNo,
<<<<<<< HEAD
        bi_monitoringNoForMonitoringPeriod:
          values?.bi_monitoringNoForMonitoringPeriod,
=======
        bi_monitoringNoForMonitoringPeriod: values?.bi_monitoringNoForMonitoringPeriod,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        bi_hostParty: values?.bi_hostParty,
        bi_sectoralScope: values?.bi_sectoralScope,
        bi_projectedGHGReductions: values?.bi_projectedGHGReductions,
      },
    };
    handleValuesUpdate(tempValues);
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
              // disabled={FormMode.VIEW === formMode}
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
                    <Form.Item
<<<<<<< HEAD
                      label={t("monitoringReport:bi_projectTitle")}
=======
                      label={t('monitoringReport:bi_projectTitle')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="bi_projectTitle"
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
                                `${t("monitoringReport:bi_projectTitle")} ${t(
                                  "isRequired"
                                )}`
=======
                                `${t('monitoringReport:bi_projectTitle')} ${t('isRequired')}`
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
                      label={
                        <div
                          style={{
                            display: "block",
                            width: "97%",
                            marginLeft: "0",
                          }}
                        >
                          {t("monitoringReport:bi_applicablePDDVersionNo")}{" "}
                          <span style={{ color: "red" }}>*</span>
                        </div>
                      }
=======
                      label={t('monitoringReport:bi_applicablePDDVersionNo')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="bi_applicablePDDVersionNo"
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
                                  "monitoringReport:bi_applicablePDDVersionNo"
                                )} ${t("isRequired")}`
=======
                                `${t('monitoringReport:bi_applicablePDDVersionNo')} ${t(
                                  'isRequired'
                                )}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              );
                            }
                          },
                        },
                      ]}
<<<<<<< HEAD
                      className="no-required-mark"
=======
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                    >
                      <Input size="large" disabled />
                    </Form.Item>
                    <Form.Item
<<<<<<< HEAD
                      label={t("monitoringReport:bi_completionDate")}
=======
                      label={t('monitoringReport:bi_completionDate')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="bi_completionDate"
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
                                `${t("monitoringReport:bi_completionDate")} ${t(
                                  "isRequired"
                                )}`
=======
                                `${t('monitoringReport:bi_completionDate')} ${t('isRequired')}`
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
                      label={t("monitoringReport:bi_duration")}
=======
                      label={t('monitoringReport:bi_duration')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="bi_duration"
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
                                `${t("monitoringReport:bi_duration")} ${t(
                                  "isRequired"
                                )}`
=======
                                `${t('monitoringReport:bi_duration')} ${t('isRequired')}`
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
                      label={t("monitoringReport:bi_projectDeveloper")}
=======
                      label={t('monitoringReport:bi_projectDeveloper')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="bi_projectDeveloper"
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
                                  "monitoringReport:bi_projectDeveloper"
                                )} ${t("isRequired")}`
=======
                                `${t('monitoringReport:bi_projectDeveloper')} ${t('isRequired')}`
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
                      label={t("monitoringReport:bi_appliedMethodologies")}
=======
                      label={t('monitoringReport:bi_appliedMethodologies')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="bi_appliedMethodologies"
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
                                  "monitoringReport:bi_appliedMethodologies"
                                )} ${t("isRequired")}`
=======
                                `${t('monitoringReport:bi_appliedMethodologies')} ${t(
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
                      label={t("monitoringReport:bi_achievedGHGReductions")}
=======
                      label={t('monitoringReport:bi_achievedGHGReductions')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="bi_achievedGHGReductions"
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
                                  "monitoringReport:bi_achievedGHGReductions"
                                )} ${t("isRequired")}`
=======
                                `${t('monitoringReport:bi_achievedGHGReductions')} ${t(
                                  'isRequired'
                                )}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              );
                            }
                          },
                        },
                      ]}
                    >
                      <Input size="large" disabled={disableFields} />
                    </Form.Item>
                  </div>
                </Col>

                <Col xl={12} md={24}>
                  <div className="step-form-right-col">
                    <Form.Item
<<<<<<< HEAD
                      label={t("monitoringReport:bi_unfccRefNo")}
=======
                      label={t('monitoringReport:bi_unfccRefNo')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="bi_unfccRefNo"
                      rules={[
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
                                `${t("monitoringReport:bi_unfccRefNo")}`
                              );
=======
                              throw new Error(`${t('monitoringReport:bi_unfccRefNo')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                            }
                          },
                        },
                      ]}
                    >
                      <Input size="large" disabled />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={t("monitoringReport:bi_versionNoOfMR")}
=======
                      label={t('monitoringReport:bi_versionNoOfMR')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="bi_versionNoOfMR"
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
                                `${t("monitoringReport:bi_versionNoOfMR")} ${t(
                                  "isRequired"
                                )}`
=======
                                `${t('monitoringReport:bi_versionNoOfMR')} ${t('isRequired')}`
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
                      label={t("monitoringReport:bi_monitoringPeriodNo")}
=======
                      label={t('monitoringReport:bi_monitoringPeriodNo')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="bi_monitoringPeriodNo"
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
                                  "monitoringReport:bi_monitoringPeriodNo"
                                )} ${t("isRequired")}`
=======
                                `${t('monitoringReport:bi_monitoringPeriodNo')} ${t('isRequired')}`
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
                      label={t(
                        "monitoringReport:bi_monitoringNoForMonitoringPeriod"
                      )}
=======
                      label={t('monitoringReport:bi_monitoringNoForMonitoringPeriod')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="bi_monitoringNoForMonitoringPeriod"
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
                                  "monitoringReport:bi_monitoringNoForMonitoringPeriod"
                                )} ${t("isRequired")}`
=======
                                `${t('monitoringReport:bi_monitoringNoForMonitoringPeriod')} ${t(
                                  'isRequired'
                                )}`
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
                      label={t("monitoringReport:bi_hostParty")}
=======
                      label={t('monitoringReport:bi_hostParty')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="bi_hostParty"
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
                                `${t("monitoringReport:bi_hostParty")} ${t(
                                  "isRequired"
                                )}`
=======
                                `${t('monitoringReport:bi_hostParty')} ${t('isRequired')}`
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
                      label={t("monitoringReport:bi_sectoralScope")}
=======
                      label={t('monitoringReport:bi_sectoralScope')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="bi_sectoralScope"
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
                                `${t("monitoringReport:bi_sectoralScope")} ${t(
                                  "isRequired"
                                )}`
=======
                                `${t('monitoringReport:bi_sectoralScope')} ${t('isRequired')}`
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
                      label={t("monitoringReport:bi_projectedGHGReductions")}
=======
                      label={t('monitoringReport:bi_projectedGHGReductions')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="bi_projectedGHGReductions"
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
                                  "monitoringReport:bi_projectedGHGReductions"
                                )} ${t("isRequired")}`
=======
                                `${t('monitoringReport:bi_projectedGHGReductions')} ${t(
                                  'isRequired'
                                )}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              );
                            }
                          },
                        },
                      ]}
                    >
                      <Input size="large" disabled={disableFields} />
                    </Form.Item>

                    {/* <Form.Item
                      name="telephone"
                      label={t('monitoringReport:pd_telephone')}
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
                                `${t('monitoringReport:pd_telephone')} ${t('isRequired')}`
                              );
                            } else {
                              const phoneNo = formatPhoneNumber(String(value));
                              if (String(value).trim() !== '') {
                                if (phoneNo === null || phoneNo === '' || phoneNo === undefined) {
                                  throw new Error(
                                    `${t('monitoringReport:pd_telephone')} ${t('isRequired')}`
                                  );
                                } else {
                                  if (!isPossiblePhoneNumber(String(value))) {
                                    throw new Error(
                                      `${t('monitoringReport:pd_telephone')} ${t('isInvalid')}`
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
                        disabled
                        placeholder={t('monitoringReport:pd_telephone')}
                        international
                        value={formatPhoneNumberIntl(contactNoInput)}
                        defaultCountry="LK"
                        countryCallingCodeEditable={false}
                        onChange={(v) => {}}
                        countries={countries}
                      />
                    </Form.Item> */}
                    {/* {FormMode.VIEW === formMode ? (
                      <Form.Item label={t('monitoringReport:reportID')} name="reportID">
                        <Input size={'large'} disabled />
                      </Form.Item>
                    ) : (
                      ''
                    )} */}
                  </div>
                </Col>
              </Row>
<<<<<<< HEAD
              <Row justify={"end"} className="step-actions-end">
                <Button onClick={prev} disabled={false} danger>
                  {t("monitoringReport:back")}
                </Button>
                {disableFields ? (
                  <Button type="primary" onClick={next}>
                    {t("monitoringReport:next")}
=======
              <Row justify={'end'} className="step-actions-end">
                <Button onClick={prev} disabled={false} type="primary" ghost>
                  {t('monitoringReport:back')}
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
