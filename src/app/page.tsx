import BlogList from "@/components/Home/BlogList";
import Sidebar from "@/components/Sidebar";
import { getPosts } from "@/lib/posts";

export default async function home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    // <main className="min-h-screen container mx-auto py-8 px-4">
        <BlogList posts={posts} />
    // </main>
  );
}