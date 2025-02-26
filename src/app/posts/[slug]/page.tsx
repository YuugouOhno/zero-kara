import { Metadata } from 'next';

import PostHeader from "@/components/Post/PostHeader";
import PostContent from "@/components/Post/PostContent";
import BackLink from "@/components/BackLink";

import { getPost, getPosts } from "@/lib/posts";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

// 動的なメタデータを生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    
    return {
        title: post.title,
        description: post.description,
    };
}

// 詳細画面のコンポーネント
export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);

    return (
        <div className="p-4 max-w-4xl mx-auto h-screen py-36 px-20 mb-36">
            <PostHeader title={post.title} date={post.date} />
            <PostContent content={post.content} />
            <BackLink/>
            <div className="h-32"></div>
        </div> 
    );
}

export async function generateStaticParams() {
  // ここで全ての slug を取得
  // 例: ローカルの Markdown ファイルや CMS API からスラッグ一覧を取得するなど
  const posts = await getPosts() // { slug: string }[] を返す関数だと仮定

  // { slug: 'xxx' } の形式で配列を返す
  return posts.map((post) => ({
    slug: post.slug,
  }))
}