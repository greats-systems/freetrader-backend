const supabase = require('../../db/supabase.js')

exports.createCropProduction = async (request, response) => {
    await supabase
     .from("Crop")
     .insert({
        "cropID": request.body.cropID,
        "plantingDate" : request.body.plantingDate,
        "harvestDate" : request.body.harvestDate,
        "cropYield" : request.body.cropYield
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
        if (data.status == 200){
            if (data.data.length > 0) {
                response.status(200).send(data.data)
              }
              else {
                response.status(404).send('No data')
              }
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
     .eq("cropID", request.body.cropID)
     .then((data) => {
        if(data.status == 200){
            if (data.data.length > 0) {
                response.status(200).send(data.data)
              }
              else {
                response.status(404).send('No data')
              }
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
        "plantingDate" : request.body.plantingDate,
        "harvestDate" : request.body.harvestDate,
        "cropYield" : request.body.cropYield
     })
     .eq("cropID", request.body.cropID)
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
     .eq("cropID", request.body.cropID)
     .then((_) => {
        response.status(200).send("Crop deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}