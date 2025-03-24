const supabase = require('../../db/supabase.js')

exports.createProfile = async (request, response) => {
    await supabase
     .from('Profiles')
     .insert({
        'first_name' : request.body.first_name,
        'last_name' : request.body.last_name,
        'avatar' : request.body.avatar,
        'city' : request.body.city,
        'country' : request.body.country,
        'phone' : request.body.phone,
        'neighbourhood' : request.body.neighbourhood,
        'email' : request.body.email,
        'account_type' : request.body.account_type
     })
     .then((data) => {
        if (data.status == 201){
           response.status(201).send('Profile created successfully!')
        }
        else {
           response.status(500).send(data.error)
        }
      })
      .catch((error) => {
          response.status(500).send(error)
      })
}

exports.getProfiles = async (_, response) => {
    await supabase
     .from('Profiles')
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
}

exports.getProfileByID = async (request, response) => {
    await supabase
     .from('Profiles')
     .select()
     .eq('id', request.body.id)
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

exports.updateProfile = async (request, response) => {
    await supabase
     .from('Profiles')
     .update({
        'first_name' : request.body.first_name,
        'last_name' : request.body.last_name,
        'avatar' : request.body.avatar,
        'city' : request.body.city,
        'country' : request.body.country,
        'phone' : request.body.phone,
        'neighbourhood' : request.body.neighbourhood,
        'email' : request.body.email,
        'account_type' : request.body.account_type
     })
     .eq('id', request.body.id)
     .then((_) => {
        response.status(200).send("Profile updated successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}

exports.deleteProfile = async (request, response) => {
    await supabase
     .from('Profiles')
     .delete()
     .eq('id', request.body.id)
     .then((_) => {
        response.status(200).send("Profile deleted successfully!");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
}