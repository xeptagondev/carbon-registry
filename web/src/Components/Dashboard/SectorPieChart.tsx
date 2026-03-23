<<<<<<< HEAD:web/src/Components/Dashboard/SectorPieChart.tsx
import { FC } from "react";
import { Row, Skeleton, Tooltip } from "antd";
import { InfoCircle } from "react-bootstrap-icons";
=======
import { FC } from 'react';
import { Row, Skeleton, Tooltip } from 'antd';
import { InfoCircle } from 'react-bootstrap-icons';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f:web/src/Components/SLCFDashboard/SectorPieChart.tsx

export interface ISectorPieChart {
  id: string;
  title: any;
  options: any;
  series: any;
  loading: boolean;
  width: string;
  toolTipText: string;
  Chart: any;
}

export const SectorPieChart: FC<ISectorPieChart> = (props: ISectorPieChart) => {
<<<<<<< HEAD:web/src/Components/Dashboard/SectorPieChart.tsx
  const { id, title, options, series, loading, toolTipText, Chart, width } =
    props;

  console.log("--------------pie chart-----------", series);
=======
  const { id, title, options, series, loading, toolTipText, Chart, width } = props;

  console.log('--------------pie chart-----------', series);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f:web/src/Components/SLCFDashboard/SectorPieChart.tsx

  return (
    <div className="statistics-and-pie-card height-pie-rem">
      {loading ? (
        <div className="margin-top-2">
          <Skeleton active />
          <Skeleton active />
        </div>
      ) : (
        <>
<<<<<<< HEAD:web/src/Components/Dashboard/SectorPieChart.tsx
          <Row
            justify={"space-between"}
            align={"middle"}
            className="pie-charts-top"
          >
            <Row align={"middle"}>
=======
          <Row justify={'space-between'} align={'middle'} className="pie-charts-top">
            <Row align={'middle'}>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f:web/src/Components/SLCFDashboard/SectorPieChart.tsx
              <div className="pie-charts-title">{title}</div>
              <div className="info-container">
                <Tooltip
                  arrowPointAtCenter
                  placement="bottomRight"
                  trigger="hover"
                  title={toolTipText}
                >
                  <InfoCircle color="#000000" size={17} />
                </Tooltip>
              </div>
            </Row>
          </Row>
          <div className="pie-charts-section">
            <Chart
              id={id}
              options={options}
              series={series?.data || []}
              type="donut"
              width={width}
              height="400px"
            />
          </div>
        </>
      )}
    </div>
  );
};
