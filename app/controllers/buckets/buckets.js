const supabase = require('../../db/supabase.js')

exports.uploadImages = async (request, response) => {
    await supabase
     .storage
     .from('images')
     .upload(request.body.filePath, request.body.image)
     .then((data) => {
        response.send(data)
     })
     .catch((error) => {
        response.send(error)
     })
}