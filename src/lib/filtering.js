import dayjs from 'dayjs';



export const sortItems = (filters, item) => {
  const isMatch = (item) => {
    console.log({ item });
    const matchTag = item.tags && item.tags.some(tag => filters.includes(tag))

    // match for other props like twitch, youtube
    const matchProperty = filters.some(filter => item[filter])

    return matchTag || matchProperty
  }

  const filtered = filters.length
    ? item.filter(isMatch)
    : item;

  filtered.sort((a, b) => {
    const dateA = a.dateAdded;
    const dateB = b.dateAdded;
    const isANew = getIsNew(dateA);
    const isBNew = getIsNew(dateB);
    if (isANew && isBNew) return 0;
    if (isANew) return -1;
    return 1;
  });
  return filtered;
};

export const getIsNew = epocDate => epocDate && dayjs(epocDate).diff(Date.now(), 'day') < 10;
