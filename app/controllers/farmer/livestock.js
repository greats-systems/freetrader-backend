const supabase = require('../../db/supabase.js')

exports.createLivestock = async (request, response) => {
    await supabase
     .from('Livestock')
     .insert({
       'FarmerID' : request.body.farmerid,
       'LivestockType' : request.body.livestocktype,
       'Breed' : request.body.breed,
       'Sex' : request.body.sex,
       'DateOfBirth' : request.body.dateofbirth,
       'DateAcquired' : request.body.dateacquired,
       'HealthStatus' : request.body.healthstatus,
     })
     .then((data) => {
      if(data.status == 200){
          response.status(200).send(data.data)
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
        response.status(200).send(data.data);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  };