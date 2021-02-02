const sleepFunc =  function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
  }

  module.exports = sleepFunc