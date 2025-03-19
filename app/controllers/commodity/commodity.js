const supabase = require('../../db/supabase.js')

exports.createCommodity = async (request, response) => {
    await supabase
     .from('Commodity')
     .insert({
      'CommodityID' : request.body.commodityid,
      'CommodityName' : request.body.commodityname,
      'CommodityProducrPrice' : request.body.commodityproducerprice
     })
     .then((x) => {
       if (x.status == 201){
          response.status(201).send('Commodity created successfully!')
       }
       else {
          response.status(500).send(x.error)
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
            response.status(200).send(data.data)
        }
        else {
            response.status(500).send(data)
        }
     })
      .catch((error) => {
        response.status(500).send(error);
      });
  };