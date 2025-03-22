const supabase = require('../../db/supabase.js')

exports.createInputs = async (request, response) => {
    await supabase
     .from('Inputs')
     .insert({
      'CommodityID' : request.body.commodityid,
      'Name' : request.body.name,
      'Description' : request.body.description
     })
     .then((data) => {
       if (data.status == 201){
          response.status(201).send('Inputs created successfully!')
       }
       else {
          response.status(500).send(data.error)
       }
     })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 
 exports.getInputs = async (_, response) => {
    await supabase
      .from("Inputs")
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

exports.getInputsByID = async (request, response) => {
  throw new Error('Not implemented')
}