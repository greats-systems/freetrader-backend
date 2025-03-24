const supabase = require('../../db/supabase.js')

exports.createProduct = async (request, response) => {
    await supabase
     .from('Products')
     .insert({
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

exports.deleteProduct = async (request, response) => {
    await supabase
     .from('Products')
     .delete()
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
