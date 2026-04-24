const getPost = async() =>{
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return posts;
}
const posts = async () => {
    const posts = await getPost();
    return (
        <div>
            <h1 className='text-3xl text-center font-sans font-mono font-extrabold my-10 font-bold'>Posts Page</h1>
            <h1>Number of posts: {posts.length}</h1>
        </div>
    );
};

export default posts;