const AWS = require('aws-sdk');
const dotenv = require('dotenv').config();

AWS.config.update({
    region: 'us-east-1',
    accessKeyId: 'AKIA2O7HUO6MXLMVUNSW',
    secretAccessKey: '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'
});

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