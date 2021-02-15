import { Constants } from "../styles";

export const validateEmail = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    return false;
  }
  else {
    return true;
  }
}

export const tConvert = time => {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ]
  if (time.length > 1) {
    // If time format correct
    time = time.slice(1) // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM' // Set AM/PM
    time[0] = +time[0] % 12 || 12 // Adjust hours
  }
  return time.join('') // return adjusted time or original string
}

export const tConvertHM = time => {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ]
  if (time.length > 1) {
    // If time format correct
    time = time.slice(1) // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM' // Set AM/PM
    time[0] = +time[0] % 12 || 12 // Adjust hours
  }
  return time.join('') // return adjusted time or original string
}

export const secondsToHms = d => {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  return `${h}:${m}`;
}

export const timeConvert = time_str => {
  // Convert a string like 10:05:23 PM to 24h format, returns like [22,5,23]
  var time = time_str.match(/(\d+):(\d+) (\w)/);
  var hours = Number(time[1]);
  var minutes = Number(time[2]);
  var meridian = time[3].toLowerCase();

  if (meridian == 'p' && hours < 12) {
    hours += 12;
  }
  else if (meridian == 'a' && hours == 12) {
    hours -= 12;
  }

  let result = (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes);

  return result;
};

export const dummyUpcomingData = () => {
  return [
    {
      id: 1,
      name: 'Tall Tale Travels',
      type: 'personal',
      startTime: '10 Jan 10:00 AM',
      endTime: '10 Jan 01:00 PM',
      desc: Constants.DRIVER_SCORE_3
    },
    {
      id: 2,
      name: 'Wayfaring Wanderer',
      type: 'business',
      startTime: '10 Jan 05:00 PM',
      endTime: '10 Jan 06:00 PM',
      desc: Constants.DRIVER_SCORE_3
    },
    {
      id: 3,
      name: 'Takeoff Treks',
      type: 'business',
      startTime: '10 Jan 08:00 PM',
      endTime: '10 Jan 10:00 PM',
      desc: Constants.DRIVER_SCORE_3
    },
    {
      id: 4,
      name: 'Tranquil Treks',
      type: 'personal',
      startTime: '10 Jan 10:00 PM',
      endTime: '10 Jan 10:30 PM',
      desc: Constants.DRIVER_SCORE_3
    },
    {
      id: 5,
      name: 'Tempest Trips',
      type: 'personal',
      startTime: '11 Jan 10:00 AM',
      endTime: '11 Jan 01:00 PM',
      desc: Constants.DRIVER_SCORE_3
    },
    {
      id: 6,
      name: 'Worldly Wanderer',
      type: 'personal',
      startTime: '12 Jan 10:00 AM',
      endTime: '12 Jan 04:00 PM',
      desc: Constants.DRIVER_SCORE_3
    },
    {
      id: 7,
      name: 'Back On The Road',
      type: 'business',
      startTime: '15 Jan 10:00 AM',
      endTime: '15 Jan 01:00 PM',
      desc: Constants.DRIVER_SCORE_3
    },
    {
      id: 8,
      name: 'Off The Clock1',
      type: 'business',
      startTime: '18 Jan 8:00 AM',
      endTime: '18 Jan 01:00 PM',
      desc: Constants.DRIVER_SCORE_3
    },
    {
      id: 9,
      name: 'Worldly Wanderer',
      type: 'personal',
      startTime: '20 Jan 10:00 AM',
      endTime: '20 Jan 01:00 PM',
      desc: Constants.DRIVER_SCORE_3
    },
    {
      id: 10,
      name: 'Tempest Trips',
      type: 'business',
      startTime: '22 Jan 10:00 AM',
      endTime: '22 Jan 01:00 PM',
      desc: Constants.DRIVER_SCORE_3
    },
  ]
}

export default null
