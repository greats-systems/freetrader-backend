const supabase = require('../../db/supabase.js')

exports.createCropCertificateIssuer = async (request, response) => {
    await supabase
     .from("CertificateIssuer")
     .insert({
        "IssuerName": request.body.issuerName,
        "IssuerID": request.body.issuerID,
        "AllowedToExport" : request.body.allowedToExport,
        "CertificateID" : request.body.certificateID
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
 
 exports.getCropCertificateIssuers = async (_, response) => {
    await supabase
     .from("CertificateIssuer")
     .select()
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
 
 exports.getCropCertificateIssuerByID = async (request, response) => {
    await supabase
     .from("CertificateIssuer")
     .select()
     .eq("IssuerID", request.body.issuerID)
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
 
 exports.updateCropCertificateIssuer = async (request, response) => {
    await supabase
     .from("CertificateIssuer")
     .update({
       "IssuerName": request.body.issuerName,     
       "AllowedToExport" : request.body.allowedToExport,
       "CertificateID" : request.body.certificateID
     })
     .eq("IssuerID", request.body.issuerID)
     .then((_) => {
        response.status(200).send("GMB Certificate updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
 }
 
 exports.deleteCropCertificateIssuer = async (request, response) => {
    await supabase
     .from("CertificateIssuer")
     .delete()
     .eq("IssuerID", request.body.issuerID,)
     .then((_) => {
        response.status(200).send("Certificate deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
 }