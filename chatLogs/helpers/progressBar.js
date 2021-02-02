const cliProgress = require('cli-progress');
const bar1 = new cliProgress.SingleBar({format:"Saving {bar} {percentage}%"}, cliProgress.Presets.shades_classic);

let progressBar = (totalOfLines,total,time) => {
    bar1.start(totalOfLines, 0)
    let timer = setInterval(() => {
        total ++
        bar1.update(total);
        if(total === totalOfLines){
            clearInterval(timer)
            bar1.stop()
            console.log("Done")
        process.exit()
        }  
    }, time);
}

module.exports = progressBar