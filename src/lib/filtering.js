	import dayjs from 'dayjs';
  
  export const sortItems = (filters, array) => {
  const filtered = filters.length
  ? array.filter(({ tags }) => tags && tags.some(tag => filters.includes(tag)))
  : array;
  
  filtered.sort((a, b) => {
    const dateA = a.dateAdded;
    const dateB = b.dateAdded;
    const isANew = getIsNew(dateA);
    const isBNew = getIsNew(dateB);
    if(isANew && isBNew) return 0;
    if(isANew) return -1;
    return 1;
  });
  return filtered;
};

export const getIsNew = epocDate => epocDate && dayjs(epocDate).diff(Date.now(), 'day') < 10;
