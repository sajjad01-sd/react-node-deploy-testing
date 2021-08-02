var config = {
  //local


  //local
  user: 'sa',
  password: 'VILLAGERS@villagers',
  server: 'smartpatshala.com', //UTOPIA-XEON-V6-
  database: 'leadserver',
  port: 1433,
  "options": {
    "encrypt": true,
    "enableArithAbort": true
  }


  //live
  // user: 'Fortadmin',
  // password: 'FortMsSQL',
  // server: 'mssqlserver2016fort.c43sp4r5yrc5.ap-southeast-1.rds.amazonaws.com',
  // database: 'Attendance',  
  // port: 1433


};

var webPort = 2000;
var httpMsgFormate = "JSON";
var hostAdress = ''
var hostAdress = 'https://localhost:2000'

module.exports = {
  config,
  webPort,
  httpMsgFormate,
  hostAdress
}

