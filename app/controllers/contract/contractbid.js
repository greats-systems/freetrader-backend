const supabase = require('../../db/supabase.js')

exports.createContractBid = async (request, response) => {
    await supabase
     .from("ContractBid")
     .insert({
        "bidID": request.body.bidID,
        "contractID": request.body.contractID,
        "companyID" : request.body.companyID,
        "bidOpeningDate" : request.body.bidOpeningDate,
        "bidStatus" : request.body.bidStatus,
        "bidAmount" : request.body.bidAmount,
        "bidClosingDate" : request.body.bidClosingDate
     })
     .then((_) => {
        response.status(201).send("ContractBid created successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
 }
 
 exports.getContractBids = async (_, response) => {
    await supabase
     .from("ContractBid")
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
 
 exports.getContractBidByID = async (request, response) => {
    await supabase
     .from("ContractBid")
     .select()
     .eq("BidID", request.body.bidID)
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
 
 exports.updateContractBid = async (request, response) => {
    await supabase
     .from("ContractBid")
     .update({      
        "contractID": request.body.contractID,
        "companyID" : request.body.companyID,
        "bidOpeningDate" : request.body.bidOpeningDate,
        "bidStatus" : request.body.bidStatus,
        "bidAmount" : request.body.bidAmount,
        "bidClosingDate" : request.body.bidClosingDate
     })
     .eq("bidID", request.body.bidID)
     .then((_) => {
        response.status(200).send("ContractBid updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
 }
 
 exports.deleteContractBid = async (request, response) => {
    await supabase
     .from("CertificateIssuer")
     .delete()
     .eq("bidID", request.body.bidID)
     .then((_) => {
        response.status(200).send("ContractBid deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
 }