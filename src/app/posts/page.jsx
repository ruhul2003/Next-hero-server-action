import { Button } from "@heroui/react";

const getPost = async() =>{
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return posts;
}
const posts = async () => {
    const posts = await getPost();
    return (
        <div className="mx-auto text-center">
            <h1 className='text-3xl text-center font-sans font-mono font-extrabold my-10 font-bold'>Posts Page</h1>
            <h1 className="m-10">Number of posts: {posts.length}</h1>
            <Button color="primary" size="lg">Primary Button</Button>
        </div>
    );
};

export default posts;