let posts = [
    {
        id:"1",
        title: 'The Awakening',
        author: 'Kate Chopin',
        comments:["very nice!","msa","wow!","keep going"]
    },
    {
        id:"2",
        title: 'City of Glass',
        author: 'Paul Auster',
        comments:["what is that?!","why tf?!","wow!","stop that"]
    },
  ];


const resolvers = {
    Query: {
      posts: (parent,args) =>posts,
      post: (parent,args) => {
        let thePost = posts.find((post) => (post.id == args.id));
        return thePost;
    }
    },
    Mutation: {
        createPost: (parent,args) =>{
            posts.push(args)
            return args;
        },
        updatePost:(parent,{id,title,author}) => {
            let newPosts = posts
            let updatedpost;

            posts.forEach((post,index)=>{
                if (post.id == id){
                    console.log("a7a");
                    newPosts.splice(index,1);
                    updatedpost = {id,title,author}
                }
            })

            if(updatedpost) {newPosts.push(updatedpost)};

            posts = newPosts;

            return updatedpost;
        },
        deletePost: (parent,args) => {
            posts = posts.find((post)=> post.id !== args.id);
            console.log(posts)
            
            return posts;
        }
    }
  };

  module.exports = resolvers;