// IMONIT (I'm-On-It) batel
//==========================================
const fs = require('fs-extra')
//=================================================
// get/set global variable
//=================================================
exports.get = function (key) {
    return new Promise((resolve) => {
        fs.readFile(key, 'utf8', (err, data) => {
            if (err) {
                resolve(null)
            } else {
                let val = data
                resolve(val)
            }
        })
    })
}
exports.set = function (key, val) {
    return new Promise((resolve) => {
        fs.writeFile(key, val, (err) => {
            resolve()
        })
    })
}
//=================================================
// get date
//=================================================
exports.getDate = function () {
    let dt = new Date();
    let dd = ("0" + dt.getDate()).slice(-2);
    let mm = ("0" + (dt.getMonth() + 1)).slice(-2);
    let yy = dt.getFullYear();
    let hh = ("0" + dt.getHours()).slice(-2);
    let mn = ("0" + dt.getMinutes()).slice(-2);
    let ss = ("0" + dt.getSeconds()).slice(-2);
    let date_time = yy + "-" + mm + "-" + dd + " " + hh + ":" + mn + ":" + ss;
    let date = yy + "-" + mm + "-" + dd;
    let time = hh + ":" + mn + ":" + ss;
    let pod = 'evening'
    if (hh >= 4 && hh <= 11) {
        pod = 'morning'
    }
    if (hh >= 12 && hh <= 17) {
        pod = 'afternoon'
    }
    let jdate = {
        dd: dd,
        mm: mm,
        yy: yy,
        hh: hh,
        mn: mn,
        ss: ss,
        date_time: date_time,
        date: date,
        time: time,
        pod: pod
    }
    return (jdate);
}
//=================================================
// get date
//=================================================
exports.wait = function (sec) {
    let ms = sec * 1000
    return new Promise((resolve) => {
            setTimeout(() => {
				resolve()
				}, ms)
        }
    )
}
