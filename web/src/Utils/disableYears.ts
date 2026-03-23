<<<<<<< HEAD
import { FormInstance } from "antd";
import moment from "moment";

export const disableYears = (currentDate: any, form: FormInstance, key: string, disableFutureYears = false) => {
  const vintageMap = {}
  const vintage = form.getFieldValue("vintage");

  let disableYears = false;

  if (vintage) {
    const vintageYear = moment(vintage).year()
    vintageMap[vintageYear] = true
  }
  
=======
import { FormInstance } from 'antd';
import moment from 'moment';

export const disableYears = (
  currentDate: any,
  form: FormInstance,
  key: string,
  disableFutureYears = false
) => {
  const vintageMap: any = {};
  const vintage = form.getFieldValue('vintage');

  let disableYearsVal = false;

  if (vintage) {
    const vintageYear = moment(vintage).year();
    vintageMap[vintageYear] = true;
  }

>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  form.getFieldValue(key)?.forEach((reduction: any) => {
    const tempVintage = reduction?.vintage;
    if (tempVintage) {
      const tempVintageYear = moment(tempVintage).year();
<<<<<<< HEAD
      vintageMap[tempVintageYear] = true
=======
      vintageMap[tempVintageYear] = true;
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
    }
  });

  // console.log("vintageMap", vintageMap);

  if (vintageMap[currentDate?.year()]) {
<<<<<<< HEAD
    disableYears = true
  }

  if (disableFutureYears && currentDate > moment().endOf('year')) {
    disableYears = true
  }
  return disableYears
=======
    disableYearsVal = true;
  }

  if (disableFutureYears && currentDate > moment().endOf('year')) {
    disableYearsVal = true;
  }
  return disableYearsVal;
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
};
