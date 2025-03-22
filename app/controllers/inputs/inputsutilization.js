const supabase = require('../../db/supabase.js')

exports.createInputsUtilization = async (request, response) => {
    await supabase
     .from('InputsUtilization')
     .insert({
      'CommodityID' : request.body.commodityid,
      'UsageDate': request.body.usagedate,
      'Quantity' : request.body.name,
      'Unit' : request.body.description,      
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
 
 exports.getInputsUtilization = async (_, response) => {
    await supabase
      .from("InputsUtilization")
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

exports.getInputsUtilizationByID = async (request, response) => {
  throw new Error('Not implemented')
}

exports.updateInputsUtilization = async (request, response) => {
    throw new Error('Not implemented')
}
