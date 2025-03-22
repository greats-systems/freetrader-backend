const supabase = require('../../db/supabase.js')

exports.createLivestock = async (request, response) => {
    await supabase
     .from('Livestock')
     .insert({
       'farmerID' : request.body.farmerID,
       'livestockType' : request.body.livestockType,
       'breed' : request.body.breed,
       'sex' : request.body.sex,
       'dateOfBirth' : request.body.dateOfBirth,
       'dateAcquired' : request.body.dateAcquired,
       'healthStatus' : request.body.healthStatus,
     })
     .then((data) => {
      if(data.status == 201){
          response.status(201).send('Livestock created successfully!')
      }
      else {
          response.status(500).send(data)
      }
   })
     .catch((error) => {
         response.status(500).send(error)
     })
 }
 
 exports.getLivestock = async (_, response) => {
    await supabase
      .from("Livestock")
      .select()
      .then((data) => {
        if(data.status == 200){
          if (Object.keys(data.data).length > 0) {
            response.status(200).send(data.data);
          } else {
            response.status(404).send("No data");
          }
        }
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  };

exports.getLivestockByID = async (request, response) => {
  throw new Error('Not implemented')
}

exports.updateLivestock = async (request, response) => {
  throw new Error('Not implemented')
}