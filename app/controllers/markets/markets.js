const supabase = require('../../db/supabase.js')

exports.createMarket = async(request, response) => {
    await supabase
     .from('Markets')
     .insert({
        'description' : request.body.description,
        'name' : request.body.name,
      //   'logo' : request.body.logo,
      //   'banner' : request.body.banner,
        'admin' : request.body.admin_id,
        'category' : request.body.category,
        'trade_sector' : request.body.trade_sector,
        'neighbourhood' : request.body.neighbourhood,
        'city' : request.body.city,
        'locations' : request.body.locations,
        'logo' : request.body.logo,
        'country' : request.body.country
      //   'banner' : request.body.banner,
      //   'specialization' : request.body.specialization
     })
     .select()
     .then((data) => {
        if (data.status == 201){
           response.status(201).send({
            'message': 'Market created successfully!',
            'data': data.data[0]
           })
        }
        else {
           response.status(500).send(data)
        }
      })
      .catch((error) => {
          response.status(500).send(error)
      })
}

exports.getMarkets = async(request, response) => {
    await supabase
     .from('Markets')
     .select()
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

exports.getMarketByCategory = async(request, response) => {
    await supabase
     .from('Markets')
     .select()
     .ilike('category', `%${request.body.category}%`)
     .then((data) => {
        if (data.status == 200){
           response.status(200).send(data.data)
        }
        else {
           response.status(500).send(data.error)
        }
      })
      .catch((error) => {
          response.status(500).send(error)
      })
}

exports.getMarketplaceSliderCommodities = async (_, response) => {
   await supabase
    .from('Products')
    .select(`
      *,
      Profiles(*)
   `)
   // .eq()
   .then((data) => {
      if (data.status == 200){
         /*
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
         */    
         response.status(200).send(data.data)
      }
      else {
         response.status(500).send(data.error)
      }
    })
    .catch((error) => {
        response.status(500).send(error)
    })
}

exports.getMarketplaceCommodities = async (_, response) => {
   await supabase
    .from('Products')
    .select(`*, Profiles(*)`)
   // .or(`product_name.ilike.%${request.body.name}%, city.ilike.%${request.body.city}`)
   .eq('is_commodity', true)
   .then((data) => {
      if (data.status == 200){
         /*
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
         */
         response.status(200).send(data.data)
      }
      else {
         response.status(500).send(data.error)
      }
    })
    .catch((error) => {
        response.status(500).send(error)
    })
}

exports.getMarketplaceProductsByCategoryOrCity = async (request, response) => {
   await supabase
    .from('Products')
    .select(`
      *, Profiles(*)
   `)
   // .or(`category.ilike.${request.body.category}`)
   .or(`category.ilike.%${request.body.category}%, city.ilike.%${request.body.city}`)
   .then((data) => {
      if (data.status == 200){
         /*
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
           */
         response.status(200).send(data.data)
      }
      else {
         response.status(500).send(data.error)
      }
    })
    .catch((error) => {
        response.status(500).send(error)
    })
}

exports.getMarketplaceProducts = async (request, response) => {
   request.headers = {
      'apikey': process.env.SERVICE_ROLE_KEY,
      'Authorization': `Bearer ${process.env.SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
    }
   await supabase
    .from('Products')
    .select(`
      *,
      Profiles(
         profile_id : id,         
         profile_first_name: first_name,
         profile_last_name: last_name,
         profile_email: email,
         profile_phone: phone,
         profile_account_type: account_type
      )
   `)
   .eq('is_commodity', false)
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

exports.updateMarket = async(request, response) => {
    throw new Error('Unimplemented')
}

exports.deleteMarket = async(request, response) => {
    throw new Error('Unimplemented')
}