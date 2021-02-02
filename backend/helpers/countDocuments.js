const countDocuments = async(query,model) =>{
  let totalResults = await model.countDocuments(query)
  return totalResults
}
   
module.exports = countDocuments