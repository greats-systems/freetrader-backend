const supabase = require('../../db/supabase.js')

exports.createFacilityCooperative = async (request, response) => {
    await supabase
     .from("FarmerFacilityCooperative")
     .insert({
        "cooperativeID": request.body.cooperativeID,
        "cooperativeName" : request.body.cooperativeName,
        "cooperativeLocation" : request.body.cooperativeLocation,
        "agriculturalSector" : request.body.agriculturalSector,
        "numberOfFarmers" : request.body.numberOfFarmers,
        "leadAgritexOfficer" : request.body.leadAgritexOfficer,
        "leadAgronomist" : request.body.leadAgronomist       
     })
     .then((data) => {
        if (data.status == 201) {
            response.status(201).send('Cooperative created successfully!')
        } else {
            response.status(500).send(data)
        }
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getFacilityCooperatives = async (_, response) => {
    await supabase
     .from("FarmerFacilityCooperative")
     .select()
     .then((data) => {
        if (Object.keys(data.data).length > 0) {
            response.status(200).send(data.data)
          }
          else{
            response.status(404).send('No data')
          }
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getFacilityCooperativeByID = async (request, response) => {
    await supabase
     .from("FarmerFacilityCooperative")
     .select()
     .eq("cooperativeID", request.body.cooperativeID)
     .then((data) => {
        if (Object.keys(data.data).length > 0) {
            response.status(200).send(data.data)
          }
          else{
            response.status(404).send('No data')
          }
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.updateFacilityCooperative = async (request, response) => {
    await supabase
     .from("FarmerFacilityCooperative")
     .update({
        "cooperativeName" : request.body.cooperativeName,
        "cooperativeLocation" : request.body.cooperativeLocation,
        "agriculturalSector" : request.body.agriculturalSector,
        "numberOfFarmers" : request.body.numberOfFarmers,
        "leadAgritexOfficer" : request.body.leadAgritexOfficer,
        "leadAgronomist" : request.body.leadAgronomist     
     })
     .eq("cooperativeID", request.body.cooperativeID)
     .then((_) => {
        response.status(200).send("Cooperative updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteFacilityCooperative = async (request, response) => {
    await supabase
     .from("FarmerFacilityCooperative")
     .delete()
     .eq("cooperativeID", request.body.cooperativeID)
     .then((_) => {
        response.status(200).send("Cooperative deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}