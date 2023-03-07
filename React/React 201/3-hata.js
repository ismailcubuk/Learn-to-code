const getData = async() =>{
    try{
        const {data:users} = await axios("https://jsonplaceholder.typicode.com/users");
        const {data:posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);
        
        setLoading(false)
        setUsers(users);
        setPosts(posts)

        console.log("users",users);
        console.log("posts",posts);
    }catch(error){
        console.log("error",error);
    }
   
}
