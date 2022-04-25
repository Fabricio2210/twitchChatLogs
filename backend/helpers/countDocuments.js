const countDocuments = async(query,model) =>{
  let totalResults = await model.countDocuments(query).limit(5000)
  return totalResults
}
   
module.exports = countDocuments