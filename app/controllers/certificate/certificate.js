const supabase = require('../../db/supabase.js')

exports.createCertificate = async (request, response) => {
    await supabase
     .from("CropCertificate")
     .insert({
        "CropID": request.body.cropID,
        "CertificateID": request.body.certificateID,
        "CertificateName" : request.body.certificateName,
        "IssuedBy" : request.body.issuedBy,
        "DateOfIssue" : request.body.dateOfIssue,
        "MarketValueOnDateOfIssue" : request.body.marketValueOnDateOfIssue,
        "CropGrade" : request.body.cropGrade,
        "DateOfExpiry" : request.body.dateOfExpiry,
        "MarketValueOnDateOfExpiry" : request.body.marketValueOnDateOfExpiry,
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

exports.getCropCertificateByID = async (request, response) => {
    await supabase
     .from("CropCertificate")
     .select()
     .eq("CropCertificateID", request.body.cropCertificateID)
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

exports.updateCropCertificate = async (request, response) => {
    await supabase
     .from("CropCertificate")
     .update({
      "CertificateID": request.body.certificateID,
      "CertificateName" : request.body.certificateName,
      "IssuedBy" : request.body.issuedBy,
      "DateOfIssue" : request.body.dateOfIssue,
      "MarketValueOnDateOfIssue" : request.body.marketValueOnDateOfIssue,
      "CropGrade" : request.body.cropGrade,
      "DateOfExpiry" : request.body.dateOfExpiry,
      "MarketValueOnDateOfExpiry" : request.body.marketValueOnDateOfExpiry,
     })
     .eq("CropID", request.body.cropID,)
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
     .eq("CropCertificateID", request.body.cropCertificateID)
     .then((_) => {
        response.status(200).send("GMB Certificate deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}