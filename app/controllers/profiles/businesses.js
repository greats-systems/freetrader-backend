const supabase = require('../../db/supabase.js')

exports.createBusiness = async (request, response) => {
   await supabase
    .from('Organizations')
    .insert({
      'entrepreneurId' : request.body.entreprenuerId,
      'logo' : request.body.logo,
      'logo_id' : request.body.logo_id,
      'banner' : request.body.banner,
      'banner_id' : request.body.banner_id,
      'motto' : request.body.motto,
      'description' : request.body.description,
      'locations' : request.body.locations,
      'phone_number' : request.body.phone_number,
      'trade_sector' : request.body.trade_sector,
      'entreprenuer_role' : request.body.entreprenuer_role,
      'business_stage' : request.body.business_stage,
      'specialization' : request.body.specialization,
      'neighbourhood' : request.body.neighbourhood,
      'city' : request.body.city,
      'country' : request.body.country,
      'additional_specialization' : request.body.additional_specialization,
      'website' : request.body.website,
      'admin_role' : request.body.admin_role,
      'entreprenuer' : request.body.entreprenuer,
      'trading_name' : request.body.trading_name,
      'subscribed_trading_markets' : request.body.subscribed_trading_markets
      })
      .then((data) => {
         if (data.status == 201){
            response.status(201).send('Organizations created successfully!')
         }
         else {
            response.status(500).send(data.error)
         }
       })
      //  .catch((error) => {
      //      response.status(500).send(error)
      //  })      
    }

exports.getBusinesses = async (_, response) => {}

exports.getProfileBusinessList = async (request, response) => {
    await supabase
     .from('Organizations')
     .select()
     .eq('entrepreneurId', request.body.profile_id)
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

exports.getLocalCategoryBusinessList = async (request, response) => {
   await supabase
    .from('Organizations')
    .select(`
      *,
      Profiles(
         profile_id : id,
         profile_city : city,
         profile_email: email,
         profile_phone: phone,
         profile_avatar: avatar,
         profile_country: country,
         profile_user_id: user_id,
         profile_last_name: last_name,
         profile_created_at: created_at,
         profile_first_name: first_name,
         profile_account_type: account_type,
         profile_neighbourhood: neighbourhood
         )`
      )
      .eq('category', request.body.category)
      .then((data) => {
         if (data.status == 200){
            
            // Remove nested JSON format
            const rawData = data.data
            const transformedData = rawData.map((item) => {
               const { Profiles, ...rest } = item
               return {
                  ...rest,
                  profile_id: Profiles?.profile_id ?? null,
                  profile_city: Profiles?.profile_city ?? null,
                  profile_email: Profiles?.profile_email ?? null,
                  profile_phone: Profiles?.profile_phone ?? null,
                  profile_avatar: Profiles?.profile_avatar ?? null,
                  profile_country: Profiles?.profile_country ?? null,
                  profile_user_id: Profiles?.profile_user_id ?? null,
                  profile_last_name: Profiles?.profile_last_name ?? null,
                  profile_created_at: Profiles?.profile_created_at ?? null,
                  profile_first_name: Profiles?.profile_first_name ?? null,
                  profile_account_type: Profiles?.profile_account_type ?? null,
                  profile_neighbourhood: Profiles?.profile_neighbourhood ?? null
               }
            })            
            response.status(200).send(transformedData)  
              
            // response.status(200).send(data.data)
         }
         else {
            response.status(500).send(data.error)
         }
       })
       .catch((error) => {
           response.status(500).send(error)
       })
}

exports.getVerifiedBusinessList = async (_, response) => {
   await supabase
    .from('Organizations')
    .select(`
      *,
      Profiles(
         profile_id : id,
         profile_city : city,
         profile_email: email,
         profile_phone: phone,
         profile_avatar: avatar,
         profile_country: country,
         profile_user_id: user_id,
         profile_last_name: last_name,
         profile_created_at: created_at,
         profile_first_name: first_name,
         profile_account_type: account_type,
         profile_neighbourhood: neighbourhood
         )`
      )
      .then((data) => {
         if (data.status == 200){
            
            // Remove nested JSON format
            const rawData = data.data
            const transformedData = rawData.map((item) => {
               const { Profiles, ...rest } = item
               return {
                  ...rest,
                  profile_id: Profiles?.profile_id ?? null,
                  profile_city: Profiles?.profile_city ?? null,
                  profile_email: Profiles?.profile_email ?? null,
                  profile_phone: Profiles?.profile_phone ?? null,
                  profile_avatar: Profiles?.profile_avatar ?? null,
                  profile_country: Profiles?.profile_country ?? null,
                  profile_user_id: Profiles?.profile_user_id ?? null,
                  profile_last_name: Profiles?.profile_last_name ?? null,
                  profile_created_at: Profiles?.profile_created_at ?? null,
                  profile_first_name: Profiles?.profile_first_name ?? null,
                  profile_account_type: Profiles?.profile_account_type ?? null,
                  profile_neighbourhood: Profiles?.profile_neighbourhood ?? null
               }
            })            
            response.status(200).send(transformedData)  
              
            // response.status(200).send(data.data)
         }
         else {
            response.status(500).send(data.error)
         }
       })
       .catch((error) => {
           response.status(500).send(error)
       })
}

exports.getMarketSubscribingBusinessList = async (request, response) => {
   await supabase
    .from('Organizations')
    .select(`
      *,
      Profiles(
         profile_id : id,
         profile_city : city,
         profile_email: email,
         profile_phone: phone,
         profile_avatar: avatar,
         profile_country: country,
         profile_user_id: user_id,
         profile_last_name: last_name,
         profile_created_at: created_at,
         profile_first_name: first_name,
         profile_account_type: account_type,
         profile_neighbourhood: neighbourhood
         )`
      )
      .contains('subscribed_trading_markets', request.body.marketID)
      .then((data) => {
         if (data.status == 200){
            
            // Remove nested JSON format
            const rawData = data.data
            const transformedData = rawData.map((item) => {
               const { Profiles, ...rest } = item
               return {
                  ...rest,
                  profile_id: Profiles?.profile_id ?? null,
                  profile_city: Profiles?.profile_city ?? null,
                  profile_email: Profiles?.profile_email ?? null,
                  profile_phone: Profiles?.profile_phone ?? null,
                  profile_avatar: Profiles?.profile_avatar ?? null,
                  profile_country: Profiles?.profile_country ?? null,
                  profile_user_id: Profiles?.profile_user_id ?? null,
                  profile_last_name: Profiles?.profile_last_name ?? null,
                  profile_created_at: Profiles?.profile_created_at ?? null,
                  profile_first_name: Profiles?.profile_first_name ?? null,
                  profile_account_type: Profiles?.profile_account_type ?? null,
                  profile_neighbourhood: Profiles?.profile_neighbourhood ?? null
               }
            })            
            response.status(200).send(transformedData)  
              
            // response.status(200).send(data.data)
         }
         else {
            response.status(500).send(data.error)
         }
       })
       .catch((error) => {
           response.status(500).send(error)
       })
}

exports.getLocalMarketBusinessList = async (request, response) => {
   await supabase
    .from('Organizations')
    .select(`
      *,
      Profiles(
         profile_id : id,
         profile_city : city,
         profile_email: email,
         profile_phone: phone,
         profile_avatar: avatar,
         profile_country: country,
         profile_user_id: user_id,
         profile_last_name: last_name,
         profile_created_at: created_at,
         profile_first_name: first_name,
         profile_account_type: account_type,
         profile_neighbourhood: neighbourhood
         )`
      )
      .eq('city', request.body.city)
      .then((data) => {
         if (data.status == 200){
            
            // Remove nested JSON format
            const rawData = data.data
            const transformedData = rawData.map((item) => {
               const { Profiles, ...rest } = item
               return {
                  ...rest,
                  profile_id: Profiles?.profile_id ?? null,
                  profile_city: Profiles?.profile_city ?? null,
                  profile_email: Profiles?.profile_email ?? null,
                  profile_phone: Profiles?.profile_phone ?? null,
                  profile_avatar: Profiles?.profile_avatar ?? null,
                  profile_country: Profiles?.profile_country ?? null,
                  profile_user_id: Profiles?.profile_user_id ?? null,
                  profile_last_name: Profiles?.profile_last_name ?? null,
                  profile_created_at: Profiles?.profile_created_at ?? null,
                  profile_first_name: Profiles?.profile_first_name ?? null,
                  profile_account_type: Profiles?.profile_account_type ?? null,
                  profile_neighbourhood: Profiles?.profile_neighbourhood ?? null
               }
            })            
            response.status(200).send(transformedData)  
              
            // response.status(200).send(data.data)
         }
         else {
            response.status(500).send(data.error)
         }
       })
       .catch((error) => {
           response.status(500).send(error)
       })
}

exports.getMarketSubscribingBusinessList = async (request, response) => {}

exports.getBusinessByID = async (request, response) => {}

exports.updateBusiness = async (request, response) => {}

exports.deleteBusiness = async (request, response) => {}