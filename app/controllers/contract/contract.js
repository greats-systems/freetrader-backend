const supabase = require('../../db/supabase.js')

exports.createContract = async (request, response) => {
    await supabase
     .from("Contract")
     .insert({
        "ContractID": request.body.contractID,
        "ContractTitle": request.body.contractTitle,
        "ContractDescription" : request.body.contractDescription,
        "ContractValue" : request.body.contractValue,
        "TenderDate" : request.body.tenderDate,
        "ClosingDate" : request.body.closingDate,
        "AwardDate" : request.body.awardDate,
        "AwardedTo" : request.body.awardedTo
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
       "ContractTitle": request.body.contractTitle,
       "ContractDescription" : request.body.contractDescription,
       "ContractValue" : request.body.contractValue,
       "TenderDate" : request.body.tenderDate,
       "ClosingDate" : request.body.closingDate,
       "AwardDate" : request.body.awardDate,
       "AwardedTo" : request.body.awardedTo
     })
     .eq("ContractID", request.body.contractID)
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
     .eq("ContractID", request.body.contractID)
     .then((_) => {
        response.status(200).send("Contract deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
 }