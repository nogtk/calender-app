import dayjs from "dayjs";

const day = dayjs();

const init = {
  year: day.year(),
  month: day.month() + 1
};

export const CALENDAR_SET_MONTH = "CALENDAR_SET_MONTH";
export const calendarSetMonth = payload => ({
  type: CALENDAR_SET_MONTH,
  payload
});