const supabase = require("../../db/supabase.js");

exports.createCrop = async (request, response) => {
  await supabase
    .from("Crop")
    .insert({
      "CropID": request.body.cropid,
      "CropName": request.body.cropname,
      "Season": request.body.season,
      "FarmID": request.body.farmid,
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
    .eq("CropID", request.body.cropID)
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
      "CropName": request.body.cropName,
      "Season": request.body.season,
      "CropCertificateID": request.body.CropCertificateID,
    })
    .eq("CropID", request.body.cropID)
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
    .eq("CropID", request.body.cropID)
    .then((_) => {
      response.status(200).send("Crop deleted successfully!");
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};
