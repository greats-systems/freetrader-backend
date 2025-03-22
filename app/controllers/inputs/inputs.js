const supabase = require('../../db/supabase.js')

exports.createInputs = async (request, response) => {
    await supabase
     .from('CropInputs')
     .insert({
      'cropID' : request.body.cropID,
      'name' : request.body.name,
      'description' : request.body.description
     })
     .then((data) => {
       if (data.status == 201){
          response.status(201).send('CropInputs created successfully!')
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
      .from("CropInputs")
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