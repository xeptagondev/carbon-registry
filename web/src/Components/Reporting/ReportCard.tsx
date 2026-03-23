<<<<<<< HEAD
import { Button, Col, Row, Table } from "antd";

import "./ReportingComponent.scss";

import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";

import { REPORT_TYPES } from "./reportTypes";

interface IReportCard {
  title: string;

  reportType: REPORT_TYPES;

  host: string;

  year: string | number;

  totalRecords?: number;

  columns: any[];

  data: any[];

  downloadCSV: () => void;

  downloadExcel: () => void;

=======
import { Button, Col, Row, Table } from 'antd';
import './ReportingComponent.scss';
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { ReportTypes } from './reportTypes';

interface IReportCard {
  title: string;
  reportType: ReportTypes;
  host: string;
  year: string | number;
  totalRecords?: number;
  columns: any[];
  data: any[];
  downloadCSV: () => void;
  downloadExcel: () => void;
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  pagination: {
    total: number;
    current: number;
    pageSize: number;
    pageSizeOptions: number[];
  };
<<<<<<< HEAD

  handlePaginationChange: (page: number, pageSize: number, reportType: REPORT_TYPES) => void;
=======
  handlePaginationChange: (page: number, pageSize: number, reportType: ReportTypes) => void;
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
}

const ReportCard = (props: IReportCard) => {
  const {
    title,
    reportType,
    host,
    year,
    columns,
    data,
    downloadCSV,
    downloadExcel,
    handlePaginationChange,
    pagination,
  } = props;

  return (
    <div className="report-card">
<<<<<<< HEAD
      <Row gutter={20} justify={"space-between"} align={"middle"} className="header-row">
=======
      <Row gutter={20} justify={'space-between'} align={'middle'} className="header-row">
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        <Col>
          <p className="title">{title}</p>
        </Col>

        <Col className="export-btns">
          <Button
            className="btn"
            type="primary"
            size="large"
            block
            onClick={() => {
              downloadExcel();
            }}
          >
            Export AS EXCEL <UploadOutlined className="icon" />
          </Button>

          <Button
            className="btn"
            type="primary"
            size="large"
            block
            onClick={() => {
              downloadCSV();
            }}
          >
            Export AS CSV <UploadOutlined className="icon" />
          </Button>
        </Col>
      </Row>

      <div className="info">
        <span>Party: {host}</span>
<<<<<<< HEAD

=======
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        <span>Reported Year: {year}</span>
      </div>

      <div className="table">
        <Table
          dataSource={data}
          columns={columns}
          scroll={{ x: 1000 }}
          pagination={{
            ...pagination,
<<<<<<< HEAD
            style: { textAlign: "center"},
            position: ["bottomLeft"],
            showQuickJumper: true,
            showSizeChanger: true,
          }}
          bordered={true}
          onChange={(value) => {
            handlePaginationChange(value?.current, value?.pageSize, reportType);
=======
            style: {
              textAlign: 'center',
              justifyContent: 'right',
            },
            position: ['bottomRight'],
            showSizeChanger: true,
            showQuickJumper: true,
          }}
          bordered={true}
          onChange={(value) => {
            if (value?.current && value?.pageSize) {
              handlePaginationChange(value?.current, value?.pageSize, reportType);
            }
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          }}
        />
      </div>
    </div>
  );
};

export default ReportCard;
