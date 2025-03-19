const supabase = require('../../db/supabase.js')

exports.createWard = async (request, response) => {
    await supabase
     .from("Wards")
     .insert({
        "province": request.body.province,
        "district": request.body.district,
        "admin" : request.body.admin,
        "councilor" : request.body.councilor,
        "fao_handler" : request.body.faoHandler,
        "popular_commodity" : request.body.popularCommodity,
     })
     .then((data) => {
    //    response.send(data)
       if (data.status == 201){
          response.status(201).send('Farmer created successfully!')
       }
       else {
          response.status(500).send(data.error)
       }
     })
     .catch((error) => {
        response.status(500).send(error);
    });
 }
 
 exports.getWards = async (_, response) => {
    await supabase
     .from("Wards")
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
 
/*
exports.getWardByID = async (request, response) => {
   await supabase
    .from("Wards")
    .select()
    .eq("BidID", request.body.bidID)
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

exports.updateWard = async (request, response) => {
   await supabase
    .from("Wards")
    .update({      
      "ContractID": request.body.contractID,
      "CompanyID" : request.body.companyID,
      "BidOpeningDate" : request.body.bidOpeningDate,
      "BidStatus" : request.body.bidStatus,
      "BidAmount" : request.body.bidAmount,
      "BidClosingDate" : request.body.bidClosingDate,
    })
    .eq("BidID", request.body.bidID)
    .then((_) => {
       response.status(200).send("Wards updated successfully!")
    })
    .catch((error) => {
       response.status(500).send(error);
   });
}

exports.deleteWard = async (request, response) => {
   await supabase
    .from("CertificateIssuer")
    .delete()
    .eq("BidID", request.body.bidID)
    .then((_) => {
       response.status(200).send("Wards deleted successfully!");
     })
     .catch((error) => {
       response.status(500).send(error);
     });
}
*/