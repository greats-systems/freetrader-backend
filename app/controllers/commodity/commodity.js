const supabase = require('../../db/supabase.js')

exports.createCommodity = async (request, response) => {
    await supabase
     .from('Commodity')
     .insert({
      // 'FarmID': request.body.farmid,
      'commodityID' : request.body.commodityID,
      'commodityName' : request.body.commodityName,
      'commodityProducerPrice' : request.body.commodityProducerPrice
     })
     .then((data) => {
       if (data.status == 201){
          response.status(201).send('Commodity created successfully!')
       }
       else {
          response.status(500).send(data.error)
       }
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 
 exports.getCommodities = async (_, response) => {
    await supabase
      .from("Commodity")
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
  };

exports.getCommodityByID = async (request, response) => {
  throw new Error('Not implemented')
}