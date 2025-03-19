const supabase = require('../../db/supabase.js')

exports.createFacilityCooperative = async (request, response) => {
    await supabase
     .from("FarmerFacilityCooperative")
     .insert({
        "CooperativeID": request.body.cooperativeID,
        "CooperativeName" : request.body.cooperativeName,
        "CooperativeLocation" : request.body.cooperativeLocation,
        "AgriculturalSector" : request.body.agriculturalSector,
        "NumberOfFarmers" : request.body.numberOfFarmers,
        "LeadAgritexOfficer" : request.body.leadAgritexOfficer,
        "LeadAgronomist" : request.body.leadAgronomist       
     })
     .then((data) => {
        if (data.status == 201) {
            response.status(201).send(data)
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
        if (Object.keys(data.data).length > 0){
            response.status(200).send(data.data)
        }
        else response.status(404).send("Not found")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getFacilityCooperativeByID = async (request, response) => {
    await supabase
     .from("FarmerFacilityCooperative")
     .select()
     .eq("FarmID", request.body.accountNumber)
     .then((data) => {
        if(data.status == 200){
            response.status(200).send(data.data)
        }
        else {
            response.status(500).send(data)
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
        "FarmName" : request.body.farmName,
        "PhysicalAddress" : request.body.physicalAddress,
        "Town/City" : request.body.townCity,
        "District" : request.body.district,
        "Province" : request.body.province,
        "Coordinates" : request.body.coordinates,
        "LandOwnership" : request.body.landOwnership,     
        "LandSize" : request.body.landSize,
        "LandType" : request.body.landType,
        "ArableLandSize" : request.body.arableLandSize,
        "NearestGMBDepot" : request.body.nearestGMBDepot,
        "CropID" : request.body.cropID,
        "OfferLetter/PlotNumber" : request.body.offerLetterPlotNumber,
        "AgritexReference" : request.body.agritexReference,
        "CooperativeID" : request.body.cooperativeID,     
     })
     .eq("FarmID", request.body.farmID)
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
     .eq("FarmID", request.body.farmID)
     .then((_) => {
        response.status(200).send("Cooperative deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}