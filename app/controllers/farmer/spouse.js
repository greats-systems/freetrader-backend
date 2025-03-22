const supabase = require('../db/supabase.js')

exports.createSpouse = async (request, response) => {
    await supabase
     .from("FarmerSpouse")
     .insert({
        "NationalID": request.body.nationalid,
        "FirstName" : request.body.firstname,
        "Surname" : request.body.surname,
        "Address" : request.body.address,
        "PhoneNumber" : request.body.phonenumber,
        "FarmerID": request.body.farmerid 
     })
     .then((data) => {
        if (data.status == 201){
            response.status(201).send('Spouse created successfully!')
        }
        else {
            response.status(500).send(data)
        }
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getSpouses = async (_, response) => {
    await supabase
     .from("FarmerSpouse")
     .select()
     .then((data) => {
         if (data.status == 200) {
            if (Object.keys(data.data).length > 0) {
                response.status(200).send(data.data);
              } else {
                response.status(404).send("No data");
              }
            }
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getSpouseByID = async (request, response) => {
    await supabase
     .from("FarmerSpouse")
     .select()
     .eq("NationalID", request.body.nationalID)
     .then((data) => {
        if (data.status == 200) {
            if (Object.keys(data.data).length > 0) {
                response.status(200).send(data.data);
              } else {
                response.status(404).send("No data");
              }
        } 
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.updateSpouse = async (request, response) => {
    await supabase
     .from("FarmerSpouse")
     .update({
        "FirstName" : request.body.firstName,
        "Surname" : request.body.surname,
        "Address" : request.body.address,
        "PhoneNumber" : request.body.phoneNumber,        
     })
     .then((_) => {
        response.status(200).send("Farmer spouse updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteSpouse = async (request, response) => {
    await supabase
     .from("FarmerSpouse")
     .delete()
    //  .eq("NationalID", request.body.nationalID)
     .eq("FirstName", request.body.firstName)
     .eq("Surname", request.body.surname)
     .then((_) => {
        response.status(200).send("Farmer spouse deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}