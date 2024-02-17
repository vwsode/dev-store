import moment from "moment";

export const convertDateToLocalString = (inputDate: string): string => {
  const parsedDate = moment(inputDate, "DD/MM/YYYY");
  return parsedDate.format("MMM DD, YYYY");
};
