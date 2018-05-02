/**
 * Created on 2018-05-02
 */
const SMSClient = require('@alicloud/sms-sdk')
/**
 * 
 * @param {String} accessKeyId 
 * @param {String} secretAccessKey 
 * @param {String} PhoneNumbers     手机号
 * @param {String} SignName         签名    
 * @param {String} TemplateCode     模版id
 */
module.exports = function ({
    accessKeyId,
    secretAccessKey,
    PhoneNumbers,
    SignName,
    TemplateCode
}, cb = function () {}) {
    //初始化sms_client
    let smsClient = new SMSClient({
        accessKeyId,
        secretAccessKey
    })
    //发送短信
    smsClient.sendSMS({
        PhoneNumbers: PhoneNumbers,
        SignName: SignName,
        TemplateCode: TemplateCode
    }).then(function (res) {
        let {
            Code
        } = res
        if (Code === 'OK') {
            //处理返回参数
            cb(null, res)
        }
    }, function (err) {
        console.log(err)
        cb(err)
    })
}