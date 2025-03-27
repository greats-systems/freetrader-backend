const supabase = require('../../db/supabase.js')

exports.createReview = async (request, response) => {}

exports.getReviews = async (request, response) => {}

exports.getReviewsForBusiness = async (request, response) => {
    await supabase
     .from('reviews')
     .select('*,Organization(*)')
     .eq('business_id', request.body.businessId)
     .then((data) => {
        if (data.status == 200){
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

exports.getReviewsByID = async (request, response) => {}

exports.updateReview = async (request, response) => {}

exports.deleteReview = async (request, response) => {}