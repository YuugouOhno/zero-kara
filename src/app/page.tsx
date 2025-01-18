import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogList from "@/components/BlogList";

type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
};

async function getPosts(): Promise<Post[]> {
    // postsディレクトリのパス
    const postsDirectory = path.join(process.cwd(), 'src/posts');
    // ファイル一覧を取得
    const filenames = fs.readdirSync(postsDirectory);

    // 各Markdownファイルのメタデータを取得
    const posts: Post[] = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: filename.replace(/\.md$/, ''), // 拡張子を除外
            title: data.title as string,
            date: data.date as string,
            description: data.description as string,
        };
    });

    // 日付でソート
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}


export default async function home() {
    const posts = await getPosts();
    console.log(posts);

    return (
        <BlogList posts={posts} />
    );
}