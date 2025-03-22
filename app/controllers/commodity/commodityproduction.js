const supabase = require('../../db/supabase.js')

exports.createCommodityProduction = async (request, response) => {
    await supabase
     .from('CommodityProduction')
     .insert({
      'CommodityID' : request.body.commodityid,
      'PlantingDate' : request.body.commodityname,
      'HarvestDate': request.body.season,
      'Yield' : request.body.yield
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

exports.getCommodityByID = async (request, response) => {
  throw new Error('Not implemented')
}