<<<<<<< HEAD
import moment from "moment";
=======
import moment from 'moment';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

export function toMoment(unixTimestamp: number) {
  if (!unixTimestamp) {
    return undefined;
  }
  // Check if it's in seconds (10 digits) and convert
  if (String(unixTimestamp).length === 10) {
    return moment.unix(unixTimestamp); // seconds -> moment
  }

  // Assume it's already in milliseconds
  return moment(unixTimestamp); // milliseconds -> moment
}
