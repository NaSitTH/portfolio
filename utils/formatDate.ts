import { format } from "date-fns";

export const formatDate = (date: Date) => {
  const localDate = new Date(date);
  const formatted = format(localDate, "dd/MMM/yy");

  return formatted;
};

export const formatTime = (date: Date) => {
  const localDate = new Date(date);
  const formatted = format(localDate, "HH:mm");

  return formatted;
};

export const formatDateTime = (date: Date) => {
  return `${formatDate(date)}  ${formatTime(date)}`;
};
