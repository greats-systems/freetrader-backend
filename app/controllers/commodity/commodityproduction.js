const supabase = require('../../db/supabase.js')

exports.createCommodityProduction = async (request, response) => {
    await supabase
     .from('CommodityProduction')
     .insert({
      'commodityID' : request.body.commodityID,
      'plantingDate' : request.body.plantingDate,
      'harvestDate': request.body.harvestDate,
      'yield' : request.body.yield
     })
     .then((data) => {
       if (data.status == 201){
          response.status(201).send('Commodity Production created successfully!')
       }
       else {
          response.status(500).send(data.error)
       }
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 
 exports.getCommodityProductions = async (_, response) => {
    await supabase
      .from("CommodityProduction")
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

exports.getCommodityProductionByID = async (request, response) => {
  throw new Error('Not implemented')
}