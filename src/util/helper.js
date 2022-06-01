const date = function (){

    const date1 = new Date()
    console.log(date1)

}


 
const month = function(){
    let dt = new Date();
    let mth = dt.getMonth()+1;
    console.log(mth)
}


const getBatchInfo = function(){
    console.log(`my batch is RADON 2, W3D3 the topic for the day is Nodejs `)
}


// module.exports = {date,month,getBatchInfo}

module.exports.date = date
module.exports.month = month
module.exports.getBatchInfo = getBatchInfo


