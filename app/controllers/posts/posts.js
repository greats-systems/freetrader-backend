const { response } = require('express')
const supabase = require('../../db/supabase.js')

exports.createPost = async (request, response) => {
    await supabase
     .from('Posts')
     .insert({
        'user_created' : request.body.user_created,
        'title' : request.body.title,
        'status' : request.body.status,
        'type' : request.body.type,
        'status' : request.body.status,
        'type' : request.body.type,
        'category' : request.body.category,
        'sub_title' : request.body.sub_title,
        'content' : request.body.content,
        'summary' : request.body.summary,
        'video_url' : request.body.video_url,
        'image' : request.body.image,
        'author' : request.body.author_profile,
        'comments' : request.body.comments,
        'likes' : request.body.likes,
        'posts_shares' : request.body.posts_shares,
        // 'date_published': request.body.date_published     
     })
     .select()
     .single()
     .then((data) => {
        if (data.status == 201){
           response.status(201).send(data.data)
        }
        else {
           response.status(500).send(data)
        }
      })
      .catch((error) => {
          response.status(500).send(error)
      })
}

exports.getPosts = async (_, response) => {
    await supabase
     .from('Posts')
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

exports.getPostsByID = async (request, response) => {
    await supabase
     .from('Posts')
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

exports.updatePost = async (request, response) => {
    await supabase
     .from('Posts')
     .update({
        'user_created' : request.body.user_created,
        'title' : request.body.title,
        'status' : request.body.status,
        'type' : request.body.type,
        'status' : request.body.status,
        'type' : request.body.type,
        'category' : request.body.category,
        'sub_title' : request.body.sub_title,
        'content' : request.body.content,
        'summary' : request.body.summary,
        'video_url' : request.body.video_url,
        'image' : request.body.image,
        'author' : request.body.author,
        'comments' : request.body.comments,
        'likes' : request.body.likes,
        'posts_shares' : request.body.posts_shares,
        'date_updated' : request.body.date_updated
     })
     .then((data) => {
        if (data.status == 200){
           response.status(200).send('Post updated successfully!')
        }
        else {
           response.status(500).send(data)
        }
      })
      .catch((error) => {
          response.status(500).send(error)
      })
}

exports.deletePost = async (request, response) => {
    await supabase
     .from('Posts')
     .delete()
     .eq('id', request.body.id)
     .then((data) => {
        if(data.status == 200){
            response.status(200).send('Post deleted successfully!')
        } else {
            response.status(500).send(data)
        }
     })
}