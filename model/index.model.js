var db = require("../db-config/db");

var getTest = function (req, res, id) {
  var sql = "spGetInsInstitute ";
  console.log(sql);
  db.executeSql(sql, function (data, err) {
    if (err) {
      throw err;
    } else {
      res.send(data.recordset);
    }
    res.end();
  });
};

var getAllLeads = function (req, res, id) {
  var sql = "spGetAllLeads";
  console.log(sql);
  db.executeSql(sql, function (data, err) {
    if (err) {
      throw err;
    } else {
      res.send(data.recordset);
    }
    res.end();
  });
};

var getFilterData = function (req, res, reqBody) {
  //   console.log(`${reqBody.string} checking`);

  // var sql = "SELECT * FROM Leads WHERE CompanyPhone LIKE '516-887-8600' AND LeadID LIKE '976%' AND Rating LIKE '4.1%'";
  // var sql = "DELETE FROM Leads WHERE Gender='null'";   // For deleting all testing data
  let obj = {
    'col_name' : 'CompanyPhone',
    'value' : 'ssada'
  }

  

  const sql = "SELECT * FROM Leads WHERE CompanyPhone LIKE '516-887-8600' AND LeadID LIKE '1100%'"
  const sql = `${reqBody.string}`
  console.log(sql);
  db.executeSql(sql, function (data, err) {
    if (err) {
      throw err;
    } else {
      res.send(data.recordset);
    }
    res.end();
  });
};

var getUser = function (req, res) {
  var sql = "spGetUser";
  console.log(sql);
  db.executeSql(sql, function (data, err) {
    if (err) {
      throw err;
    } else {
      res.send(data.recordset);
    }
    res.end();
  });
};
// @id
// ,@first_Name
// ,@last_Name
// ,@email_Address
// ,@phone_Number
// ,@home_address
var asyncTest = async function (req, res, reqBody) {
  reqBody.filter(async (value, index) => {
    var awaitValue = await value;
    var sql =
      "spSetUser '" +
      awaitValue.id +
      "','" +
      awaitValue.first_Name +
      "','" +
      awaitValue.last_Name +
      "','" +
      awaitValue.email_Address +
      "','" +
      awaitValue.phone_Number +
      "','" +
      awaitValue.home_address +
      "'";
    // var sql =  "INSERT INTO dbo.test3 (first_Name,last_Name,email_Address,phone_Number,home_address) VALUES ('"+awaitValue.first_Name+"','"+awaitValue.last_Name+"','"+awaitValue.email_Address+"','"+awaitValue.phone_Number+"','"+awaitValue.home_address+"')";
    console.log(sql);

    db.executeSql(sql, function (data, err) {
      if (err) {
        throw err;
      } else {
        var result = data.recordset;
        console.log(result);
      }
      res.end();
    });
  });
};
// var setLeads = async function (req, res, reqBody) {
//     console.log(reqBody)
//     reqBody.filter(async (value, index) => {
//         var awaitValue = await value;
//         var sql = "spSettest5 '"+awaitValue.LeadID+"','" + awaitValue.LinkedinLink + "','" + awaitValue.SourceLink + "','" + awaitValue.NamePrefix + "','" + awaitValue.FirstName + "','" + awaitValue.MiddleName + "','" + awaitValue.LastName + "','" + awaitValue.SurName + "','" + awaitValue.Gender + "','" + awaitValue.FullName + "','" + awaitValue.TitlePosition + "','" + awaitValue.BusinessEmail + "','" + awaitValue.PersonalEmail + "','" + awaitValue.PersonalPhone + "','" + awaitValue.EmployeeRange + "','" + awaitValue.PersonLocation + "','" + awaitValue.CompanyName + "','" + awaitValue.CompanyWebsite + "','" + awaitValue.CompanyLinkedinLink + "','" + awaitValue.CompanyPhone + "','" + awaitValue.CompanyHeadCount + "','" + awaitValue.CompanyHQAddress + "','" + awaitValue.Industry + "','" + awaitValue.Revenue + "','" + awaitValue.Street + "','" + awaitValue.City + "','" + awaitValue.State + "','" + awaitValue.Country + "','" + awaitValue.Zip + "','" + awaitValue.FullAddress + "','" + awaitValue.Rating + "'," + awaitValue.SheetID + ",'" + awaitValue.SheetName + "','" + awaitValue.CustomField1 + "','" + awaitValue.CustomField2 + "','" + awaitValue.CustomField3 + "','" + awaitValue.CustomField4 + "','" + awaitValue.CustomField5 + "'," + awaitValue.IsActive + "," + awaitValue.IsDeleted + ",'" + awaitValue.CreatedDate + "','" + awaitValue.UpdatedDate + "','" + awaitValue.DeletedDate + "'";

//         console.log(sql);

//         db.executeSql(sql, function (data, err) {
//             if (err) {
//                 throw err;
//             } else {
//                 var result = data.recordset;
//                 console.log(result);
//                 res.send(data.recordset);
//             }
//             res.end();
//         });

//     })
// }
async function task(result) {
  await timer(71);
  console.log("Task " + result + " done!");
}

function timer(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

var setLeads = async function (req, res, reqBody) {
  var result = {};
  for (let i = 0; i < reqBody.length; i++) {
    var awaitValue = reqBody[i];
    var sql =
      "spSetLeads '" +
      awaitValue.LeadID +
      "','" +
      awaitValue.LinkedinLink +
      "','" +
      awaitValue.SourceLink +
      "','" +
      awaitValue.NamePrefix +
      "','" +
      awaitValue.FirstName +
      "','" +
      awaitValue.MiddleName +
      "','" +
      awaitValue.LastName +
      "','" +
      awaitValue.SurName +
      "','" +
      awaitValue.Gender +
      "','" +
      awaitValue.FullName +
      "','" +
      awaitValue.TitlePosition +
      "','" +
      awaitValue.BusinessEmail +
      "','" +
      awaitValue.PersonalEmail +
      "','" +
      awaitValue.PersonalPhone +
      "','" +
      awaitValue.EmployeeRange +
      "','" +
      awaitValue.PersonLocation +
      "','" +
      awaitValue.CompanyName +
      "','" +
      awaitValue.CompanyWebsite +
      "','" +
      awaitValue.CompanyLinkedinLink +
      "','" +
      awaitValue.CompanyPhone +
      "','" +
      awaitValue.CompanyHeadCount +
      "','" +
      awaitValue.CompanyHQAddress +
      "','" +
      awaitValue.Industry +
      "','" +
      awaitValue.Revenue +
      "','" +
      awaitValue.Street +
      "','" +
      awaitValue.City +
      "','" +
      awaitValue.State +
      "','" +
      awaitValue.Country +
      "','" +
      awaitValue.Zip +
      "','" +
      awaitValue.FullAddress +
      "','" +
      awaitValue.Rating +
      "'," +
      awaitValue.SheetID +
      ",'" +
      awaitValue.SheetName +
      "','" +
      awaitValue.CustomField1 +
      "','" +
      awaitValue.CustomField2 +
      "','" +
      awaitValue.CustomField3 +
      "','" +
      awaitValue.CustomField4 +
      "','" +
      awaitValue.CustomField5 +
      "'," +
      awaitValue.IsActive +
      "," +
      awaitValue.IsDeleted +
      ",'" +
      awaitValue.CreatedDate +
      "','" +
      awaitValue.UpdatedDate +
      "','" +
      awaitValue.DeletedDate +
      "'";

    // await console.log(sql);

    await db.executeSql(sql, async function (data, err) {
      if (err) {
        throw err;
      } else {
        result = data.recordset[0];
        // await console.log(data.recordset[0]);
        // await console.log("Lead " + i + result + " Done");
        // await task(result.LeadID)
      }
      res.end();
    });
    var love = result.LeadID;
    await task(love);
  }
};

var setSheet = async function (req, res, reqBody) {
  reqBody.filter(async (value, index) => {
    var awaitValue = await value;
    var sql =
      "spSetSheets '" +
      awaitValue.SheetID +
      "','" +
      awaitValue.SheetName +
      "','" +
      awaitValue.OrderID +
      "','" +
      awaitValue.OrderDate +
      "','" +
      awaitValue.OrderCompletedDate +
      "','" +
      awaitValue.ClientID +
      "','" +
      awaitValue.ClientName +
      "','" +
      awaitValue.IsActive +
      "','" +
      awaitValue.IsDeleted +
      "','" +
      awaitValue.CreatedDate +
      "','" +
      awaitValue.UpdatedDate +
      "','" +
      awaitValue.DeletedDate +
      "'";

    console.log(sql);

    db.executeSql(sql, function (data, err) {
      if (err) {
        throw err;
      } else {
        var result = data.recordset[0];
        console.log(result);
        res.send(data.recordset);
      }
      res.end();
    });
  });
};

module.exports = {
  getTest,
  asyncTest,
  setLeads,
  getAllLeads,
  setSheet,
  getUser,
  getFilterData,
};
