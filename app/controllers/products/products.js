const supabase = require('../../db/supabase.js')

exports.createProduct = async (request, response) => {
    await supabase
     .from('Products')
     .insert({
        'trader': request.body.trader,
        'status' : request.body.status,
        'title' : request.body.title,
        'category' : request.body.category,
        'slug' : request.body.slug,
        'description' : request.body.description,
        'size' : request.body.size,
        'color' : request.body.color,
        'current_inventory' : request.body.current_inventory,
        'stocked_inventory' : request.body.stocked_inventory,
        'images' : request.body.images,
        'thumbnail' : request.body.thumbnail,
        'location_coordinates' : request.body.location_coordinates,
        'country' : request.body.country,
        'city' : request.body.city,
        'price' : request.body.price,
        'variants' : request.body.variants,
        'neighbourhood' : request.body.neighbourhood,
        'business_id' : request.body.business_id,
        'business_name' : request.body.business_name,
        'business_phone' : request.body.business_phone,
        'product_brand' : request.body.product_brand,
        'trading_platform' : request.body.trading_platform,
        'in_stock' : request.body.in_stock,
        'unit_measure' : request.body.unit_measure,
        'product_name' : request.body.product_name,
        'is_commodity' : request.body.is_commodity,
        'bar_code' : request.body.bar_code,
        'qr_code' : request.body.qr_code,
        'is_export_ready' : request.body.is_export_ready
     })
     .then((data) => {
        if (data.status == 201){
           response.status(201).send('Market created successfully!')
        }
        else {
           response.status(500).send(data)
        }
      })
      .catch((error) => {
          response.status(500).send(error)
      })
}

exports.getProducts = async (_, response) => {
    await supabase
     .from('Products')
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

exports.getProductsCategories = async (request, response) => {
   await supabase
    .from('Products')
    .select('category')
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

exports.getBusinessProducts = async (request, response) => {
   await supabase
    .from('Products')
    .select(`
      *, Profiles(*) 
      `)
      .eq('business_id', request.body.business_id)
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

exports.getMarketProducts = async (request, response) => {
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
      .contains('trading_platforms', [request.body.marketId])
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

exports.filterByProductCategory = async (request, response) => {
   await supabase
    .from('Products')
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
         ) 
      `)
      .eq('category', request.body.category)
      .or(`name.ilike.%${request.body.name}%, city.ilike.%${request.body.city}%`)
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

exports.getProductsLocation = async (request, response) => {
   await supabase
    .from('Products')
    .select(`city, country, neighbourhood`)
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

exports.getProductByID = async (request, response) => {
    await supabase
     .from('Products')
     .select()
     .eq('id', request.body.id)
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

exports.updateProduct = async (request, response) => {
    await supabase
     .from('Products')
     .update({
        'status' : request.body.status,
        'title' : request.body.title,
        'category' : request.body.category,
        'slug' : request.body.slug,
        'description' : request.body.description,
        'size' : request.body.size,
        'color' : request.body.color,
        'current_inventory' : request.body.current_inventory,
        'stocked_inventory' : request.body.stocked_inventory,
        'images' : request.body.images,
        'thumbnail' : request.body.thumbnail,
        'location_coordinates' : request.body.location_coordinates,
        'country' : request.body.country,
        'city' : request.body.city,
        'price' : request.body.price,
        'variants' : request.body.variants,
        'neighbourhood' : request.body.neighbourhood,
        'business_id' : request.body.business_id,
        'business_name' : request.body.business_name,
        'business_phone' : request.body.business_phone,
        'product_brand' : request.body.product_brand,
        'trading_platform' : request.body.trading_platform,
        'in_stock' : request.body.in_stock,
        'unit_measure' : request.body.unit_measure,
        'product_name' : request.body.product_name,
        'is_commodity' : request.body.is_commodity,
        'bar_code' : request.body.bar_code,
        'qr_code' : request.body.qr_code,
        'is_export_ready' : request.body.is_export_ready
      })
      .eq('id', request.body.id)
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

exports.uploadImages = async (request, response) => {
   await supabase.from('products')
    .update({
      'images': request.body.images, 
      'thumbnail': request.body.images[0]
     })
     .eq('id', request.body.product_id)
     .then((data) => {
      if (data.status == 200){
         response.status(200).send('Product updated successfully!')
      }
      else {
         response.status(500).send(data)
      }
    })
    .catch((error) => {
        response.status(500).send(error)
    })
}

exports.updateProductBarCode = async (request, response) => {
   await supabase
    .from('Products')
    .update({
      'bar_code': request.body.barCode})
    .eq('id', request.body.productId)
    .then((data) => {
      if (data.status == 200){
         response.status(200).send('Product updated successfully!')
      }
      else {
         response.status(500).send(data)
      }
    })
    .catch((error) => {
        response.status(500).send(error)
    })
}

exports.deleteProduct = async (request, response) => {
    await supabase
     .from('Products')
     .delete()
     .eq('id', request.body.id)
     .then((data) => {
        if (data.status == 200){
           response.status(200).send('Product deleted successfully!')
        }
        else {
           response.status(500).send(data)
        }
      })
      .catch((error) => {
          response.status(500).send(error)
      })
}
