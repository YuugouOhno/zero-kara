import BlogList from "@/components/BlogList";
import Sidebar from "@/components/Sidebar";
import { getPosts } from "@/lib/posts";

export default async function home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <main className="min-h-screen container mx-auto py-8 px-4">
      <div className="flex gap-8 mt-32">
        <BlogList posts={posts} />
        <Sidebar />
      </div>
      <div className="min-h-screen">test</div>
    </main>
  );
}