var express  = require('express');
var User     = require('./models/User');
var Comment  = require('./models/Comment');
var Post     = require('./models/Post');

//ROUTES FOR OUR API
// =============================================================================
module.exports = function (app) {
// create our router
var router = express.Router();

    // middleware to use for all requests
    router.use(function(req, res, next) {
        // do logging
        console.log('Something is happening.');
        next();
    });

    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    router.get('/', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });	
    });

    //#region User
    // on routes that end in /users
    // ----------------------------------------------------
    router.route('/users')

        // create an user (accessed at POST http://localhost:8080/api/users)
        .post(function(req, res) {
            var user = new User();		// create a new instance of the User model
            user.name = req.body.name;  
            user.email = req.body.email;
            user.password = req.body.password;
            user.role = req.body.role;
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User created!' });
            });

            
        })

        // get all the users (accessed at GET http://localhost:8080/api/users)
        .get(function(req, res) {
            User.find(function(err, users) {
                if (err)
                    res.send(err);

                res.json(users);
            });
        });

    // on routes that end in /users/:user_id
    // ----------------------------------------------------
    router.route('/users/:user_id')

        // get the user with that id
        .get(function(req, res) {
            User.findById(req.params.user_id, function(err, user) {
                if (err)
                    res.send(err);
                res.json(user);
            });
        })

        // update the user with this id
        .put(function(req, res) {
            User.findById(req.params.user_id, function(err, user) {

                if (err)
                    res.send(err);

                user.name = req.body.name;
                user.email = req.body.email;
                user.password = req.body.password;
                user.role = req.body.role;
                user.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'User updated!' });
                });

            });
        })

        // delete the user with this id
        .delete(function(req, res) {
            User.remove({
                _id: req.params.user_id
            }, function(err, user) {
                if (err)
                    res.send(err);

                res.json({ message: 'User deleted' });
            });
        });
    //#endregion

    //#region Comment
    // on routes that end in /comments
    // ----------------------------------------------------
    router.route('/comments')

        // create a comment (accessed at POST http://localhost:8080/api/comments)
        .post(function(req, res) {
            var comment = new Comment();		// create a new instance of the Comment model
            comment.text = req.body.text;
            comment.description = req.body.description;
            comment.date = req.body.date;
            comment._post = req.body._post;
            comment._author = req.body._author;
            comment.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Comment created!' });
            });

            
        })

        // get all the comments (accessed at GET http://localhost:8080/api/comments)
        .get(function(req, res) {
            Comment.find(function(err, comments) {
                if (err)
                    res.send(err);

                res.json(comments);
            });
        });

    // on routes that end in /comments/:comment_id
    // ----------------------------------------------------
    router.route('/comments/:comment_id')

        // get the comment with that id
        .get(function(req, res) {
            Comment.findById(req.params.comment_id, function(err, comment) {
                if (err)
                    res.send(err);
                res.json(comment);
            });
        })

        // update the comment with this id
        .put(function(req, res) {
            Comment.findById(req.params.comment_id, function(err, comment) {

                if (err)
                    res.send(err);

                comment.text = req.body.text;
                comment.description = req.body.description;
                comment.date = req.body.date;
                comment._post = req.body._post;
                comment._author = req.body._author;
                comment.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Comment updated!' });
                });

            });
        })

        // delete the comment with this id
        .delete(function(req, res) {
            Comment.remove({
                _id: req.params.comment_id
            }, function(err, comment) {
                if (err)
                    res.send(err);

                res.json({ message: 'Comment deleted!' });
            });
        });
    //#endregion

    //#region Post
    // on routes that end in /posts
    // ----------------------------------------------------
    router.route('/posts')

        // create a post (accessed at POST http://localhost:8080/api/posts)
        .post(function(req, res) {
            var post = new Post();		// create a new instance of the Post model
            post.title = req.body.title;
            post.description = req.body.description;
            post.votes = req.body.votes;
            post.date = req.body.date;
            post._author = req.body._author;
            post.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Post created!' });
            });

            
        })

        // get all the posts (accessed at GET http://localhost:8080/api/posts)
        .get(function(req, res) {
            Post.find(function(err, posts) {
                if (err)
                    res.send(err);

                res.json(posts);
            });
        });

    // on routes that end in /posts/:post_id
    // ----------------------------------------------------
    router.route('/posts/:post_id')

        // get the post with that id
        .get(function(req, res) {
            Post.findById(req.params.post_id, function(err, post) {
                if (err)
                    res.send(err);
                res.json(post);
            });
        })

        // update the post with this id
        .put(function(req, res) {
            Post.findById(req.params.post_id, function(err, post) {

                if (err)
                    res.send(err);

                post.title = req.body.title;
                post.description = req.body.description;
                post.votes = req.body.votes;
                post.date = req.body.date;
                post._author = req.body._author;
                post.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Post updated!' });
                });

            });
        })

        // delete the post with this id
        .delete(function(req, res) {
            Post.remove({
                _id: req.params.post_id
            }, function(err, post) {
                if (err)
                    res.send(err);

                res.json({ message: 'Post deleted!' });
            });
        });
    //#endregion

    // REGISTER OUR ROUTES -------------------------------
    app.use('/api', router);
}