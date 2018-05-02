const {
    accessKeyId,
    secretAccessKey
} = require('./key')
const messagePush = require('./index')

messagePush({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    PhoneNumbers: '18331878352',
    SignName: '刘少鹏',
    TemplateCode: 'SMS_133962151'
}, function (err, res) {
    console.log(err)
    console.log(res)
})