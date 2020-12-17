const request = require('request')
const fs = require('fs')

exports.notify=()=>{
    request({
        method: 'POST',
        uri: 'https://notify-api.line.me/api/notify',
        header: {
          'Content-Type': 'multipart/form-data',
        },
        auth: {
          bearer: '8L5ACVF6JsdZPlQYgecJ3M7EhIwIrurFuo7XED1YqME', //token
        },
        form: {
          message: 'ทดสอบ', //ข้อความที่จะส่ง
          imageFile: fs.createReadStream('qrcode.jpg'),
        },
      }, (err, httpResponse, body) => {
        if (err) {
          console.log(err)
        } else {
          console.log(body)
        }
      })
}

