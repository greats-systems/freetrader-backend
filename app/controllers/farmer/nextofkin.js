const supabase = require('../../db/supabase.js')

exports.createNextOfKin = async (request, response) => {
    await supabase
     .from("FarmerNextOfKin")
     .insert({
        "NationalID": request.body.nationalid,
        "FirstName" : request.body.firstname,
        "Surname" : request.body.surname,
        "Address" : request.body.address,
        "PhoneNumber" : request.body.phonenumber,
        "Relationship": request.body.relationship,
        "FarmerID": request.body.farmerid    
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
     .eq("NationalID", request.body.nationalID)
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
        "FirstName" : request.body.firstName,
        "Surname" : request.body.surname,
        "Address" : request.body.address,
        "PhoneNumber" : request.body.phoneNumber,        
     })
     .eq("NationalID", request.body.nationalID)
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
    //  .eq("NationalID", request.body.nationalID)
     .eq("FirstName", request.body.firstName)
     .eq("Surname", request.body.surname)
     .then((_) => {
        response.status(200).send("Farmer next of kin deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}