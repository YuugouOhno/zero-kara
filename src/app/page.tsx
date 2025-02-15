import { Suspense } from "react";
import { getPosts } from "@/lib/posts";
import SearchFilter from "@/components/Home/SearchFilter";

export default async function Page() {
  // サーバーコンポーネントでデータ取得
  const posts = await getPosts();

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchFilter posts={posts} />
      </Suspense>
    </div>
  );
}