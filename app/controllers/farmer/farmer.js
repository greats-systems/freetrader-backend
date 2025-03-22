const supabase = require("../../db/supabase.js");

exports.createFarmer = async (request, response) => {
  await supabase
    .from("Farmer")
    .insert({
      "farmerID": request.body.farmerID,
      "nationalID": request.body.nationalID,
      "title": request.body.title,
      "firstName": request.body.firstName,
      "maidenSurname": request.body.maidenSurname,
      "surname": request.body.surname,
      "gender": request.body.gender,      
      "dateOfBirth": request.body.dateOfBirth,
      "countryOfBirth": request.body.countryOfBirth,
      "numberOfDependants": request.body.numberOfDependants,
      "maritalStatus": request.body.maritalStatus,
      "emailAddress": request.body.emailAddress,
      "mobileNumber": request.body.mobileNumber,
      "homeTelephoneNumber": request.body.homeTelephoneNumber,
      "physicalAddress": request.body.physicalAddress,
      "province": request.body.province,
      "country": request.body.country
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
    .eq("nationalID", request.query.nationalID)
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
      "nationalID": request.body.nationalid,
      "title": request.body.title,
      "firstName": request.body.firstname,
      "maidenSurname": request.body.maidensurname,
      "surname": request.body.surname,
      "gender": request.body.gender,      
      "dateOfBirth": request.body.dateofbirth,
      "countryOfBirth": request.body.countryofbirth,
      "numberOfDependants": request.body.numberofdependants,
      "maritalStatus": request.body.maritalstatus,
      "emailAddress": request.body.emailaddress,
      "mobileNumber": request.body.mobilenumber,
      "homeTelephoneNumber": request.body.hometelephonenumber,
      "physicalAddress": request.body.physicaladdress,
      "province": request.body.province,
      "country": request.body.country
    })
    .eq("farmerID", request.body.farmerID)
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
    .eq("nationalID", request.body.nationalID)
    .then((_) => {
      response.status(200).send("Farmer deleted successfully!");
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};
