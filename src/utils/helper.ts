export const isWeekday = (date: Date) =>
  date.getUTCDay() !== 0 && date.getUTCDay() !== 6;
export const formatDate = (date: Date) =>
  new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  )
    .toISOString()
    .split("T")[0];
export const getDatesInRange = (startDate: Date, endDate: Date) => {
  const dates: Date[] = [];
  let currentDate = new Date(
    Date.UTC(
      startDate.getUTCFullYear(),
      startDate.getUTCMonth(),
      startDate.getUTCDate()
    )
  );

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setUTCDate(currentDate.getUTCDate() + 1);
  }

  return dates;
};

export const getISODate = (date: Date) => date.toISOString().split("T")[0];
