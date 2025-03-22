const supabase = require('../../db/supabase.js')

exports.createBankDetails = async (request, response) => {
    await supabase
     .from("FarmerBankDetails")
     .insert({
        "AccountNumber": request.body.accountnumber,
        "BankName" : request.body.bankname,
        "BranchName" : request.body.branchname,
        "BranchCode" : request.body.branchcode,
        "AccountName" : request.body.accountname,
        "AccountType" : request.body.accounttype,
        "WalletAddress" : request.body.walletaddress,
        "WalletType" : request.body.wallettype,    
        "FarmerID": request.body.farmerid    
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
     .eq("FarmerID", request.body.farmerid)
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
        "BankName" : request.body.bankName,
        "BranchName" : request.body.branchName,
        "BranchCode" : request.body.branchCode,
        "AccountName" : request.body.accountName,
        "AccountType" : request.body.accountType,
        "WalletAddress" : request.body.walletAddress,
        "WalletType" : request.body.walletType,            
     })
     .eq("AccountNumber", request.body.accountNumber)
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
    //  .eq("NationalID", request.body.nationalID)
     .eq("FirstName", request.body.firstName)
     .eq("Surname", request.body.surname)
     .then((_) => {
        response.status(200).send("Farmer bank details deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}