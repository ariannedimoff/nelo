import moment from "moment";

export const formatDate = (date) => {
  date = moment(date);
  const month = date.format("MMMM");
  const year = date.year();
  return `${month} ${year}`;
};

export const now = () => {
  return formatDate(moment());
};

const weekDays = moment.weekdays();

export const daysInMonth = (date) => {
  const n = moment(date).daysInMonth();
  return Array.from({ length: n }, (_, i) => i + 1);
};

export const daysInPreviousMonth = (date) => {
  const firstDayInMonth = moment(date).startOf("M").format("dddd");
  const n = weekDays.indexOf(firstDayInMonth);
  const prevLength = moment(date).subtract(1, "M").daysInMonth();
  return Array.from({ length: prevLength }, (_, i) => i + 1).slice(
    prevLength - n
  );
};

export const daysInNextMonth = (date) => {
  const lastDayInMonth = moment(date).endOf("M").format("dddd");
  const n = 7 - (weekDays.indexOf(lastDayInMonth) + 1);
  return Array.from({ length: n }, (_, i) => i + 1);
};
