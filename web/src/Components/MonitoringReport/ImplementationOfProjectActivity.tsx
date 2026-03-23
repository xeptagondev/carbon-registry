<<<<<<< HEAD
import { Button, Col, Form, Row } from "antd";

import TextArea from "antd/lib/input/TextArea";
import { FormMode } from "../../Definitions/Enums/formMode.enum";
import { CustomStepsProps } from "./StepProps";

export const ImplementationOfProjectActivityStep = (
  props: CustomStepsProps
) => {
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

  const onFinish = (values: any) => {
=======
import { Button, Col, Form, Row } from 'antd';

import TextArea from 'antd/lib/input/TextArea';
import { FormMode } from '../../Definitions/Enums/formMode.enum';
import { CustomStepsProps } from './StepProps';

export const ImplementationOfProjectActivityStep = (props: CustomStepsProps) => {
  const { t, current, form, formMode, next, prev, handleValuesUpdate, disableFields } = props;

  const onFinish = (values: any) => {
    // console.log('onFinish triggered');
    // console.log('-----------temp Values before-------');
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    const implementationOfProjectActivityDetails: any = {
      implementationOfProjectActivityDetails: {
        io_descriptionOfPA: values?.io_descriptionOfPA,
        io_postRegistrationChanges: values?.io_postRegistrationChanges,
        io_tempDeviations: values?.io_tempDeviations,
        io_corrections: values?.io_corrections,
        io_changesToTheStartDate: values?.io_changesToTheStartDate,
        io_inclusionOfMP: values?.io_inclusionOfMP,
        io_permanantMonitoringPlan: values?.io_permanantMonitoringPlan,
        io_changesToProjectDesign: values?.io_changesToProjectDesign,
        io_changesSpecificToAfforestrationOrReforestration:
          values?.io_changesSpecificToAfforestrationOrReforestration,
      },
    };
<<<<<<< HEAD
=======
    // console.log('----------tempValues-------------', tempValues);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    handleValuesUpdate(implementationOfProjectActivityDetails);
  };
  return (
    <>
      {current === 2 && (
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
                      label={`${t("monitoringReport:io_descriptionOfPA")}`}
=======
                      label={`${t('monitoringReport:io_descriptionOfPA')}`}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="io_descriptionOfPA"
                      rules={[
                        {
                          required: true,
<<<<<<< HEAD
                          message: `${t(
                            "monitoringReport:io_descriptionOfPA"
                          )} ${t("isRequired")}`,
=======
                          message: `${t('monitoringReport:io_descriptionOfPA')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        },
                      ]}
                    >
                      <TextArea rows={5} disabled={disableFields} />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={`${t(
                        "monitoringReport:io_postRegistrationChanges"
                      )}`}
=======
                      label={`${t('monitoringReport:io_postRegistrationChanges')}`}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="io_postRegistrationChanges"
                      rules={[
                        {
                          required: true,
<<<<<<< HEAD
                          message: `${t(
                            "monitoringReport:io_postRegistrationChanges"
                          )} ${t("isRequired")}`,
=======
                          message: `${t('monitoringReport:io_postRegistrationChanges')} ${t(
                            'isRequired'
                          )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        },
                      ]}
                    >
                      <TextArea rows={5} disabled={disableFields} />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={`${t("monitoringReport:io_tempDeviations")}`}
=======
                      label={`${t('monitoringReport:io_tempDeviations')}`}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="io_tempDeviations"
                      rules={[
                        {
                          required: true,
<<<<<<< HEAD
                          message: `${t(
                            "monitoringReport:io_tempDeviations"
                          )} ${t("isRequired")}`,
=======
                          message: `${t('monitoringReport:io_tempDeviations')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        },
                      ]}
                    >
                      <TextArea rows={5} disabled={disableFields} />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={`${t("monitoringReport:io_corrections")}`}
=======
                      label={`${t('monitoringReport:io_corrections')}`}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="io_corrections"
                      rules={[
                        {
                          required: true,
<<<<<<< HEAD
                          message: `${t("monitoringReport:io_corrections")} ${t(
                            "isRequired"
=======
                          message: `${t('monitoringReport:io_corrections')} ${t('isRequired')}`,
                        },
                      ]}
                    >
                      <TextArea rows={5} disabled={disableFields} />
                    </Form.Item>

                    <Form.Item
                      label={`${t('monitoringReport:io_changesToTheStartDate')}`}
                      name="io_changesToTheStartDate"
                      rules={[
                        {
                          required: true,
                          message: `${t('monitoringReport:io_changesToTheStartDate')} ${t(
                            'isRequired'
                          )}`,
                        },
                      ]}
                    >
                      <TextArea rows={5} disabled={disableFields} />
                    </Form.Item>

                    <Form.Item
                      label={`${t('monitoringReport:io_inclusionOfMP')}`}
                      name="io_inclusionOfMP"
                      rules={[
                        {
                          required: true,
                          message: `${t('monitoringReport:io_inclusionOfMP')} ${t('isRequired')}`,
                        },
                      ]}
                    >
                      <TextArea rows={5} disabled={disableFields} />
                    </Form.Item>

                    <Form.Item
                      label={`${t('monitoringReport:io_permanantMonitoringPlan')}`}
                      name="io_permanantMonitoringPlan"
                      rules={[
                        {
                          required: true,
                          message: `${t('monitoringReport:io_permanantMonitoringPlan')} ${t(
                            'isRequired'
                          )}`,
                        },
                      ]}
                    >
                      <TextArea rows={5} disabled={disableFields} />
                    </Form.Item>

                    <Form.Item
                      label={`${t('monitoringReport:io_changesToProjectDesign')}`}
                      name="io_changesToProjectDesign"
                      rules={[
                        {
                          required: true,
                          message: `${t('monitoringReport:io_changesToProjectDesign')} ${t(
                            'isRequired'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          )}`,
                        },
                      ]}
                    >
                      <TextArea rows={5} disabled={disableFields} />
                    </Form.Item>

                    <Form.Item
                      label={`${t(
<<<<<<< HEAD
                        "monitoringReport:io_changesToTheStartDate"
                      )}`}
                      name="io_changesToTheStartDate"
                      rules={[
                        {
                          required: true,
                          message: `${t(
                            "monitoringReport:io_changesToTheStartDate"
                          )} ${t("isRequired")}`,
                        },
                      ]}
                    >
                      <TextArea rows={5} disabled={disableFields} />
                    </Form.Item>

                    <Form.Item
                      label={`${t("monitoringReport:io_inclusionOfMP")}`}
                      name="io_inclusionOfMP"
                      rules={[
                        {
                          required: true,
                          message: `${t(
                            "monitoringReport:io_inclusionOfMP"
                          )} ${t("isRequired")}`,
                        },
                      ]}
                    >
                      <TextArea rows={5} disabled={disableFields} />
                    </Form.Item>

                    <Form.Item
                      label={`${t(
                        "monitoringReport:io_permanantMonitoringPlan"
                      )}`}
                      name="io_permanantMonitoringPlan"
                      rules={[
                        {
                          required: true,
                          message: `${t(
                            "monitoringReport:io_permanantMonitoringPlan"
                          )} ${t("isRequired")}`,
                        },
                      ]}
                    >
                      <TextArea rows={5} disabled={disableFields} />
                    </Form.Item>

                    <Form.Item
                      label={`${t(
                        "monitoringReport:io_changesToProjectDesign"
                      )}`}
                      name="io_changesToProjectDesign"
                      rules={[
                        {
                          required: true,
                          message: `${t(
                            "monitoringReport:io_changesToProjectDesign"
                          )} ${t("isRequired")}`,
                        },
                      ]}
                    >
                      <TextArea rows={5} disabled={disableFields} />
                    </Form.Item>

                    <Form.Item
                      label={`${t(
                        "monitoringReport:io_changesSpecificToAfforestrationOrReforestration"
=======
                        'monitoringReport:io_changesSpecificToAfforestrationOrReforestration'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      )}`}
                      name="io_changesSpecificToAfforestrationOrReforestration"
                      rules={[
                        {
                          required: true,
                          message: `${t(
<<<<<<< HEAD
                            "monitoringReport:io_changesSpecificToAfforestrationOrReforestration"
                          )} ${t("isRequired")}`,
=======
                            'monitoringReport:io_changesSpecificToAfforestrationOrReforestration'
                          )} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        },
                      ]}
                    >
                      <TextArea rows={5} disabled={disableFields} />
                    </Form.Item>
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
