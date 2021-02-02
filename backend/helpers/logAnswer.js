const logAnswer =  (
res,
arrayLogVideo,
startIndex,
endIndex,
page,
totalResults,
limit,
nextPage,
previousPage,
) => {
let totalPages = Math.ceil(totalResults / limit);
const answer = res.status(200).json({
  data: arrayLogVideo,
  startIndex,
  endIndex,
  page,
  totalPages,
  nextPage,
  previousPage,
  totalResults,
});
return answer;
};

module.exports = logAnswer;
    
