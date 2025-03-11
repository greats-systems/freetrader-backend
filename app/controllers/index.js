const { createClient } = require("@supabase/supabase-js");
const env = require("dotenv");
const { response } = require("express");
env.config();
const supabase = createClient(process.env.URL, process.env.SERVICE_KEY);

/*
 * This file implements the CRUD functions for each freetrader relation in Supabase
 * We wil be dealing with the following relations: 
    1. Farmer
    2. FarmerFacilityDetails
    3. FarmerSpouse
    4. FarmerNextOfKin
    5. FarmerBankDetails
    6. Crop
    7. FarmerFacilityCooperative
    8. GMBCertificate
    9. CropProduction
 * We will also include a root controller as an entry point 
*/

exports.root = (_, response) => {
    response.status(200).send('Welcome to the FreeTrader backend')
}

/****************************************************************************************************Farmer********************************************************************************************/
exports.createFarmer = async (request, response) => {
   await supabase
    .from('Farmer')
    .insert({
 	'NationalID' : request.body.nationalid,
 	'Title' : request.body.title,
 	'FirstName' : request.body.firstname,
 	'Gender' : request.body.gender,
 	'Surname' : request.body.surname,
 	'DateOfBirth' : request.body.dateofbirth,
 	'MaidenSurname' : request.body.maidensurname,
 	'CountryOfBirth' : request.body.countryofbirth,
 	'NumberOfDependants' : request.body.numberofdependants,
 	'MaritalStatus' : request.body.maritalstatus,
 	'EmailAddress' : request.body.emailaddress,
 	'MobileNumber' : request.body.mobilenumber,
 	'HomeTelephoneNumber' : request.body.hometelephonenumber,
 	'PhysicalAddress' : request.body.physicaladdress,
 	'Province' : request.body.province,
 	'Country' : request.body.country,
 	'AccountNumber' : request.body.accountnumber,
 	'SpouseNationalID' : request.body.spousenationalid,
 	'NextOfKinID' : request.body.nextofkinnationalid,
 	'FarmID' : request.body.farmid,
   'FarmerID' : request.body.farmerid,
   'CommodityID': request.body.commodityid
    })
    .then((x) => {
      if (x.status == 201){
         response.status(201).send('Farmer created successfully!')
      }
      else {
         response.status(500).send(x.error)
      }
    })
    .catch((error) => {
    	response.status(500).send(error)
    })
}

exports.getFarmers = async (_, response) => {
  await supabase
    .from("Farmer")
    .select()
    .then((data) => {
      response.status(200).send(data.data);
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};

exports.getFarmerByID = async (request, response) => {
  await supabase
    .from("Farmer")
    .select()
    .eq("FirstName", request.query.FirstName)
    .then((data) => {
      if (Object.keys(data.data).length > 0) {
        response.status(200).send(data.data);
      } else response.status(404).send("Not found")
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};

exports.updateFarmer = async (request, response) => {
    await supabase
     .from("Farmer")
     .update({
        "Title": request.body.title,
        "FirstName": request.body.firstName,
        "Gender": request.body.gender,
        "Surname": request.body.surname,
        "DateOfBirth": request.body.dateOfBirth,
        "MaidenSurname": request.body.madenSurname,
        "CountryOfBirth": request.body.countryOfBirth,
        "NumberOfDependants": request.body.numberOfDependants,
        "MaritalStatus": request.body.maritalStatus,
        "EmailAddress": request.body.emailAddress,
        "MobileNumber": request.body.mobileNumber,
        "HomeTelephoneNumber": request.body.homeTelephoneNumber,
        "PhysicalAddress": request.body.physicalAddress,
        "Province": request.body.province,
        "Country": request.body.country,
        "AccountNumber": request.body.accountNumber,
        "SpouseNationalID": request.body.spouseNationalID,
        "NextOfKinNationalID": request.body.nextOfKinNationalID,
        "FarmID": request.body.farmID,
     })
     .eq("NationalID", request.body.nationalID)
     .then((_) => {
        response.status(200).send("Farmer updated successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
};

exports.deleteFarmer = async (request, response) => {
    await supabase
     .from("Farmer")
     .delete()
     .eq("NationalID", request.body.nationalID)
     .then((_) => {
        response.status(200).send("Farmer deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
};

/****************************************************************************************************FarmerSpouse********************************************************************************************/
exports.createSpouse = async (request, response) => {
    await supabase
     .from("FarmerSpouse")
     .insert({
        "NationalID": request.body.nationalID,
        "FirstName" : request.body.firstName,
        "Surname" : request.body.surname,
        "Address" : request.body.address,
        "PhoneNumber" : request.body.phoneNumber    
     })
     .then((_) => {
        response.status(201).send("Farmer spouse created successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getSpouses = async (_, response) => {
    await supabase
     .from("FarmerSpouse")
     .select()
     .then((data) => {
      response.status(200).send(data)
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getSpouseByID = async (request, response) => {
    await supabase
     .from("FarmerSpouse")
     .select()
     .eq("NationalID", request.body.nationalID)
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

exports.updateSpouse = async (request, response) => {
    await supabase
     .from("FarmerSpouse")
     .update({
        "FirstName" : request.body.firstName,
        "Surname" : request.body.surname,
        "Address" : request.body.address,
        "PhoneNumber" : request.body.phoneNumber,        
     })
     .then((_) => {
        response.status(200).send("Farmer spouse updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteSpouse = async (request, response) => {
    await supabase
     .from("FarmerSpouse")
     .delete()
    //  .eq("NationalID", request.body.nationalID)
     .eq("FirstName", request.body.firstName)
     .eq("Surname", request.body.surname)
     .then((_) => {
        response.status(200).send("Farmer spouse deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}

/****************************************************************************************************FarmerNextOfKin********************************************************************************************/
exports.createNextOfKin = async (request, response) => {
    await supabase
     .from("FarmerNextOfKin")
     .insert({
        "NationalID": request.body.nationalID,
        "FirstName" : request.body.firstName,
        "Surname" : request.body.surname,
        "Address" : request.body.address,
        "PhoneNumber" : request.body.phoneNumber,        
     })
     .then((_) => {
        response.status(201).send("Farmer next of kin created successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getNextOfKins = async (_, response) => {
    await supabase
     .from("FarmerNextOfKin")
     .select()
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

exports.getNextOfKinByID = async (request, response) => {
    await supabase
     .from("FarmerNextOfKin")
     .select()
     .eq("NationalID", request.body.nationalID)
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

exports.updateNextOfKin = async (request, response) => {
    await supabase
     .from("FarmerNextOfKin")
     .update({
        "FirstName" : request.body.firstName,
        "Surname" : request.body.surname,
        "Address" : request.body.address,
        "PhoneNumber" : request.body.phoneNumber,        
     })
     .eq("NationalID", request.body.nationalID)
     .then((_) => {
        response.status(200).send("Farmer next of kin updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteNextOfKin = async (request, response) => {
    await supabase
     .from("FarmerNextOfKin")
     .delete()
    //  .eq("NationalID", request.body.nationalID)
     .eq("FirstName", request.body.firstName)
     .eq("Surname", request.body.surname)
     .then((_) => {
        response.status(200).send("Farmer next of kin deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}

/****************************************************************************************************FarmerBankDetails********************************************************************************************/
exports.createBankDetails = async (request, response) => {
    await supabase
     .from("FarmerBankDetails")
     .insert({
        "AccountNumber": request.body.accountNumber,
        "BankName" : request.body.bankName,
        "BranchName" : request.body.branchName,
        "BranchCode" : request.body.branchCode,
        "AccountName" : request.body.accountName,
        "AccountType" : request.body.accountType,
        "WalletAddress" : request.body.walletAddress,
        "WalletType" : request.body.walletType,        
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
        if (Object.keys(data.data).length > 0){
            response.status(200).send(data)
        }
        else response.status(404).send("Not found")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getBankDetailsByID = async (request, response) => {
    await supabase
     .from("FarmerBankDetails")
     .select()
     .eq("AccountNumber", request.body.accountNumber)
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

/****************************************************************************************************FarmerFacilityDetails********************************************************************************************/
exports.createFacilityDetails = async (request, response) => {
    await supabase
     .from("FarmerFacilityDetails")
     .insert({
        "FarmID": request.body.farmID,
        "FarmName" : request.body.farmName,
        "PhysicalAddress" : request.body.physicalAddress,
        "Town/City" : request.body.townCity,
        "District" : request.body.district,
        "Province" : request.body.province,
        "Coordinates" : request.body.coordinates,
        "LandOwnership" : request.body.landOwnership,     
        "LandSize" : request.body.landSize,
        "LandType" : request.body.landType,
        "ArableLandSize" : request.body.arableLandSize,
        "NearestGMBDepot" : request.body.nearestGMBDepot,
        "CropID" : request.body.cropID,
        "OfferLetter/PlotNumber" : request.body.offerLetterPlotNumber,
        "AgritexReference" : request.body.agritexReference,
        "CooperativeID" : request.body.cooperativeID,
     })
     .then((_) => {
        response.status(201).send("Farmer facility details created successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getFacilityDetails = async (_, response) => {
    await supabase
     .from("FarmerFacilityDetails")
     .select()
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

exports.getFacilityDetailsByID = async (request, response) => {
    await supabase
     .from("FarmerFacilityDetails")
     .select()
     .eq("FarmID", request.query.FarmID)
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

exports.updateFacilityDetails = async (request, response) => {
    await supabase
     .from("FarmerFacilityDetails")
     .update({
        "FarmName" : request.body.farmName,
        "PhysicalAddress" : request.body.physicalAddress,
        "Town/City" : request.body.townCity,
        "District" : request.body.district,
        "Province" : request.body.province,
        "Coordinates" : request.body.coordinates,
        "LandOwnership" : request.body.landOwnership,     
        "LandSize" : request.body.landSize,
        "LandType" : request.body.landType,
        "ArableLandSize" : request.body.arableLandSize,
        "NearestGMBDepot" : request.body.nearestGMBDepot,
        "CropID" : request.body.cropID,
        "OfferLetter/PlotNumber" : request.body.offerLetterPlotNumber,
        "AgritexReference" : request.body.agritexReference,
        "CooperativeID" : request.body.cooperativeID,     
     })
     .eq("FarmID", request.body.farmID)
     .then((_) => {
        response.status(200).send("Farmer facility details updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteFacilityDetails = async (request, response) => {
    await supabase
     .from("FarmerFacilityDetails")
     .delete()
     .eq("FarmID", request.body.farmID)
     .then((_) => {
        response.status(200).send("Farmer facility details deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}

/****************************************************************************************************FarmerFacilityCooperative********************************************************************************************/
exports.createFacilityCooperative = async (request, response) => {
    await supabase
     .from("FarmerFacilityCooperative")
     .insert({
        "CooperativeID": request.body.cooperativeID,
        "CooperativeName" : request.body.cooperativeName,
        "CooperativeLocation" : request.body.cooperativeLocation,
        "AgriculturalSector" : request.body.agriculturalSector,
        "NumberOfFarmers" : request.body.numberOfFarmers,
        "LeadAgritexOfficer" : request.body.leadAgritexOfficer,
        "LeadAgronomist" : request.body.leadAgronomist       
     })
     .then((_) => {
        response.status(201).send("Farmer facility details created successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getFacilityCooperatives = async (_, response) => {
    await supabase
     .from("FarmerFacilityCooperative")
     .select()
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

exports.getFacilityCooperativeByID = async (request, response) => {
    await supabase
     .from("FarmerFacilityCooperative")
     .select()
     .eq("FarmID", request.body.accountNumber)
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

exports.updateFacilityCooperative = async (request, response) => {
    await supabase
     .from("FarmerFacilityCooperative")
     .update({
        "FarmName" : request.body.farmName,
        "PhysicalAddress" : request.body.physicalAddress,
        "Town/City" : request.body.townCity,
        "District" : request.body.district,
        "Province" : request.body.province,
        "Coordinates" : request.body.coordinates,
        "LandOwnership" : request.body.landOwnership,     
        "LandSize" : request.body.landSize,
        "LandType" : request.body.landType,
        "ArableLandSize" : request.body.arableLandSize,
        "NearestGMBDepot" : request.body.nearestGMBDepot,
        "CropID" : request.body.cropID,
        "OfferLetter/PlotNumber" : request.body.offerLetterPlotNumber,
        "AgritexReference" : request.body.agritexReference,
        "CooperativeID" : request.body.cooperativeID,     
     })
     .eq("FarmID", request.body.farmID)
     .then((_) => {
        response.status(200).send("Farmer facility details updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteFacilityCooperative = async (request, response) => {
    await supabase
     .from("FarmerFacilityCooperative")
     .delete()
     .eq("FarmID", request.body.farmID)
     .then((_) => {
        response.status(200).send("Farmer facility details deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}

exports.populateFarmerDashboard = async (request, response) => {
   await supabase
      .from("Farmer")
      .select(`
         FirstName, 
         Surname,
         EmailAddress,
         MobileNumber,
         PhysicalAddress,
         FarmID,
         FarmerFacilityDetails!FarmerFacilityDetails_FarmID_fkey(FarmID, FarmName, PhysicalAddress, District, LandSize, ArableLandSize, LandType)
        `)
      .eq("FirstName", request.query.FirstName)
      .then((data) => {
         if(data.status == 200){
            response.status(200).send(data.data)
         }
         else {
            response.status(500).send(data.error)
         }
         /*
         if (Object.keys(data.data).length > 0){
             response.status(200).send(data.data)
         }
         else response.status(404).send("Not found")
         */
      })
      .catch((error) => {
         response.status(500).send(error);
     });
}

/****************************************************************************************************Crop********************************************************************************************/
exports.createCrop = async (request, response) => {
    await supabase
     .from("Crop")
     .insert({
        "CropID": request.body.cropID,
        "CropName" : request.body.cropName,
        "Season" : request.body.season,
        "GMBCertificateID" : request.body.gmbCertificateID,
        "ProductionReferenceID" : request.body.productionReferenceID,
     })
     .then((_) => {
        response.status(201).send("Crop created successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getCrops = async (_, response) => {
    await supabase
     .from("Crop")
     .select()
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

exports.getCropByID = async (request, response) => {
    await supabase
     .from("Crop")
     .select()
     .eq("CropID", request.body.cropID)
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

exports.updateCrop = async (request, response) => {
    await supabase
     .from("Crop")
     .update({
        "CropName" : request.body.cropName,
        "Season" : request.body.season,
        "GMBCertificateID" : request.body.gmbCertificateID,
        "ProductionReferenceID" : request.body.productionReferenceID,  
     })
     .eq("CropID", request.body.cropID)
     .then((_) => {
        response.status(200).send("Crop updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteCrop = async (request, response) => {
    await supabase
     .from("Crop")
     .delete()
     .eq("CropID", request.body.cropID)
     .then((_) => {
        response.status(200).send("Crop deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}

/****************************************************************************************************CropProduction********************************************************************************************/
exports.createCropProduction = async (request, response) => {
    await supabase
     .from("Crop")
     .insert({
        "ProductionReferenceID": request.body.productionReferenceID,
        "PlantingDate" : request.body.plantingDate,
        "HarvestDate" : request.body.harvestDate,
        "CropYield" : request.body.cropYield,
     })
     .then((_) => {
        response.status(201).send("Crop created successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getCropProductions = async (_, response) => {
    await supabase
     .from("Crop")
     .select()
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

exports.getCropProductionByID = async (request, response) => {
    await supabase
     .from("Crop")
     .select()
     .eq("ProductionReferenceID", request.body.productionReferenceID)
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

exports.updateCropProduction = async (request, response) => {
    await supabase
     .from("Crop")
     .update({
        "PlantingDate" : request.body.plantingDate,
        "HarvestDate" : request.body.harvestDate,
        "CropYield" : request.body.cropYield, 
     })
     .eq("ProductionReferenceID", request.body.productionReferenceID)
     .then((_) => {
        response.status(200).send("Crop updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteCropProduction = async (request, response) => {
    await supabase
     .from("Crop")
     .delete()
     .eq("ProductionReferenceID", request.body.productionReferenceID)
     .then((_) => {
        response.status(200).send("Crop deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}

/****************************************************************************************************GMBCertificate********************************************************************************************/
exports.createGMBCertificate = async (request, response) => {
    await supabase
     .from("GMBCertificate")
     .insert({
        "GMBCertificateID": request.body.gmbCertificateID,
        "CertificateName" : request.body.certificateName,
        "IssuedBy" : request.body.issuedBy,
        "DateOfIssue" : request.body.dateOfIssue,
        "MarketValueOnDateOfIssue" : request.body.marketValueOnDateOfIssue,
        "CropGrade" : request.body.cropGrade,
        "DateOfExpiry" : request.body.dateOfExpiry,
        "MarketValueOnDateOfExpiry" : request.body.marketValueOnDateOfExpiry,
     })
     .then((_) => {
        response.status(201).send("GMB Certificate created successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.getGMBCertificates = async (_, response) => {
    await supabase
     .from("GMBCertificate")
     .select()
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

exports.getGMBCertificateByID = async (request, response) => {
    await supabase
     .from("GMBCertificate")
     .select()
     .eq("GMBCertificateID", request.body.gmbCertificateID)
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

exports.updateGMBCertificate = async (request, response) => {
    await supabase
     .from("GMBCertificate")
     .update({
        "PlantingDate" : request.body.plantingDate,
        "HarvestDate" : request.body.harvestDate,
        "CropYield" : request.body.cropYield, 
     })
     .eq("ProductionReferenceID", request.body.productionReferenceID)
     .then((_) => {
        response.status(200).send("GMB Certificate updated successfully!")
     })
     .catch((error) => {
        response.status(500).send(error);
    });
}

exports.deleteGMBCertificate = async (request, response) => {
    await supabase
     .from("GMBCertificate")
     .delete()
     .eq("ProductionReferenceID", request.body.productionReferenceID)
     .then((_) => {
        response.status(200).send("GMB Certificate deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}