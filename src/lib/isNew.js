import dayjs from 'dayjs';

export default dateAdded => {
  const today = dayjs(Date.now());
  const creationDate = dayjs.unix(dateAdded);
  const dateDiff = dateAdded && creationDate.diff(today, 'day');
  return Math.abs(dateDiff) < 10;
}
