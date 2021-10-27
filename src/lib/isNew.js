import dayjs from 'dayjs';

export default dateAdded => {
  const today = dayjs();
  const creationDate = dayjs(+dateAdded);
  const dateDiff = dateAdded && creationDate.diff(today, 'day');
  return Math.abs(dateDiff) < 10;
}
