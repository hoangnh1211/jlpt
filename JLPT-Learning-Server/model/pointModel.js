const db = require('./../Database')
const util = require('util');

var queryFunc = util.promisify(db.query).bind(db);

module.exports.get= async (req,res)=>{
    var id = req.params.id;
    var qr = `SELECT value.point, vocabularypractice.id,vocabularypractice.level FROM value, vocabularypractice  WHERE value.user_id ='${id}' and value.pactice_id =vocabularypractice.id`;
    var result = await queryFunc(qr);
    // if (result.length == 0) {
    //     res.send({ status: "ok" });
    //     return;
    // }
    res.send({data:result})
}

module.exports.add= async (req,res)=>{
    var user_id = req.params.id;
    var { practice_id, point } =req.body
    var qr = `SELECT * FROM value AS v WHERE v.user_id ='${user_id}' and v.pactice_id ='${practice_id}';`
    var resultUser = await queryFunc(qr);
    if (resultUser.length>0){
        if (resultUser[0].point<point){
            let qr1 = `UPDATE value set point=${point} WHERE user_id ='${user_id}' and pactice_id ='${practice_id}'`
            console.log(qr1);
            let result =await queryFunc(qr1)
        }
    } else {
        let qr1 = `INSERT INTO value values(${user_id},${practice_id},${point})`
        console.log(qr1);
        let result =await queryFunc(qr1)
    }
    res.send({status:"0k"})
    
}