"use strict";
require("dotenv").config();
const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.ACCESS_SECRET_KEY,
});

const cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.initiateAuth = async (db_item) => {
  const params = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: process.env.CLIENT_ID,
    AuthParameters: {
      USERNAME: db_item.email,
      PASSWORD: db_item.password,
    },
  };
  console.log(params);

  asqswedr556.initiateAuth(params, (err, data) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log(data);
      return data;
    }
  });
};
