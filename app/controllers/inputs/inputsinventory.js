const supabase = require('../../db/supabase.js')

exports.createInputsInventory = async (request, response) => {
    await supabase
     .from('InputsInventory')
     .insert({
      'CommodityID' : request.body.commodityid,
      'Quantity' : request.body.name,
      'Unit' : request.body.description,
      'DateUpdated': request.body.dateupdated
     })
     .then((data) => {
       if (data.status == 201){
          response.status(201).send('Inputs Inventory created successfully!')
       }
       else {
          response.status(500).send(data.error)
       }
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 
 exports.getInputsInventory = async (_, response) => {
    await supabase
      .from("InputsInventory")
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

exports.getInputsInventoryByID = async (request, response) => {
  throw new Error('Not implemented')
}

exports.updateInputsInventory = async (request, response) => {
    throw new Error('Not implemented')
}
