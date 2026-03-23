<<<<<<< HEAD
import { Button, Col, Form, message, Row, Upload } from "antd";
import TextArea from "antd/lib/input/TextArea";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { FormMode } from "../../Definitions/Enums/formMode.enum";
import { useState } from "react";
import { CustomStepsProps } from "./StepProps";
import { fileUploadValueExtract } from "../../Utils/utilityHelper";
import { FormActionModel } from "../Models/FormActionModel";
import ConfirmSubmitSVG from "../../Assets/DialogIcons/ConfirmSubmit.svg";
import { useLocation } from "react-router-dom";
import { useConnection } from "../../Context/ConnectionContext/connectionContext";
import { API_PATHS } from "../../Config/apiConfig";
import { DocumentEnum } from "../../Definitions/Enums/document.enum";
import { DocumentStateEnum } from "../../Definitions/Definitions/documentState.enum";
import { defaultTimeout } from "../../Definitions/Constants/defaultTimeout";
=======
import { Button, Col, Form, message, Row, Upload } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { CheckCircleOutlined, CloseCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { FormMode } from '../../Definitions/Enums/formMode.enum';
import { useState } from 'react';
import { CustomStepsProps } from './StepProps';
import { fileUploadValueExtract } from '../../Utils/utilityHelper';
import { SlcfFormActionModel } from '../Models/SlcfFormActionModel';
import { ReactComponent as ConfirmSubmitSVG } from '../../Assets/DialogIcons/ConfirmSubmit.svg';
import { useLocation } from 'react-router-dom';
import { useConnection } from '../../Context/ConnectionContext/connectionContext';
import { API_PATHS } from '../../Config/apiConfig';
import { DocumentEnum } from '../../Definitions/Enums/document.enum';
import { DocumentStateEnum } from '../../Definitions/Definitions/documentState.enum';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

export const AnnexureStep = (props: CustomStepsProps) => {
  const {
    t,
    current,
    form,
    formMode,
    next,
    prev,
    handleValuesUpdate,
    disableFields,
    documentId,
    handleLoading,
  } = props;

  const { post } = useConnection();

  const { state } = useLocation();

<<<<<<< HEAD
  const maximumImageSize = import.meta.env.VITE_APP_MAXIMUM_FILE_SIZE
    ? parseInt(import.meta.env.VITE_APP_MAXIMUM_FILE_SIZE)
=======
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

  const onFinish = async (values: any) => {
<<<<<<< HEAD
    console.log("---------values---------", values);
    const appendixFormValues: any = {
      appendix: values?.a_appendix,
      a_uploadDoc: await fileUploadValueExtract(values, "a_uploadDoc"),
=======
    const appendixFormValues: any = {
      appendix: values?.a_appendix,
      a_uploadDoc: await fileUploadValueExtract(values, 'a_uploadDoc'),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    };
    handleValuesUpdate(appendixFormValues);
  };

  const [showDialog, setShowDialog] = useState<boolean>(false);

  const closeDialog = () => {
    setShowDialog(false);
  };

  const [formValues, setFormValues] = useState<any>();

  const [showVerifyDialog, setShowVerifyDialog] = useState<boolean>(false);
  const [showDeclineDialog, setShowDeclineDialog] = useState<boolean>(false);

  const closeVerifyDialogBox = () => {
    setShowVerifyDialog(false);
  };

  const closeDeclineDialogBox = () => setShowDeclineDialog(false);

  const approve = async () => {
    if (documentId) {
      if (handleLoading) {
        handleLoading(true);
      }
      try {
        const res = await post(API_PATHS.VERIFY_DOCUMENT, {
          refId: documentId,
          documentType: DocumentEnum.MONITORING,
<<<<<<< HEAD
          remarks: "approved",
          action: DocumentStateEnum.IC_APPROVED,
        });

        if (res?.statusText === "SUCCESS") {
          message.open({
            type: "success",
            content: "Monitoring report was approved successfully",
            duration: 4,
            style: { textAlign: "right", marginRight: 15, marginTop: 10 },
          });

          setTimeout(() => {
            if (next) {
              next();
            }
            if (handleLoading) {
              handleLoading(false);
            }
          }, defaultTimeout);
        }
      } catch (error) {
        if (handleLoading) {
          handleLoading(false);
        }
        message.open({
          type: "error",
          content: t("common:somethingWentWrong"),
          duration: 4,
          style: { textAlign: "right", marginRight: 15, marginTop: 10 },
        });
=======
          remarks: 'approved',
          action: DocumentStateEnum.IC_APPROVED,
        });

        if (res?.statusText === 'SUCCESS') {
          message.open({
            type: 'success',
            content: 'Monitoring report was approved successfully',
            duration: 4,
            style: { textAlign: 'right', marginRight: 15, marginTop: 10 },
          });

          if (next) {
            next();
          }
        }
      } catch (error: any) {
        if (error?.status === 500) {
          message.open({
            type: 'error',
            content: t('common:somethingWentWrong'),
            duration: 4,
            style: { textAlign: 'right', marginRight: 15, marginTop: 10 },
          });
        } else {
          message.open({
            type: 'error',
            content: error.message,
            duration: 4,
            style: { textAlign: 'right', marginRight: 15, marginTop: 10 },
          });
        }
      } finally {
        if (handleLoading) {
          handleLoading(false);
        }
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      }
    }
  };

  const reject = async (remarks?: string) => {
    if (documentId) {
      if (handleLoading) {
        handleLoading(true);
      }
      try {
        const res = await post(API_PATHS.VERIFY_DOCUMENT, {
          refId: documentId,
          documentType: DocumentEnum.MONITORING,
          remarks: remarks,
          action: DocumentStateEnum.IC_REJECTED,
        });

<<<<<<< HEAD
        if (res?.statusText === "SUCCESS") {
          message.open({
            type: "success",
            content: "Monitoring report rejected",
            duration: 4,
            style: { textAlign: "right", marginRight: 15, marginTop: 10 },
          });

          setTimeout(() => {
            if (next) {
              next();
            }
            if (handleLoading) {
              handleLoading(false);
            }
          }, defaultTimeout);
        }
      } catch (error) {
        if (handleLoading) {
          handleLoading(false);
        }
        message.open({
          type: "error",
          content: t("common:somethingWentWrong"),
          duration: 4,
          style: { textAlign: "right", marginRight: 15, marginTop: 10 },
        });
=======
        if (res?.statusText === 'SUCCESS') {
          message.open({
            type: 'success',
            content: 'Monitoring report rejected',
            duration: 4,
            style: { textAlign: 'right', marginRight: 15, marginTop: 10 },
          });

          if (next) {
            next();
          }
        }
      } catch (error: any) {
        if (error?.status === 500) {
          message.open({
            type: 'error',
            content: t('common:somethingWentWrong'),
            duration: 4,
            style: { textAlign: 'right', marginRight: 15, marginTop: 10 },
          });
        } else {
          message.open({
            type: 'error',
            content: error.message,
            duration: 4,
            style: { textAlign: 'right', marginRight: 15, marginTop: 10 },
          });
        }
      } finally {
        if (handleLoading) {
          handleLoading(false);
        }
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      }
    }
  };

  return (
    <>
      {current === 6 && (
        <div>
          <div className="step-form-container">
<<<<<<< HEAD
            {(state?.mode === FormMode.CREATE ||
              state?.mode === FormMode.EDIT) && (
              <>
                <FormActionModel
                  icon={<ConfirmSubmitSVG />}
                  title={t("monitoringReport:confirmModalMessage")}
                  onCancel={closeDialog}
                  actionBtnText={t("common:yes")}
=======
            {(state?.mode === FormMode.CREATE || state?.mode === FormMode.EDIT) && (
              <>
                <SlcfFormActionModel
                  icon={<ConfirmSubmitSVG />}
                  title={t('monitoringReport:confirmModalMessage')}
                  onCancel={closeDialog}
                  actionBtnText={t('common:yes')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                  onFinish={() => {
                    onFinish(formValues);
                    closeDialog();
                  }}
                  openModal={showDialog}
<<<<<<< HEAD
                  type={"primary"}
=======
                  type={'primary'}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                  remarkRequired={false}
                  t={t}
                />
              </>
            )}

            {state?.mode === FormMode.VERIFY && (
              <>
<<<<<<< HEAD
                <FormActionModel
                  actionBtnText={t("monitoringReport:reject")}
                  onCancel={closeDeclineDialogBox}
                  icon={<CloseCircleOutlined />}
                  title={t("monitoringReport:declineMessage")}
                  onFinish={(remarks: string) => {
                    console.log("-----remarks-------", remarks);
=======
                <SlcfFormActionModel
                  actionBtnText={t('monitoringReport:reject')}
                  onCancel={closeDeclineDialogBox}
                  icon={<CloseCircleOutlined />}
                  title={t('monitoringReport:declineMessage')}
                  onFinish={(remarks: string) => {
                    console.log('-----remarks-------', remarks);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                    reject(remarks);
                  }}
                  remarkRequired
                  type="danger"
                  subText=""
                  openModal={showDeclineDialog}
                  t={t}
                />

<<<<<<< HEAD
                <FormActionModel
                  actionBtnText={t("monitoringReport:approve")}
                  onCancel={closeVerifyDialogBox}
                  icon={<CheckCircleOutlined />}
                  title={t("monitoringReport:approveMessage")}
=======
                <SlcfFormActionModel
                  actionBtnText={t('monitoringReport:approve')}
                  onCancel={closeVerifyDialogBox}
                  icon={<CheckCircleOutlined />}
                  title={t('monitoringReport:approveMessage')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                  onFinish={() => {
                    approve();
                  }}
                  remarkRequired={false}
                  type="primary"
                  subText=""
                  openModal={showVerifyDialog}
                  t={t}
                />
              </>
            )}
            <Form
              labelCol={{ span: 20 }}
              wrapperCol={{ span: 24 }}
              className="step-form"
              layout="vertical"
              requiredMark={true}
              form={form}
              // disabled={disableFields}
              onFinish={(values: any) => {
                setShowDialog(true);
                setFormValues(values);
              }}
            >
              <h4 className="appendix-title">
<<<<<<< HEAD
                <i>{`${t("monitoringReport:a_appendix")}`}</i>
=======
                <i>{`${t('monitoringReport:a_appendix')}`}</i>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
              </h4>
              <Row className="row" gutter={[40, 16]}>
                <Col xl={24} md={24}>
                  <div className="step-form-left-col">
                    <Form.Item name="a_appendix">
                      <TextArea rows={8} disabled={disableFields} />
                    </Form.Item>

                    <div className="custom-label-monitoring">
<<<<<<< HEAD
                      {t("monitoringReport:a_uploadDoc")}
=======
                      {t('monitoringReport:a_uploadDoc')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                    </div>
                    <Form.Item
                      //label={t('monitoringReport:a_uploadDoc')}
                      name="a_uploadDoc"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      required={false}
                      rules={[
                        {
                          validator: async (rule, file) => {
                            if (file?.length > 0) {
<<<<<<< HEAD
                              console.log("------file-------", file);
                              if (
                                file.some(
                                  (item: any) => item?.size > maximumImageSize
                                )
                              ) {
                                // default size format of files would be in bytes -> 1MB = 1000000bytes
                                throw new Error(`${t("common:maxSizeVal")}`);
                              }
                            }
=======
                              if (file.some((item: any) => item?.size > maximumImageSize)) {
                                // default size format of files would be in bytes -> 1MB = 1000000bytes
                                throw new Error(`${t('common:maxSizeVal')}`);
                              }
                            }
                            return Promise.resolve();
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                          },
                        },
                      ]}
                    >
                      <Upload
<<<<<<< HEAD
                        accept=".doc, .docx, .pdf, .png, .jpg"
=======
                        accept=".png, .jpg, .svg"
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        beforeUpload={(file: any) => {
                          return false;
                        }}
                        className="design-upload-section-monitoring"
                        name="design"
                        action="/upload.do"
                        listType="picture"
                        multiple={false}
                        disabled={disableFields}
                      >
                        <Button
                          className="upload-doc"
                          size="large"
                          icon={<UploadOutlined />}
                          disabled={disableFields}
                        >
<<<<<<< HEAD
                          {t("monitoringReport:upload")}
=======
                          {t('monitoringReport:upload')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        </Button>
                      </Upload>
                    </Form.Item>
                  </div>
                </Col>
              </Row>
<<<<<<< HEAD
              <Row justify={"end"} className="step-actions-end">
                {(state?.mode === FormMode.CREATE ||
                  state?.mode === FormMode.EDIT) && (
                  <>
                    <Button danger size={"large"} onClick={prev}>
                      {t("monitoringReport:prev")}
                    </Button>
                    <Button type="primary" htmlType="submit">
                      {t("monitoringReport:submit")}
=======
              {/* <Row className="step-actions-end"> */}
              {/* <Col>
                  <Button onClick={prev} disabled={false}>
                    {t('monitoringReport:back')}
                  </Button>
                </Col> */}
              <Row justify={'end'} className="step-actions-end">
                {(state?.mode === FormMode.CREATE || state?.mode === FormMode.EDIT) && (
                  <>
                    <Button type="primary" ghost size={'large'} onClick={prev}>
                      {t('monitoringReport:prev')}
                    </Button>
                    <Button type="primary" htmlType="submit">
                      {t('monitoringReport:submit')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                    </Button>
                  </>
                )}
                {state?.mode === FormMode.VIEW && (
                  <>
<<<<<<< HEAD
                    <Button danger size={"large"} onClick={prev}>
                      {t("monitoringReport:prev")}
                    </Button>
                    <Button type="primary" onClick={next}>
                      {t("monitoringReport:goBackProjectDetails")}
=======
                    <Button type="primary" ghost size={'large'} onClick={prev}>
                      {t('monitoringReport:prev')}
                    </Button>
                    <Button type="primary" onClick={next}>
                      {t('monitoringReport:goBackProjectDetails')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                    </Button>
                  </>
                )}
                {state?.mode === FormMode.VERIFY && (
                  <>
<<<<<<< HEAD
                    <Button size={"large"} onClick={prev} type={"default"}>
                      {t("monitoringReport:prev")}
                    </Button>
                    <Button
                      danger
                      size={"large"}
                      onClick={() => setShowDeclineDialog(true)}
                    >
                      {t("monitoringReport:reject")}
                    </Button>
                    <Button
                      size={"large"}
                      onClick={() => setShowVerifyDialog(true)}
                      type="primary"
                    >
                      {t("monitoringReport:approve")}
                    </Button>
                  </>
                )}
=======
                    <Button size={'large'} onClick={prev} type={'default'}>
                      {t('monitoringReport:prev')}
                    </Button>
                    <Button danger size={'large'} onClick={() => setShowDeclineDialog(true)}>
                      {t('monitoringReport:reject')}
                    </Button>
                    <Button size={'large'} onClick={() => setShowVerifyDialog(true)} type="primary">
                      {t('monitoringReport:approve')}
                    </Button>
                  </>
                )}
                {/* <Button danger size={'large'} onClick={prev}>
                  {t('monitoringReport:prev')}
                </Button>
                {disableFields ? (
                  <Button type="primary" onClick={next}>
                    {t('monitoringReport:goBackProjectDetails')}
                  </Button>
                ) : (
                  <Button type="primary" size={'large'} htmlType={'submit'}>
                    {t('monitoringReport:submit')}
                  </Button>
                )} */}
                {/* </Row> */}
                {/* {userInfoState?.companyRole === CompanyRole.PROGRAMME_DEVELOPER &&
                  FormMode.VIEW !== formMode && (
                    <Button type="primary" htmlType="submit" disabled={loading}>
                      <span>{t('monitoringReport:submit')}</span>
                    </Button>
                  )} */}

                {/* {userInfoState?.companyRole === CompanyRole.CLIMATE_FUND &&
                  status === DocumentStatus.PENDING && (
                    <Button danger onClick={reject} disabled={false}>
                      <span>{t('monitoringReport:reject')}</span>
                    </Button>
                  )}
                {userInfoState?.companyRole === CompanyRole.CLIMATE_FUND &&
                  status === DocumentStatus.PENDING && (
                    <Button type="primary" onClick={approve} disabled={false}>
                      <span>{t('monitoringReport:approve')}</span>
                    </Button>
                  )} */}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
              </Row>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};
