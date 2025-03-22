const supabase = require("../../db/supabase.js");

exports.createFarmer = async (request, response) => {
  await supabase
    .from("Farmer")
    .insert({
      "NationalID": request.body.nationalid,
      "Title": request.body.title,
      "FirstName": request.body.firstname,
      "Gender": request.body.gender,
      "Surname": request.body.surname,
      "DateOfBirth": request.body.dateofbirth,
      "MaidenSurname": request.body.maidensurname,
      "CountryOfBirth": request.body.countryofbirth,
      "NumberOfDependants": request.body.numberofdependants,
      "MaritalStatus": request.body.maritalstatus,
      "EmailAddress": request.body.emailaddress,
      "MobileNumber": request.body.mobilenumber,
      "HomeTelephoneNumber": request.body.hometelephonenumber,
      "PhysicalAddress": request.body.physicaladdress,
      "Province": request.body.province,
      "Country": request.body.country,
      "AccountNumber": request.body.accountnumber,
      // "SpouseNationalID": request.body.spousenationalid,
      // "NextOfKinID": request.body.nextofkinnationalid,
      // "FarmID": request.body.farmid,
      "FarmerID": request.body.farmerid,
      // "CommodityID": request.body.commodityid,
    })
    .then((data) => {
      if (data.status == 201) {
        response.status(201).send("Farmer created successfully!");
      } else {
        response.status(500).send(data.error);
      }
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};

exports.getFarmers = async (_, response) => {
  await supabase
    .from("Farmer")
    .select()
    .then((data) => {
      if (data.status == 200) {
        if (Object.keys(data.data).length > 0) {
          response.status(200).send(data.data);
        } else {
          response.status(404).send("No data");
        }
      }
      else {
          response.status(500).send(data)
      }
   })
    .catch((error) => {
      response.status(500).send(error);
    });
};

exports.getFarmerByID = async (request, response) => {
  await supabase
    .from("Farmer")
    .select()
    .eq("NationalID", request.query.nationalid)
    .then((data) => {
      if (data.status == 200) {
        if (Object.keys(data.data).length > 0) {
          response.status(200).send(data.data)
        }
        else{
          response.status(404).send('No data')
        }
      }
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};

exports.updateFarmer = async (request, response) => {
  await supabase
    .from("Farmer")
    .update({
      "Title": request.body.title,
      "FirstName": request.body.firstName,
      "Gender": request.body.gender,
      "Surname": request.body.surname,
      "DateOfBirth": request.body.dateOfBirth,
      "MaidenSurname": request.body.madenSurname,
      "CountryOfBirth": request.body.countryOfBirth,
      "NumberOfDependants": request.body.numberOfDependants,
      "MaritalStatus": request.body.maritalStatus,
      "EmailAddress": request.body.emailAddress,
      "MobileNumber": request.body.mobileNumber,
      "HomeTelephoneNumber": request.body.homeTelephoneNumber,
      "PhysicalAddress": request.body.physicalAddress,
      "Province": request.body.province,
      "Country": request.body.country,
      "AccountNumber": request.body.accountNumber,
      "SpouseNationalID": request.body.spouseNationalID,
      "NextOfKinNationalID": request.body.nextOfKinNationalID,
      "FarmID": request.body.farmID,
    })
    .eq("NationalID", request.body.nationalID)
    .then((_) => {
      response.status(200).send("Farmer updated successfully!");
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};

exports.deleteFarmer = async (request, response) => {
  await supabase
    .from("Farmer")
    .delete()
    .eq("NationalID", request.body.nationalID)
    .then((_) => {
      response.status(200).send("Farmer deleted successfully!");
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};
