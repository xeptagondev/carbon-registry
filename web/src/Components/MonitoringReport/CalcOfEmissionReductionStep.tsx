//import { UploadOutlined } from '@ant-design/icons';
<<<<<<< HEAD
import { Button, Col, Form, Input, Row, Upload, DatePicker } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { FormMode } from "../../Definitions/Enums/formMode.enum";
import LabelWithTooltip, {
  TooltipPostion,
} from "../LabelWithTooltip/LabelWithTooltip";
import { MinusOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import NetEmissionReduction from "../Common/NetEmissonReduction";
import {
  fileUploadValueExtract,
  formatNumberWithDecimalPlaces,
} from "../../Utils/utilityHelper";
import moment from "moment";
import { getBase64 } from "../../Definitions/Definitions/programme.definitions";
import { RcFile } from "antd/lib/upload";
import { CustomStepsProps } from "./StepProps";
import { toMoment } from "../../Utils/convertTime";
import { disableYears } from "../../Utils/disableYears";
import { ValidateStatus } from "antd/es/form/FormItem";
import "./MonitoringReport.scss"

const EMISSION_CATEGORY_AVG_MAP: { [key: string]: string } = {
  baselineEmissionReductions: "avgBaselineEmissionReductions",
  projectEmissionReductions: "avgProjectEmissionReductions",
  leakageEmissionReductions: "avgLeakageEmissionReductions",
  netEmissionReductions: "avgNetEmissionReductions",
=======
import { Button, Col, Form, Input, Row, Upload, DatePicker } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { FormMode } from '../../Definitions/Enums/formMode.enum';
import LabelWithTooltip, { TooltipPostion } from '../LabelWithTooltip/LabelWithTooltip';
import { MinusOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import NetEmissionReduction from '../Common/NetEmissonReduction';
import { fileUploadValueExtract, formatNumberWithDecimalPlaces } from '../../Utils/utilityHelper';
import moment from 'moment';
import { getBase64 } from '../../Definitions/Definitions/programme.definitions';
import { RcFile } from 'antd/lib/upload';
import { CustomStepsProps } from './StepProps';
import { toMoment } from '../../Utils/convertTime';
import { disableYears } from '../../Utils/disableYears';

const EMISSION_CATEGORY_AVG_MAP: { [key: string]: string } = {
  baselineEmissionReductions: 'avgBaselineEmissionReductions',
  projectEmissionReductions: 'avgProjectEmissionReductions',
  leakageEmissionReductions: 'avgLeakageEmissionReductions',
  netEmissionReductions: 'avgNetEmissionReductions',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
};

export const CalcEmissionReductionStep = (props: CustomStepsProps) => {
  const {
    t,
    current,
    form,
    formMode,
    next,
    prev,
    handleValuesUpdate,
    disableFields,
    maxNetGHGReduction,
  } = props;
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
  // const t = translator.t;

  const calculateNetGHGEmissions = (value?: any, index?: number) => {
    let baselineEmissionReductionsVal = 0;
    let projectEmissionReductionsVal = 0;
    let leakageEmissionReductionsVal = 0;

    if (index === undefined) {
<<<<<<< HEAD
      baselineEmissionReductionsVal = Number(
        form.getFieldValue("baselineEmissionReductions") || 0
      );
      projectEmissionReductionsVal = Number(
        form.getFieldValue("projectEmissionReductions") || 0
      );
      leakageEmissionReductionsVal = Number(
        form.getFieldValue("leakageEmissionReductions") || 0
      );
      const netGHGEmissions =
        baselineEmissionReductionsVal -
        projectEmissionReductionsVal -
        leakageEmissionReductionsVal;
=======
      baselineEmissionReductionsVal = Number(form.getFieldValue('baselineEmissionReductions') || 0);
      projectEmissionReductionsVal = Number(form.getFieldValue('projectEmissionReductions') || 0);
      leakageEmissionReductionsVal = Number(form.getFieldValue('leakageEmissionReductions') || 0);
      const netGHGEmissions =
        baselineEmissionReductionsVal - projectEmissionReductionsVal - leakageEmissionReductionsVal;
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

      if (netGHGEmissions <= 0) {
        form.setFields([
          {
<<<<<<< HEAD
            name: "netEmissionReductions",
            errors: [`${t("monitoringReport:ce_shouldHavePositive")}`],
=======
            name: 'netEmissionReductions',
            errors: [`${t('monitoringReport:ce_shouldHavePositive')}`],
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          },
        ]);
      } else {
        form.setFields([
          {
<<<<<<< HEAD
            name: "netEmissionReductions",
=======
            name: 'netEmissionReductions',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            errors: [],
          },
        ]);
      }
<<<<<<< HEAD
      form.setFieldValue("netEmissionReductions", String(netGHGEmissions));
    } else {
      const listVals = form.getFieldValue("extraEmissionReductions");

      if (listVals[index] !== undefined) {
        baselineEmissionReductionsVal = Number(
          listVals[index].baselineEmissionReductions || 0
        );
        projectEmissionReductionsVal = Number(
          listVals[index].projectEmissionReductions || 0
        );
        leakageEmissionReductionsVal = Number(
          listVals[index].leakageEmissionReductions || 0
        );
=======
      form.setFieldValue('netEmissionReductions', String(netGHGEmissions));
    } else {
      const listVals = form.getFieldValue('extraEmissionReductions');

      if (listVals[index] !== undefined) {
        baselineEmissionReductionsVal = Number(listVals[index].baselineEmissionReductions || 0);
        projectEmissionReductionsVal = Number(listVals[index].projectEmissionReductions || 0);
        leakageEmissionReductionsVal = Number(listVals[index].leakageEmissionReductions || 0);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

        const netGHGEmissions =
          baselineEmissionReductionsVal -
          projectEmissionReductionsVal -
          leakageEmissionReductionsVal;

        listVals[index].netEmissionReductions = netGHGEmissions;

        if (netGHGEmissions <= 0) {
          form.setFields([
            {
<<<<<<< HEAD
              name: ["extraEmissionReductions", index, "netEmissionReductions"],
              errors: [`${t("monitoringReport:ce_shouldHavePositive")}`],
=======
              name: ['extraEmissionReductions', index, 'netEmissionReductions'],
              errors: [`${t('monitoringReport:ce_shouldHavePositive')}`],
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            },
          ]);
        } else {
          form.setFields([
            {
<<<<<<< HEAD
              name: ["extraEmissionReductions", index, "netEmissionReductions"],
=======
              name: ['extraEmissionReductions', index, 'netEmissionReductions'],
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
              errors: [],
            },
          ]);
        }

<<<<<<< HEAD
        form.setFieldValue("extraEmissionReductions", listVals);
=======
        form.setFieldValue('extraEmissionReductions', listVals);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      }
    }
  };

  const CalculateNetTotalEmissions = () => {
<<<<<<< HEAD
    const category = "netEmissionReductions";
    const categoryToAdd = "totalNetEmissionReductions";
    let tempTotal = Number(form.getFieldValue(category) || 0);
    const listVals = form.getFieldValue("extraEmissionReductions");
=======
    const category = 'netEmissionReductions';
    const categoryToAdd = 'totalNetEmissionReductions';
    let tempTotal = Number(form.getFieldValue(category) || 0);
    const listVals = form.getFieldValue('extraEmissionReductions');
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    if (listVals !== undefined && listVals[0] !== undefined) {
      listVals.forEach((item: any) => {
        if (item[category]) {
          tempTotal += Number(item[category]);
        }
      });
    }
<<<<<<< HEAD
    const creditingYears = Number(
      form.getFieldValue("totalCreditingYears") || 0
    );
    form.setFieldValue(categoryToAdd, String(tempTotal));

    console.log(
      "---------maxNetGHGReduction---------",
      maxNetGHGReduction,
      tempTotal,
      tempTotal > maxNetGHGReduction
    );

    console.log("-----maxNetGHGReduction---------", maxNetGHGReduction);
=======
    const creditingYears = Number(form.getFieldValue('totalCreditingYears') || 0);
    form.setFieldValue(categoryToAdd, String(tempTotal));

    console.log('---------maxNetGHGReduction---------', maxNetGHGReduction, tempTotal);

    console.log('-----maxNetGHGReduction---------', maxNetGHGReduction);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

    if (maxNetGHGReduction !== undefined && tempTotal > maxNetGHGReduction) {
      form.setFields([
        {
<<<<<<< HEAD
          name: "totalNetEmissionReductions",
          errors: [
            `Total Net Emission Reduction cannot exceed ${maxNetGHGReduction}`,
          ],
=======
          name: 'totalNetEmissionReductions',
          errors: [`Total Net Emission Reduction cannot exceed ${maxNetGHGReduction}`],
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        },
      ]);
    } else {
      form.setFields([
        {
<<<<<<< HEAD
          name: "totalNetEmissionReductions",
=======
          name: 'totalNetEmissionReductions',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          errors: [``],
        },
      ]);
    }

    const avgTempTotal =
<<<<<<< HEAD
      creditingYears > 0
        ? formatNumberWithDecimalPlaces(tempTotal / creditingYears)
        : 0;
    form.setFieldValue(EMISSION_CATEGORY_AVG_MAP[category], avgTempTotal);
  };

  const calculateTotalEmissions = (
    value: any,
    category: string,
    categoryToAdd: string
  ) => {
    let tempTotal = Number(form.getFieldValue(category) || 0);
    const listVals = form.getFieldValue("extraEmissionReductions");
=======
      creditingYears > 0 ? formatNumberWithDecimalPlaces(tempTotal / creditingYears) : 0;
    form.setFieldValue(EMISSION_CATEGORY_AVG_MAP[category], avgTempTotal);
  };

  const calculateTotalEmissions = (value: any, category: string, categoryToAdd: string) => {
    let tempTotal = Number(form.getFieldValue(category) || 0);
    const listVals = form.getFieldValue('extraEmissionReductions');
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    if (listVals !== undefined && listVals[0] !== undefined) {
      listVals.forEach((item: any) => {
        if (item[category]) {
          tempTotal += Number(item[category]);
        }
      });
    }
<<<<<<< HEAD
    const creditingYears = Number(
      form.getFieldValue("totalCreditingYears") || 0
    );
    form.setFieldValue(categoryToAdd, String(tempTotal));
    const total =
      creditingYears > 0
        ? formatNumberWithDecimalPlaces(tempTotal / creditingYears)
        : 0;
=======
    const creditingYears = Number(form.getFieldValue('totalCreditingYears') || 0);
    form.setFieldValue(categoryToAdd, String(tempTotal));
    const total =
      creditingYears > 0 ? formatNumberWithDecimalPlaces(tempTotal / creditingYears) : 0;
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    form.setFieldValue(EMISSION_CATEGORY_AVG_MAP[category], total);

    CalculateNetTotalEmissions();
  };

  const onPeriodChange = (value: any, fieldCounts: number) => {
<<<<<<< HEAD
    const reductions = form.getFieldValue("extraEmissionReductions");

    let totalCreditingYears = form.getFieldValue("totalCreditingYears") || 0;
    if (value && totalCreditingYears < fieldCounts) {
      totalCreditingYears += 1;
    } else if (
      value === null &&
      totalCreditingYears !== 0 &&
      totalCreditingYears >= fieldCounts
    ) {
      totalCreditingYears -= 1;
    }
    form.setFieldValue("totalCreditingYears", totalCreditingYears);

    calculateNetGHGEmissions(value);
    calculateTotalEmissions(
      value,
      "baselineEmissionReductions",
      "totalBaselineEmissionReductions"
    );
    calculateTotalEmissions(
      value,
      "projectEmissionReductions",
      "totalProjectEmissionReductions"
    );
    calculateTotalEmissions(
      value,
      "leakageEmissionReductions",
      "totalLeakageEmissionReductions"
    );
=======
    const reductions = form.getFieldValue('extraEmissionReductions');

    let totalCreditingYears = form.getFieldValue('totalCreditingYears') || 0;
    console.log('-------t, f---------', totalCreditingYears, fieldCounts);
    if (value && totalCreditingYears < fieldCounts) {
      totalCreditingYears += 1;
    } else if (value === null && totalCreditingYears !== 0 && totalCreditingYears >= fieldCounts) {
      totalCreditingYears -= 1;
    }
    form.setFieldValue('totalCreditingYears', totalCreditingYears);

    calculateNetGHGEmissions(value);
    calculateTotalEmissions(value, 'baselineEmissionReductions', 'totalBaselineEmissionReductions');
    calculateTotalEmissions(value, 'projectEmissionReductions', 'totalProjectEmissionReductions');
    calculateTotalEmissions(value, 'leakageEmissionReductions', 'totalLeakageEmissionReductions');
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  };

  const onFinish = async (values: any) => {
    const tempValues: any = {
      calcEmissionReductions: {
        ce_baselineEmission: values?.ce_baselineEmission,
<<<<<<< HEAD
        ce_documentUpload: await fileUploadValueExtract(
          values,
          "ce_documentUpload"
        ),
=======
        ce_documentUpload: await fileUploadValueExtract(values, 'ce_documentUpload'),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        ce_projectEmissions: values?.ce_projectEmissions,
        ce_leakage: values?.ce_leakage,

        netGHGEmissionReductions: (function () {
          const tempGHG: any = {
            description: values?.netGHGEmissionReductionsAndRemovals,
          };

          const tempYearlyReductions: any = [];

          const firstReduction = {
<<<<<<< HEAD
            vintage: moment({
              year: moment(values?.vintage).year(),
              month: 1,
              day: 1,
            })
              .startOf("day")
              .valueOf(),
            baselineEmissionReductions: Number(
              values?.baselineEmissionReductions
            ),
            projectEmissionReductions: Number(
              values?.projectEmissionReductions
            ),
            leakageEmissionReductions: Number(
              values?.leakageEmissionReductions
            ),
=======
            vintage: moment(values?.vintage).startOf('year').valueOf(),
            baselineEmissionReductions: Number(values?.baselineEmissionReductions),
            projectEmissionReductions: Number(values?.projectEmissionReductions),
            leakageEmissionReductions: Number(values?.leakageEmissionReductions),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            netEmissionReductions: Number(values?.netEmissionReductions),
          };

          tempYearlyReductions.push(firstReduction);

          if (values?.extraEmissionReductions) {
            values.extraEmissionReductions.forEach((item: any) => {
              const tempObj = {
<<<<<<< HEAD
                vintage: moment({
                  year: moment(item?.vintage).year(),
                  month: 1,
                  day: 1,
                })
                  .startOf("day")
                  .valueOf(),
                baselineEmissionReductions: Number(
                  item?.baselineEmissionReductions
                ),
                projectEmissionReductions: Number(
                  item?.projectEmissionReductions
                ),
                leakageEmissionReductions: Number(
                  item?.leakageEmissionReductions
                ),
=======
                vintage: moment(item?.vintage).startOf('year').valueOf(),
                baselineEmissionReductions: Number(item?.baselineEmissionReductions),
                projectEmissionReductions: Number(item?.projectEmissionReductions),
                leakageEmissionReductions: Number(item?.leakageEmissionReductions),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                netEmissionReductions: Number(item?.netEmissionReductions),
              };

              tempYearlyReductions.push(tempObj);
            });
          }
          tempGHG.yearlyGHGEmissionReductions = tempYearlyReductions;
<<<<<<< HEAD
          tempGHG.totalBaselineEmissionReductions = Number(
            values?.totalBaselineEmissionReductions
          );
          tempGHG.totalProjectEmissionReductions = Number(
            values?.totalProjectEmissionReductions
          );
          tempGHG.totalLeakageEmissionReductions = Number(
            values?.totalLeakageEmissionReductions
          );
          tempGHG.totalNetEmissionReductions = Number(
            values?.totalNetEmissionReductions
          );
          tempGHG.totalNumberOfCreditingYears = Number(
            values?.totalCreditingYears
          );
          tempGHG.avgBaselineEmissionReductions = Number(
            values?.avgBaselineEmissionReductions
          );
          tempGHG.avgProjectEmissionReductions = Number(
            values?.avgProjectEmissionReductions
          );
          tempGHG.avgLeakageEmissionReductions = Number(
            values?.avgLeakageEmissionReductions
          );
          tempGHG.avgNetEmissionReductions = Number(
            values?.avgNetEmissionReductions
          );
=======
          tempGHG.totalBaselineEmissionReductions = Number(values?.totalBaselineEmissionReductions);
          tempGHG.totalProjectEmissionReductions = Number(values?.totalProjectEmissionReductions);
          tempGHG.totalLeakageEmissionReductions = Number(values?.totalLeakageEmissionReductions);
          tempGHG.totalNetEmissionReductions = Number(values?.totalNetEmissionReductions);
          tempGHG.totalNumberOfCreditingYears = Number(values?.totalCreditingYears);
          tempGHG.avgBaselineEmissionReductions = Number(values?.avgBaselineEmissionReductions);
          tempGHG.avgProjectEmissionReductions = Number(values?.avgProjectEmissionReductions);
          tempGHG.avgLeakageEmissionReductions = Number(values?.avgLeakageEmissionReductions);
          tempGHG.avgNetEmissionReductions = Number(values?.avgNetEmissionReductions);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

          return tempGHG;
        })(),

        item: values?.item,
        valueApplied: values?.valueApplied,
        actualValues: values?.actualValues,
        ce_remarks: values?.ce_remarks,
      },
    };
    handleValuesUpdate(tempValues);
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
              // disabled={disableFields}
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
                      label={`${t("monitoringReport:ce_baselineEmission")}`}
=======
                      label={`${t('monitoringReport:ce_baselineEmission')}`}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="ce_baselineEmission"
                      rules={[
                        {
                          required: true,
<<<<<<< HEAD
                          message: `${t(
                            "monitoringReport:ce_baselineEmission"
                          )} ${t("isRequired")}`,
=======
                          message: `${t('monitoringReport:ce_baselineEmission')} ${t(
                            'isRequired'
                          )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        },
                      ]}
                    >
                      <TextArea rows={4} disabled={disableFields} />
                    </Form.Item>

                    {/* <Form.Item name="q_baselineEmission2">
                      <TextArea rows={4} disabled={true} />
                    </Form.Item> */}

                    <div className="custom-label-monitoring">
<<<<<<< HEAD
                      {t("monitoringReport:ce_documentUpload")}
=======
                      {t('monitoringReport:ce_documentUpload')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                    </div>
                    <Form.Item
                      //label={t('monitoringReport:ce_documentUpload')}
                      name="ce_documentUpload"
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
                        className="design-upload-section-monitoring"
                        name="design"
                        action="/upload.do"
                        listType="picture"
                        multiple={false}
                        // maxCount={1}
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

                    <Form.Item
<<<<<<< HEAD
                      label={`${t("monitoringReport:ce_projectEmissions")}`}
=======
                      label={`${t('monitoringReport:ce_projectEmissions')}`}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="ce_projectEmissions"
                      rules={[
                        {
                          required: true,
<<<<<<< HEAD
                          message: `${t(
                            "monitoringReport:ce_projectEmissions"
                          )} ${t("isRequired")}`,
=======
                          message: `${t('monitoringReport:ce_projectEmissions')} ${t(
                            'isRequired'
                          )}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        },
                      ]}
                    >
                      <TextArea rows={4} disabled={disableFields} />
                    </Form.Item>

                    <Form.Item
<<<<<<< HEAD
                      label={`${t("monitoringReport:ce_leakage")}`}
=======
                      label={`${t('monitoringReport:ce_leakage')}`}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="ce_leakage"
                      rules={[
                        {
                          required: true,
<<<<<<< HEAD
                          message: `${t("monitoringReport:ce_leakage")} ${t(
                            "isRequired"
                          )}`,
=======
                          message: `${t('monitoringReport:ce_leakage')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        },
                      ]}
                    >
                      <TextArea rows={4} disabled={disableFields} />
                    </Form.Item>

                    <>
                      <h3 className="form-section-title">
<<<<<<< HEAD
                        {`${t(
                          "monitoringReport:ce_estimatedEmissionReduction"
                        )}`}
=======
                        {`${t('monitoringReport:ce_estimatedEmissionReduction')}`}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      </h3>

                      {/* need to update this */}
                      <>
                        <>
                          <div className="estimated-emmissions-table-form">
<<<<<<< HEAD
                            <Row className="header" justify={"space-between"}>
=======
                            <Row className="header" justify={'space-between'}>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              <Col md={6} xl={6}>
                                Year
                              </Col>
                              <Col md={3} xl={3}>
                                Estimated Baseline Emissions Or Removals (tCO₂e)
                              </Col>
                              <Col md={3} xl={3}>
                                Estimated Project Emissions Or Removals (tCO₂e)
                              </Col>
                              <Col md={3} xl={3}>
                                Estimated Leakage Emissions (tCO₂e)
                              </Col>
                              <Col md={3} xl={3}>
<<<<<<< HEAD
                                Estimated Net GHG Emission Reductions Or
                                Removals (tCO₂e)
                              </Col>
                              <Col md={2} xl={2}>
                                {" "}
                              </Col>
                            </Row>

                            <Row justify={"space-between"} align={"middle"}>
=======
                                Estimated Net GHG Emission Reductions Or Removals (tCO₂e)
                              </Col>
                              <Col md={2} xl={2}>
                                {' '}
                              </Col>
                            </Row>

                            <Row justify={'space-between'} align={'middle'}>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              <Col md={6} xl={6} className="col1">
                                <Form.Item
                                  label={``}
                                  name="vintage"
                                  className="datepicker"
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
                                            `${t("monitoringReport:required")}`
                                          );
=======
                                          throw new Error(`${t('monitoringReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }
                                      },
                                    },
                                  ]}
                                >
                                  <DatePicker
                                    size="middle"
                                    placeholder="Year"
                                    picker="year"
                                    format="YYYY"
<<<<<<< HEAD
                                    onChange={(value) =>
                                      onPeriodChange(value, 1)
                                    }
=======
                                    onChange={(value) => onPeriodChange(value, 1)}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    disabled={disableFields}
                                    disabledDate={(currentDate: any) => {
                                      return disableYears(
                                        currentDate,
                                        form,
<<<<<<< HEAD
                                        "extraEmissionReductions",
=======
                                        'extraEmissionReductions',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        true
                                      );
                                    }}
                                    // disabledDate={(currentDate: any) => currentDate < moment().startOf('day')}
                                  />
                                </Form.Item>
                              </Col>
                              <Col md={3} xl={3}>
                                <Form.Item
                                  name="baselineEmissionReductions"
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
                                            `${t("monitoringReport:required")}`
                                          );
                                        } else if (isNaN(value)) {
                                          return Promise.reject(
                                            new Error("Should be a number")
                                          );
                                        } else if (Number(value) < 0) {
                                          return Promise.reject(
                                            new Error(
                                              `${t(
                                                "monitoringReport:ce_shouldHavePositive"
                                              )}`
=======
                                          throw new Error(`${t('monitoringReport:required')}`);
                                        } else if (isNaN(value)) {
                                          return Promise.reject(new Error('Should be a number'));
                                        } else if (Number(value) < 0) {
                                          return Promise.reject(
                                            new Error(
                                              `${t('monitoringReport:ce_shouldHavePositive')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                            )
                                          );
                                        }

                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input
                                    type="number"
                                    disabled={disableFields}
                                    onChange={(value) => {
                                      calculateNetGHGEmissions(value);
                                      calculateTotalEmissions(
                                        value,
<<<<<<< HEAD
                                        "baselineEmissionReductions",
                                        "totalBaselineEmissionReductions"
=======
                                        'baselineEmissionReductions',
                                        'totalBaselineEmissionReductions'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                      );
                                    }}
                                    step="1"
                                    onKeyDown={(e) =>
<<<<<<< HEAD
                                      (e.key === "." || e.key === ",") &&
                                      e.preventDefault()
=======
                                      (e.key === '.' || e.key === ',') && e.preventDefault()
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    }
                                  />
                                </Form.Item>
                              </Col>
                              <Col md={3} xl={3}>
                                <Form.Item
                                  name="projectEmissionReductions"
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
                                            `${t("monitoringReport:required")}`
                                          );
                                        } else if (isNaN(value)) {
                                          return Promise.reject(
                                            new Error("Should be a number")
                                          );
                                        } else if (Number(value) < 0) {
                                          return Promise.reject(
                                            new Error(
                                              `${t(
                                                "monitoringReport:ce_shouldHavePositive"
                                              )}`
=======
                                          throw new Error(`${t('monitoringReport:required')}`);
                                        } else if (isNaN(value)) {
                                          return Promise.reject(new Error('Should be a number'));
                                        } else if (Number(value) < 0) {
                                          return Promise.reject(
                                            new Error(
                                              `${t('monitoringReport:ce_shouldHavePositive')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                            )
                                          );
                                        }

                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input
                                    type="number"
                                    disabled={disableFields}
                                    onChange={(value) => {
                                      calculateNetGHGEmissions(value);
                                      calculateTotalEmissions(
                                        value,
<<<<<<< HEAD
                                        "projectEmissionReductions",
                                        "totalProjectEmissionReductions"
=======
                                        'projectEmissionReductions',
                                        'totalProjectEmissionReductions'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                      );
                                    }}
                                    step="1"
                                    onKeyDown={(e) =>
<<<<<<< HEAD
                                      (e.key === "." || e.key === ",") &&
                                      e.preventDefault()
=======
                                      (e.key === '.' || e.key === ',') && e.preventDefault()
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    }
                                  />
                                </Form.Item>
                              </Col>
                              <Col md={3} xl={3}>
                                <Form.Item
                                  name="leakageEmissionReductions"
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
                                            `${t("monitoringReport:required")}`
                                          );
                                        } else if (isNaN(value)) {
                                          return Promise.reject(
                                            new Error("Should be a number")
                                          );
                                        } else if (Number(value) < 0) {
                                          return Promise.reject(
                                            new Error(
                                              `${t(
                                                "monitoringReport:ce_shouldHavePositive"
                                              )}`
=======
                                          throw new Error(`${t('monitoringReport:required')}`);
                                        } else if (isNaN(value)) {
                                          return Promise.reject(new Error('Should be a number'));
                                        } else if (Number(value) < 0) {
                                          return Promise.reject(
                                            new Error(
                                              `${t('monitoringReport:ce_shouldHavePositive')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                            )
                                          );
                                        }

                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input
                                    type="number"
                                    disabled={disableFields}
                                    onChange={(value) => {
                                      calculateNetGHGEmissions(value);
                                      calculateTotalEmissions(
                                        value,
<<<<<<< HEAD
                                        "leakageEmissionReductions",
                                        "totalLeakageEmissionReductions"
=======
                                        'leakageEmissionReductions',
                                        'totalLeakageEmissionReductions'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                      );
                                    }}
                                    step="1"
                                    onKeyDown={(e) =>
<<<<<<< HEAD
                                      (e.key === "." || e.key === ",") &&
                                      e.preventDefault()
=======
                                      (e.key === '.' || e.key === ',') && e.preventDefault()
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    }
                                  />
                                </Form.Item>
                              </Col>
                              <Col md={3} xl={3}>
                                <Form.Item
                                  name="netEmissionReductions"
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
                                            `${t("monitoringReport:required")}`
                                          );
                                        } else if (isNaN(value)) {
                                          return Promise.reject(
                                            new Error("Should be a number")
                                          );
                                        } else if (Number(value) < 0) {
                                          return Promise.reject(
                                            new Error(
                                              `${t(
                                                "monitoringReport:ce_shouldHavePositive"
                                              )}`
=======
                                          throw new Error(`${t('monitoringReport:required')}`);
                                        } else if (isNaN(value)) {
                                          return Promise.reject(new Error('Should be a number'));
                                        } else if (Number(value) < 0) {
                                          return Promise.reject(
                                            new Error(
                                              `${t('monitoringReport:ce_shouldHavePositive')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                            )
                                          );
                                        }

                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input
                                    type="number"
<<<<<<< HEAD
                                    onChange={(value) =>
                                      calculateNetGHGEmissions(value)
                                    }
=======
                                    onChange={(value) => calculateNetGHGEmissions(value)}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    disabled
                                  />
                                </Form.Item>
                              </Col>
                              <Col md={2} xl={2}>
<<<<<<< HEAD
                                {" "}
=======
                                {' '}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              </Col>
                            </Row>

                            <Form.List name="extraEmissionReductions">
                              {(fields, { add, remove }) => (
                                <>
                                  {fields.map(({ key, name, ...restField }) => (
                                    <>
<<<<<<< HEAD
                                      <Row
                                        justify={"space-between"}
                                        align={"middle"}
                                      >
                                        <Col md={6} xl={6} className="col1">
                                          <Form.Item
                                            label={``}
                                            name={[name, "vintage"]}
=======
                                      <Row justify={'space-between'} align={'middle'}>
                                        <Col md={6} xl={6} className="col1">
                                          <Form.Item
                                            label={``}
                                            name={[name, 'vintage']}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                            className="datepicker"
                                            rules={[
                                              {
                                                required: true,
<<<<<<< HEAD
                                                message: "",
                                              },
                                              {
                                                validator: async (
                                                  rule,
                                                  value
                                                ) => {
                                                  if (
                                                    String(value).trim() ===
                                                      "" ||
                                                    String(value).trim() ===
                                                      undefined ||
=======
                                                message: '',
                                              },
                                              {
                                                validator: async (rule, value) => {
                                                  if (
                                                    String(value).trim() === '' ||
                                                    String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                    value === null ||
                                                    value === undefined
                                                  ) {
                                                    throw new Error(
<<<<<<< HEAD
                                                      `${t(
                                                        "monitoringReport:required"
                                                      )}`
=======
                                                      `${t('monitoringReport:required')}`
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                    );
                                                  }
                                                },
                                              },
                                            ]}
                                          >
                                            <DatePicker
                                              size="middle"
                                              disabled={disableFields}
                                              placeholder="Year"
                                              picker="year"
                                              format="YYYY"
                                              onChange={(value: any) => {
<<<<<<< HEAD
                                                onPeriodChange(
                                                  value,
                                                  fields?.length + 1
                                                );
                                              }}
                                              disabledDate={(
                                                currentDate: any
                                              ) => {
                                                return disableYears(
                                                  currentDate,
                                                  form,
                                                  "extraEmissionReductions",
=======
                                                onPeriodChange(value, fields?.length + 1);
                                              }}
                                              disabledDate={(currentDate: any) => {
                                                return disableYears(
                                                  currentDate,
                                                  form,
                                                  'extraEmissionReductions',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                  true
                                                );
                                              }}
                                            />
                                          </Form.Item>
                                        </Col>
                                        <Col md={3} xl={3}>
                                          <Form.Item
<<<<<<< HEAD
                                            name={[
                                              name,
                                              "baselineEmissionReductions",
                                            ]}
=======
                                            name={[name, 'baselineEmissionReductions']}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                            rules={[
                                              {
                                                required: true,
                                                message: ``,
                                              },
                                              {
<<<<<<< HEAD
                                                validator: async (
                                                  rule,
                                                  value
                                                ) => {
                                                  if (
                                                    String(value).trim() ===
                                                      "" ||
                                                    String(value).trim() ===
                                                      undefined ||
=======
                                                validator: async (rule, value) => {
                                                  if (
                                                    String(value).trim() === '' ||
                                                    String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                    value === null ||
                                                    value === undefined
                                                  ) {
                                                    throw new Error(
<<<<<<< HEAD
                                                      `${t(
                                                        "monitoringReport:required"
                                                      )}`
                                                    );
                                                  } else if (isNaN(value)) {
                                                    return Promise.reject(
                                                      new Error(
                                                        "Should be a number"
                                                      )
                                                    );
                                                  } else if (
                                                    Number(value) < 0
                                                  ) {
                                                    return Promise.reject(
                                                      new Error(
                                                        `${t(
                                                          "monitoringReport:ce_shouldHavePositive"
=======
                                                      `${t('monitoringReport:required')}`
                                                    );
                                                  } else if (isNaN(value)) {
                                                    return Promise.reject(
                                                      new Error('Should be a number')
                                                    );
                                                  } else if (Number(value) < 0) {
                                                    return Promise.reject(
                                                      new Error(
                                                        `${t(
                                                          'monitoringReport:ce_shouldHavePositive'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                        )}`
                                                      )
                                                    );
                                                  }

                                                  return Promise.resolve();
                                                },
                                              },
                                            ]}
                                          >
                                            <Input
                                              type="number"
                                              disabled={disableFields}
                                              onChange={(value) => {
<<<<<<< HEAD
                                                calculateNetGHGEmissions(
                                                  value,
                                                  name
                                                );
                                                calculateTotalEmissions(
                                                  value,
                                                  "baselineEmissionReductions",
                                                  "totalBaselineEmissionReductions"
=======
                                                calculateNetGHGEmissions(value, name);
                                                calculateTotalEmissions(
                                                  value,
                                                  'baselineEmissionReductions',
                                                  'totalBaselineEmissionReductions'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                );
                                              }}
                                              step="1"
                                              onKeyDown={(e) =>
<<<<<<< HEAD
                                                (e.key === "." ||
                                                  e.key === ",") &&
=======
                                                (e.key === '.' || e.key === ',') &&
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                e.preventDefault()
                                              }
                                            />
                                          </Form.Item>
                                        </Col>
                                        <Col md={3} xl={3}>
                                          <Form.Item
<<<<<<< HEAD
                                            name={[
                                              name,
                                              "projectEmissionReductions",
                                            ]}
=======
                                            name={[name, 'projectEmissionReductions']}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                            rules={[
                                              {
                                                required: true,
                                                message: ``,
                                              },
                                              {
<<<<<<< HEAD
                                                validator: async (
                                                  rule,
                                                  value
                                                ) => {
                                                  if (
                                                    String(value).trim() ===
                                                      "" ||
                                                    String(value).trim() ===
                                                      undefined ||
=======
                                                validator: async (rule, value) => {
                                                  if (
                                                    String(value).trim() === '' ||
                                                    String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                    value === null ||
                                                    value === undefined
                                                  ) {
                                                    throw new Error(
<<<<<<< HEAD
                                                      `${t(
                                                        "monitoringReport:required"
                                                      )}`
                                                    );
                                                  } else if (isNaN(value)) {
                                                    return Promise.reject(
                                                      new Error(
                                                        "Should be a number"
                                                      )
                                                    );
                                                  } else if (
                                                    Number(value) < 0
                                                  ) {
                                                    return Promise.reject(
                                                      new Error(
                                                        `${t(
                                                          "monitoringReport:ce_shouldHavePositive"
=======
                                                      `${t('monitoringReport:required')}`
                                                    );
                                                  } else if (isNaN(value)) {
                                                    return Promise.reject(
                                                      new Error('Should be a number')
                                                    );
                                                  } else if (Number(value) < 0) {
                                                    return Promise.reject(
                                                      new Error(
                                                        `${t(
                                                          'monitoringReport:ce_shouldHavePositive'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                        )}`
                                                      )
                                                    );
                                                  }

                                                  return Promise.resolve();
                                                },
                                              },
                                            ]}
                                          >
                                            <Input
                                              type="number"
                                              disabled={disableFields}
                                              onChange={(value) => {
<<<<<<< HEAD
                                                calculateNetGHGEmissions(
                                                  value,
                                                  name
                                                );
                                                calculateTotalEmissions(
                                                  value,
                                                  "projectEmissionReductions",
                                                  "totalProjectEmissionReductions"
=======
                                                calculateNetGHGEmissions(value, name);
                                                calculateTotalEmissions(
                                                  value,
                                                  'projectEmissionReductions',
                                                  'totalProjectEmissionReductions'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                );
                                              }}
                                              step="1"
                                              onKeyDown={(e) =>
<<<<<<< HEAD
                                                (e.key === "." ||
                                                  e.key === ",") &&
=======
                                                (e.key === '.' || e.key === ',') &&
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                e.preventDefault()
                                              }
                                            />
                                          </Form.Item>
                                        </Col>
                                        <Col md={3} xl={3}>
                                          <Form.Item
<<<<<<< HEAD
                                            name={[
                                              name,
                                              "leakageEmissionReductions",
                                            ]}
=======
                                            name={[name, 'leakageEmissionReductions']}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                            rules={[
                                              {
                                                required: true,
                                                message: ``,
                                              },
                                              {
<<<<<<< HEAD
                                                validator: async (
                                                  rule,
                                                  value
                                                ) => {
                                                  if (
                                                    String(value).trim() ===
                                                      "" ||
                                                    String(value).trim() ===
                                                      undefined ||
=======
                                                validator: async (rule, value) => {
                                                  if (
                                                    String(value).trim() === '' ||
                                                    String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                    value === null ||
                                                    value === undefined
                                                  ) {
                                                    throw new Error(
<<<<<<< HEAD
                                                      `${t(
                                                        "monitoringReport:required"
                                                      )}`
                                                    );
                                                  } else if (isNaN(value)) {
                                                    return Promise.reject(
                                                      new Error(
                                                        "Should be a number"
                                                      )
                                                    );
                                                  } else if (
                                                    Number(value) < 0
                                                  ) {
                                                    return Promise.reject(
                                                      new Error(
                                                        `${t(
                                                          "monitoringReport:ce_shouldHavePositive"
=======
                                                      `${t('monitoringReport:required')}`
                                                    );
                                                  } else if (isNaN(value)) {
                                                    return Promise.reject(
                                                      new Error('Should be a number')
                                                    );
                                                  } else if (Number(value) < 0) {
                                                    return Promise.reject(
                                                      new Error(
                                                        `${t(
                                                          'monitoringReport:ce_shouldHavePositive'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                        )}`
                                                      )
                                                    );
                                                  }

                                                  return Promise.resolve();
                                                },
                                              },
                                            ]}
                                          >
                                            <Input
                                              type="number"
                                              disabled={disableFields}
                                              onChange={(value) => {
<<<<<<< HEAD
                                                calculateNetGHGEmissions(
                                                  value,
                                                  name
                                                );
                                                calculateTotalEmissions(
                                                  value,
                                                  "leakageEmissionReductions",
                                                  "totalLeakageEmissionReductions"
=======
                                                calculateNetGHGEmissions(value, name);
                                                calculateTotalEmissions(
                                                  value,
                                                  'leakageEmissionReductions',
                                                  'totalLeakageEmissionReductions'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                );
                                              }}
                                              step="1"
                                              onKeyDown={(e) =>
<<<<<<< HEAD
                                                (e.key === "." ||
                                                  e.key === ",") &&
=======
                                                (e.key === '.' || e.key === ',') &&
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                e.preventDefault()
                                              }
                                            />
                                          </Form.Item>
                                        </Col>
                                        <Col md={3} xl={3}>
                                          <Form.Item
<<<<<<< HEAD
                                            name={[
                                              name,
                                              "netEmissionReductions",
                                            ]}
=======
                                            name={[name, 'netEmissionReductions']}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                            rules={[
                                              {
                                                required: true,
                                                message: ``,
                                              },
                                              {
<<<<<<< HEAD
                                                validator: async (
                                                  rule,
                                                  value
                                                ) => {
                                                  if (
                                                    String(value).trim() ===
                                                      "" ||
                                                    String(value).trim() ===
                                                      undefined ||
=======
                                                validator: async (rule, value) => {
                                                  if (
                                                    String(value).trim() === '' ||
                                                    String(value).trim() === undefined ||
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                    value === null ||
                                                    value === undefined
                                                  ) {
                                                    throw new Error(
<<<<<<< HEAD
                                                      `${t(
                                                        "monitoringReport:required"
                                                      )}`
                                                    );
                                                  } else if (isNaN(value)) {
                                                    return Promise.reject(
                                                      new Error(
                                                        "Should be a number"
                                                      )
                                                    );
                                                  } else if (
                                                    Number(value) < 0
                                                  ) {
                                                    return Promise.reject(
                                                      new Error(
                                                        `${t(
                                                          "monitoringReport:ce_shouldHavePositive"
=======
                                                      `${t('monitoringReport:required')}`
                                                    );
                                                  } else if (isNaN(value)) {
                                                    return Promise.reject(
                                                      new Error('Should be a number')
                                                    );
                                                  } else if (Number(value) < 0) {
                                                    return Promise.reject(
                                                      new Error(
                                                        `${t(
                                                          'monitoringReport:ce_shouldHavePositive'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                        )}`
                                                      )
                                                    );
                                                  }

                                                  return Promise.resolve();
                                                },
                                              },
                                            ]}
                                          >
                                            <Input disabled />
                                          </Form.Item>
                                        </Col>
                                        <Col md={2} xl={2}>
                                          <Form.Item>
                                            <Button
                                              // type="dashed"
                                              onClick={() => {
                                                // reduceTotalCreditingYears()
                                                remove(name);
<<<<<<< HEAD
                                                onPeriodChange(
                                                  null,
                                                  fields?.length + 1
                                                );
                                                calculateTotalEmissions(
                                                  null,
                                                  "projectEmissionReductions",
                                                  "totalProjectEmissionReductions"
                                                );
                                                calculateTotalEmissions(
                                                  null,
                                                  "baselineEmissionReductions",
                                                  "totalBaselineEmissionReductions"
                                                );
                                                calculateTotalEmissions(
                                                  null,
                                                  "leakageEmissionReductions",
                                                  "totalLeakageEmissionReductions"
=======
                                                onPeriodChange(null, fields?.length + 1);
                                                calculateTotalEmissions(
                                                  null,
                                                  'baselineEmissionReductions',
                                                  'totalBaselineEmissionReductions'
                                                );
                                                calculateTotalEmissions(
                                                  null,
                                                  'leakageEmissionReductions',
                                                  'totalLeakageEmissionReductions'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                                );
                                              }}
                                              size="small"
                                              className="addMinusBtn"
                                              icon={<MinusOutlined />}
                                              disabled={disableFields}
                                            >
                                              {/* Add Entity */}
                                            </Button>
                                          </Form.Item>
                                        </Col>
                                      </Row>
                                    </>
                                  ))}

                                  <Form.Item>
                                    <Button
                                      // type="dashed"
                                      onClick={() => {
                                        // reduceTotalCreditingYears()
                                        add();
                                      }}
                                      size="middle"
                                      className="addMinusBtn"
                                      // block
                                      icon={<PlusOutlined />}
                                      disabled={disableFields}
                                    >
                                      {/* Add Entity */}
                                    </Button>
                                  </Form.Item>
                                </>
                              )}
                            </Form.List>

                            {/* Emmissions calculations */}
                            {/* calc Row 1 start */}
<<<<<<< HEAD
                            <Row justify={"space-between"} align={"top"}>
=======
                            <Row justify={'space-between'} align={'top'}>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              <Col md={6} xl={6}>
                                Total
                              </Col>
                              <Col md={3} xl={3} className="total-cols">
                                <Form.Item
                                  name="totalBaselineEmissionReductions"
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
                                            `${t("monitoringReport:required")}`
                                          );
=======
                                          throw new Error(`${t('monitoringReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        // eslint-disable-next-line no-restricted-globals
                                        if (isNaN(value)) {
<<<<<<< HEAD
                                          return Promise.reject(
                                            new Error("Should be a number")
                                          );
=======
                                          return Promise.reject(new Error('Should be a number'));
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input disabled />
                                </Form.Item>
                              </Col>
                              <Col md={3} xl={3} className="total-cols">
                                <Form.Item
                                  name="totalProjectEmissionReductions"
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
                                            `${t("monitoringReport:required")}`
                                          );
=======
                                          throw new Error(`${t('monitoringReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        // eslint-disable-next-line no-restricted-globals
                                        if (isNaN(value)) {
<<<<<<< HEAD
                                          return Promise.reject(
                                            new Error("Should be a number")
                                          );
=======
                                          return Promise.reject(new Error('Should be a number'));
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input disabled />
                                </Form.Item>
                              </Col>
                              <Col md={3} xl={3} className="total-cols">
                                <Form.Item
                                  name="totalLeakageEmissionReductions"
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
                                            `${t("monitoringReport:required")}`
                                          );
=======
                                          throw new Error(`${t('monitoringReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        // eslint-disable-next-line no-restricted-globals
                                        if (isNaN(value)) {
<<<<<<< HEAD
                                          return Promise.reject(
                                            new Error("Should be a number")
                                          );
=======
                                          return Promise.reject(new Error('Should be a number'));
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input disabled />
                                </Form.Item>
                              </Col>
                              <Col md={3} xl={3} className="total-cols">
                                <Form.Item
                                  name="totalNetEmissionReductions"
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
                                            `${t("monitoringReport:required")}`
                                          );
=======
                                          throw new Error(`${t('monitoringReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        // eslint-disable-next-line no-restricted-globals
                                        if (isNaN(value)) {
<<<<<<< HEAD
                                          return Promise.reject(
                                            new Error("Should be a number")
                                          );
=======
                                          return Promise.reject(new Error('Should be a number'));
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input disabled />
                                </Form.Item>
                              </Col>
                              <Col md={2} xl={2}>
<<<<<<< HEAD
                                {" "}
=======
                                {' '}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              </Col>
                            </Row>
                            {/* calc Row 1 end */}

                            {/* calc row 2 start */}
<<<<<<< HEAD
                            <Row justify={"space-between"} align={"top"}>
=======
                            <Row justify={'space-between'} align={'top'}>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              <Col md={6} xl={6}>
                                Total number of crediting years
                              </Col>
                              <Col md={3} xl={3} className="total-cols">
                                <Form.Item
                                  name="totalCreditingYears"
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
                                            `${t("monitoringReport:required")}`
                                          );
=======
                                          throw new Error(`${t('monitoringReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        // eslint-disable-next-line no-restricted-globals
                                        if (isNaN(value)) {
<<<<<<< HEAD
                                          return Promise.reject(
                                            new Error("Should be a number")
                                          );
=======
                                          return Promise.reject(new Error('Should be a number'));
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input disabled />
                                </Form.Item>
                              </Col>
                              <Col md={3} xl={3}>
<<<<<<< HEAD
                                {" "}
                              </Col>
                              <Col md={3} xl={3}>
                                {" "}
                              </Col>
                              <Col md={3} xl={3}>
                                {" "}
                              </Col>
                              <Col md={2} xl={2}>
                                {" "}
=======
                                {' '}
                              </Col>
                              <Col md={3} xl={3}>
                                {' '}
                              </Col>
                              <Col md={3} xl={3}>
                                {' '}
                              </Col>
                              <Col md={2} xl={2}>
                                {' '}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              </Col>
                            </Row>
                            {/* calc row 2 end */}

                            {/* calc row 3 start */}
<<<<<<< HEAD
                            <Row justify={"space-between"} align={"top"}>
=======
                            <Row justify={'space-between'} align={'top'}>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              <Col md={6} xl={6}>
                                Annual average over the crediting period
                              </Col>
                              <Col md={3} xl={3} className="total-cols">
                                <Form.Item
                                  name="avgBaselineEmissionReductions"
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
                                            `${t("monitoringReport:required")}`
                                          );
=======
                                          throw new Error(`${t('monitoringReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        // eslint-disable-next-line no-restricted-globals
                                        if (isNaN(value)) {
<<<<<<< HEAD
                                          return Promise.reject(
                                            new Error("Should be a number")
                                          );
=======
                                          return Promise.reject(new Error('Should be a number'));
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input disabled />
                                </Form.Item>
                              </Col>
                              <Col md={3} xl={3} className="total-cols">
                                <Form.Item
                                  name="avgProjectEmissionReductions"
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
                                            `${t("monitoringReport:required")}`
                                          );
=======
                                          throw new Error(`${t('monitoringReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        // eslint-disable-next-line no-restricted-globals
                                        if (isNaN(value)) {
<<<<<<< HEAD
                                          return Promise.reject(
                                            new Error("Should be a number")
                                          );
=======
                                          return Promise.reject(new Error('Should be a number'));
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input disabled />
                                </Form.Item>
                              </Col>
                              <Col md={3} xl={3} className="total-cols">
                                <Form.Item
                                  name="avgLeakageEmissionReductions"
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
                                            `${t("monitoringReport:required")}`
                                          );
=======
                                          throw new Error(`${t('monitoringReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        // eslint-disable-next-line no-restricted-globals
                                        if (isNaN(value)) {
<<<<<<< HEAD
                                          return Promise.reject(
                                            new Error("Should be a number")
                                          );
=======
                                          return Promise.reject(new Error('Should be a number'));
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input disabled />
                                </Form.Item>
                              </Col>
                              <Col md={3} xl={3} className="total-cols">
                                <Form.Item
                                  name="avgNetEmissionReductions"
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
                                            `${t("monitoringReport:required")}`
                                          );
=======
                                          throw new Error(`${t('monitoringReport:required')}`);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        // eslint-disable-next-line no-restricted-globals
                                        if (isNaN(value)) {
<<<<<<< HEAD
                                          return Promise.reject(
                                            new Error("Should be a number")
                                          );
=======
                                          return Promise.reject(new Error('Should be a number'));
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                        }

                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input disabled />
                                </Form.Item>
                              </Col>
                              <Col md={2} xl={2} className="total-cols">
<<<<<<< HEAD
                                {" "}
=======
                                {' '}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              </Col>
                            </Row>
                            {/* calc row 3 end */}
                          </div>
                        </>
                      </>
                      {/* need to update this */}

                      {/* <Row justify={'space-between'} gutter={[40, 16]}>
                        <Col xl={24} md={24}>
                          <div className="step-form-left-col">
                            <Form.Item
                              name="q_ghgEmission"
                              rules={[
                                {
                                  required: true,
                                  message: `${t(
                                    'monitoringReport:q_emissionRedictionAndRemovals'
                                  )} ${t('isRequired')}`,
                                },
                              ]}
                            >
                              <TextArea
                                rows={4}
                                disabled={disableFields}
                                placeholder="Quantify the net GHG emission reductions and removals, summarizing the key results using the table below. Specify breakdown of GHG emission reductions and removals by annually. 
                                For AFOLU projects, include quantification of the net change in carbon stocks. Also, state the non-permanence risk rating (as determined in the AFOLU non-permanence risk report) and calculate the total number of buffer credits that need to be deposited into the AFOLU pooled buffer account. Attach the non-permanence risk report as either an appendix or a separate document."
                              />
                            </Form.Item>
                          </div>
                        </Col>
                      </Row> */}

                      {/* <NetEmissionReduction
                        form={form}
                        t={t}
                        projectCategory={projectCategory}
                        disableFields={FormMode.VIEW === formMode}
                      ></NetEmissionReduction> */}
                    </>

                    <>
                      <h3 className="form-section-title">
<<<<<<< HEAD
                        {`${t("monitoringReport:ce_comparisonWithPDD")}`}
                      </h3>

                      <Row
                        justify={"space-between"}
                        gutter={[40, 16]}
                        className="form-section"
                      >
                        <Row className="row" gutter={[40, 16]}>
                          <Col xl={8} md={24}>
                            <div className="step-form-left-col">
                              <Form.Item
                                label={t("monitoringReport:item")}
=======
                        {`${t('monitoringReport:ce_comparisonWithPDD')}`}
                      </h3>

                      <Row justify={'space-between'} gutter={[40, 16]} className="form-section">
                        {/* First Row - Labels */}
                        <Row className="row" gutter={[40, 8]} wrap={false}>
                          <Col xl={8} md={24}>
                            <div className="step-form-label">{t('monitoringReport:item')}</div>
                          </Col>
                          <Col xl={8} md={24}>
                            <div className="step-form-label">
                              {t('monitoringReport:valueApplied')}
                            </div>
                          </Col>
                          <Col xl={8} md={24}>
                            <div className="step-form-label">
                              {t('monitoringReport:actualValues')}
                            </div>
                          </Col>
                        </Row>
                        <Row className="row " gutter={[40, 16]} wrap={false}>
                          <Col xl={8} md={24}>
                            <div className="step-form-left-col">
                              <Form.Item
                                //label={t('monitoringReport:item')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="item"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: `${t("monitoringReport:item")} ${t(
                                      "isRequired"
=======
                                    message: `${t('monitoringReport:item')} ${t('isRequired')}`,
                                  },
                                ]}
                              >
                                <Input size="large" disabled={disableFields} />
                              </Form.Item>
                            </div>
                          </Col>

                          <Col xl={8} md={24}>
                            <div className="step-form-right-col">
                              <Form.Item
                                //label={t('monitoringReport:valueApplied')}
                                name="valueApplied"
                                rules={[
                                  {
                                    required: true,
                                    message: `${t('monitoringReport:valueApplied')} ${t(
                                      'isRequired'
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                    )}`,
                                  },
                                ]}
                              >
                                <Input size="large" disabled={disableFields} />
                              </Form.Item>
                            </div>
                          </Col>

                          <Col xl={8} md={24}>
                            <div className="step-form-right-col">
                              <Form.Item
<<<<<<< HEAD
                                label={
    <div style={{ display: 'block', width: '100%' }}>
      {t("monitoringReport:valueApplied")}<span style={{ color: 'red' }}>*</span>
    </div>
  }
                                name="valueApplied"
                                rules={[
                                  {
                                    required: true,
                                    message: `${t(
                                      "monitoringReport:valueApplied"
                                    )} ${t("isRequired")}`,
                                  },
                                ]}
                                className="no-required-mark"
                              >
                                <Input size="large" disabled={disableFields} />
                              </Form.Item>
                            </div>
                          </Col>

                          <Col xl={8} md={24}>
                            <div className="step-form-right-col">
                              <Form.Item
                                 label={
    <div style={{ display: 'block', width: '100%' }}>
      {t("monitoringReport:actualValues")}<span style={{ color: 'red' }}>*</span>
    </div>
  }
=======
                                //label={t('monitoringReport:actualValues')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                                name="actualValues"
                                rules={[
                                  {
                                    required: true,
<<<<<<< HEAD
                                    message: `${t(
                                      "monitoringReport:actualValues"
                                    )} ${t("isRequired")}`,
                                  },
                                ]}
                                className="no-required-mark"
=======
                                    message: `${t('monitoringReport:actualValues')} ${t(
                                      'isRequired'
                                    )}`,
                                  },
                                ]}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                              >
                                <Input size="large" disabled={disableFields} />
                              </Form.Item>
                            </div>
                          </Col>
                        </Row>
                      </Row>
                    </>
                    <Form.Item
<<<<<<< HEAD
                      label={`${t("monitoringReport:ce_remarks")}`}
=======
                      label={`${t('monitoringReport:ce_remarks')}`}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                      name="ce_remarks"
                      rules={[
                        {
                          required: true,
<<<<<<< HEAD
                          message: `${t("monitoringReport:ce_remarks")} ${t(
                            "isRequired"
                          )}`,
=======
                          message: `${t('monitoringReport:ce_remarks')} ${t('isRequired')}`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                        },
                      ]}
                    >
                      <TextArea rows={4} disabled={disableFields} />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
<<<<<<< HEAD
              <Row justify={"end"} className="step-actions-end">
                <Button danger onClick={prev} disabled={false}>
                  {t("monitoringReport:back")}
                </Button>
                {disableFields ? (
                  <Button type="primary" onClick={next}>
                    {t("monitoringReport:next")}
=======
              <Row justify={'end'} className="step-actions-end">
                <Button type="primary" ghost onClick={prev} disabled={false}>
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
// };
