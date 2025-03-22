const supabase = require('../../db/supabase.js')

exports.createFacilityDetails = async (request, response) => {
    await supabase
     .from("FarmerFacilityDetails")
     .insert({
        "FarmID": request.body.farmid,
        "FarmName" : request.body.farmname,
        "PhysicalAddress" : request.body.physicaladdress,
        "TownCity" : request.body.towncity,
        "District" : request.body.district,
        "Province" : request.body.province,
        "CoordinatesLat" : request.body.coordinateslat,
        "CoordinatesLong" : request.body.coordinateslong,
        "LandOwnership" : request.body.landownership,     
        "LandSize" : request.body.landsize,
        "LandType" : request.body.landtype,
        "ArableLandSize" : request.body.arablelandsize,
        "NearestGMBDepot" : request.body.nearestgmbdepot,
        // "CropID" : request.body.cropid,
        "OfferLetterPlotNumber" : request.body.offerletterplotnumber,
        "AgritexReference" : request.body.agritexreference,
        // "CooperativeID" : request.body.cooperativeid,
        "FarmerID": request.body.farmerid
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
     .eq("FarmerID", request.query.farmerid)
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