import BlogList from "@/components/Home/BlogList";
import Sidebar from "@/components/Sidebar";
import { getPosts } from "@/lib/posts";

type SearchParams = {
  query?: string;
  category?: string;
  tag?: string;
};

export default async function home({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  let posts = await getPosts();

  console.log("検索条件",params.category)
  console.log("カテゴリー検索前",posts)

  if (params.category) {
    const category = params.category;
    console.log("category検索条件",params.category)
    posts = posts.filter((post) =>
      post.category == category
    );
  }
  console.log("カテゴリー検索あと",posts)

  if (params.tag) {
    const tag = params.tag;
    posts = posts.filter((post) =>
      post.tags && post.tags.includes(tag)
    );
  }
  
  if (params.query) {
    const searchWords = params.query.split(' ').filter((word) => word.trim() !== '');
    posts = posts.filter((post) =>
      // 全ての検索ワードがタイトル、説明、またはタグのいずれかに含まれるかをチェック（AND検索）
      searchWords.every((word) => {
        const lowerWord = word.toLowerCase();
        return (
          post.title.toLowerCase().includes(lowerWord) ||
          post.description.toLowerCase().includes(lowerWord) ||
          (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(lowerWord)))
        );
      })
    );
  }

  return (
    <BlogList posts={posts} />
  );
}