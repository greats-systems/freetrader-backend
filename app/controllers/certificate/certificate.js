const supabase = require('../../db/supabase.js')

exports.createCertificate = async (request, response) => {
    await supabase
     .from("CropCertificate")
     .insert({
        "cropID": request.body.cropID,
        "certificateID": request.body.certificateID,
        "certificateName" : request.body.certificateName,
        "issuedBy" : request.body.issuedBy,
        "dateOfIssue" : request.body.dateOfIssue,
        "marketValueOnDateOfIssue" : request.body.marketValueOnDateOfIssue,
        "cropGrade" : request.body.cropGrade,
        "dateOfExpiry" : request.body.dateOfExpiry,
        "marketValueOnDateOfExpiry" : request.body.marketValueOnDateOfExpiry,
     })
     .then((data) => {
        if (data.status == 201){
            response.status(201).send("Certificate created successfully!")
        }
        else {
            response.status(500).send(data)
        }
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getCropCertificates = async (_, response) => {
    await supabase
     .from("CropCertificate")
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
}

exports.getCropCertificateByID = async (request, response) => {
    await supabase
     .from("CropCertificate")
     .select()
     .eq("CropCertificateID", request.body.cropCertificateID)
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

exports.updateCropCertificate = async (request, response) => {
    await supabase
     .from("CropCertificate")
     .update({
    //   "CropID": request.body.certificateID,
      "certificateName" : request.body.certificateName,
      "issuedBy" : request.body.issuedBy,
      "dateOfIssue" : request.body.dateOfIssue,
      "marketValueOnDateOfIssue" : request.body.marketValueOnDateOfIssue,
      "cropGrade" : request.body.cropGrade,
      "dateOfExpiry" : request.body.dateOfExpiry,
      "marketValueOnDateOfExpiry" : request.body.marketValueOnDateOfExpiry,
     })
     .eq("certificateID", request.body.certificateID,)
     .then((_) => {
        response.status(200).send("Certificate updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteCropCertificate = async (request, response) => {
    await supabase
     .from("CropCertificate")
     .delete()
     .eq("cropCertificateID", request.body.cropCertificateID)
     .then((_) => {
        response.status(200).send("GMB Certificate deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}