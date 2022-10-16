export const getPreviousEnabled = (currentPage) => currentPage > 0;

export const getNextEnabled = (currentPage, totalPages) =>
    currentPage + 1 < totalPages;

export const getTotalPages = (totalItems, pageSize) =>
    Math.ceil(totalItems / pageSize);

export const getStartIndex = (pageSize, currentPage) =>
    pageSize * currentPage;

export const getEndIndex = (pageSize, currentPage, totalItems) => {
    const lastPageEndIndex = pageSize * (currentPage + 1);

    if (lastPageEndIndex > totalItems) {
        return totalItems - 1;
    }

    return lastPageEndIndex - 1;
};

export const limitPageBounds =
    (totalItems, pageSize) =>
    (page) =>
        Math.min(Math.max(page, 0), getTotalPages(totalItems, pageSize) - 1);

export const getPaginationMeta = ({
    totalItems,
    pageSize,
    currentPage,
}) => {
    const totalPages = getTotalPages(totalItems, pageSize);
    return {
        totalPages,
        startIndex: getStartIndex(pageSize, currentPage),
        endIndex: getEndIndex(pageSize, currentPage, totalItems),
        previousEnabled: getPreviousEnabled(currentPage),
        nextEnabled: getNextEnabled(currentPage, totalPages),
    };
};
