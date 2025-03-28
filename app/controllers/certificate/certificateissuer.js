const supabase = require('../../db/supabase.js')

exports.createCropCertificateIssuer = async (request, response) => {
    await supabase
     .from("CertificateIssuer")
     .insert({
        "issuerName": request.body.issuerName,
      //   "issuerID": request.body.issuerID,
        "allowedToExport" : request.body.allowedToExport,
        "certificateID" : request.body.certificateID
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
 
 exports.getCropCertificateIssuerByID = async (request, response) => {
    await supabase
     .from("CertificateIssuer")
     .select()
     .eq("issuerID", request.body.issuerID)
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
 
 exports.updateCropCertificateIssuer = async (request, response) => {
    await supabase
     .from("CertificateIssuer")
     .update({
       "issuerName": request.body.issuerName,     
       "allowedToExport" : request.body.allowedToExport,
       "certificateID" : request.body.certificateID
     })
     .eq("issuerID", request.body.issuerID)
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
     .eq("issuerID", request.body.issuerID)
     .then((_) => {
        response.status(200).send("Certificate deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
 }