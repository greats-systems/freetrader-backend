const supabase = require('../../db/supabase.js')

exports.createCropProduction = async (request, response) => {
    await supabase
     .from("Crop")
     .insert({
        "CropID": request.body.cropID,
        "PlantingDate" : request.body.plantingDate,
        "HarvestDate" : request.body.harvestDate,
        "CropYield" : request.body.cropYield
     })
     .then((data) => {
        if(data.status == 201){
            response.status(201).send("Crop created successfully!")
        }
        else {
            response.status(500).send(data)
        }
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getCropProductions = async (_, response) => {
    await supabase
     .from("Crop")
     .select()
     .then((data) => {
        if (Object.keys(data.data).length > 0){
            response.status(200).send(data)
        }
        else response.status(404).send("Not found")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getCropProductionByID = async (request, response) => {
    await supabase
     .from("Crop")
     .select()
     .eq("ProductionReferenceID", request.body.productionReferenceID)
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

exports.updateCropProduction = async (request, response) => {
    await supabase
     .from("Crop")
     .update({
        "PlantingDate" : request.body.plantingDate,
        "HarvestDate" : request.body.harvestDate,
        "CropYield" : request.body.cropYield, 
     })
     .eq("ProductionReferenceID", request.body.productionReferenceID)
     .then((_) => {
        response.status(200).send("Crop updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteCropProduction = async (request, response) => {
    await supabase
     .from("Crop")
     .delete()
     .eq("ProductionReferenceID", request.body.productionReferenceID)
     .then((_) => {
        response.status(200).send("Crop deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}