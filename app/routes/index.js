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
    router.post('/facility-details/create', controller.createFacilityDetails)
    router.get('/facility-details', controller.getFacilityDetails)
    router.get('/farmer-facility-details', controller.getFacilityDetailsByID)
    router.put('/facility-details/update', controller.updateFacilityDetails)
    router.delete('/facility-details/delete', controller.deleteFacilityDetails)

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

    // GMBCertificate methods
    router.post('/gmb-certificate/create', controller.createGMBCertificate)
    router.get('/gmb-certificates', controller.getGMBCertificates)
    router.get('/gmb-certificate', controller.getGMBCertificateByID)
    router.put('/gmb-certificate/update', controller.updateGMBCertificate)
    router.delete('/gmb-certificate/delete', controller.deleteGMBCertificate)

    // Access the routes using 'http://localhost:PORT/api/<route-name>'
    app.use('/api', router)
}