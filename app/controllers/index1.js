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
      'NextOfKinNationalID' : request.body.nextofkinnationalid,
      'FarmID' : request.body.farmid
     })
     .then((_) => {
         response.status(201).send('Farmer created successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getFarmers = async (_, response) => {
    await supabase
     .from('Farmer')
     .select()
     .then((data) => {
       if (Object.keys(data.data).length > 0) {
         response.status(200).send(data)
     } else response.status(404).send("Not found")
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getFarmerByID = async (request, response) => {
    await supabase
     .from('Farmer')
     .select()
     .eq("NationalID", request.body.nationalid)
     .then((data) => {
         response.status(200).send(data)
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.updateFarmer = async (request, response) => {
    await supabase
     .from('Farmer')
     .update({
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
      'NextOfKinNationalID' : request.body.nextofkinnationalid,
      'FarmID' : request.body.farmid
     })
     .eq('NationalID', request.body.nationalid)
     .then((_) => {
         response.status(200).send('Farmer updated successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.deleteFarmer = async (request, response) => {
    await supabase
     .from('Farmer')
     .delete()
     .eq("NationalID", request.body.nationalid)
     .then((_) => {
         response.status(200).send('Farmer deleted successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.createFarmerNextOfKin = async (request, response) => {
    await supabase
     .from('FarmerNextOfKin')
     .insert({
      'NationalID' : request.body.nationalid,
      'FirstName' : request.body.firstname,
      'Surname' : request.body.surname,
      'Address' : request.body.address,
      'PhoneNumber' : request.body.phonenumber
     })
     .then((_) => {
         response.status(201).send('FarmerNextOfKin created successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getFarmerNextOfKins = async (_, response) => {
    await supabase
     .from('FarmerNextOfKin')
     .select()
     .then((data) => {
       if (Object.keys(data.data).length > 0) {
         response.status(200).send(data)
     } else response.status(404).send("Not found")
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getFarmerNextOfKinByID = async (request, response) => {
    await supabase
     .from('FarmerNextOfKin')
     .select()
     .eq("NationalID", request.body.nationalid)
     .then((data) => {
         response.status(200).send(data)
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.updateFarmerNextOfKin = async (request, response) => {
    await supabase
     .from('FarmerNextOfKin')
     .update({
      'FirstName' : request.body.firstname,
      'Surname' : request.body.surname,
      'Address' : request.body.address,
      'PhoneNumber' : request.body.phonenumber
     })
     .eq('NationalID', request.body.nationalid)
     .then((_) => {
         response.status(200).send('FarmerNextOfKin updated successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.deleteFarmerNextOfKin = async (request, response) => {
    await supabase
     .from('FarmerNextOfKin')
     .delete()
     .eq("NationalID", request.body.nationalid)
     .then((_) => {
         response.status(200).send('FarmerNextOfKin deleted successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.createFarmerBankDetails = async (request, response) => {
    await supabase
     .from('FarmerBankDetails')
     .insert({
      'AccountNumber' : request.body.accountnumber,
      'BankName' : request.body.bankname,
      'BranchName' : request.body.branchname,
      'BranchCode' : request.body.branchcode,
      'AccountName' : request.body.accountname,
      'AccountType' : request.body.accounttype,
      'WalletAddress' : request.body.walletaddress,
      'WalletType' : request.body.wallettype
     })
     .then((_) => {
         response.status(201).send('FarmerBankDetails created successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getFarmerBankDetailss = async (_, response) => {
    await supabase
     .from('FarmerBankDetails')
     .select()
     .then((data) => {
       if (Object.keys(data.data).length > 0) {
         response.status(200).send(data)
     } else response.status(404).send("Not found")
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getFarmerBankDetailsByID = async (request, response) => {
    await supabase
     .from('FarmerBankDetails')
     .select()
     .eq("AccountNumber", request.body.accountnumber)
     .then((data) => {
         response.status(200).send(data)
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.updateFarmerBankDetails = async (request, response) => {
    await supabase
     .from('FarmerBankDetails')
     .update({
      'BankName' : request.body.bankname,
      'BranchName' : request.body.branchname,
      'BranchCode' : request.body.branchcode,
      'AccountName' : request.body.accountname,
      'AccountType' : request.body.accounttype,
      'WalletAddress' : request.body.walletaddress,
      'WalletType' : request.body.wallettype
     })
     .eq('AccountNumber', request.body.accountnumber)
     .then((_) => {
         response.status(200).send('FarmerBankDetails updated successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.deleteFarmerBankDetails = async (request, response) => {
    await supabase
     .from('FarmerBankDetails')
     .delete()
     .eq("AccountNumber", request.body.accountnumber)
     .then((_) => {
         response.status(200).send('FarmerBankDetails deleted successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.createFarmerSpouse = async (request, response) => {
    await supabase
     .from('FarmerSpouse')
     .insert({
      'NationalID' : request.body.nationalid,
      'FirstName' : request.body.firstname,
      'Surname' : request.body.surname,
      'Address' : request.body.address,
      'PhoneNumber' : request.body.phonenumber
     })
     .then((_) => {
         response.status(201).send('FarmerSpouse created successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getFarmerSpouses = async (_, response) => {
    await supabase
     .from('FarmerSpouse')
     .select()
     .then((data) => {
       if (Object.keys(data.data).length > 0) {
         response.status(200).send(data)
     } else response.status(404).send("Not found")
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getFarmerSpouseByID = async (request, response) => {
    await supabase
     .from('FarmerSpouse')
     .select()
     .eq("NationalID", request.body.nationalid)
     .then((data) => {
         response.status(200).send(data)
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.updateFarmerSpouse = async (request, response) => {
    await supabase
     .from('FarmerSpouse')
     .update({
      'FirstName' : request.body.firstname,
      'Surname' : request.body.surname,
      'Address' : request.body.address,
      'PhoneNumber' : request.body.phonenumber
     })
     .eq('NationalID', request.body.nationalid)
     .then((_) => {
         response.status(200).send('FarmerSpouse updated successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.deleteFarmerSpouse = async (request, response) => {
    await supabase
     .from('FarmerSpouse')
     .delete()
     .eq("NationalID", request.body.nationalid)
     .then((_) => {
         response.status(200).send('FarmerSpouse deleted successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.createFarmerFacilityDetails = async (request, response) => {
    await supabase
     .from('FarmerFacilityDetails')
     .insert({
      'FarmID' : request.body.farmid,
      'FarmName' : request.body.farmname,
      'PhysicalAddress' : request.body.physicaladdress,
      'TownCity' : request.body.towncity,
      'District' : request.body.district,
      'Province' : request.body.province,
      'Coordinates' : request.body.coordinates,
      'LandOwnership' : request.body.landownership,
      'LandSize' : request.body.landsize,
      'LandType' : request.body.landtype,
      'ArableLandSize' : request.body.arablelandsize,
      'NearestGMBDepot' : request.body.nearestgmbdepot,
      'CropID' : request.body.cropid,
      'OfferLetterPlotNumber' : request.body.offerletterplotnumber,
      'AgritexReference' : request.body.agritexreference,
      'CooperativeID' : request.body.cooperativeid
     })
     .then((_) => {
         response.status(201).send('FarmerFacilityDetails created successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getFarmerFacilityDetailss = async (_, response) => {
    await supabase
     .from('FarmerFacilityDetails')
     .select()
     .then((data) => {
       if (Object.keys(data.data).length > 0) {
         response.status(200).send(data)
     } else response.status(404).send("Not found")
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getFarmerFacilityDetailsByID = async (request, response) => {
    await supabase
     .from('FarmerFacilityDetails')
     .select()
     .eq("FarmID", request.body.farmid)
     .then((data) => {
         response.status(200).send(data)
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.updateFarmerFacilityDetails = async (request, response) => {
    await supabase
     .from('FarmerFacilityDetails')
     .update({
      'FarmName' : request.body.farmname,
      'PhysicalAddress' : request.body.physicaladdress,
      'TownCity' : request.body.towncity,
      'District' : request.body.district,
      'Province' : request.body.province,
      'Coordinates' : request.body.coordinates,
      'LandOwnership' : request.body.landownership,
      'LandSize' : request.body.landsize,
      'LandType' : request.body.landtype,
      'ArableLandSize' : request.body.arablelandsize,
      'NearestGMBDepot' : request.body.nearestgmbdepot,
      'CropID' : request.body.cropid,
      'OfferLetterPlotNumber' : request.body.offerletterplotnumber,
      'AgritexReference' : request.body.agritexreference,
      'CooperativeID' : request.body.cooperativeid
     })
     .eq('FarmID', request.body.farmid)
     .then((_) => {
         response.status(200).send('FarmerFacilityDetails updated successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.deleteFarmerFacilityDetails = async (request, response) => {
    await supabase
     .from('FarmerFacilityDetails')
     .delete()
     .eq("FarmID", request.body.farmid)
     .then((_) => {
         response.status(200).send('FarmerFacilityDetails deleted successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.createFarmerFacilityCooperative = async (request, response) => {
    await supabase
     .from('FarmerFacilityCooperative')
     .insert({
      'CooperativeID' : request.body.cooperativeid,
      'CooperativeName' : request.body.cooperativename,
      'CooperativeLocation' : request.body.cooperativelocation,
      'AgriculturalSector' : request.body.agriculturalsector,
      'NumberOfFarmers' : request.body.numberoffarmers,
      'LeadAgritexOfficer' : request.body.leadagritexofficer,
      'LeadAgronomist' : request.body.leadagronomist
     })
     .then((_) => {
         response.status(201).send('FarmerFacilityCooperative created successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getFarmerFacilityCooperatives = async (_, response) => {
    await supabase
     .from('FarmerFacilityCooperative')
     .select()
     .then((data) => {
       if (Object.keys(data.data).length > 0) {
         response.status(200).send(data)
     } else response.status(404).send("Not found")
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getFarmerFacilityCooperativeByID = async (request, response) => {
    await supabase
     .from('FarmerFacilityCooperative')
     .select()
     .eq("CooperativeID", request.body.cooperativeid)
     .then((data) => {
         response.status(200).send(data)
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.updateFarmerFacilityCooperative = async (request, response) => {
    await supabase
     .from('FarmerFacilityCooperative')
     .update({
      'CooperativeName' : request.body.cooperativename,
      'CooperativeLocation' : request.body.cooperativelocation,
      'AgriculturalSector' : request.body.agriculturalsector,
      'NumberOfFarmers' : request.body.numberoffarmers,
      'LeadAgritexOfficer' : request.body.leadagritexofficer,
      'LeadAgronomist' : request.body.leadagronomist
     })
     .eq('CooperativeID', request.body.cooperativeid)
     .then((_) => {
         response.status(200).send('FarmerFacilityCooperative updated successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.deleteFarmerFacilityCooperative = async (request, response) => {
    await supabase
     .from('FarmerFacilityCooperative')
     .delete()
     .eq("CooperativeID", request.body.cooperativeid)
     .then((_) => {
         response.status(200).send('FarmerFacilityCooperative deleted successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.createCrop = async (request, response) => {
    await supabase
     .from('Crop')
     .insert({
      'CropID' : request.body.cropid,
      'CropName' : request.body.cropname,
      'Season' : request.body.season,
      'GMBCertificateID' : request.body.gmbcertificateid,
      'ProductionReferenceID' : request.body.productionreferenceid
     })
     .then((_) => {
         response.status(201).send('Crop created successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getCrops = async (_, response) => {
    await supabase
     .from('Crop')
     .select()
     .then((data) => {
       if (Object.keys(data.data).length > 0) {
         response.status(200).send(data)
     } else response.status(404).send("Not found")
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getCropByID = async (request, response) => {
    await supabase
     .from('Crop')
     .select()
     .eq("CropID", request.body.cropid)
     .then((data) => {
         response.status(200).send(data)
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.updateCrop = async (request, response) => {
    await supabase
     .from('Crop')
     .update({
      'CropName' : request.body.cropname,
      'Season' : request.body.season,
      'GMBCertificateID' : request.body.gmbcertificateid,
      'ProductionReferenceID' : request.body.productionreferenceid
     })
     .eq('CropID', request.body.cropid)
     .then((_) => {
         response.status(200).send('Crop updated successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.deleteCrop = async (request, response) => {
    await supabase
     .from('Crop')
     .delete()
     .eq("CropID", request.body.cropid)
     .then((_) => {
         response.status(200).send('Crop deleted successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.createCropProduction = async (request, response) => {
    await supabase
     .from('CropProduction')
     .insert({
      'ProductionReferenceID' : request.body.productionreferenceid,
      'PlantingDate' : request.body.plantingdate,
      'HarvestDate' : request.body.harvestdate,
      'CropYield' : request.body.cropyield
     })
     .then((_) => {
         response.status(201).send('CropProduction created successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getCropProductions = async (_, response) => {
    await supabase
     .from('CropProduction')
     .select()
     .then((data) => {
       if (Object.keys(data.data).length > 0) {
         response.status(200).send(data)
     } else response.status(404).send("Not found")
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getCropProductionByID = async (request, response) => {
    await supabase
     .from('CropProduction')
     .select()
     .eq("ProductionReferenceID", request.body.productionreferenceid)
     .then((data) => {
         response.status(200).send(data)
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.updateCropProduction = async (request, response) => {
    await supabase
     .from('CropProduction')
     .update({
      'PlantingDate' : request.body.plantingdate,
      'HarvestDate' : request.body.harvestdate,
      'CropYield' : request.body.cropyield
     })
     .eq('ProductionReferenceID', request.body.productionreferenceid)
     .then((_) => {
         response.status(200).send('CropProduction updated successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.deleteCropProduction = async (request, response) => {
    await supabase
     .from('CropProduction')
     .delete()
     .eq("ProductionReferenceID", request.body.productionreferenceid)
     .then((_) => {
         response.status(200).send('CropProduction deleted successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.createGMBCertificate = async (request, response) => {
    await supabase
     .from('GMBCertificate')
     .insert({
      'GMBCertificateID' : request.body.gmbcertificateid,
      'CertificateName' : request.body.certificatename,
      'IssuedBy' : request.body.issuedby,
      'DateOfIssue' : request.body.dateofissue,
      'MarketValueOnDateOfIssue' : request.body.marketvalueondateofissue,
      'CropGrade' : request.body.cropgrade,
      'DateOfExpiry' : request.body.dateofexpiry,
      'MarketValueOnDateOfExpiry' : request.body.marketvalueondateofexpiry
     })
     .then((_) => {
         response.status(201).send('GMBCertificate created successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getGMBCertificates = async (_, response) => {
    await supabase
     .from('GMBCertificate')
     .select()
     .then((data) => {
       if (Object.keys(data.data).length > 0) {
         response.status(200).send(data)
     } else response.status(404).send("Not found")
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.getGMBCertificateByID = async (request, response) => {
    await supabase
     .from('GMBCertificate')
     .select()
     .eq("GMBCertificateID", request.body.gmbcertificateid)
     .then((data) => {
         response.status(200).send(data)
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.updateGMBCertificate = async (request, response) => {
    await supabase
     .from('GMBCertificate')
     .update({
      'CertificateName' : request.body.certificatename,
      'IssuedBy' : request.body.issuedby,
      'DateOfIssue' : request.body.dateofissue,
      'MarketValueOnDateOfIssue' : request.body.marketvalueondateofissue,
      'CropGrade' : request.body.cropgrade,
      'DateOfExpiry' : request.body.dateofexpiry,
      'MarketValueOnDateOfExpiry' : request.body.marketvalueondateofexpiry
     })
     .eq('GMBCertificateID', request.body.gmbcertificateid)
     .then((_) => {
         response.status(200).send('GMBCertificate updated successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 exports.deleteGMBCertificate = async (request, response) => {
    await supabase
     .from('GMBCertificate')
     .delete()
     .eq("GMBCertificateID", request.body.gmbcertificateid)
     .then((_) => {
         response.status(200).send('GMBCertificate deleted successfully!')
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }