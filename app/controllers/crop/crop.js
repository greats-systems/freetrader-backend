const supabase = require("../../db/supabase.js");

exports.createCrop = async (request, response) => {
  await supabase
    .from("Crop")
    .insert({
      "cropID": request.body.cropID,
      "cropName": request.body.cropName,
      "season": request.body.season,
      "farmID": request.body.farmID,
      //   "CertificateID" : request.body.certificateID,
    })
    .then((data) => {
      if (data.status == 201){
        response.status(201).send('Crop created successfully!');
      }
      else {
        response.status(500).send(data)
      }
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};

exports.getCrops = async (_, response) => {
  await supabase
    .from("Crop")
    .select()
    .then((data) => {
      if (data.status == 200) {
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
};

exports.getCropByID = async (request, response) => {
  await supabase
    .from("Crop")
    .select()
    .eq("cropID", request.body.cropID)
    .then((data) => {
      if (data.data.length > 0) {
        if (data.data.length > 0) {
          response.status(200).send(data.data)
        }
        else {
          response.status(404).send('No data')
        }
      }
      else {
        response.status(404).send('No data')
      }
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};

exports.updateCrop = async (request, response) => {
  await supabase
    .from("Crop")
    .update({
      "cropName": request.body.cropName,
      "season": request.body.season,
    })
    .eq("cropID", request.body.cropID)
    .then((_) => {
      response.status(200).send("Crop updated successfully!");
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};

exports.deleteCrop = async (request, response) => {
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
};
