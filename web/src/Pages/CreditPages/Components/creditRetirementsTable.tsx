<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-explicit-any */
=======
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
import {
  Checkbox,
  Col,
  Empty,
  Input,
  message,
  PaginationProps,
  Row,
  Table,
  Popover,
  List,
  Typography,
  Tag,
<<<<<<< HEAD
} from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { useConnection } from "../../../Context/ConnectionContext/connectionContext";
import { UserTableDataType } from "../../../Definitions/Definitions/userManagement.definitions";
import { useUserContext } from "../../../Context/UserInformationContext/userInformationContext";
import { API_PATHS } from "../../../Config/apiConfig";
import { ProfileIcon } from "../../../Components/IconComponents/ProfileIcon/profile.icon";
import "../creditPageStyles.scss";
import { CompanyRole } from "../../../Definitions/Enums/company.role.enum";
import { CreditActionType } from "../Enums/creditActionType.enum";
import { ActionResponseType } from "../../../Definitions/Enums/actionResponse.enum";
import * as Icon from "react-bootstrap-icons";
import { CreditActionModal } from "./creditActionModal";
import { ActionResponseModal } from "../../../Components/Models/actionResponseModal";
import { HttpStatusCode } from "axios";
import {
  CreditRetirementProceedAction,
  RetirementActionEnum,
} from "../Enums/creditRetirementProceedType.enum";
import { CreditRetirementInterface } from "../Interfaces/creditRetirement.interface";
import moment from "moment";
import { addCommSep } from "../../../Definitions/Definitions/programme.definitions";
import { Role } from "../../../Definitions/Enums/role.enum";
import { COLOR_CONFIGS } from "../../../Config/colorConfigs";
=======
} from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useConnection } from '../../../Context/ConnectionContext/connectionContext';
import { UserTableDataType } from '../../../Definitions/Definitions/userManagement.definitions';
import { useUserContext } from '../../../Context/UserInformationContext/userInformationContext';
import { API_PATHS } from '../../../Config/apiConfig';
import { ProfileIcon } from '../../../Components/IconComponents/ProfileIcon/profile.icon';
import '../creditPageStyles.scss';
import { CompanyRole } from '../../../Definitions/Enums/company.role.enum';
import { CreditActionType } from '../Enums/creditActionType.enum';
import { ActionResponseType } from '../../../Definitions/Enums/actionResponse.enum';
import * as Icon from 'react-bootstrap-icons';
import { CreditActionModal } from './creditActionModal';
import { ActionResponseModal } from '../../../Components/Models/actionResponseModal';
import { HttpStatusCode } from 'axios';
import {
  CreditRetirementProceedAction,
  RetirementActionEnum,
} from '../Enums/creditRetirementProceedType.enum';
import { CreditRetirementInterface } from '../Interfaces/creditRetirement.interface';
import moment from 'moment';
import { addCommSep } from '../../../Definitions/Definitions/programme.definitions';
import { Role } from '../../../Definitions/Enums/role.enum';
import { COLOR_CONFIGS } from '../../../Config/colorConfigs';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

const { Search } = Input;

enum CrediRetirementsColumns {
<<<<<<< HEAD
  PROJECT_NAME = "projectName",
  ORGANIZATION_NAME = "organizationName",
  SERIAL_NO = "serialNo",
  REFERENCE = "reference",
  DATE = "date",
  CREDITS = "credits",
  STATUS = "status",
  RETIREMENT_TYPE = "retirementType",
  ACTION = "action",
}
enum StatusOptions {
  ACCEPTED = "Completed",
  REJECTED = "Rejected",
  PENDING = "Pending",
  CANCELLED = "Cancelled",
=======
  PROJECT_NAME = 'projectName',
  ORGANIZATION_NAME = 'organizationName',
  SERIAL_NO = 'serialNo',
  REFERENCE = 'reference',
  DATE = 'date',
  CREDITS = 'credits',
  STATUS = 'status',
  RETIREMENT_TYPE = 'retirementType',
  ACTION = 'action',
}
enum StatusOptions {
  ACCEPTED = 'Completed',
  REJECTED = 'Rejected',
  PENDING = 'Pending',
  CANCELLED = 'Cancelled',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case StatusOptions.ACCEPTED:
<<<<<<< HEAD
      return "processing";
    case StatusOptions.REJECTED:
      return "orange";
    case StatusOptions.PENDING:
      return "purple";
    case StatusOptions.CANCELLED:
      return "error";
    default:
      return "default";
=======
      return 'processing';
    case StatusOptions.REJECTED:
      return 'orange';
    case StatusOptions.PENDING:
      return 'purple';
    case StatusOptions.CANCELLED:
      return 'error';
    default:
      return 'default';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  }
};

export const CreditRetirementsTableComponent = (props: any) => {
  const { t } = props;

  const { post } = useConnection();
  const { userInfoState } = useUserContext();
  const isInitialRender = useRef(false);
  const [totalProgramme, setTotalProgramme] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<UserTableDataType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [search, setSearch] = useState<string>();
  const [sortOrder, setSortOrder] = useState<string>();
  const [sortField, setSortField] = useState<string>();
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAllBox, setCheckAllBox] = useState<boolean>(true);
  const checkBoxMenu = Object.keys(StatusOptions).map((k, index) => ({
    label: Object.values(StatusOptions)[index],
    value: Object.values(StatusOptions)[index],
  }));
<<<<<<< HEAD
  const [checkBoxOptions, setCheckBoxOptions] = useState<any[]>(
    checkBoxMenu.map((e) => e.value)
  );
=======
  const [checkBoxOptions, setCheckBoxOptions] = useState<any[]>(checkBoxMenu.map((e) => e.value));
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  const [modalActionVisible, setModalActionVisible] = useState<boolean>(false);
  const [modalActionLoading, setModalActionLoading] = useState<boolean>(false);
  const [modalActionData, setModalActionData] = useState<{
    icon: any;
    title: string;
    type: CreditActionType;
    actionBtnText?: string;
    remarkRequired: boolean;
    proceedAction: CreditRetirementProceedAction;
    data: CreditRetirementInterface;
  }>();
<<<<<<< HEAD
  const [modalResponseVisible, setModalResponseVisible] =
    useState<boolean>(false);

=======
  const [modalResponseVisible, setModalResponseVisible] = useState<boolean>(false);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  const [modalResponseData, setModalResponseData] = useState<{
    type: ActionResponseType;
    icon: any;
    title: string;
    buttonText: string;
  }>();

  const getQueryData = async () => {
    setLoading(true);

    const filter: any[] = [];
    const filterOr: any[] = [];

<<<<<<< HEAD
    if (checkBoxOptions && checkBoxOptions?.length > 0) {
      filter.push({
        key: 'creditTx"."status',
        operation: "in",
=======
    if (checkBoxOptions) {
      filter.push({
        key: 'creditTx"."status',
        operation: 'in',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        value: checkBoxOptions,
      });
    }

<<<<<<< HEAD
    if (search && search.trim() !== "") {
      filter.push({
        key: "projectName",
        operation: "like",
=======
    if (search && search.trim() !== '') {
      filter.push({
        key: 'project"."title',
        operation: 'like',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        value: `%${search.trim()}%`,
      });
    }

    let sort: any;
    if (sortOrder && sortField) {
      sort = {
        key: sortField,
        order: sortOrder,
        nullFirst: false,
      };
    } else {
      sort = {
<<<<<<< HEAD
        key: "createdDate",
        order: "DESC",
=======
        key: 'createdDate',
        order: 'DESC',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      };
    }

    try {
      const response: any = await post(API_PATHS.CREDIT_RETIREMENT_QUERY, {
        page: currentPage,
        size: pageSize,
        filterAnd: filter,
        filterOr: filterOr?.length > 0 ? filterOr : undefined,
        sort: sort,
      });
<<<<<<< HEAD
      if (checkBoxOptions?.length <= 0) {
        setTableData([]);
        setTotalProgramme(0);
        return true;
      }
      setTableData(response?.data ? response.data : []);
      setTotalProgramme(
        response.response?.data?.total ? response.response?.data?.total : 0
      );
      isInitialRender.current = true;
    } catch (error: any) {
      console.log("Error in getting Credit Retirements", error);
      message.open({
        type: "error",
        content: error.message,
        duration: 3,
        style: { textAlign: "right", marginRight: 15, marginTop: 10 },
      });
    } finally {
=======
      setTableData(response?.data ? response.data : []);
      setTotalProgramme(response.response?.data?.total ? response.response?.data?.total : 0);
      setLoading(false);
      isInitialRender.current = true;
    } catch (error: any) {
      console.log('Error in getting Credit Retirements', error);
      message.open({
        type: 'error',
        content: error.message,
        duration: 3,
        style: { textAlign: 'right', marginRight: 15, marginTop: 10 },
      });
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      setLoading(false);
    }
  };

  const actionMenu = (record: CreditRetirementInterface) => {
<<<<<<< HEAD
    return userInfoState?.companyRole ===
      CompanyRole.DESIGNATED_NATIONAL_AUTHORITY ? (
=======
    return userInfoState?.companyRole === CompanyRole.DESIGNATED_NATIONAL_AUTHORITY ? (
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      <List
        className="action-menu"
        size="small"
        dataSource={[
          {
<<<<<<< HEAD
            text: t("accept"),
            icon: <Icon.Clipboard color="#6ACDFFFA" />,
            click: () => {
              setModalActionData({
                icon: (
                  <Icon.Clipboard2Check
                    color={COLOR_CONFIGS.PRIMARY_THEME_COLOR}
                  />
                ),
                title: t("acceptCreditRetireRequest"),
                type: CreditActionType.RETIREMENT,
                actionBtnText: t("proceed"),
=======
            text: t('accept'),
            icon: <Icon.Clipboard color="#6ACDFFFA" />,
            click: () => {
              setModalActionData({
                icon: <Icon.Clipboard2Check color={COLOR_CONFIGS.PRIMARY_THEME_COLOR} />,
                title: t('acceptCreditRetireRequest'),
                type: CreditActionType.RETIREMENT,
                actionBtnText: t('proceed'),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                remarkRequired: false,
                proceedAction: CreditRetirementProceedAction.ACCEPT,
                data: record,
              });
              setModalActionVisible(true);
            },
          },
          {
<<<<<<< HEAD
            text: t("reject"),
=======
            text: t('reject'),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            icon: <Icon.XCircle color="#FF4D4F" />,
            click: () => {
              setModalActionData({
                icon: <Icon.XOctagon color="#ff4d4f" />,
<<<<<<< HEAD
                title: t("areYouSureWantToReject"),
                type: CreditActionType.RETIREMENT,
                actionBtnText: t("reject"),
=======
                title: t('areYouSureWantToReject'),
                type: CreditActionType.RETIREMENT,
                actionBtnText: t('reject'),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                remarkRequired: true,
                proceedAction: CreditRetirementProceedAction.REJECT,
                data: record,
              });
              setModalActionVisible(true);
            },
          },
        ]}
        renderItem={(item: any) => (
          <List.Item onClick={item.click}>
<<<<<<< HEAD
            <Typography.Text className="action-icon color-primary">
              {item.icon}
            </Typography.Text>
=======
            <Typography.Text className="action-icon color-primary">{item.icon}</Typography.Text>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            <span>{item.text}</span>
          </List.Item>
        )}
      />
    ) : (
      <List
        className="action-menu"
        size="small"
        dataSource={[
          {
<<<<<<< HEAD
            text: t("cancel"),
=======
            text: t('cancel'),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            icon: <Icon.XCircle color="#FF4D4F" />,
            click: () => {
              setModalActionData({
                icon: <Icon.XOctagon color="#ff4d4f" />,
<<<<<<< HEAD
                title: t("areYouSureWantToCancel"),
                type: CreditActionType.RETIREMENT,
                actionBtnText: t("proceed"),
=======
                title: t('areYouSureWantToCancel'),
                type: CreditActionType.RETIREMENT,
                actionBtnText: t('proceed'),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                remarkRequired: true,
                proceedAction: CreditRetirementProceedAction.CANCEL,
                data: record,
              });
              setModalActionVisible(true);
            },
          },
        ]}
        renderItem={(item: any) => (
          <List.Item onClick={item.click}>
<<<<<<< HEAD
            <Typography.Text className="action-icon color-primary">
              {item.icon}
            </Typography.Text>
=======
            <Typography.Text className="action-icon color-primary">{item.icon}</Typography.Text>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            <span>{item.text}</span>
          </List.Item>
        )}
      />
    );
  };

  const columns = [
    {
      title: t(CrediRetirementsColumns.REFERENCE),
      key: CrediRetirementsColumns.REFERENCE,
<<<<<<< HEAD
      align: "left" as const,
      render: (item: CreditRetirementInterface) => {
        return <span style={{ marginLeft: "20px" }}>{item?.id}</span>;
=======
      align: 'left' as const,
      render: (item: CreditRetirementInterface) => {
        return <span style={{ marginLeft: '20px' }}>{item?.id}</span>;
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      },
    },
    {
      title: t(CrediRetirementsColumns.PROJECT_NAME),
<<<<<<< HEAD
      key: "projectName",
      sorter: true,
      align: "left" as const,
=======
      key: 'project.title',
      sorter: true,
      align: 'left' as const,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      render: (item: CreditRetirementInterface) => {
        return <span>{item?.projectName}</span>;
      },
    },
    {
      title: t(CrediRetirementsColumns.ORGANIZATION_NAME),
<<<<<<< HEAD
      key: "senderName",
      sorter: true,
      align: "left" as const,
=======
      key: 'sender.name',
      sorter: true,
      align: 'left' as const,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      render: (item: CreditRetirementInterface) => {
        const elements = (
          <Row>
            <ProfileIcon
              icon={item.senderLogo}
<<<<<<< HEAD
              bg={"rgba(185, 226, 244, 0.56)"}
              name={item.senderName}
            />
            <span style={{ marginTop: "6px" }}>{item.senderName}</span>
=======
              bg={'rgba(185, 226, 244, 0.56)'}
              name={item.senderName}
            />
            <span style={{ marginTop: '6px' }}>{item.senderName}</span>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          </Row>
        );
        return <div className="org-list">{elements}</div>;
      },
    },
    {
      title: t(CrediRetirementsColumns.SERIAL_NO),
      key: CrediRetirementsColumns.SERIAL_NO,
<<<<<<< HEAD
      align: "left" as const,
=======
      align: 'left' as const,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      render: (item: CreditRetirementInterface) => {
        return <span>{item?.serialNumber}</span>;
      },
    },
    {
      title: t(CrediRetirementsColumns.DATE),
<<<<<<< HEAD
      key: "createdDate",
      sorter: true,
      align: "left" as const,
      render: (item: CreditRetirementInterface) => {
        return (
          <span>
            {moment(parseInt(String(item?.createdDate))).format(
              "YYYY-MM-DD HH:mm:ss"
            )}
          </span>
=======
      key: 'createdDate',
      sorter: true,
      align: 'left' as const,
      render: (item: CreditRetirementInterface) => {
        return (
          <span>{moment(parseInt(String(item?.createdDate))).format('YYYY-MM-DD HH:mm:ss')}</span>
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        );
      },
    },
    {
      title: t(CrediRetirementsColumns.CREDITS),
      key: CrediRetirementsColumns.CREDITS,
<<<<<<< HEAD
      align: "left" as const,
      render: (item: CreditRetirementInterface) => {
        return (
          <span style={{ marginLeft: "20px" }}>
            {addCommSep(String(item?.creditAmount))}
          </span>
        );
=======
      align: 'left' as const,
      render: (item: CreditRetirementInterface) => {
        return <span style={{ marginLeft: '20px' }}>{addCommSep(String(item?.creditAmount))}</span>;
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      },
    },
    {
      title: t(CrediRetirementsColumns.STATUS),
<<<<<<< HEAD
      key: "status",
      sorter: true,
      align: "center" as const,
=======
      key: 'status',
      sorter: true,
      align: 'center' as const,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      render: (item: CreditRetirementInterface) => {
        return <Tag color={getStatusColor(item.status)}>{item.status}</Tag>;
      },
    },
    {
      title: t(CrediRetirementsColumns.RETIREMENT_TYPE),
<<<<<<< HEAD
      key: "retirementType",
      sorter: true,
      align: "center" as const,
=======
      key: 'retirementType',
      sorter: true,
      align: 'center' as const,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      render: (item: CreditRetirementInterface) => {
        return <span>{item?.retirementType}</span>;
      },
    },
    {
<<<<<<< HEAD
      title: t(""),
      width: 6,
      align: "right" as const,
=======
      title: t(''),
      width: 6,
      align: 'right' as const,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      key: CrediRetirementsColumns.ACTION,
      render: (record: CreditRetirementInterface) => {
        const menu = actionMenu(record);
        return (
          record.status === StatusOptions.PENDING &&
<<<<<<< HEAD
          (userInfoState?.userRole === Role.Admin ||
            userInfoState?.userRole === Role.Root) &&
=======
          (userInfoState?.userRole === Role.Admin || userInfoState?.userRole === Role.Root) &&
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
          menu && (
            <Popover placement="bottomRight" content={menu} trigger="click">
              <EllipsisOutlined
                rotate={90}
<<<<<<< HEAD
                style={{ fontWeight: 600, fontSize: "1rem", cursor: "pointer" }}
=======
                style={{ fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
              />
            </Popover>
          )
        );
      },
    },
  ];

  const onSearch = async (value: string) => {
    if (value) {
      setSearch(value.toLowerCase());
    } else {
<<<<<<< HEAD
      setSearch("");
=======
      setSearch('');
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    }
  };

  const onStatusQuery = async (checkedValues: CheckboxValueType[]) => {
    setCheckBoxOptions(checkedValues as string[]);
<<<<<<< HEAD
    setIndeterminate(
      !!checkedValues.length && checkedValues.length < checkBoxMenu.length
    );
=======
    setIndeterminate(!!checkedValues.length && checkedValues.length < checkBoxMenu.length);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    setCheckAllBox(checkedValues.length === checkBoxMenu.length);
  };

  const onCheckBoxesChange = (e: CheckboxChangeEvent) => {
    const checked = e.target.checked;
    setCheckAllBox(checked);
    setIndeterminate(false);
    if (checked) {
      const allValues = Object.values(StatusOptions);
      setCheckBoxOptions(allValues);
    } else {
      setCheckBoxOptions([]);
    }
  };

<<<<<<< HEAD
  const onPaginationChange: PaginationProps["onChange"] = (page, size) => {
=======
  const onPaginationChange: PaginationProps['onChange'] = (page, size) => {
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    setCurrentPage(page);
    setPageSize(size);
  };

  const onHandleTableChange = (page: any, sorter: any) => {
    setSortOrder(
<<<<<<< HEAD
      sorter.order === "ascend"
        ? "ASC"
        : sorter.order === "descend"
        ? "DESC"
        : undefined
=======
      sorter.order === 'ascend' ? 'ASC' : sorter.order === 'descend' ? 'DESC' : undefined
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    );
    setSortField(sorter.columnKey);
    // setCurrentPage(1);
  };

  useEffect(() => {
    getQueryData();
    isInitialRender.current = true;
  }, []);

  useEffect(() => {
    if (isInitialRender.current) {
      getQueryData();
    }
<<<<<<< HEAD
  }, [currentPage, pageSize, modalActionVisible, modalResponseVisible]);
=======
  }, [currentPage, pageSize]);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

  useEffect(() => {
    if (isInitialRender.current) {
      if (currentPage !== 1) {
        setCurrentPage(1);
      } else {
        getQueryData();
      }
    }
<<<<<<< HEAD
  }, [sortField, sortOrder, search, checkBoxOptions]);
=======
  }, [sortField, sortOrder, search, checkBoxOptions, modalActionVisible, modalResponseVisible]);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  const onFinishAction = async (
    transactionId: any,
    action: RetirementActionEnum,
    remark?: string
  ) => {
    try {
      setModalActionLoading(true);

      const response = await post(API_PATHS.CREDIT_RETIREMENT_PERFROM, {
        transactionId: transactionId,
        action: action,
        remarks: remark,
      });

      if (response.status === HttpStatusCode.Created) {
        setModalResponseData({
          type:
            action === RetirementActionEnum.ACCEPT
              ? ActionResponseType.SUCCESS
              : action === RetirementActionEnum.REJECT
              ? ActionResponseType.PROCESSSED
              : ActionResponseType.PROCESSSED,
          icon:
            action === RetirementActionEnum.ACCEPT ? (
              <Icon.CheckCircle color={COLOR_CONFIGS.SUCCESS_RESPONSE_COLOR} />
            ) : action === RetirementActionEnum.REJECT ? (
<<<<<<< HEAD
              <Icon.CheckCircle
                color={COLOR_CONFIGS.PROCESSED_RESPONSE_COLOR}
              />
            ) : (
              <Icon.CheckCircle
                color={COLOR_CONFIGS.PROCESSED_RESPONSE_COLOR}
              />
            ),
          title: t(
            action === RetirementActionEnum.ACCEPT
              ? "creditRetireAcceptedSuccessfully"
              : action === RetirementActionEnum.REJECT
              ? "creditRetireRejectedSuccessfully"
              : "creditRetireCancelledSuccessfully"
          ),
          buttonText: t("okay"),
=======
              <Icon.CheckCircle color={COLOR_CONFIGS.PROCESSED_RESPONSE_COLOR} />
            ) : (
              <Icon.CheckCircle color={COLOR_CONFIGS.PROCESSED_RESPONSE_COLOR} />
            ),
          title: t(
            action === RetirementActionEnum.ACCEPT
              ? 'creditRetireAcceptedSuccessfully'
              : action === RetirementActionEnum.REJECT
              ? 'creditRetireRejectedSuccessfully'
              : 'creditRetireCancelledSuccessfully'
          ),
          buttonText: t('okay'),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        });
      } else {
        setModalResponseData({
          type: ActionResponseType.FAILED,
<<<<<<< HEAD
          icon: (
            <Icon.ExclamationCircle
              color={COLOR_CONFIGS.FAILED_RESPONSE_COLOR}
            />
          ),
          title: t("creditRetirementSubmittedFailed"),
          buttonText: t("okay"),
        });
      }
    } catch (error: any) {
      // message.error(error.message || t("somethingWentWrong"));
      setModalResponseData({
        type: ActionResponseType.FAILED,
        icon: (
          <Icon.ExclamationCircle color={COLOR_CONFIGS.FAILED_RESPONSE_COLOR} />
        ),
        title: error.message || t("somethingWentWrong"),
        buttonText: t("okay"),
=======
          icon: <Icon.ExclamationCircle color={COLOR_CONFIGS.FAILED_RESPONSE_COLOR} />,
          title: t('creditRetirementSubmittedFailed'),
          buttonText: t('okay'),
        });
      }
    } catch (error: any) {
      // message.error(error.message || t('somethingWentWrong'));
      setModalResponseData({
        type: ActionResponseType.FAILED,
        icon: <Icon.ExclamationCircle color={COLOR_CONFIGS.FAILED_RESPONSE_COLOR} />,
        title: error.message || t('somethingWentWrong'),
        buttonText: t('okay'),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
      });
    } finally {
      setModalActionVisible(false);
      setModalActionLoading(false);
      setModalResponseVisible(true);
    }
  };

<<<<<<< HEAD
  console.log('--------modalResponseData----------', modalResponseData);

=======
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  return (
    <div className="content-card">
      <Row className="table-actions-section">
        <Col lg={{ span: 15 }} md={{ span: 14 }}>
          <div className="action-bar">
            <Checkbox
              className="all-check"
              disabled={loading}
              indeterminate={indeterminate}
              onChange={onCheckBoxesChange}
              checked={checkAllBox}
              defaultChecked={true}
            >
<<<<<<< HEAD
              {t("all")}
=======
              {t('all')}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
            </Checkbox>
            <Checkbox.Group
              disabled={loading}
              options={checkBoxMenu}
              defaultValue={checkBoxMenu.map((e) => e.value)}
              value={checkBoxOptions}
              onChange={onStatusQuery}
            />
          </div>
        </Col>
        <Col lg={{ span: 9 }} md={{ span: 10 }}>
          <div className="filter-section">
            <div className="search-bar">
              <Search
<<<<<<< HEAD
                onPressEnter={(e) =>
                  onSearch((e.target as HTMLInputElement).value)
                }
                placeholder={`${t("searchByNameProjectName")}`}
=======
                onPressEnter={(e) => onSearch((e.target as HTMLInputElement).value)}
                placeholder={`${t('searchByNameProjectName')}`}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                allowClear
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: 265 }}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="credit-table-container">
            <Table
              dataSource={tableData.length ? tableData : []}
              columns={columns}
              className="common-table-class"
              loading={loading}
              pagination={{
                current: currentPage,
                pageSize: pageSize,
                total: totalProgramme,
                showQuickJumper: true,
                showSizeChanger: true,
                onChange: onPaginationChange,
              }}
              // eslint-disable-next-line no-unused-vars
<<<<<<< HEAD
              onChange={(val: any, _: any, sorter: any) =>
                onHandleTableChange(val, sorter)
              }
=======
              onChange={(val: any, _: any, sorter: any) => onHandleTableChange(val, sorter)}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
              locale={{
                emptyText: (
                  <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
<<<<<<< HEAD
                    description={
                      tableData.length === 0 ? t("noRetirements") : null
                    }
=======
                    description={tableData.length === 0 ? t('noRetirements') : null}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
                  />
                ),
              }}
            />
          </div>
        </Col>
      </Row>
      <CreditActionModal
        onFinish={onFinishAction}
        onCancel={() => setModalActionVisible(false)}
        t={t}
        actionBtnText={modalActionData?.actionBtnText}
        openModal={modalActionVisible}
        loading={modalActionLoading}
        icon={modalActionData?.icon}
        title={modalActionData?.title}
        isProceed={true}
        type={modalActionData?.type}
        remarkRequired={modalActionData?.remarkRequired}
        data={modalActionData?.data}
        proceedAction={modalActionData?.proceedAction}
      />
      <ActionResponseModal
        type={modalResponseData?.type}
        icon={modalResponseData?.icon}
        title={modalResponseData?.title}
<<<<<<< HEAD
        buttonText={modalResponseData?.buttonText || ""}
=======
        buttonText={modalResponseData?.buttonText || ''}
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
        onCancel={() => {
          setModalResponseVisible(false);
        }}
        openModal={modalResponseVisible}
      />
    </div>
  );
};
