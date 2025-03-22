const supabase = require('../../db/supabase.js')

exports.createBankDetails = async (request, response) => {
    await supabase
     .from("FarmerBankDetails")
     .insert({
        "accountNumber": request.body.accountNumber,
        "bankName" : request.body.bankName,
        "branchName" : request.body.branchName,
        "branchCode" : request.body.branchCode,
        "accountName" : request.body.accountName,
        "accountType" : request.body.accountType,
        "walletAddress" : request.body.walletAddress,
        "walletType" : request.body.walletType,    
        "farmerID": request.body.farmerID    
     })
     .then((_) => {
        response.status(201).send("Farmer bank details created successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}


exports.getBankDetails = async (_, response) => {
    await supabase
     .from("FarmerBankDetails")
     .select()
     .then((data) => {
        if (Object.keys(data.data).length > 0) {
            response.status(200).send(data.data)
          }
          else{
            response.status(404).send('No data')
          }
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getBankDetailsByID = async (request, response) => {
    await supabase
     .from("FarmerBankDetails")
     .select()
     .eq("farmerID", request.body.farmerID)
     .then((data) => {
        if (Object.keys(data.data).length > 0) {
            response.status(200).send(data.data)
          }
          else{
            response.status(404).send('No data')
          }
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.updateBankDetails = async (request, response) => {
    await supabase
     .from("FarmerBankDetails")
     .update({
        "bankName" : request.body.bankName,
        "branchName" : request.body.branchName,
        "branchCode" : request.body.branchCode,
        "accountName" : request.body.accountName,
        "accountType" : request.body.accountType,
        "walletAddress" : request.body.walletAddress,
        "walletType" : request.body.walletType,     
     })
     .eq("accountNumber", request.body.accountNumber)
     .then((_) => {
        response.status(200).send("Farmer bank details updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteBankDetails = async (request, response) => {
    await supabase
     .from("FarmerBankDetails")
     .delete()
     .eq("accountNumber", request.body.accountNumber)
    //  .eq("NationalID", request.body.nationalID)
    //  .eq("FirstName", request.body.firstName)
    //  .eq("Surname", request.body.surname)
     .then((_) => {
        response.status(200).send("Farmer bank details deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}