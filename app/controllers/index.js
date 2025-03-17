const { createClient } = require("@supabase/supabase-js");
const env = require("dotenv");
const _ = require('lodash')
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
    8. CropCertificate
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
    .eq("NationalID", request.query.nationalid)
    .then((data) => {
      if(data.status==200){
         response.status(200).send(data.data)
      }
      else{
         response.status(500).send(data)
      }
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
        "NationalID": request.body.nationalid,
        "FirstName" : request.body.firstname,
        "Surname" : request.body.surname,
        "Address" : request.body.address,
        "PhoneNumber" : request.body.phonenumber,
        "FarmerID": request.body.farmerid 
     })
     .then((data) => {
      if (data.status == 201) {
          response.status(201).send(data)
      } else {
          response.status(500).send(data)
      }
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
         if (data.status == 201) {
            response.status(201).send(data)
         } else {
            response.status(500).send(data)
     }
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
            if (data.status == 201) {
               response.status(201).send(data)
         } else {
               response.status(500).send(data)
         }
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
        "NationalID": request.body.nationalid,
        "FirstName" : request.body.firstname,
        "Surname" : request.body.surname,
        "Address" : request.body.address,
        "PhoneNumber" : request.body.phonenumber,
        "Relationship": request.body.relationship,
        "FarmerID": request.body.farmerid    
     })
     .then((data) => {
        if (data.status == 201){
            response.status(201).send(data.data)
        } else {
            response.status(500).send(data)
        }
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
     .eq("FarmerID", request.body.farmerid)
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
        "FarmID": request.body.farmid,
        "FarmName" : request.body.farmname,
        "PhysicalAddress" : request.body.physicaladdress,
        "TownCity" : request.body.towncity,
        "District" : request.body.district,
        "Province" : request.body.province,
        "CoordinatesLat" : request.body.coordinateslat,
        "CoordinatesLong" : request.body.coordinateslong,
        "LandOwnership" : request.body.landownership,     
        "LandSize" : request.body.landsize,
        "LandType" : request.body.landtype,
        "ArableLandSize" : request.body.arablelandsize,
        "NearestGMBDepot" : request.body.nearestgmbdepot,
        "CropID" : request.body.cropid,
        "OfferLetter/PlotNumber" : request.body.offerletterplotnumber,
        "AgritexReference" : request.body.agritexreference,
        "CooperativeID" : request.body.cooperativeid,
        "FarmerID": request.body.farmerid
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
            response.status(200).send(data.data)
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
     .eq("FarmerID", request.query.farmerid)
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
            response.status(200).send(data.data)
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
         FarmerID,
         FarmerNextOfKin
         (
            SpouseFirstName: FirstName,
            SpouseSurname: Surname,
            SpouseAddress: Address,
            SpousePhoneNumber: PhoneNumber
         )        
        `)
      // .eq("FirstName", request.query.FirstName)
      .then((data) => {
         response.send(data.data)
         // if(data.status == 200){
         //    response.status(200).send(data.data)
         // }
         // else {
         //    response.status(500).send(data.error)
         // }
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
        "FarmID": request.body.farmID
      //   "CertificateID" : request.body.certificateID,
     })
     .then((data) => {
        response.send(data)
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
            response.status(200).send(data.data)
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
        "CropCertificateID" : request.body.CropCertificateID,  
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
        "CropID": request.body.cropID,
        "PlantingDate" : request.body.plantingDate,
        "HarvestDate" : request.body.harvestDate,
        "CropYield" : request.body.cropYield
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

/****************************************************************************************************CropCertificate********************************************************************************************/
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
     .then((_) => {
        response.status(201).send("Certificate created successfully!")
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
        if (Object.keys(data.data).length > 0){
            response.status(200).send(data.data)
        }
        else response.status(404).send("Not found")
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

/****************************************************************************************************CertificateIssuer********************************************************************************************/
exports.createCropCertificateIssuer = async (request, response) => {
   await supabase
    .from("CertificateIssuer")
    .insert({
       "IssuerName": request.body.issuerName,
       "IssuerID": request.body.issuerID,
       "AllowedToExport" : request.body.allowedToExport,
       "CertificateID" : request.body.certificateID
    })
    .then((_) => {
       response.status(201).send("CertificateIssuer created successfully!")
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
       if (Object.keys(data.data).length > 0){
           response.status(200).send(data.data)
       }
       else response.status(404).send("Not found")
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

/****************************************************************************************************Contract********************************************************************************************/
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
       if (Object.keys(data.data).length > 0){
           response.status(200).send(data.data)
       }
       else response.status(404).send("Not found")
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
       if (Object.keys(data.data).length > 0){
           response.status(200).send(data)
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

/****************************************************************************************************ContractBid********************************************************************************************/
exports.createContractBid = async (request, response) => {
   await supabase
    .from("ContractBid")
    .insert({
       "BidID": request.body.bidID,
       "ContractID": request.body.contractID,
       "CompanyID" : request.body.companyID,
       "BidOpeningDate" : request.body.bidOpeningDate,
       "BidStatus" : request.body.bidStatus,
       "BidAmount" : request.body.bidAmount,
       "BidClosingDate" : request.body.bidClosingDate
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
       if (Object.keys(data.data).length > 0){
           response.status(200).send(data.data)
       }
       else response.status(404).send("Not found")
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
       if (Object.keys(data.data).length > 0){
           response.status(200).send(data)
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
      "ContractID": request.body.contractID,
      "CompanyID" : request.body.companyID,
      "BidOpeningDate" : request.body.bidOpeningDate,
      "BidStatus" : request.body.bidStatus,
      "BidAmount" : request.body.bidAmount,
      "BidClosingDate" : request.body.bidClosingDate,
    })
    .eq("BidID", request.body.bidID)
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
    .eq("BidID", request.body.bidID)
    .then((_) => {
       response.status(200).send("ContractBid deleted successfully!");
     })
     .catch((error) => {
       response.status(500).send(error);
     });
}

/****************************************************************************************************Wards********************************************************************************************/
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
    .then((x) => {
      response.send(x)
      // if (x.status == 201){
      //    response.status(201).send('Farmer created successfully!')
      // }
      // else {
      //    response.status(500).send(x.error)
      // }
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
       if (Object.keys(data.data).length > 0){
           response.status(200).send(data.data)
       }
       else response.status(404).send("Not found")
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