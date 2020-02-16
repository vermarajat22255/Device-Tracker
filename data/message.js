const AWS = require('aws-sdk');

const sendMessage = function sendMessage(message, phone_number, subject) {
    try {
        if (!phone_number || isNaN(phone_number) || !subject) throw "Invalid phone Number or Null subject";
        console.log("inside");
        let params = {
            Message: message,
            MessageAttributes: {
                'AWS.SNS.SMS.SenderID': {
                    DataType: 'String',
                    StringValue: subject,
                }
            },
            PhoneNumber: '+1' + phone_number,
            Subject: subject
        };
        let publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
        return publishTextPromise;
    } catch (e) {
        throw e;
    }
}
module.exports = {
    sendMessage
}