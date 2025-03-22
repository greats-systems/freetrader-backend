const supabase = require('../../db/supabase.js')

exports.createNextOfKin = async (request, response) => {
    await supabase
     .from("FarmerNextOfKin")
     .insert({
        "nationalID": request.body.nationalID,
        "firstName" : request.body.firstName,
        "surname" : request.body.surname,
        "address" : request.body.address,
        "phoneNumber" : request.body.phoneNumber,
        "relationshipToFarmer": request.body.relationshipToFarmer,
        "farmerID": request.body.farmerID   
     })
     .then((data) => {
        if(data.status == 201){
            response.status(201).send('Next of kin created successfully!')
        }
        else {
            response.status(500).send(data)
        }
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getNextOfKins = async (_, response) => {
    await supabase
     .from("FarmerNextOfKin")
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

exports.getNextOfKinByID = async (request, response) => {
    await supabase
     .from("FarmerNextOfKin")
     .select()
     .eq("nationalID", request.body.nationalID)
     .then((data) => {
        if (data.status == 200){
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

exports.updateNextOfKin = async (request, response) => {
    await supabase
     .from("FarmerNextOfKin")
     .update({
        "firstName" : request.body.firstName,
        "surname" : request.body.surname,
        "address" : request.body.address,
        "phoneNumber" : request.body.phoneNumber,
        "relationshipToFarmer": request.body.relationshipToFarmer,
        "farmerID": request.body.farmerID         
     })
     .eq("nationalID", request.body.nationalID)
     .then((_) => {
        response.status(200).send("Farmer next of kin updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteNextOfKin = async (request, response) => {
    await supabase
     .from("FarmerNextOfKin")
     .delete()
     .eq("nationalID", request.body.nationalID)
    //  .eq("FirstName", request.body.firstName)
    //  .eq("Surname", request.body.surname)
     .then((_) => {
        response.status(200).send("Farmer next of kin deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}