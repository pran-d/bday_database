exports.getPosts = (req, res, next) => {
    res.send("Hello Home Route");
    res.status(200).json({
      posts: [{ title: 'First Post', content: 'This is the first post!' }]
    });
  };
  
  exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    // Create post in db
    try{
      res.status(201).json({
        message: 'Post created successfully!',
        post: { id: new Date().toISOString(), title: title, content: content }
      });
    }catch(err){
      console.log(err);
    }
  };