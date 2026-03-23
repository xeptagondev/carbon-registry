export const API_PATHS = {
  //AUTH
<<<<<<< HEAD
  LOGIN: "national/auth/login",
  FORGOT_PW: "national/auth/forgotPassword",
  RESET_PW: (requestId: string) =>
    `national/auth/resetPassword?requestId=${requestId}`,
  REFRESH_ACCESS_TOKEN: "national/auth/login/refresh",
  //USER
  USER_PROFILE: "national/user/profile",
  USER_DETAILS: "national/user/query",
  ADD_USER: "national/user/add",
  REGISTER_USER: "national/user/register",
  UPDATE_USER: "national/user/update",
  DELETE_USER: (userId: string) => `national/user/delete?userId=${userId}`,
  RESET_PASSWORD_USER: "national/user/resetPassword",
  USER_PROFILE_DETAILS: "national/user/profile",
  DOWNLOAD_USER_DATA: "national/user/download",
  //PROJECT
  PROJECT_CREATE: "national/projectManagement/create",
  GET_PROJECT: "national/projectManagement/query",
  PROJECT_BY_ID: "national/programmeSl/getProjectById",
  ALL_PROJECTS: "national/programme/query",
  ADD_PROJECT_DOC: "national/programme/addDocument",
  PROJECT_DOC_ACTION: "national/programme/docAction",
  NEW_PROJECT: "national/programme/create",
  PROJECT_DOWNLOAD: "national/programme/download",
  PROGRAMME_BY_ID: "national/projectManagement/getProjectById", //Change this to project later
  PROJECT_HISTORY_BY_ID: (programmeId: string) =>
    `national/programme/getHistory?programmeId=${programmeId}`,
  PROJECT_BY_STATUS: "stats/programme/queryProgrammesByStatus",
  PROJECT_BY_CATEGORY: "stats/programme/queryProgrammesByCategory",
  PROJECT_ACTION: (action: string) => `programme/${action}`,
  // CREDITS
  CREDIT_BALANCE_QUERY: "national/creditTransactionsManagement/queryBalance",
  CREDIT_TRANSFERS_QUERY:
    "national/creditTransactionsManagement/queryTransfers",
  CREDIT_RETIREMENT_QUERY:
    "national/creditTransactionsManagement/queryRetirements",
  TRANSFER_ORGANIZATIONS: "national/organisation/getOrganizations",
  CB_RETIRE_COINTRY_QUERY: "national/organisation/countries",
  CREDIT_RETIREMENT_REQUEST:
    "national/creditTransactionsManagement/retireRequest",
  CREDIT_RETIREMENT_PERFROM:
    "national/creditTransactionsManagement/performRetireAction",
  CREDIT_TRANSFER_REQUEST: "national/creditTransactionsManagement/transfer",
  //LOCATION
  PROVINCES: "national/location/province",
  DISTRICTS: "national/location/district",
  CITIES: "national/location/city",
  POSTALCODE: "national/location/postalCode",
  DIVISIONS: "national/location/division",
  COUNTRIES: "national/organisation/countries",
  //DOC-VERSIONS
  LAST_DOC_VERSION: "national/programmeSl/getDocLastVersion",
  LAST_DOC_VERSIONS: "national/programmeSl/getDocVersions",
  DOC_BY_VERSION: "national/programmeSl/getDocByVersion",
  CREATE_COST_COTATION: "national/programmeSl/createCostQuotation",
  //ORGANIZATION
  COUNTRY_LIST: "national/organisation/countries",
  REGIONS: "national/organisation/regions",
  ORGANIZATION_BY_TYPE: "national/organisation/byType",
  ORGANIZATION_DETAILS: "national/organisation/query",
  UPDATE_ORGANIZATION: "national/organisation/update",
  ORGANIZATION_NAMES: "national/organisation/queryNames",
  DOWNLOAD_ORGANIZATION_DATA: "national/organisation/download",
  ORGANIZATION_PROFILE_DETAILS: (companyId: string) =>
    `national/organisation/profile?id=${companyId}`,
  ORG_CHANGE_STATUS: "national/organisation/changeStatus",
  ORG_APPROVE: (companyId: string) =>
    `national/organisation/approve?id=${companyId}`,
  ORG_REJECT: (companyId: string) =>
    `national/organisation/reject?id=${companyId}`,
  ORG_SUSPEND: (companyId: string) =>
    `national/organisation/suspend?id=${companyId}`, // suspend
  ORG_REACTIVATE: (companyId: string) =>
    `national/organisation/activate?id=${companyId}`, // reactive
  //CARBON_NEUTRAL
  ISSURE_CARBON_NEUTRAL_CERTIFICATE:
    "national/programmeSl/issueCarbonNeutralCertificate",
  CARBON_NEUTRAL_CERTIFICATES:
    "national/programmeSl/getCarbonNeutralCertificates",
  REQUEST_CARBON_NEUTRAL_CERTIFICATE:
    "national/programmeSl/requestCarbonNeutralCertificate",
  //INVESTMENT
  INVESTMENT_LIST: "national/programme/investmentQuery",
  ADD_PROJECT_INVESTMENT: "national/programme/addInvestment",
  ADD_ORGANIZATION_INVESTMENT: "national/organisation/addInvestment",
  DOWNLOAD_PROJECT_INVESTMENT_DATA: "national/programme/investments/download",
  //VERIFICATION
  VERIFICATION_DOC_VERSIONS: "national/programmeSl/getVerificationDocVersions",
  VERIFICATION_DOC_BY_VERSION:
    "national/programmeSl/getVerificationDocByVersion",
  VERIFICATION_DOC_LAST_VERSION:
    "national/programmeSl/getVerificationDocLastVersion",
  VERIFY_VERIFICATION_REPORT: "national/verification/verifyVerificationReport",
  CREATE_VERIFICATION_REPORT: "national/verification/createVerificationReport",
  VERIFICATION_HISTORY_BY_ID: (programmeId: string) =>
    `national/verification?programmeId=${programmeId}`,
  //MONITORING
  VERIFY_MONITORING_REPORT: "national/verification/verifyMonitoringReport",
  CREATE_MONITORING_REPORT: "national/verification/createMonitoringReport",
  //NDC
  NDC_ACTION: "national/programme/addNDCAction",
  NDC_ACTION_HISTORY: "national/programme/queryNdcActions",
  NDC_ACTIONS_DOWNLOAD: "national/programme/queryNdcActions/download",
  //NOTIFICATION
  REJECT_NOTIFICATION_FORM: "national/programmeSl/inf/reject",
  APPROVE_NOTIFICATION_FORM: "national/programmeSl/inf/approve",
  //PROPOSAL
  REJECT_PROPOSAL: "national/programmeSl/proposal/reject",
  APPROVE_PROPOSAL: "national/programmeSl/proposal/approve",
  CREATE_PROJECT_PROPOSAL: "national/programmeSl/createProjectProposal",
  //CMA
  REJECT_CMA: "national/programmeSl/cma/reject",
  APPROVE_CMA: "national/programmeSl/cma/approve",
  CMA_CREATION: "national/programmeSl/createCMA",
  //DOCUMENT
  ADD_DOCUMENT: "national/documentManagement/add",
  QUERY_DOCUMENT: "national/documentManagement/query",
  APPROVE_DOCUMENT: (id: string) => `document/approve?id=${id}`,
  REJECT_DOCUMENT: (id: string) => `document/reject?id=${id}`,
  VERIFY_DOCUMENT: `national/documentManagement/verify`,
  //TRANSFER
  TRANSFER_ACTION: "national/programme/",
  TRANSFER_ON_FREEZE: "Settings/update",
  PROJECT_TRANSFERS: "programme/transferQuery",
  TRANSFER_DOWNLOAD: "programme/transfers/download",
  CREDIT_RETIRE_TRANSFER_ACTION: "retire/create",
  PROGRAM_TRANSFERS: "retire/query",
  CANCEL_TRANSFER_REQUEST: "retire/status",
  TRANSFER_BY_PROJECT_ID: (programmeId: string) =>
    `programme/transfersByProgrammeId?programmeId=${programmeId}`,
  PROJECT_HISTORY_LOGS: (id: string) =>
    `national/projectManagement/logs?refId=${id}`,
  // TRANSFER_FORZEN_STATUS: (isTransferFrozen:string) => `Settings/query?id=${isTransferFrozen}`
  TRANSACTION_RECORDS_WITHOUT_TIME_RANGE: "stats/national-accounting/query",
  //DASHBOARD
  GET_ALL_DATA_COUNTS: "national/analytics/all",
  GET_PENDING_ACTIONS: "national/analytics/getPendingActions",
  GET_PROJECTS_DATA: "national/analytics/getProjectsData",
  GET_PROJECT_SUMMARY: "national/analytics/getProjectSummary",
  GET_PROJECT_STATUS_SUMMARY: "national/analytics/getProjectStatusSummary",
  GET_PROJECTS_BY_STATUS_DETAIL: "national/analytics/getProjectsByStatusDetail",
  GET_PROJECT_COUNT_BY_SECTOR: "national/analytics/getProjectCountBySector",
  GET_PROJECT_COUNT_BY_SECTORAL_SCOPE: "national/analytics/getProjectCountBySectorScope",
  GET_CREDIT_SUMMARY: "national/analytics/getCreditSummary",
  GET_CREDIT_SUMMARY_BY_DATE: "national/analytics/creditsSummaryByDate",
  //UNUSED APIS
  ALL_PROGRAMS_AGG_CHART_STATS: "stats/programme/agg",
  TOTAL_PROGRAM_COUNT: "stats/programme/totalSLProjects",
  TOTAL_ISSUED_CREDITS: "stats/programme/totalIssuedCredits",
  TOTAL_CREDITS: "stats/national-accounting/total",
  CREDITS_BY_STATUS: "stats/programme/queryCreditsByStatus",
  CREDITS_BY_DATE: "stats/programme/queryCreditsByDate",
  CREDITS_BY_PURPOSE: "stats/programme/queryCreditsByPurpose",
  COUNTRY_CREDIT_RECORDS: "stats/national-accounting/query-by-country",
  TOTAL_RETIERED_CREDITS: "stats/programme/totalRetiredCredits",
  RETIREMENTS_BY_DATE: "stats/programme/queryRetirementsByDate",
  //SIGN
  SIGNS_UPDATE: "Settings/signs/update",
=======
  LOGIN: 'auth/login',
  FORGOT_PW: 'auth/forgotPassword',
  RESET_PW: (requestId: string) => `auth/resetPassword?requestId=${requestId}`,
  REFRESH_ACCESS_TOKEN: 'auth/login/refresh',
  //USER
  USER_PROFILE: 'User/profile',
  USER_DETAILS: 'user/query',
  ADD_USER: 'user/add',
  REGISTER_USER: 'user/register',
  UPDATE_USER: 'user/update',
  DELETE_USER: (userId: string) => `user/delete?userId=${userId}`,
  RESET_PASSWORD_USER: 'user/resetPassword',
  USER_PROFILE_DETAILS: 'user/profile',
  DOWNLOAD_USER_DATA: 'user/download',
  //PROJECT
  PROJECT_CREATE: 'project/create',
  GET_PROJECT: 'project/query',
  PROJECT_BY_ID: 'programmeSl/getProjectById',
  ALL_PROJECTS: 'programme/query',
  ADD_PROJECT_DOC: 'programme/addDocument',
  PROJECT_DOC_ACTION: 'programme/docAction',
  PROJECT_DOCS: 'programme/queryDocs',
  NEW_PROJECT: 'programme/create',
  PROJECT_DOWNLOAD: 'programme/download',
  PROGRAMME_BY_ID: 'project/getProjectById', //Change this to project later
  PROJECT_HISTORY_BY_ID: (programmeId: string) => `programme/getHistory?programmeId=${programmeId}`,
  PROJECT_BY_STATUS: 'stats/programme/queryProgrammesByStatus',
  PROJECT_BY_CATEGORY: 'stats/programme/queryProgrammesByCategory',
  PROJECT_ACTION: (action: string) => `programme/${action}`,
  // CREDITS
  CREDIT_BALANCE_QUERY: 'creditTokens/queryBalance',
  CREDIT_TRANSFERS_QUERY: 'creditTokens/queryTransfers',
  CREDIT_RETIREMENT_QUERY: 'creditTokens/queryRetirements',
  TRANSFER_ORGANIZATIONS: 'organisation/getOrganizations',
  CB_RETIRE_COINTRY_QUERY: 'location/countries',
  CREDIT_RETIREMENT_REQUEST: 'creditTokens/retireRequest',
  CREDIT_RETIREMENT_PERFROM: 'creditTokens/performRetireAction',
  CREDIT_TRANSFER_REQUEST: 'creditTokens/transfer',
  //LOCATION
  PROVINCES: 'location/province',
  DISTRICTS: 'location/district',
  CITIES: 'location/city',
  POSTALCODE: 'location/postalCode',
  DIVISIONS: 'location/division',
  COUNTRIES: 'location/countries',
  //DOC-VERSIONS
  LAST_DOC_VERSION: 'programmeSl/getDocLastVersion',
  LAST_DOC_VERSIONS: 'programmeSl/getDocVersions',
  DOC_BY_VERSION: 'programmeSl/getDocByVersion',
  CREATE_COST_COTATION: 'programmeSl/createCostQuotation',
  //ORGANIZATION
  COUNTRY_LIST: 'organisation/countries',
  REGIONS: 'organisation/regions',
  ORGANIZATION_BY_TYPE: 'organisation/byType',
  ORGANIZATION_DETAILS: 'organisation/query',
  UPDATE_ORGANIZATION: 'organisation/update',
  ORGANIZATION_NAMES: 'organisation/queryNames',
  DOWNLOAD_ORGANIZATION_DATA: 'organisation/download',
  ORGANIZATION_PROFILE_DETAILS: (companyId: string) => `organisation/profile?id=${companyId}`,
  ORG_CHANGE_STATUS: 'organisation/changeStatus',
  ORG_APPROVE: (companyId: string) => `organisation/approve?id=${companyId}`,
  ORG_REJECT: (companyId: string) => `organisation/reject?id=${companyId}`,
  //CARBON_NEUTRAL
  ISSURE_CARBON_NEUTRAL_CERTIFICATE: 'programmeSl/issueCarbonNeutralCertificate',
  CARBON_NEUTRAL_CERTIFICATES: 'programmeSl/getCarbonNeutralCertificates',
  REQUEST_CARBON_NEUTRAL_CERTIFICATE: 'programmeSl/requestCarbonNeutralCertificate',
  //INVESTMENT
  INVESTMENT_LIST: 'programme/investmentQuery',
  ADD_PROJECT_INVESTMENT: 'programme/addInvestment',
  ADD_ORGANIZATION_INVESTMENT: 'organisation/addInvestment',
  DOWNLOAD_PROJECT_INVESTMENT_DATA: 'programme/investments/download',
  //VERIFICATION
  VERIFICATION_DOC_VERSIONS: 'programmeSl/getVerificationDocVersions',
  VERIFICATION_DOC_BY_VERSION: 'programmeSl/getVerificationDocByVersion',
  VERIFICATION_DOC_LAST_VERSION: 'programmeSl/getVerificationDocLastVersion',
  VERIFY_VERIFICATION_REPORT: 'verification/verifyVerificationReport',
  CREATE_VERIFICATION_REPORT: 'verification/createVerificationReport',
  VERIFICATION_HISTORY_BY_ID: (programmeId: string) => `verification?programmeId=${programmeId}`,
  //MONITORING
  VERIFY_MONITORING_REPORT: 'verification/verifyMonitoringReport',
  CREATE_MONITORING_REPORT: 'verification/createMonitoringReport',
  //NDC
  NDC_ACTION: 'programme/addNDCAction',
  NDC_ACTION_HISTORY: 'programme/queryNdcActions',
  NDC_ACTIONS_DOWNLOAD: 'programme/queryNdcActions/download',
  //NOTIFICATION
  REJECT_NOTIFICATION_FORM: 'project/inf/reject',
  APPROVE_NOTIFICATION_FORM: 'project/inf/approve',
  //PROPOSAL
  REJECT_PROPOSAL: 'project/proposal/reject',
  APPROVE_PROPOSAL: 'programmeSl/proposal/approve',
  CREATE_PROJECT_PROPOSAL: 'programmeSl/createProjectProposal',
  //CMA
  REJECT_CMA: 'programmeSl/cma/reject',
  APPROVE_CMA: 'programmeSl/cma/approve',
  CMA_CREATION: 'programmeSl/createCMA',
  //DOCUMENT
  ADD_DOCUMENT: 'document/add',
  QUERY_DOCUMENT: 'document/query',
  APPROVE_DOCUMENT: (id: string) => `document/approve?id=${id}`,
  REJECT_DOCUMENT: (id: string) => `document/reject?id=${id}`,
  VERIFY_DOCUMENT: `document/verify`,
  //TRANSFER
  TRANSFER_ACTION: 'programme/',
  TRANSFER_ON_FREEZE: 'Settings/update',
  PROJECT_TRANSFERS: 'programme/transferQuery',
  TRANSFER_DOWNLOAD: 'programme/transfers/download',
  CREDIT_RETIRE_TRANSFER_ACTION: 'retire/create',
  PROGRAM_TRANSFERS: 'retire/query',
  CANCEL_TRANSFER_REQUEST: 'retire/status',
  TRANSFER_BY_PROJECT_ID: (programmeId: string) =>
    `programme/transfersByProgrammeId?programmeId=${programmeId}`,
  PROJECT_HISTORY_LOGS: (id: string) => `project/logs?refId=${id}`,
  // TRANSFER_FORZEN_STATUS: (isTransferFrozen:string) => `Settings/query?id=${isTransferFrozen}`
  TRANSACTION_RECORDS_WITHOUT_TIME_RANGE: 'stats/national-accounting/query',
  //DASHBOARD
  GET_ALL_DATA_COUNTS: 'analytics/all',
  GET_PENDING_ACTIONS: 'analytics/getPendingActions',
  GET_PROJECTS_DATA: 'analytics/getProjectsData',
  GET_PROJECT_SUMMARY: 'analytics/getProjectSummary',
  GET_PROJECT_STATUS_SUMMARY: 'analytics/getProjectStatusSummary',
  GET_PROJECTS_BY_STATUS_DETAIL: 'analytics/getProjectsByStatusDetail',
  GET_PROJECT_COUNT_BY_SECTOR: 'analytics/getProjectCountBySector',
  GET_PROJECT_COUNT_BY_SECTORAL_SCOPE: 'analytics/getProjectCountBySectorScope',
  GET_CREDIT_SUMMARY: 'analytics/getCreditSummary',
  GET_CREDIT_SUMMARY_BY_DATE: 'analytics/creditsSummaryByDate',
  //UNUSED APIS
  ALL_PROGRAMS_AGG_CHART_STATS: 'stats/programme/agg',
  TOTAL_PROGRAM_COUNT: 'stats/programme/totalSLProjects',
  TOTAL_ISSUED_CREDITS: 'stats/programme/totalIssuedCredits',
  TOTAL_CREDITS: 'stats/national-accounting/total',
  CREDITS_BY_STATUS: 'stats/programme/queryCreditsByStatus',
  CREDITS_BY_DATE: 'stats/programme/queryCreditsByDate',
  CREDITS_BY_PURPOSE: 'stats/programme/queryCreditsByPurpose',
  COUNTRY_CREDIT_RECORDS: 'stats/national-accounting/query-by-country',
  TOTAL_RETIERED_CREDITS: 'stats/programme/totalRetiredCredits',
  RETIREMENTS_BY_DATE: 'stats/programme/queryRetirementsByDate',
  //SIGN
  SIGNS_UPDATE: 'Settings/signs/update',
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  CEO_SIGN: (ceoSign: string) => `Settings/query?id=${ceoSign}`,
  CHAIRMAN_SIGN: (chairmanSign: string) => `Settings/query?id=${chairmanSign}`,
  PREVIEW_CERTIFICATE: (type: string) => `Settings/certificates?type=${type}`,
  //VALIDATION
<<<<<<< HEAD
  CREATE_VALIDATION_AGGREMENT: "national/programmeSl/createValidationAgreement",
  CREATE_VALIIDATION_REPORT: "national/programmeSL/validation/create",
  REJECT_VALIDATION: "national/programmeSl/validation/reject",
  APPROVE_VALIDATION: "national/programmeSl/validation/approve",
  POPUP_ACTION: (endpoint: string) => `national/programme/${endpoint}`,
  // AEF RECORDS:
  QUERY_AEF_RECORDS: `national/reportsManagement/queryAefRecords`,
  DOWNLOAD_AEF_RECORDS: `national/reportsManagement/downloadAefReport`
=======
  CREATE_VALIDATION_AGGREMENT: 'programmeSl/createValidationAgreement',
  CREATE_VALIIDATION_REPORT: 'programmeSL/validation/create',
  REJECT_VALIDATION: 'programmeSl/validation/reject',
  APPROVE_VALIDATION: 'programmeSl/validation/approve',
  POPUP_ACTION: (endpoint: string) => `programme/${endpoint}`,
  //HBAR Management
  ORGANIZATION_HBAR_BALANCE: 'hbar-management/orgBalance',
  USER_HBAR_BALANCE: 'hbar-management/userBalance',
  QUERY_AEF_RECORDS: `reportsManagement/queryAefRecords`,
  DOWNLOAD_AEF_RECORDS: `reportsManagement/downloadAefReport`,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
};
