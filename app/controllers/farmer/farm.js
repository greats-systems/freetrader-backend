const supabase = require('../../db/supabase.js')

exports.createFacilityDetails = async (request, response) => {
    await supabase
     .from("FarmerFacilityDetails")
     .insert({
        "farmID": request.body.farmID,
        "farmName" : request.body.farmName,
        "physicalAddress" : request.body.physicalAddress,
        "townCity" : request.body.townCity,
        "district" : request.body.district,
        "province" : request.body.province,
        "coordinatesLat" : request.body.coordinatesLat,
        "coordinatesLong" : request.body.coordinatesLong,
        "landOwnership" : request.body.landOwnership,     
        "landSize" : request.body.landSize,
        "landType" : request.body.landType,
        "arableLandSize" : request.body.arableLandSize,
        "nearestGMBDepot" : request.body.nearestGMBDepot,
        "offerLetterPlotNumber" : request.body.offerLetterPlotNumber,
        "agritexReference" : request.body.agritexReference,
        "farmerID": request.body.farmerID
     })
     .then((data) => {
        if (data.status == 201){
            response.status(201).send("Farmer facility details created successfully!")
        }
        else {
            response.status(500).send(data)
        }
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getFacilityDetails = async (_, response) => {
    await supabase
     .from("FarmerFacilityDetails")
     .select()
     .then((data) => {
        if(data.status == 200){
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

exports.getFacilityDetailsByID = async (request, response) => {
    await supabase
     .from("FarmerFacilityDetails")
     .select()
     .eq("farmID", request.query.farmID)
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

exports.updateFacilityDetails = async (request, response) => {
    await supabase
     .from("FarmerFacilityDetails")
     .update({
        "farmName" : request.body.farmName,
        "physicalAddress" : request.body.physicalAddress,
        "townCity" : request.body.townCity,
        "district" : request.body.district,
        "province" : request.body.province,
        "coordinatesLat" : request.body.coordinatesLat,
        "coordinatesLong" : request.body.coordinatesLong,
        "landOwnership" : request.body.landOwnership,     
        "landSize" : request.body.landSize,
        "landType" : request.body.landType,
        "arableLandSize" : request.body.arableLandSize,
        "nearestGMBDepot" : request.body.nearestGMBDepot,
        "offerLetterPlotNumber" : request.body.offerLetterPlotNumber,
        "agritexReference" : request.body.agritexReference,
        "farmerID": request.body.farmerID     
     })
     .eq("farmID", request.body.farmID)
     .then((_) => {
        response.status(200).send("Farmer facility details updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteFacilityDetails = async (request, response) => {
    await supabase
     .from("FarmerFacilityDetails")
     .delete()
     .eq("FarmID", request.body.farmID)
     .then((_) => {
        response.status(200).send("Farmer facility details deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}