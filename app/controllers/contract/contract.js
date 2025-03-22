const supabase = require('../../db/supabase.js')

exports.createContract = async (request, response) => {
    await supabase
     .from("Contract")
     .insert({
        "contractID": request.body.contractID,
        "contractTitle": request.body.contractTitle,
        "contractDescription" : request.body.contractDescription,
        "contractValue" : request.body.contractValue,
        "tenderDate" : request.body.tenderDate,
        "closingDate" : request.body.closingDate,
        "awardDate" : request.body.awardDate,
        "awardedTo" : request.body.awardedTo,
        "issuerID":request.body.issuerID
     })
     .then((_) => {
        response.status(201).send("Contract created successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
 }
 
 exports.getContracts = async (_, response) => {
    await supabase
     .from("Contract")
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
 
 exports.getContractByID = async (request, response) => {
    await supabase
     .from("Contract")
     .select()
     .eq("Contract", request.body.contractID)
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
 
 exports.updateContract = async (request, response) => {
    await supabase
     .from("Contract")
     .update({
         "contractTitle": request.body.contractTitle,
         "contractDescription" : request.body.contractDescription,
         "contractValue" : request.body.contractValue,
         "tenderDate" : request.body.tenderDate,
         "closingDate" : request.body.closingDate,
         "awardDate" : request.body.awardDate,
         "awardedTo" : request.body.awardedTo,
         "issuerID":request.body.issuerID
     })
     .eq("contractID", request.body.contractID)
     .then((_) => {
        response.status(200).send("Contract updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
 }
 
 exports.deleteContract = async (request, response) => {
    await supabase
     .from("CertificateIssuer")
     .delete()
     .eq("contractID", request.body.contractID)
     .then((_) => {
        response.status(200).send("Contract deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
 }