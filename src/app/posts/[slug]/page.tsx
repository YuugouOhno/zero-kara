import { Metadata } from 'next';

import PostHeader from "@/components/Post/PostHeader";
import PostContent from "@/components/Post/PostContent";
import BackLink from "@/components/BackLink";

import { getPost } from "@/lib/posts";

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
        <div className="p-4 max-w-4xl mx-auto h-screen py-36 px-20">
            <PostHeader title={post.title} date={post.date} />
            <PostContent content={post.content} />
            <BackLink />
        </div> 
    );
}