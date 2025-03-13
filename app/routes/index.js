/*
 * This file defines the routes that will be used by the various front-end apps
 */

module.exports = (app) => {
    const controller = require('../controllers/index.js')
    var router = require('express').Router()

    // Root
    router.get('/', controller.root)

    // Farmer methods
    router.post('/farmer/create', controller.createFarmer)
    router.get('/farmers', controller.getFarmers)
    router.get('/farmer', controller.getFarmerByID)
    router.put('/farmer/update', controller.updateFarmer)
    router.delete('/farmer/delete', controller.deleteFarmer)

    // FarmerSpouse methods
    router.post('/spouse/create', controller.createSpouse)
    router.get('/spouses', controller.getSpouses)
    router.get('/spouse', controller.getSpouseByID)
    router.put('/spouse/update', controller.updateSpouse)
    router.delete('/spouse/delete', controller.deleteSpouse)

    // FarmerNextOfKin methods
    router.post('/next-of-kin/create', controller.createNextOfKin)
    router.get('/next-of-kins', controller.getNextOfKins)
    router.get('/next-of-kin', controller.getNextOfKinByID)
    router.put('/next-of-kin/update', controller.updateNextOfKin)
    router.delete('/next-of-kin/delete', controller.deleteNextOfKin)

    // FarmerBankDetails methods
    router.post('/bank-details/create', controller.createBankDetails)
    router.get('/bank-details', controller.getBankDetails)
    router.get('/farmer-bank-details', controller.getBankDetailsByID)
    router.put('/bank-details/update', controller.updateBankDetails)
    router.delete('/bank-details/delete', controller.deleteBankDetails)

    // FarmerFacilityDetails methods
    router.post('/farm/create', controller.createFacilityDetails)
    router.get('/farms', controller.getFacilityDetails)
    router.get('/farm', controller.getFacilityDetailsByID)
    router.put('/farm/update', controller.updateFacilityDetails)
    router.delete('/farm/delete', controller.deleteFacilityDetails)

    // Farmer dashboard
    router.get('/farmer-dashboard', controller.populateFarmerDashboard)
    
    // FarmerFacilityCooperative methods
    router.post('/facility-cooperative/create', controller.createFacilityCooperative)
    router.get('/facility-cooperatives', controller.getFacilityCooperatives)
    router.get('/facility-cooperative', controller.getFacilityCooperativeByID)
    router.put('/facility-cooperative/update', controller.updateFacilityCooperative)
    router.delete('/facility-cooperative/delete', controller.deleteFacilityCooperative)

    // Crop methods
    router.post('/crop/create', controller.createCrop)
    router.get('/crops', controller.getCrops)
    router.get('/crop', controller.getCropByID)
    router.put('/crop/update', controller.updateCrop)
    router.delete('/crop/delete', controller.deleteCrop)

    // CropProduction methods
    router.post('/crop-production/create', controller.createCropProduction)
    router.get('/crop-productions', controller.getCropProductions)
    router.get('/crop-production', controller.getCropProductionByID)
    router.put('/crop-production/update', controller.updateCropProduction)
    router.delete('/crop-production/delete', controller.deleteCropProduction)

    // Certificate methods
    router.post('/certificate/create', controller.createCertificate)
    router.get('/certificates', controller.getCropCertificates)
    router.get('/certificate', controller.getCropCertificateByID)
    router.put('/certificate/update', controller.updateCropCertificate)
    router.delete('/certificate/delete', controller.deleteCropCertificate)

    // CertificateIssuer methods
    router.post('/certificate-issuer/create', controller.createCropCertificateIssuer)
    router.get('/certificate-issuers', controller.getCropCertificateIssuers)
    router.get('/certificate-issuer', controller.getCropCertificateIssuerByID)
    router.put('/certificate-issuer/update', controller.updateCropCertificateIssuer)
    router.delete('/certificate-issuer/delete', controller.deleteCropCertificateIssuer)

    // Contract methods
    router.post('/contract/create', controller.createContract)
    router.get('/contracts', controller.getContracts)
    router.get('/contract', controller.getContractByID)
    router.put('/contract/update', controller.updateContract)
    router.delete('/contract/delete', controller.deleteContract)

    // Contract bid methods
    router.post('/contract-bid/create', controller.createContractBid)
    router.get('/contract-bids', controller.getContractBids)
    router.get('/contract-bid', controller.getContractBidByID)
    router.put('/contract-bid/update', controller.updateContractBid)
    router.delete('/contract-bid/delete', controller.deleteContractBid)

    // Ward methods
    router.post('/ward/create', controller.createWard)
    router.get('/wards', controller.getWards)
    // router.get('/contract-bid', controller.getWardByID)
    // router.put('/contract-bid/update', controller.updateWard)
    // router.delete('/contract-bid/delete', controller.deleteWard)

    // Access the routes using 'http://localhost:PORT/api/<route-name>'
    app.use('/api', router)
}