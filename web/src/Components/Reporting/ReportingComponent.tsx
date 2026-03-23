<<<<<<< HEAD
import { i18n } from "i18next";
import React, { useEffect, useState } from "react";
import "./ReportingComponent.scss";
import { DatePicker, Empty, Row, Select } from "antd";
import moment, { Moment } from "moment";
import ReportCard from "./ReportCard";
import { getActionsReportColumns, getHoldingsReportColumns } from "./reportingColumns";
import { FILE_TYPES, REPORT_TYPES } from "./reportTypes";
import { useConnection } from "../../Context/ConnectionContext/connectionContext";
import { API_PATHS } from "../../Config/apiConfig";
import { Loading } from "../Loading/loading";
=======
import { i18n } from 'i18next';
import React, { useEffect, useState } from 'react';
import './ReportingComponent.scss';
import { DatePicker, Empty, Row, Select } from 'antd';
import moment, { Moment } from 'moment';
import ReportCard from './ReportCard';
import { getActionsReportColumns, getHoldingsReportColumns } from './reportingColumns';
import { FileTypes, ReportTypes } from './reportTypes';
import { useConnection } from '../../Context/ConnectionContext/connectionContext';
import { API_PATHS } from '../../Config/apiConfig';
import { Loading } from '../Loading/loading';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

const ReportingComponent = (props: { translator: i18n }) => {
  const { translator } = props;

  const t = translator.t;

  const { post } = useConnection();

  const [actionsLoading, setActionsLoading] = useState<boolean>(false);
  const [holdingsLoading, setHoldingsLoading] = useState<boolean>(false);

  const [actionsCount, setActionsCount] = useState<number>(0);
  const [holdingsCount, setHoldingsCount] = useState<number>(0);

  const [selectedYearsArr, setSelectedYearsArr] = useState([
<<<<<<< HEAD
    REPORT_TYPES.ACTIONS,
    REPORT_TYPES.HOLDINGS,
  ]);

  const [selectedReports, setSelectedReports] = useState<{
    [REPORT_TYPES.ACTIONS]: boolean;
    [REPORT_TYPES.HOLDINGS]: boolean;
  }>({
    [REPORT_TYPES.ACTIONS]: true,
    [REPORT_TYPES.HOLDINGS]: true,
=======
    ReportTypes.ACTIONS,
    ReportTypes.HOLDINGS,
  ]);

  const [selectedReports, setSelectedReports] = useState<{
    [ReportTypes.ACTIONS]: boolean;
    [ReportTypes.HOLDINGS]: boolean;
  }>({
    [ReportTypes.ACTIONS]: true,
    [ReportTypes.HOLDINGS]: true,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  });

  const [actionsData, setActionsData] = useState<any[]>([]);
  const [holdingsData, setHoldingsData] = useState<any[]>([]);

  const [paginationInfo, setPaginationInfo] = useState<
<<<<<<< HEAD
    Partial<Record<keyof typeof REPORT_TYPES, { page: number; pageSize: number }>>
  >({
    [REPORT_TYPES.ACTIONS]: {
      page: 1,
      pageSize: 10,
    },
    [REPORT_TYPES.HOLDINGS]: {
=======
    Partial<Record<keyof typeof ReportTypes, { page: number; pageSize: number }>>
  >({
    [ReportTypes.ACTIONS]: {
      page: 1,
      pageSize: 10,
    },
    [ReportTypes.HOLDINGS]: {
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      page: 1,
      pageSize: 10,
    },
  });

<<<<<<< HEAD
  const handlePaginationInfoChange = (page: number, pageSize: number, reportType: REPORT_TYPES) => {
=======
  const handlePaginationInfoChange = (page: number, pageSize: number, reportType: ReportTypes) => {
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    setPaginationInfo((prev) => ({
      ...prev,
      [reportType]: {
        page: page,
        pageSize: pageSize,
      },
    }));
  };

  const [selectedYear, setSelectedYear] = useState<Moment>(moment());

  const getActionsReports = async () => {
    try {
      setActionsLoading(true);
      const res = await post(API_PATHS.QUERY_AEF_RECORDS, {
<<<<<<< HEAD
        page: paginationInfo[REPORT_TYPES.ACTIONS]?.page,
        size: paginationInfo[REPORT_TYPES.ACTIONS]?.pageSize,
        filterAnd: [
          {
            key: "actionTime",
            operation: ">",
            value: selectedYear.startOf("year").valueOf(),
          },
          {
            key: "actionTime",
            operation: "<",
            value: selectedYear.endOf("year").valueOf(),
          },
        ],
        sort: {
          key: "createdTime",
          order: "DESC",
        },
      });

      if (res?.statusText === "SUCCESS") {
=======
        page: paginationInfo[ReportTypes.ACTIONS]?.page,
        size: paginationInfo[ReportTypes.ACTIONS]?.pageSize,
        filterAnd: [
          {
            key: 'actionTime',
            operation: '>',
            value: selectedYear.startOf('year').valueOf(),
          },
          {
            key: 'actionTime',
            operation: '<',
            value: selectedYear.endOf('year').valueOf(),
          },
        ],
        sort: {
          key: 'createdTime',
          order: 'DESC',
        },
      });

      if (res?.statusText === 'SUCCESS') {
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        setActionsData(res?.data);
        setActionsCount(res?.response?.data?.total);
      }
    } catch (error: any) {
<<<<<<< HEAD
      console.log("error:", error);
=======
      console.log('error:', error);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    } finally {
      setActionsLoading(false);
    }
  };

  const getHoldingReports = async () => {
    try {
      setHoldingsLoading(true);
      const res = await post(API_PATHS.QUERY_AEF_RECORDS, {
<<<<<<< HEAD
        page: paginationInfo[REPORT_TYPES.HOLDINGS]?.page,
        size: paginationInfo[REPORT_TYPES.HOLDINGS]?.pageSize,
        filterAnd: [
          {
            key: "actionTime",
            operation: ">",
            value: selectedYear.startOf("year").valueOf(),
          },
          {
            key: "actionTime",
            operation: "<",
            value: selectedYear.endOf("year").valueOf(),
          },
          {
            key: "actionType",
            operation: "=",
            value: "authorization",
          },
        ],
        sort: {
          key: "createdTime",
          order: "DESC",
        },
      });

      console.log("---------------res--------------", res);
      if (res?.statusText === "SUCCESS") {
=======
        page: paginationInfo[ReportTypes.HOLDINGS]?.page,
        size: paginationInfo[ReportTypes.HOLDINGS]?.pageSize,
        filterAnd: [
          {
            key: 'actionTime',
            operation: '>',
            value: selectedYear.startOf('year').valueOf(),
          },
          {
            key: 'actionTime',
            operation: '<',
            value: selectedYear.endOf('year').valueOf(),
          },
          {
            key: 'actionType',
            operation: '=',
            value: 'authorization',
          },
        ],
        sort: {
          key: 'createdTime',
          order: 'DESC',
        },
      });

      console.log('---------------res--------------', res);
      if (res?.statusText === 'SUCCESS') {
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        setHoldingsData(res?.data);
        setHoldingsCount(res?.response?.data?.total);
      }
    } catch (error) {
<<<<<<< HEAD
      console.log("error:", error);
=======
      console.log('error:', error);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    } finally {
      setHoldingsLoading(false);
    }
  };

  useEffect(() => {
    getActionsReports();
    getHoldingReports();
  }, [selectedYear, paginationInfo]);

  const checkIfAnyReportIsSelected = () => {
<<<<<<< HEAD
    let isReportSelected = Object.values(selectedReports).some(Boolean);
    console.log("---------isReportSelected---------", isReportSelected);
=======
    const isReportSelected = Object.values(selectedReports).some(Boolean);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    return isReportSelected;
  };

  const downloadActionCSV = async () => {
    try {
      setActionsLoading(true);
      const res = await post(API_PATHS.DOWNLOAD_AEF_RECORDS, {
<<<<<<< HEAD
        reportType: REPORT_TYPES.ACTIONS,
        fileType: FILE_TYPES.csv,
      });

      console.log("--------res--------", res);

      if (res?.statusText === "SUCCESS") {
        const url = res.data.url;
        const a = document.createElement("a");
=======
        reportType: ReportTypes.ACTIONS,
        fileType: FileTypes.csv,
      });

      console.log('--------res--------', res);

      if (res?.statusText === 'SUCCESS') {
        const url = res.data.url;
        const a = document.createElement('a');
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        a.href = url;
        a.download = res.data.outputFileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
<<<<<<< HEAD
      console.log("error:", error);
=======
      console.log('error:', error);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    } finally {
      setActionsLoading(false);
    }
  };

  const downloadActionExcell = async () => {
    try {
      setActionsLoading(true);
      const res = await post(API_PATHS.DOWNLOAD_AEF_RECORDS, {
<<<<<<< HEAD
        reportType: REPORT_TYPES.ACTIONS,
        fileType: FILE_TYPES.xlsx,
      });

      console.log("--------res--------", res);

      if (res?.statusText === "SUCCESS") {
        const url = res.data.url;
        const a = document.createElement("a");
=======
        reportType: ReportTypes.ACTIONS,
        fileType: FileTypes.xlsx,
      });

      console.log('--------res--------', res);

      if (res?.statusText === 'SUCCESS') {
        const url = res.data.url;
        const a = document.createElement('a');
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        a.href = url;
        a.download = res.data.outputFileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
<<<<<<< HEAD
      console.log("error:", error);
=======
      console.log('error:', error);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    } finally {
      setActionsLoading(false);
    }
  };

  const downloadHoldingsCSV = async () => {
    try {
      setHoldingsLoading(true);
      const res = await post(API_PATHS.DOWNLOAD_AEF_RECORDS, {
<<<<<<< HEAD
        reportType: REPORT_TYPES.HOLDINGS,
        fileType: FILE_TYPES.csv,
      });

      console.log("--------res--------", res);

      if (res?.statusText === "SUCCESS") {
        const url = res.data.url;
        const a = document.createElement("a");
=======
        reportType: ReportTypes.HOLDINGS,
        fileType: FileTypes.csv,
      });

      console.log('--------res--------', res);

      if (res?.statusText === 'SUCCESS') {
        const url = res.data.url;
        const a = document.createElement('a');
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        a.href = url;
        a.download = res.data.outputFileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
<<<<<<< HEAD
      console.log("error:", error);
=======
      console.log('error:', error);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    } finally {
      setHoldingsLoading(false);
    }
  };

  const downloadHoldingsExcell = async () => {
    try {
      setHoldingsLoading(true);
      const res = await post(API_PATHS.DOWNLOAD_AEF_RECORDS, {
<<<<<<< HEAD
        reportType: REPORT_TYPES.HOLDINGS,
        fileType: FILE_TYPES.xlsx,
      });

      console.log("--------res--------", res);

      if (res?.statusText === "SUCCESS") {
        const url = res.data.url;
        const a = document.createElement("a");
=======
        reportType: ReportTypes.HOLDINGS,
        fileType: FileTypes.xlsx,
      });

      console.log('--------res--------', res);

      if (res?.statusText === 'SUCCESS') {
        const url = res.data.url;
        const a = document.createElement('a');
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        a.href = url;
        a.download = res.data.outputFileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
<<<<<<< HEAD
      console.log("error:", error);
=======
      console.log('error:', error);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    } finally {
      setHoldingsLoading(false);
    }
  };
  const disabledDate = (current: any) => {
    return current && current.year() < 1970;
  };
  return (
    <div className="reporting-container">
      <div className="title-container">
<<<<<<< HEAD
        <Row justify={"space-between"}>
          <div className="main">{t("reporting:reportsTitle")}</div>
        </Row>
        <Row justify={"end"}>
=======
        <Row justify={'space-between'}>
          <div className="main">{t('reporting:reportsTitle')}</div>
        </Row>
        <Row justify={'end'}>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          <DatePicker
            size="large"
            picker="year"
            allowClear={false}
            value={selectedYear}
            disabledDate={disabledDate}
            onChange={(value: any) => {
<<<<<<< HEAD
              console.log("---------value-----------", value);
=======
              console.log('---------value-----------', value);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
              const date = moment(value).local();
              setSelectedYear(date);
            }}
          />
        </Row>

        <Row className="mg-top-2">
          <Select
            size="large"
            placeholder="Click to select the Reports to display"
<<<<<<< HEAD
            mode={"multiple"}
=======
            mode={'multiple'}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            value={[...selectedYearsArr]}
            className="report-type-selector"
            onSelect={(value) => {
              setSelectedYearsArr((prev) => [...prev, value]);
              setSelectedReports((prev) => ({
                ...prev,
                [value]: true,
              }));
            }}
            onDeselect={(value) => {
              setSelectedYearsArr((prev) => [...prev.filter((item) => item !== value)]);
              setSelectedReports((prev) => ({
                ...prev,
                [value]: false,
              }));
            }}
          >
<<<<<<< HEAD
            {Object.keys(REPORT_TYPES).map((type: keyof typeof REPORT_TYPES) => (
=======
            {Object.keys(ReportTypes).map((type: any) => (
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
              <Select.Option value={type}>{t(`reporting:${String(type)}`)}</Select.Option>
            ))}
          </Select>
        </Row>
      </div>

      {(actionsLoading || holdingsLoading) && <Loading />}

<<<<<<< HEAD
      {selectedReports[REPORT_TYPES.ACTIONS] && (
        <ReportCard
          title={"ACTIONS REPORT"}
          reportType={REPORT_TYPES.ACTIONS}
          host={"Sri Lanka"}
=======
      {selectedReports[ReportTypes.ACTIONS] && (
        <ReportCard
          title={'ACTIONS REPORT'}
          reportType={ReportTypes.ACTIONS}
          host={'Sri Lanka'}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          year={String(selectedYear.year())}
          columns={getActionsReportColumns(t)}
          handlePaginationChange={handlePaginationInfoChange}
          pagination={{
            total: actionsCount,
<<<<<<< HEAD
            current: paginationInfo[REPORT_TYPES.ACTIONS].page || 1,
            pageSize: paginationInfo[REPORT_TYPES.ACTIONS].pageSize || 1,
=======
            current: paginationInfo[ReportTypes.ACTIONS]?.page || 1,
            pageSize: paginationInfo[ReportTypes.ACTIONS]?.pageSize || 1,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            pageSizeOptions: [10, 20, 30],
          }}
          data={actionsData || []}
          downloadCSV={downloadActionCSV}
          downloadExcel={downloadActionExcell}
        />
      )}

<<<<<<< HEAD
      {selectedReports[REPORT_TYPES.HOLDINGS] && (
        <ReportCard
          title={"HOLDINGS REPORT"}
          reportType={REPORT_TYPES.HOLDINGS}
          host={"Sri Lanka"}
=======
      {selectedReports[ReportTypes.HOLDINGS] && (
        <ReportCard
          title={'HOLDINGS REPORT'}
          reportType={ReportTypes.HOLDINGS}
          host={'Sri Lanka'}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          year={String(selectedYear.year())}
          columns={getHoldingsReportColumns(t)}
          handlePaginationChange={handlePaginationInfoChange}
          pagination={{
            total: holdingsCount,
<<<<<<< HEAD
            current: paginationInfo[REPORT_TYPES.HOLDINGS].page || 1,
            pageSize: paginationInfo[REPORT_TYPES.HOLDINGS].pageSize || 1,
=======
            current: paginationInfo[ReportTypes.HOLDINGS]?.page || 1,
            pageSize: paginationInfo[ReportTypes.HOLDINGS]?.pageSize || 1,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            pageSizeOptions: [10, 20, 30],
          }}
          data={holdingsData || []}
          downloadCSV={downloadHoldingsCSV}
          downloadExcel={downloadHoldingsExcell}
        />
      )}

      {!checkIfAnyReportIsSelected() && (
        <div className="no-reports">
          <Empty description={<span className="description">No report found !</span>} />
        </div>
      )}
    </div>
  );
};

export default ReportingComponent;
