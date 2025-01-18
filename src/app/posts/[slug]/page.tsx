import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import { marked } from 'marked';

import PostHeader from "@/components/PostHeader";
import PostContent from "@/components/PostContent";
import BackLink from "@/components/BackLink";

// 投稿データを取得する関数
async function getPost(slug: string) {
    const filePath = path.join(process.cwd(), `src/posts/${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
        content: content as string,
    };
}

// 動的なメタデータを生成
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    return {
        title: post.title,
        description: post.description,
    };
}

// 詳細画面のコンポーネント
export default async function PostPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post = await getPost(slug);
    const content = marked(post.content);

    return (
        <div className="p-4 max-w-4xl mx-auto h-screen py-36 px-20">
            <PostHeader title={post.title} date={post.date} />
            <PostContent content={content} />
            <BackLink />
        </div> 
    );
}