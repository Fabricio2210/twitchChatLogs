const paginationInfo = (page, limit) => {
  let objPagination = {
    nextPage: page + 1,
    previousPage: page - 1,
  };
  return objPagination;
};
module.exports = paginationInfo;
