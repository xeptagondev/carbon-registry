<<<<<<< HEAD
import moment from "moment";
import { mapBase64ToFields } from "../../Utils/mapBase64ToFields";
import { INF_SECTORAL_SCOPE } from "../AddNewProgramme/ProgrammeCreationComponent";
import { toMoment } from "../../Utils/convertTime";
=======
import moment from 'moment';
import { mapBase64ToFields } from '../../Utils/mapBase64ToFields';
import { INF_SECTORAL_SCOPE } from '../AddNewProgramme/ProgrammeCreationComponent';
import { toMoment } from '../../Utils/convertTime';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

export const basicInformationMapDataToView = (vals: any) => {
  if (vals === undefined) return;

  const tempVals = {
    ...vals,
<<<<<<< HEAD
    b_completionDate: vals?.b_completionDate
      ? moment.unix(vals?.b_completionDate)
      : undefined,
    b_signature: mapBase64ToFields([vals?.b_signature]),
    b_sectoralScope: INF_SECTORAL_SCOPE[vals?.b_sectoralScope],
  };

  console.log("--------------vals after------------", tempVals);
=======
    b_completionDate: vals?.b_completionDate ? moment.unix(vals?.b_completionDate) : undefined,
    //b_signature: mapBase64ToFields([vals?.b_signature]),
    b_sectoralScope: INF_SECTORAL_SCOPE[vals?.b_sectoralScope],
  };

  console.log('--------------vals after------------', tempVals);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  return tempVals;
};

export const ghgProjectDescriptionMapDataToFields = (vals: any) => {
<<<<<<< HEAD
  console.log("----------ghg project description----------", vals);
=======
  console.log('----------ghg project description----------', vals);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  if (vals === undefined) return;

  const tempVals = {
    ...vals,
<<<<<<< HEAD
    estimatedNetEmissionReductions: vals?.estimatedNetEmissionReductions.map(
      (item: any) => {
        return {
          ...item,
          vintage: item?.vintage ? toMoment(item?.vintage) : undefined,
        };
      }
    ),
=======
    estimatedNetEmissionReductions: vals?.estimatedNetEmissionReductions.map((item: any) => {
      return {
        ...item,
        vintage: item?.vintage ? toMoment(item?.vintage) : undefined,
      };
    }),
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  };

  return tempVals;
};

export const executiveSummaryMapDataToFields = (vals: any) => {
  if (vals === undefined) return;

  const tempVals = {
    ...vals,
  };

  return tempVals;
};

export const verificationTeamsMapDataToFields = (vals: any) => {
  if (vals === undefined) return;

  const tempVals = {
    ...vals,
  };

  return tempVals;
};

export const applicationOfMaterialityMapDataToFields = (vals: any) => {
  if (vals === undefined) return;

  const tempVals = {
    ...vals,
  };

  return tempVals;
};

export const meansOfVerificationMapDataToFields = (vals: any) => {
  if (vals === undefined) return;

  const tempVals = {
    ...vals,
    siteInspectionDurationStart: vals?.siteInspectionDurationStart
      ? moment.unix(vals?.siteInspectionDurationStart)
      : undefined,
    siteInspectionDurationEnd: vals?.siteInspectionDurationEnd
      ? moment.unix(vals?.siteInspectionDurationEnd)
      : undefined,
    onSiteInspection: vals?.onSiteInspection?.map((item: any) => {
      const temp = {
        ...item,
        siteLocation: item?.siteLocation,
        activityPerformedDate: item?.activityPerformedDate
          ? moment.unix(item?.activityPerformedDate)
          : undefined,
      };
      return temp;
    }),
    interviewees: vals?.interviewees.map((item: any) => {
      const temp = {
        ...item,
        date: item?.date ? moment.unix(item?.date) : undefined,
      };

      return temp;
    }),
  };

  return tempVals;
};

export const verificationFindingsMapDataToFields = (vals: any) => {
  if (vals === undefined) return;

  const tempVals = {
    ...vals,
  };

  return tempVals;
};

export const internalQualityControlMapDataToFields = (vals: any) => {
  if (vals === undefined) return;

  const tempVals = {
    ...vals,
  };

  return tempVals;
};

export const verificationOpinionMapDataToFields = (vals: any) => {
  if (vals === undefined) return;

  const tempVals = {
    ...vals,
  };

  return tempVals;
};

export const certificaitonMapDataToFields = (vals: any) => {
  if (vals === undefined) return;

  const tempVals = {
    ...vals,
  };

  return tempVals;
};

export const appendixMapDataToFields = (vals: any) => {
<<<<<<< HEAD
  console.log("--------verification report---------", vals);
=======
  console.log('--------verification report---------', vals);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  if (vals === undefined) return;

  const tempVals = {
    ...vals,
    appendix1Documents: mapBase64ToFields(vals?.appendix1Documents),
    farIdDate: vals?.farIdDate ? moment.unix(vals?.farIdDate) : undefined,
<<<<<<< HEAD
    responseDate: vals?.responseDate
      ? moment.unix(vals?.responseDate)
      : undefined,
=======
    responseDate: vals?.responseDate ? moment.unix(vals?.responseDate) : undefined,
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    doeDate: vals?.doeDate ? moment.unix(vals?.doeDate) : undefined,
  };

  return tempVals;
};
