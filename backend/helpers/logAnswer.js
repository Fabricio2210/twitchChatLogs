const logAnswer =  (
res,
arrayLogVideo,
page,
nextPage,
previousPage,
limit,
totalResults
) => {
  let totalPages = Math.ceil(totalResults / limit);
const answer = res.status(200).json({
  data: arrayLogVideo,
  page,
  nextPage,
  previousPage,
  totalPages,
  totalResults
});
return answer;
};

module.exports = logAnswer;
    
