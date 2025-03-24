const supabase = require('../../db/supabase.js')

exports.createCommodity = async (request, response) => {
    await supabase
     .from('Commodity')
     .insert({
      'is_commodity' : request.body.is_commodity,
      'export_ready' : request.body.exportReady,
      'trader' : request.body.trader,
      'name' : request.body.name,
      'unit_measure' : request.body.unit_measure,
      'description' : request.body.description,
      'city' : request.body.city,
      'in_stock' : request.body.in_stock,
      'trading_platforms' : request.body.trading_platforms,
      'product_brand' : request.body.product_brand,
      'business_id' : request.body.businessId,
      'business_name' : request.body.business_name,
      'business_phone' : request.body.business_phone,
      'country' : request.body.country,
      'neighbourhood' : request.body.neighbourhood,
      'category' : request.body.category,
      'unit_price' : request.body.unitPrice,
      'currrent_inventory' : request.body.currrent_inventory,
      'quantity' : request.body.quantity,
      'thumbnail' : request.body.thumbnail,
      'images' : request.body.images      
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
      .select(`
          created_at,
          is_commodity, 
          export_ready, 
          trader, 
          name, 
          unit_measure, 
          description, 
          in_stock, 
          trading_platforms, 
          product_brand, 
          business_id, 
          business_name, 
          business_phone, 
          country, 
          city, 
          neighbourhood, 
          category, 
          unit_price, 
          current_inventory, 
          quantity, 
          thumbnail
        `)
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
  await supabase
      .from("Commodity")
      .select(`
          created_at,
          is_commodity, 
          export_ready, 
          trader, 
          name, 
          unit_measure, 
          description, 
          in_stock, 
          trading_platforms, 
          product_brand, 
          business_id, 
          business_name, 
          business_phone, 
          country, 
          city, 
          neighbourhood, 
          category, 
          unit_price, 
          current_inventory, 
          quantity, 
          thumbnail
        `)
      .like('name', `%${request.body.name}%`)
      .order('id', {ascending: false})
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
}