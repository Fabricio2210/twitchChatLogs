const videoRawInfo = async (model, query, limit, startIndex) => {
  let rawData = await model
    .find(query)
    .limit(limit)
    .skip(startIndex)
    .sort({ date: -1 });
  return rawData;
};

module.exports = videoRawInfo;
