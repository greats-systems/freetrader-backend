module.exports = (app) => {
    const controller = require('../../controllers/contract/contractbid.js')
    const router = require('../../router/router.js')

    router.post('/contract-bid/create', controller.createContractBid)
    router.get('/contract-bids', controller.getContractBids)
    router.get('/contract-bid', controller.getContractBidByID)
    router.put('/contract-bid/update', controller.updateContractBid)
    router.delete('/contract-bid/delete', controller.deleteContractBid)

    app.use('/api', router)
}