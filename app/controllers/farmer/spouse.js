const supabase = require('../db/supabase.js')

exports.createSpouse = async (request, response) => {
    await supabase
     .from("FarmerSpouse")
     .insert({
        "nationalID": request.body.nationalID,
        "firstName" : request.body.firstName,
        "surname" : request.body.surname,
        "address" : request.body.address,
        "phoneNumber" : request.body.phoneNumber,
        "farmerID": request.body.farmerID 
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
     .eq("nationalID", request.body.nationalID)
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
        "firstName" : request.body.firstName,
        "surname" : request.body.surname,
        "address" : request.body.address,
        "phoneNumber" : request.body.phoneNumber,       
     })
     .eq("spouseID", request.body.spouseID)
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
     .eq("spouseID", request.body.spouseID)
    //  .eq("FirstName", request.body.firstName)
    //  .eq("Surname", request.body.surname)
     .then((_) => {
        response.status(200).send("Farmer spouse deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}