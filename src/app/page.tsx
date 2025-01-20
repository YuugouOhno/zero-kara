import BlogList from "@/components/BlogList";
import { getPosts } from "@/lib/posts";


export default async function home() {
    const posts = await getPosts();
    console.log(posts);

    return (
        <BlogList posts={posts} />
    );
}